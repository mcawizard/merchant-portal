import { R } from '@core/utils/r';
import { Control } from './Control';
import { StateChanges } from './types';
import { checkAllowedStateChanges } from './utils';

export class ControlLinkers {
  private _linkers: ControlLinker[] = [];

  public add(linker: ControlLinker) {
    if (!this._linkers.includes(linker)) this._linkers.push(linker);
  }

  public remove(linker: ControlLinker) {
    R.pull(this._linkers, linker);
  }

  public notify(source: Control, stateChanges: StateChanges) {
    this._linkers.forEach(linker => {
      linker.notify(source, stateChanges);
    });
  }
}

export class ControlLinker {
  private _paused = false;

  public constructor(private _controls: Control[] = [], private _options?: { stateChanges?: StateChanges; immediate?: boolean }) {
    this.add(_controls);
    this._paused = !!(_options && _options.immediate === false);
  }

  public get paused() {
    return this._paused;
  }

  public pause() {
    this._paused = true;
  }

  public resume() {
    this._paused = false;
  }

  public add(controls: Control[]) {
    this._updateLinkedControls(controls, true);

    this._controls = R.uniq([...this._controls, ...(controls || [])]);
  }

  public remove(controls: Control[]) {
    this._updateLinkedControls(controls, false);

    if (R.isEmpty(controls)) {
      this._controls = [];
    } else {
      R.pullAll(this._controls, controls);
    }
  }

  public clear() {
    this._updateLinkedControls(this._controls, false);
  }

  public notify(source: Control, stateChanges: StateChanges) {
    if (this._paused) return;

    const allowedStateChanges = this._options && this._options.stateChanges;

    if (!checkAllowedStateChanges(stateChanges, allowedStateChanges)) return;

    this._controls.forEach(control => {
      if (control === source) return;
      control.reportLinkedStateChanges(source, stateChanges);
    });
  }

  private _updateLinkedControls(controls: Control[] | null | undefined, link: boolean) {
    if (R.isEmpty(controls)) return;

    controls!.forEach(control => {
      if (link) {
        control.linkers.add(this);
      } else {
        control.linkers.remove(this);
      }
    });
  }
}
