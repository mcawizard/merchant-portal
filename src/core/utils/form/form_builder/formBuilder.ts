import { Control } from './base/Control';
import { ControlLinker } from './base/ControlLinker';
import { FormGroup, FormGroupConfig } from './controls/FormGroup';
import { FormArray, FormArrayConfig } from './controls/FormArray';
import { FormControl, FormControlConfig } from './controls/FormControl';
import { FormGroupData, FormArrayItemData } from './controls/types';

export function formGroup<C extends Record<string, Control>>(controls: C, config?: FormGroupConfig<FormGroupData<C>>) {
  return new FormGroup<C>(controls, config);
}

export function formControl<T>(config?: FormControlConfig<T>) {
  return new FormControl<T>(config);
}

export function formArray<C extends Control>(itemFactory: () => C, config?: FormArrayConfig<C, FormArrayItemData<C>>) {
  return new FormArray<C>(itemFactory, config);
}

export function linkFormControls(...args: ConstructorParameters<typeof ControlLinker>) {
  return new ControlLinker(...args);
}

type InferFormDataType<C> = NonNullable<C extends Control<infer T> ? T : never>;

export type FormDataType<C> = C extends (...args: any[]) => Control ? InferFormDataType<ReturnType<C>> : InferFormDataType<C>;
