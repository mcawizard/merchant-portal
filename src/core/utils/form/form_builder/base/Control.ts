import { R } from '@core/utils/r';
import { defer, isObservable, merge, Observable, of } from 'rxjs';
import { catchError, filter, finalize, map, mapTo, switchMap } from 'rxjs/operators';
import { resolveValidationMessage } from '../../configure';
import { validateControl, ValidationFn, ValidationMessageResolver, Validators } from '../../validation';
import { ControlLinkers } from './ControlLinker';
import { ControlErrors, ControlState } from './ControlState';
import { ParentControl } from './ParentControl';
import { StateChangesTrigger } from './StatechangesTrigger';
import { EmitStateOptions, ResetControlOptions, StateChanges, ValidationStatus } from './types';
import { getRootControl, singletonTask } from './utils';

export interface ControlConfig<T> {
  initialValue?: T | null;

  assertEmpty?: (value: T | null | undefined) => boolean;
  compareValue?: (value1: T | null | undefined, value2: T | null | undefined) => boolean;

  validators?: ValidationFn<any, Control<T>>[];
  resolveValidationMessage?: ValidationMessageResolver;

  required?: boolean | null;
  allowBlank?: boolean | null;

  disabled?: boolean;
  enabled?: boolean;

  handleSubmit?(value: T): void | Observable<any>;
}

export abstract class Control<T = any> extends ControlState<T> {
  /* linker */

  public readonly uid = R.uniqueId('form:controls');

  public readonly linkers = new ControlLinkers();

  /* parent */

  public parent: ParentControl | null = null;

  public get root(): Control {
    return getRootControl(this);
  }

  /* config */

  public get config() {
    return this._getControlConfig();
  }

  public abstract setConfig<C extends ControlConfig<T>>(config: Partial<C>): void;

  protected abstract _getControlConfig(): ControlConfig<T>;

  protected _mergeConfig<C extends ControlConfig<T>>(source: C, config: Partial<C>) {
    const { initialValue, required } = source;

    R.forEach(config, (value, key) => {
      if (!R.isUndefined(value)) R.set(source, key, value);
    });

    if (!this.compareValue(initialValue, source.initialValue)) {
      this.reset(source.initialValue);
    }

    if (required !== source.required) {
      this.trigger.emit({ required: true });
    }
  }

  /* state */

  public get state(): ControlState<T> {
    return {
      value: this.value,
      touched: this.touched,
      untouched: this.untouched,
      focused: this.focused,
      unfocused: this.unfocused,
      dirty: this.dirty,
      pristine: this.pristine,
      modified: this.modified,
      unmodified: this.unmodified,
      status: this.status,
      valid: this.valid,
      invalid: this.invalid,
      pending: this.pending,
      errors: this.errors,
      error: this.error,
      errorMessage: this.errorMessage,
      submitting: this.submitting,
      inheritedSubmitting: this.inheritedSubmitting,
      submitted: this.submitted,
      inheritedSubmitted: this.inheritedSubmitted,
    };
  }

  /* state changes */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  protected onStateChanges(stateChanges: StateChanges) {}

  private _onStateChanges = (stateChanges: StateChanges) => {
    if ((stateChanges.value || stateChanges.touched) && !stateChanges.childControl) {
      this.validate();
    }

    if (stateChanges.linkedControl) {
      this.trigger.linkedControlsOff();

      this.validate(() => {
        this.trigger.linkedControlsOn();
      });
    }

    this.onStateChanges(stateChanges);
  };

  private _notifyLinkedControls = (stateChanges: StateChanges) => {
    this.linkers.notify(this, stateChanges);
  };

  private _notifyParentControl = (stateChanges: StateChanges) => {
    if (this.parent) this.parent.reportChildStateChanges(this, stateChanges);
  };

  public readonly trigger = new StateChangesTrigger({
    onStateChanges: this._onStateChanges,
    notifyLinkedControls: this._notifyLinkedControls,
    notifyParentControl: this._notifyParentControl,
  });

  public get stateChanges$() {
    return this.trigger.stateChanges$;
  }

  public readonly valueChanges$ = this.stateChanges$.pipe(
    filter(changes => changes.value || false),
    map(() => this.value),
  );

  public readonly value$ = merge(
    defer(() => of(this.value)),
    this.valueChanges$,
  );

  public reportParentStateChanges(control: Control, stateChanges: StateChanges) {
    this.trigger.emit({ parentControl: { control, stateChanges } }, { notifyParentControl: false });
  }

  public reportLinkedStateChanges(control: Control, stateChanges: StateChanges) {
    this.trigger.emit({ linkedControl: { control, stateChanges } }, { notifyLinkedControls: false });
  }

  /* state */

  public abstract setFocused(focused: boolean, options?: EmitStateOptions): void;
  public abstract setTouched(focused: boolean, options?: EmitStateOptions): void;

  public abstract setDirty(focused: boolean, options?: EmitStateOptions): void;
  public abstract setModified(focused: boolean, options?: EmitStateOptions): void;

  /* value */

  public abstract setValue(value: T | null, options?: EmitStateOptions): void;

  public get initialValue(): T | null {
    const { initialValue } = this._getControlConfig();
    return R.isUndefined(initialValue) ? null : initialValue;
  }

  public compareValue(value1: T | null | undefined, value2: T | null | undefined) {
    const { compareValue } = this._getControlConfig();

    if (R.isFunction(compareValue)) return compareValue(value1, value2);

    if (R.isNil(value1) && R.isNil(value2)) return true;

    return value1 === value2;
  }

  public assertEmpty(value: T | null) {
    const { assertEmpty } = this._getControlConfig();
    return R.isFunction(assertEmpty) ? assertEmpty(value) : R.isEmpty(value);
  }

  /* reset */

  public reset(value?: T | null, options?: ResetControlOptions) {
    this.trigger.batchOn();

    this.setValue(R.isUndefined(value) ? this.initialValue : value);

    const stateChanges = (options && options.stateChanges) || {};

    if (stateChanges.focused !== false) this.setFocused(false);
    if (stateChanges.touched !== false) this.setTouched(false);
    if (stateChanges.dirty !== false) this.setDirty(false);
    if (stateChanges.modified !== false) this.setModified(false);
    if (stateChanges.submitted !== false) this.setSubmitted(false);

    this.trigger.batchOff(options);
  }

  /* validate */

  protected _status = ValidationStatus.pending;
  protected _errors: ControlErrors | null = null;
  protected _customError: string | null = null;

  public get errors() {
    return this._errors;
  }

  public get errorMessage() {
    const config = this._getControlConfig();

    const error = this.error;
    if (!error) return null;

    const message = (config.resolveValidationMessage || resolveValidationMessage)(this, this.error as any);
    return message && R.isString(message) ? message : null;
  }

  public allErrors() {
    return [this.errorMessage];
  }

  public addError(message: string | null) {
    this._customError = message;
    this.validate();
  }
  public removeError() {
    this._customError = null;
    this.validate();
  }

  public get hasCustomError() {
    return !!this._customError;
  }

  public setValidators(validators: ControlConfig<T>['validators']) {
    this.setConfig({ validators });
    this.validate();
  }

  public addValidators(validators: NonNullable<ControlConfig<T>['validators']>, options?: { prepend?: boolean; index?: boolean }) {
    let { validators: currentValidators } = this._getControlConfig();

    if (!currentValidators) currentValidators = [];

    if (options && options.prepend) {
      currentValidators = validators.concat(currentValidators);
    } else if (options && R.isNumber(options.index)) {
      currentValidators = R.clone(currentValidators).splice(options.index, 0, ...validators);
    } else {
      currentValidators = currentValidators.concat(validators);
    }

    this.setValidators(currentValidators);
  }

  public validate = singletonTask(() => this.validateAsync(), true);
  public isValid = () => {
    return this.validateAsync().pipe(
      switchMap(errors => {
        return of(R.isEmpty(errors));
      }),
      finalize(() => {
        this._submitting = false;
        this._submitted = true;
      }),
    );
  };

  public validateAsync() {
    return this._handleValidate();
  }

  private _handleValidate(): Observable<ControlErrors | null> {
    this._status = ValidationStatus.pending;
    this._errors = null;

    this.trigger.emit({ status: true, errors: true });

    const errors = this._validateValue();

    if (!R.isEmpty(errors)) {
      this._status = ValidationStatus.invalid;
      this._errors = errors;

      this.trigger.emit({ status: true, errors: true });

      return of(errors);
    }

    this._status = ValidationStatus.valid;
    this.trigger.emit({ status: true });

    return of(null);
  }

  private _validateValue(): ControlErrors | null {
    const validators = this._getValidators();
    const { disabled, enabled } = this._getControlConfig();

    if ((R.isEmpty(validators) && !this._customError) || disabled === true || enabled === false) return null;

    const errors = validateControl(this, validators!);
    if (this._customError) {
      errors.push({ message: this._customError });
    }
    if (R.isEmpty(errors)) return null;

    return R.keyBy(errors, error => error.type) as ControlErrors;
  }

  protected _getValidators() {
    let { validators, required, allowBlank } = this._getControlConfig();
    if (R.isEmpty(validators)) validators = [];

    if (required && allowBlank !== false) {
      validators = [Validators.notBlank].concat(validators!);
    }

    if (required) {
      validators = [Validators.required].concat(validators!);
    }

    return validators;
  }

  /* submit */

  protected _submitting = false;
  protected _submitted = false;

  public get submitting() {
    return this._submitting;
  }

  public get inheritedSubmitting(): boolean {
    return this.parent && this.parent.inheritedSubmitting ? true : this._submitting;
  }

  public get submitted() {
    return this._submitted;
  }

  public get inheritedSubmitted(): boolean {
    return this.parent && this.parent.inheritedSubmitted ? true : this._submitted;
  }

  public setSubmitted(submitted: boolean, options?: EmitStateOptions) {
    if (this._submitted === submitted) return;

    this._submitted = submitted;
    this.trigger.emit({ submitted: true }, options);
  }

  public submit = (callback?: () => void) => {
    return this._submit(callback && R.isFunction(callback) ? () => setTimeout(callback) : undefined);
  };

  private _submit = singletonTask(() => this.submitAsync());

  public submitAsync() {
    return this._handleSubmit();
  }

  private _handleSubmit() {
    this._submitting = true;

    this.trigger.emit({ submitting: true });

    return this.validateAsync().pipe(
      switchMap(errors => {
        if (!R.isEmpty(errors)) return of(false);

        const { handleSubmit } = this._getControlConfig();

        const result = R.isFunction(handleSubmit) ? handleSubmit(this.value) : null;

        if (!isObservable(result)) return of(true);

        return result.pipe(
          mapTo(true),
          catchError(() => of(false)),
        );
      }),
      finalize(() => {
        const submitted = this._submitted;

        this._submitting = false;
        this._submitted = true;

        this.trigger.emit({ submitting: true, submitted: submitted !== this._submitted });
      }),
    );
  }
}
