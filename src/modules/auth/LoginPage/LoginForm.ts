import { t } from 'ttag';
import { Config } from '@config';
import { formGroup, formControl, Validators, FormDataType } from '@core/utils/form';

export type LoginFormData = FormDataType<typeof defineLoginForm>;

export function defineLoginForm() {
  const form = formGroup({
    username: formControl<string>({
      label: t`Email`,
      required: true,
      initialValue: Config.DEV_USERNAME,
      validators: [Validators.email],
    }),

    password: formControl<string>({
      label: t`Password`,
      required: true,
      initialValue: Config.DEV_PASSWORD,
      validators: [Validators.minLength(6)],
    }),
  });

  return form;
}
