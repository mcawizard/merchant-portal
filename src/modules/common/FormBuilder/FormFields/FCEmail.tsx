import React, { memo, useEffect } from 'react';
import { t } from 'ttag';
import { formGroup, formControl, FormDataType } from '@core/utils/form';
import { FormInput, FormCheckbox, FormContainer } from '@core/components/form';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';

import { FCType } from './types';
import { FCItemControlProps } from '../FCItem';

export function defineEmailForm() {
  const form = formGroup({
    type: formControl<FCType>({ initialValue: FCType.email }),
    title: formControl<string>({
      label: t`Title`,
      required: true,
      initialValue: t`Email`,
    }),
    placeholder: formControl<string>({
      label: t`Placeholder`,
    }),
    description: formControl<string>({
      label: t`Description`,
    }),
    isRequired: formControl<boolean>({
      label: t`Required`,
      initialValue: false,
    }),
    isConfirmEmail: formControl<boolean>({
      label: t`Enable Confirmation Email`,
    }),
  });

  return form;
}

export type FCEmailFormData = FormDataType<typeof defineEmailForm>;
export type FCEmailForm = ReturnType<typeof defineEmailForm>;

export interface FCEmailProps extends FCItemControlProps {
  form: FCEmailForm;
}

export const FCEmail = memo((props: FCEmailProps) => {
  const { onLabel, form } = props;
  const formValue = useNonNilObservable(form.value$);

  useEffect(() => {
    if (formValue.title) {
      onLabel && onLabel(formValue.title);
    }
  }, [formValue, onLabel]);

  return (
    <FormContainer onSubmit={form.submit}>
      <div className="p-3">
        <FormInput autoFocus control={form.controls.title} />
        <FormInput control={form.controls.placeholder} />
        <FormInput type="textarea" control={form.controls.description} />
        <FormCheckbox control={form.controls.isRequired} />
        <FormCheckbox control={form.controls.isConfirmEmail} />
      </div>
    </FormContainer>
  );
});
