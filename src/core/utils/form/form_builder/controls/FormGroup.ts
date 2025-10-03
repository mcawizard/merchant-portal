import { R } from '@core/utils/r';
import { Control, ControlConfig } from '../base/Control';
import { ParentControl } from '../base/ParentControl';
import { EmitStateOptions, ResetControlOptions } from '../base/types';
import { FormGroupData } from './types';

export type FormGroupConfig<T> = ControlConfig<T>;

export class FormGroup<C extends Record<string, Control> = Record<string, Control>, T = FormGroupData<C>> extends ParentControl<T> {
  public constructor(
    controls: C,
    private _config: FormGroupConfig<T> = {},
  ) {
    super();
    this._initFormGroup(controls);
  }

  /* init */

  private _initFormGroup(controls: C) {
    this._updateControls(controls);

    const initialValue = this.initialValue;

    if (!R.isNil(initialValue)) {
      this.reset(initialValue, { emit: false });
    }
  }

  /* controls */

  private _controls: Record<string, Control> = {};

  public get controls(): C {
    return this._controls as any;
  }

  public get<K extends keyof C>(name: K): C[K] {
    return this._controls[name as any] as any;
  }

  protected _getControls() {
    return R.values(this._controls);
  }

  private _updateControls(controls: C) {
    this._controls = R.clone(controls) as any;
    this._setParentForControls();
  }

  /* config */

  public get config() {
    return this._config;
  }

  public setConfig(config: Partial<FormGroupConfig<T>>) {
    this._mergeConfig(this._config, config);
  }

  protected _getControlConfig() {
    return this._config;
  }

  /* value */

  public patchValue(value: Partial<T>, options?: EmitStateOptions & { reset?: boolean }) {
    if (options && options.reset) {
      this.reset();
    }

    this._patchFormGroupValue(value, options);
  }

  public setValue(value: T | null, options?: EmitStateOptions) {
    this._setFormGroupValue(value, options);
  }

  public reset(value?: T | null, options?: ResetControlOptions) {
    this._resetFormGroupValue(value, options);

    this.setSubmitted(false);
  }

  protected _getParentControlValue() {
    const parentValue: Record<string, any> = {};

    R.forEach(this._controls, (control, name) => {
      const value = this._getControlValue(control);
      if (!R.isUndefined(value)) parentValue[name] = value;
    });

    return parentValue as T;
  }

  private _patchFormGroupValue(value: Partial<T>, options?: EmitStateOptions) {
    this.trigger.batchOn();

    R.forEach(this._controls, (control, name) => {
      if (!R.has(value, name)) return;
      control.setValue(R.get(value, name), options);
    });

    this.trigger.batchOff(options);
  }

  private _setFormGroupValue(value: T | null, options?: EmitStateOptions) {
    this.trigger.batchOn();

    R.forEach(this._controls, (control, name) => {
      control.setValue(R.get(value, name, null), options);
    });

    this.trigger.batchOff(options);
  }

  private _resetFormGroupValue(value: T | null | undefined, options?: ResetControlOptions) {
    this.trigger.batchOn();

    R.forEach(this._controls, (control, name) => {
      control.reset(R.get(value, name, null), options);
    });

    this.trigger.batchOff(options);
  }
}
