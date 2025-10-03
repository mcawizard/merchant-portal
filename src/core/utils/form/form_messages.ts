import { t } from 'ttag';
import { R } from '@core/utils/r';
import { ValidationMessageResolver, FormControl } from '@core/utils/form';
import {
  MinLengthErrorParams,
  MaxLengthErrorParams,
  MinErrorParams,
  MaxErrorParams,
  NotEqualErrorParams,
  EqualErrorParams,
} from '@core/utils/form/validation/validators';

export const resolveMessage: ValidationMessageResolver = (control, result) => {
  let label: string = t`Field`;
  let plural = false;

  if (control instanceof FormControl && control.config.label) {
    label = control.config.label;
    plural = control.config.pluralLabel || false;
  }

  if (R.isString(result)) return result;
  if (R.isString(result && result.message)) return result.message;

  if (result.type === 'required') {
    return plural ? t`${label} are required.` : t`${label} is required.`;
  }

  if (result.type === 'notBlank') {
    return t`${label} must not be blank.`;
  }

  if (result.type === 'notDigits') {
    return t`${label} must include at least one letter.`;
  }

  if (result.type === 'email') {
    return t`${label} is invalid.`;
  }

  if (result.type === 'creditCard') {
    return t`${label} is invalid.`;
  }

  if (result.type === 'cvc') {
    return t`${label} is invalid.`;
  }

  if (result.type === 'url') {
    return t`${label} is not a valid URL.`;
  }

  if (result.type === 'postalCode') {
    return t`${label} is invalid.`;
  }

  if (result.type === 'integer') {
    return t`Only integer values allowed.`;
  }

  if (result.type === 'number') {
    return t`Only number values allowed.`;
  }

  if (result.type === 'minLength') {
    const { length: minLength } = result as MinLengthErrorParams;
    return t`Min length is ${minLength}.`;
  }

  if (result.type === 'maxLength') {
    const { length: maxLength } = result as MaxLengthErrorParams;
    return t`Max length is ${maxLength}.`;
  }

  if (result.type === 'min') {
    const { min } = result as MinErrorParams;
    return t`Min value is ${min}.`;
  }

  if (result.type === 'max') {
    const { max } = result as MaxErrorParams;
    return t`Max value is ${max}.`;
  }

  if (result.type === 'notEqual') {
    const { value } = result as NotEqualErrorParams;
    return t`${value} is not allowed.`;
  }

  if (result.type === 'equals') {
    const { value, message } = result as EqualErrorParams;

    if (message) {
      return message;
    }
    return t`${value} is not allowed.`;
  }

  return plural ? t`${label} are invalid` : t`${label} is invalid`;
};
