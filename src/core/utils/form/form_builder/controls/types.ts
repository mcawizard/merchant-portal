import { Control } from '../base/Control';
import { FormGroup } from './FormGroup';
import { FormControl } from './FormControl';
import { FormArray } from './FormArray';

export type FormControlData<T> = T extends FormControl<infer T> ? T : any;

export type FormArrayItemData<C extends Control<any>> = C extends Control<infer T> ? T : any;

export type FormArrayData<T> = T extends FormArray<any> ? FormArrayItemData<T> : any;

export type FormGroupControls<T> = T extends FormGroup<infer C> ? C : any;
export type FormGroupControlData<T> = T extends FormControl<any>
  ? FormControlData<T>
  : T extends FormArray<any>
  ? FormArrayData<T>
  : { [K in keyof FormGroupControls<T>]: FormGroupControlData<FormGroupControls<T>[K]> };

export type FormGroupData<C> = { [K in keyof C]: FormGroupControlData<C[K]> };
