import { Observable } from 'rxjs';
import { Control } from '../form_builder/base/Control';

export type ValidationError<T = {}> = T & {
  type?: string;
  message?: string;
};

export type ValidationResult<T = {}> = ValidationError<T> | string | null | undefined;

export type ValidationFn<T = {}, C extends Control = Control> = (control: C) => ValidationResult<T>;

export type ValidationMessageResolver = (control: Control, result: NonNullable<ValidationResult>) => string | null | undefined;

export interface ServerValidation {
  status: boolean;
  message?: string;
}
