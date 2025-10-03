import { R } from '@core/utils/r';
import { ValidationMessageResolver } from './validation';

export interface FormConfiguration {
  resolveValidationMessage: ValidationMessageResolver;
}

const defaultMessageResolver: ValidationMessageResolver = (_control, result) => (result ? JSON.stringify(result) : null);

const _config: FormConfiguration = {
  resolveValidationMessage: defaultMessageResolver,
};

export function configureForm(config: FormConfiguration) {
  R.assign(_config, config);
}

export function resolveValidationMessage(...args: Parameters<ValidationMessageResolver>) {
  return _config.resolveValidationMessage(...args);
}
