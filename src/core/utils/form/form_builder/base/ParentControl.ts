import { BehaviorSubject, Observable, forkJoin, of } from 'rxjs';
import { switchMap, finalize, tap } from 'rxjs/operators';
import { R } from '@core/utils/r';
import { Control } from './Control';
import { ControlErrors } from './ControlState';
import { StateChanges, EmitStateOptions, ValidationStatus } from './types';

export abstract class ParentControl<T = any> extends Control<T> {
  protected abstract _getControls(): Control[];

  /* state */

  protected _focusedCount = 0;
  protected _touchedCount = 0;
  protected _dirtyCount = 0;
  protected _modifiedCount = 0;

  public get focused() {
    return this._focusedCount > 0;
  }

  public get touched() {
    return this._touchedCount > 0;
  }

  public get dirty() {
    return this._dirtyCount > 0;
  }

  public get modified() {
    return this._modifiedCount > 0;
  }

  protected groupErrors$ = new BehaviorSubject<string[] | null>(null);

  public get errors$() {
    return this.groupErrors$.asObservable();
  }

  public setFocused(focused: boolean, options?: EmitStateOptions) {
    if (this.focused === focused) return;

    this._batchUpdateControls(control => {
      control.setFocused(focused, options);
    }, options);
  }

  public setTouched(touched: boolean, options?: EmitStateOptions) {
    if (this.touched === touched) return;

    this._batchUpdateControls(control => {
      control.setTouched(touched, options);
    }, options);
  }

  public setDirty(dirty: boolean, options?: EmitStateOptions) {
    if (this.dirty === dirty) return;

    this._batchUpdateControls(control => {
      control.setDirty(dirty, options);
    }, options);
  }

  public setModified(modified: boolean, options?: EmitStateOptions) {
    if (this.modified === modified) return;

    this._batchUpdateControls(control => {
      control.setModified(modified, options);
    }, options);
  }

  /* value */

  protected abstract _getParentControlValue(): T;

  private _value: T | null = null;

  public get value() {
    if (this._value === null) {
      this._value = this._getParentControlValue();
    }

    return this._value;
  }

  /* validate */

  private _childrenStatus: ValidationStatus | null = null;

  public get status() {
    if (this._status === ValidationStatus.invalid) return this._status;

    if (this._childrenStatus === null) {
      this._childrenStatus = this._getChildrenStatus();
    }

    return this._childrenStatus;
  }

  private _getChildrenStatus() {
    let status = ValidationStatus.valid;

    this._iterateControls(control => {
      if (control.status !== ValidationStatus.valid) {
        status = control.status;
      }

      if (status === ValidationStatus.pending) return false;
    });

    return status;
  }

  public allErrors() {
    return R.filter(
      R.flatMap(
        this._mapControls(control => {
          return control.allErrors();
        }),
      ),
    );
  }

  public validateAsync(): Observable<ControlErrors | null> {
    const waits: Observable<ControlErrors | null>[] = [];

    this._iterateControls(control => {
      waits.push(control.validateAsync());
    });

    return of(null).pipe(
      tap(() => {
        this.trigger.batchOn();
      }),
      switchMap(() => {
        return waits.length ? forkJoin(waits) : of(null);
      }),
      switchMap(results => {
        const errors = R.filter(results, result => !R.isEmpty(result));

        if (errors.length) {
          this.groupErrors$.next(this.allErrors());
          const controlErrors: ControlErrors = {
            children: {
              type: 'children',
              errors,
            } as any,
          };

          return of(controlErrors);
        }
        this.groupErrors$.next(null);

        return super.validateAsync();
      }),
      finalize(() => {
        this.trigger.batchOff();
      }),
    );
  }

  /* state changes */

  public reportChildStateChanges(control: Control, stateChanges: StateChanges) {
    const state: StateChanges = {};

    if (stateChanges.focused) {
      this._focusedCount += control.focused ? 1 : -1;
      state.focused = true;
    }

    if (stateChanges.touched) {
      this._touchedCount += control.touched ? 1 : -1;
      state.touched = true;
    }

    if (stateChanges.dirty) {
      this._dirtyCount += control.dirty ? 1 : -1;
      state.dirty = true;
    }

    if (stateChanges.modified) {
      this._modifiedCount += control.modified ? 1 : -1;
      state.modified = true;
    }

    if (stateChanges.value) {
      this._value = null;
      state.value = true;
    }

    if (stateChanges.status) {
      this._childrenStatus = null;
      state.status = true;
    }

    this.trigger.emit({ ...state, childControl: { control, stateChanges } });
  }

  protected onStateChanges(stateChanges: StateChanges) {
    if (stateChanges.submitting || stateChanges.submitted) {
      this._reportParentStateChanges(stateChanges);
    }

    if (stateChanges.parentControl) {
      if (stateChanges.parentControl.stateChanges.submitting) {
        this._reportParentStateChanges({ submitting: true });
      }

      if (stateChanges.parentControl.stateChanges.submitting) {
        this._reportParentStateChanges({ submitted: true });
      }
    }
  }

  protected _triggerValueChanged() {
    this._value = null;
    this.trigger.emit({ value: true });
  }

  /* utils */

  protected _batchUpdateControls(fn: (control: Control) => void | false, options?: EmitStateOptions) {
    this.trigger.batchOn();

    this._iterateControls(fn);

    this.trigger.batchOff(options);
  }

  protected _iterateControls(fn: (control: Control) => void | false) {
    R.forEach(this._getControls(), fn);
  }

  protected _mapControls(fn: (control: Control) => any) {
    return R.map(this._getControls(), fn);
  }

  protected _getControlValue(control: Control) {
    return control instanceof Control ? control.value : undefined;
  }

  protected _setParentForControls() {
    this._getControls().forEach(control => {
      control.parent = this;
    });
  }

  protected _detachControls() {
    this._getControls().forEach(control => {
      control.parent = null;
    });
  }

  protected _reportParentStateChanges(stateChanges: StateChanges) {
    this._getControls().forEach(control => control.reportParentStateChanges(this, stateChanges));
  }
}
