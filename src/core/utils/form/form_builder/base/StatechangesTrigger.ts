import { Subject } from 'rxjs';
import { R } from '@core/utils/r';
import { filterStateChanges } from './utils';
import { StateChanges, EmitStateOptions } from './types';

export interface StateChangesTriggerOptions {
  onStateChanges(stateChanges: StateChanges): void;
  notifyLinkedControls(stateChanges: StateChanges): void;
  notifyParentControl(stateChanges: StateChanges): void;
}

export class StateChangesTrigger {
  public constructor(private _options: StateChangesTriggerOptions) {}

  private _stateChanges$ = new Subject<StateChanges>();
  public stateChanges$ = this._stateChanges$.asObservable();

  private _batchOn = false;
  private _linkedControlsOff = false;
  private _pendingStateChanges: StateChanges = {};

  public get isBatchOn() {
    return this._batchOn;
  }

  public batchOn() {
    this._batchOn = true;
  }

  public batchOff(options?: EmitStateOptions) {
    this._batchOn = false;

    if ((!options || options.emit !== false) && !R.isEmpty(this._pendingStateChanges)) {
      this.emit(this._pendingStateChanges);
      this._pendingStateChanges = {};
    }
  }

  public linkedControlsOn() {
    this._linkedControlsOff = false;
  }

  public linkedControlsOff() {
    this._linkedControlsOff = true;
  }

  public emit(stateChanges: StateChanges, options?: EmitStateOptions) {
    if (options && options.emit === false) return;

    stateChanges = filterStateChanges(stateChanges);

    if (R.isEmpty(stateChanges)) return;

    if (this._batchOn) {
      R.assign(this._pendingStateChanges, stateChanges);
      return;
    }
    this._stateChanges$.next(stateChanges);

    this._options.onStateChanges(stateChanges);

    if (!this._linkedControlsOff && (!options || options.notifyLinkedControls !== false) && (!options || options.onlySelf !== true)) {
      this._options.notifyLinkedControls(stateChanges);
    }

    if ((!options || options.notifyParentControl !== false) && (!options || options.onlySelf !== true)) {
      this._options.notifyParentControl(stateChanges);
    }
  }
}
