import { isObservable } from 'rxjs';
import { R } from '@core/utils/r';
import { Control } from '../form_builder/base/Control';
import { ValidationFn, ValidationError, ValidationResult } from './types';

export function validateControl(control: Control, validators: ValidationFn[]): ValidationError[] {
  let result: ValidationResult;

  R.forEach(validators, validator => {
    if (!validator) return;

    result = validator(control);

    return !result;
  });

  let error: ValidationError | null = null;

  if (R.isString(result)) {
    error = { message: result };
  } else if (result) {
    error = result;
  }

  return error ? [error] : [];
}
