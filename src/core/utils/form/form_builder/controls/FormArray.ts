import { R } from '@core/utils/r';
import { BehaviorSubject } from 'rxjs';
import { Control, ControlConfig } from '../base/Control';
import { ParentControl } from '../base/ParentControl';
import { EmitStateOptions, ResetControlOptions } from '../base/types';
import { FormArrayItemData } from './types';

export interface FormArrayConfig<C extends Control<any>, T> extends ControlConfig<T[]> {
  items?: C[];
}

export class FormArray<C extends Control<any>, T = FormArrayItemData<C>> extends ParentControl<T[]> {
  public constructor(
    private _itemFactory: () => C,
    private _config: FormArrayConfig<C, T> = {},
  ) {
    super();
    this._initFormArray(_config.items);
  }

  /* init */

  private _initFormArray(items?: C[]) {
    if (items && items.length) {
      this._updateItems(R.clone(items));
    }

    const initialValue = this.initialValue;

    if (!R.isNil(initialValue)) {
      this.reset(initialValue, { emit: false });
    }
  }

  /* controls */

  private _items: C[] = [];
  private _items$ = new BehaviorSubject(this._items);

  public get items(): Readonly<C[]> {
    return this._items;
  }

  public readonly items$ = this._items$.asObservable();

  public push = (item?: C) => {
    if (!item) item = this._itemFactory();

    const items = this._items.concat(item);
    this._updateItems(items);

    return item;
  };

  public unshift = (item?: C) => {
    if (!item) item = this._itemFactory();

    const items = [item].concat(this._items);
    this._updateItems(items);

    return item;
  };

  public get = (index: number) => {
    return this._items[index] || null;
  };

  public insertAt = (index: number, item?: C) => {
    if (!item) item = this._itemFactory();

    const items = [...this._items];
    items.splice(index, 0, item);
    this._updateItems(items);
  };

  public removeAt = (index: number) => {
    const items = [...this._items];
    items.splice(index, 1);

    this._updateItems(items);
  };

  public pop = () => {
    const items = this._items.slice(0, -1);
    this._updateItems(items);
  };

  public clear = () => {
    this._updateItems([]);
  };

  private _updateItems(items: C[], triggerValueChanged = true) {
    this._items = items;
    this._items$.next(items);

    this._setParentForControls();

    if (triggerValueChanged) this._triggerValueChanged();
  }

  protected _getControls() {
    return this._items;
  }

  /* config */

  public get config() {
    return this._config;
  }

  public setConfig(config: Partial<FormArrayConfig<C, T>>) {
    this._mergeConfig(this._config, config);
  }

  protected _getControlConfig() {
    return this._config;
  }

  /* value */

  public setValue(value: T[] | null, options?: EmitStateOptions) {
    this._setFormArrayValue(value, options);
  }

  public reset(value?: T[] | null, options?: ResetControlOptions) {
    this._resetFormArrayValue(value, options);

    this.setSubmitted(false);
  }

  protected _getParentControlValue() {
    const parentValue: T[] = [];

    R.forEach(this._items, (control, name) => {
      const value = this._getControlValue(control);
      if (!R.isUndefined(value)) parentValue[name] = value;
    });

    return parentValue;
  }

  private _guardItems(value: T[] | null | undefined) {
    if (!value) {
      this._detachControls();
      this._updateItems([], false);
    } else if (this._items.length !== value.length) {
      this._detachControls();
      this._updateItems(
        R.map(value, () => this._itemFactory()),
        false,
      );
    }
  }

  private _setFormArrayValue(value: T[] | null, options?: EmitStateOptions) {
    this.trigger.batchOn();

    this._guardItems(value);

    R.forEach(this._items, (control, index) => {
      control.setValue(value ? value[index] : null, options);
    });

    this.trigger.batchOff(options);
  }

  private _resetFormArrayValue(value: T[] | null | undefined, options?: ResetControlOptions) {
    this.trigger.batchOn();

    this._guardItems(value);

    R.forEach(this._items, (control, index) => {
      control.reset(value ? value[index] : null, options);
    });

    this.trigger.batchOff(options);
  }
}
