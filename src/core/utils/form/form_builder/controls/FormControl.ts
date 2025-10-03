import { R } from '@core/utils/r';
import { Control, ControlConfig } from '../base/Control';
import { EmitStateOptions } from '../base/types';

export interface FormControlConfig<T> extends ControlConfig<T | null> {
  label?: string | null;
  placeholder?: string | null;
  pluralLabel?: boolean;
}

export class FormControl<T = any> extends Control<T | null> {
  public constructor(private _config: FormControlConfig<T> = {}) {
    super();
    this._initFormControl();
  }

  /* init */

  private _initFormControl() {
    this.reset(this.initialValue, { emit: false });
  }

  /* config */

  public get config() {
    return this._config;
  }

  public setConfig(config: Partial<FormControlConfig<T>>) {
    this._mergeConfig(this._config, config);
  }

  protected _getControlConfig() {
    return this._config;
  }

  /* value */

  private _value: T | null = null;

  public get value() {
    return this._value;
  }

  public setValue(value: T | null, options?: EmitStateOptions) {
    this._setFormControlValue(value, options);
  }

  private _setFormControlValue(value: T | null, options?: EmitStateOptions) {
    value = R.isUndefined(value) ? null : value;

    if (this.compareValue(value, this._value)) return;

    this._value = value;

    const modified = this._modified;
    const dirty = this._dirty;

    if (this.compareValue(value, this.initialValue)) {
      this.setDirty(false);
    } else {
      this.setDirty(true);
      this.setModified(true);
    }

    this.trigger.emit(
      {
        value: true,
        modified: modified !== this._modified,
        dirty: dirty !== this._dirty,
      },
      options,
    );
  }

  /* validate */

  public get status() {
    return this._status;
  }

  /* state */

  protected _focused = false;
  protected _touched = false;

  protected _dirty = false;
  protected _modified = false;

  public get focused() {
    return this._focused;
  }

  public get touched() {
    return this._touched;
  }

  public get dirty() {
    return this._dirty;
  }

  public get modified() {
    return this._modified;
  }

  public setFocused(focused: boolean, options?: EmitStateOptions) {
    if (this._focused === focused) return;

    this._focused = focused;
    this.trigger.emit({ focused: true }, options);
  }

  public setTouched(touched: boolean, options?: EmitStateOptions) {
    if (this._touched === touched) return;

    this._touched = touched;
    this.trigger.emit({ touched: true }, options);
  }

  public setDirty(dirty: boolean, options?: EmitStateOptions) {
    if (this._dirty === dirty) return;

    this._dirty = dirty;
    this.trigger.emit({ dirty: true }, options);
  }

  public setModified(modified: boolean, options?: EmitStateOptions) {
    if (this._modified === modified) return;

    this._modified = modified;
    this.trigger.emit({ modified: true }, options);
  }

  /* events */

  public onFocus(options?: { touched?: boolean }) {
    this._onChangeFocused(() => {
      this.setFocused(true);
      if (options && options.touched) this.setTouched(true);
    });
  }

  public onBlur() {
    this._onChangeFocused(() => {
      this.setFocused(false);
      this.setTouched(true);
    });
  }

  private _onChangeFocused(handler: () => void) {
    this.trigger.batchOn();

    const focused = this._focused;
    const touched = this._touched;

    handler();

    this.trigger.emit({
      focused: focused !== this._focused,
      touched: touched !== this._touched,
    });

    this.trigger.batchOff();
  }
}
