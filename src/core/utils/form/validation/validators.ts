import { isEmail } from '@core/utils/form/validation/validators/isEmail';
import { R } from '@core/utils/r';
import { Control } from '../form_builder/base/Control';
import { ValidationFn, ValidationResult } from './types';
import { isCreditCard } from './validators/isCreditCard';
import { isPostalCode } from './validators/isPostalCode';

/* helpers */

export const customMessage = (
  fn: ValidationFn,
  message: <T extends Control = Control>(control: T, result: ValidationResult) => string,
): ValidationFn => {
  return control => {
    const result = fn(control);
    const text = result ? message(control, result) : null;

    return { message: text! };
  };
};

export const dynamic = <T>(fn: ValidationFn<any, Control<T>>): ValidationFn => {
  return control => {
    return fn(control);
  };
};

/* validators */

export const required: ValidationFn = control => {
  const value = control.value;
  let empty = false;

  if (control.config.assertEmpty) {
    empty = control.config.assertEmpty(value);
  } else if (!R.isNumber(value) && R.isEmpty(value) && R.isBoolean(value) && value === false) {
    empty = true;
  }

  return empty ? { type: 'required' } : null;
};

export const requiredIf = (check: (control: Control) => boolean): ValidationFn => {
  return control => (check(control) ? required(control) : null);
};

export const notBlank: ValidationFn = control => {
  if (R.isEmpty(R.trim(control.value))) return { type: 'notBlank' };
};

export const email: ValidationFn = control => {
  const value: string = R.toString(control.value);
  if (value && !isEmail(value)) return { type: 'email' };
};

export const optionalEmail: ValidationFn = control => {
  const value: string = R.toString(control.value);
  if (R.isEmpty(value)) return;
  if (value && !isEmail(value)) return { type: 'email' };
};

export const emails: ValidationFn = control => {
  if (R.isArray(control.value)) {
    const emails = control.value.filter((email: string) => !isEmail(email));
    if (emails.length > 0) return { type: 'email' };
    return;
  }
  const value: string = R.toString(control.value);

  if (R.isEmpty(value)) {
    return;
  }
  const values = R.split(value, ',');
  const errors = R.filter(values, v => !isEmail(v.trim()));

  if (errors.length) {
    return { type: 'email' };
  }
};

export const creditCard: ValidationFn = control => {
  const value: string = R.toString(control.value);
  if (value && !isCreditCard(value)) return { type: 'creditCard' };
};

export const cvc: ValidationFn = control => {
  const value: string = R.toString(control.value);
  if (value && !value.match(/^[0-9]{3,4}$/)) return { type: 'cvc' };
};

export const postalCode: ValidationFn = control => {
  const value: string = R.toString(control.value);
  if (value && !isPostalCode(value)) return { type: 'postalCode' };
};

export const notDigits: ValidationFn = control => {
  const value: string = R.toString(control.value);
  if (value && value.match(/^\s*\-?\d+\s*$/)) return { type: 'notDigits' };
};

export const integer: ValidationFn = control => {
  const value = control.value;
  const stringValue = R.toString(value);
  const numberValue = R.toNumber(value);

  if (!stringValue) return null;

  if (!stringValue.match(/-?\d+/) || R.isNaN(numberValue) || Math.round(numberValue) !== numberValue) {
    return { type: 'integer' };
  }
};

export const number: ValidationFn = control => {
  const value = control.value;
  const stringValue = R.toString(value);
  const numberValue = R.toNumber(value);

  if (!stringValue) return null;

  if (R.isNaN(numberValue)) {
    return { type: 'number' };
  }
};

export interface MinLengthErrorParams {
  length: number;
}
export const minLength = (length: number, options?: { trim?: boolean }): ValidationFn<MinLengthErrorParams> => {
  return control => {
    let text = R.toString(control.value);
    if (options && options.trim) text = R.trim(text);
    if (text.length < length) return { type: 'minLength', length };
  };
};

export interface MaxLengthErrorParams {
  length: number;
}
export const maxLength = (length: number, options?: { trim?: boolean }): ValidationFn<MaxLengthErrorParams> => {
  return control => {
    let text = R.toString(control.value);
    if (options && options.trim) text = R.trim(text);
    if (text.length > length) return { type: 'maxLength', length };
  };
};

export interface MinErrorParams {
  min: number;
}
export const min = (min: number): ValidationFn<MinErrorParams> => {
  return control => {
    const stringValue = R.trim(control.value);
    const numberValue = R.toNumber(control.value);
    if (stringValue.length && !R.isNaN(numberValue) && numberValue < min) return { type: 'min', min };
  };
};

export interface MaxErrorParams {
  max: number;
}
export const max = (max: number): ValidationFn<MaxErrorParams> => {
  return control => {
    const stringValue = R.trim(control.value);
    const numberValue = R.toNumber(control.value);
    if (stringValue.length && !R.isNaN(numberValue) && numberValue > max) return { type: 'max', max };
  };
};

export interface NotEqualErrorParams<T = any> {
  value: T;
}

export const notEqual = <T = any>(value: T): ValidationFn<NotEqualErrorParams<T>> => {
  return control => {
    const fieldValue = control.value;
    const invalid = { type: 'notEqual', value };

    if (R.isNumber(value) && R.toNumber(fieldValue) === value) return invalid;
    if (R.isEqual(value, fieldValue)) return invalid;
  };
};

export interface EqualErrorParams<T = any> {
  value: T;
  message?: string;
}

export const equals = <T = any>(value: T, message?: string): ValidationFn<EqualErrorParams<T>> => {
  return control => {
    const fieldValue = control.value;
    const invalid = { type: 'equals', value, message };

    if (R.isNumber(value) && R.toNumber(fieldValue) !== value) return invalid;
    if (!R.isEqual(value, fieldValue)) return invalid;
  };
};

export const url: ValidationFn = control => {
  const value: string = R.toString(control.value);
  if (value && !value.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/)) return { type: 'url' };
};

export const urlWithoutPrefix: ValidationFn = control => {
  const value: string = R.toString(control.value);
  if (value && !value.match(/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/)) return { type: 'url' };
};
