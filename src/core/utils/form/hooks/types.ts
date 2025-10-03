import { ControlConfig, FormControl, Control, FormControlData } from '../form_builder';
import { RefObject } from 'react';

export type DynamicValue<T, R> = R | ((control: Control<T>) => R);

export interface FormProps<T> {
  initialValue?: T | (() => T | null) | null;
  onSubmit?: ControlConfig<T>['handleSubmit'];
  formRef?: RefObject<Control<T>> | ((form: Control<T>) => void);
}

export interface FieldProps<C extends FormControl<any>, T = FormControlData<C>> {
  control: C;

  label?: DynamicValue<T, string>;

  labelAlias?: DynamicValue<T, string>;
  labelSuffix?: DynamicValue<T, string>;
  labelPrefix?: DynamicValue<T, string>;

  requiredMask?: DynamicValue<T, boolean>;

  hint?: DynamicValue<T, string | null>;
  placeholder?: DynamicValue<T, string>;

  required?: DynamicValue<T, boolean>;

  readonly?: DynamicValue<T, boolean>;
  // disabled?: DynamicValue<T, boolean>;
}

export type OptionalFieldProps<C extends FormControl<any>, T = FormControlData<C>> = Partial<FieldProps<C, T>>;
