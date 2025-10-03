import React, { memo, useEffect } from 'react';
import { t } from 'ttag';
import { formGroup, formControl, FormDataType } from '@core/utils/form';
import { FormInput, FormCheckbox, FormContainer } from '@core/components/form';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
// import { FCItemControlProps } from '../FCItem';
import { FCType } from './types';
import { R } from '@core/utils/r';
import { FCItemControlProps } from '../FCItem';

export function defineRadioForm() {
  const form = formGroup({
    id: formControl<number>({ initialValue: R.random(0, 10000) }),
    type: formControl<FCType>({ initialValue: FCType.radio }),
    title: formControl<string>({
      label: t`Title`,
      required: true,
      initialValue: t`Radio`,
    }),
    description: formControl<string>({
      label: t`Description`,
    }),
    options: formControl<string>({
      label: t`Options`,
      initialValue: 'Option One\nOption Two\nOption Three',
    }),
    isRequired: formControl<boolean>({
      label: t`Required`,
      initialValue: false,
    }),
  });

  return form;
}

export type FCRadioFormData = FormDataType<typeof defineRadioForm>;
export type FCRadioForm = ReturnType<typeof defineRadioForm>;

export interface FCRadioProps extends FCItemControlProps {
  form: FCRadioForm;
}

export const FCRadio = memo((props: FCRadioProps) => {
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
        <FormInput type="textarea" control={form.controls.options} />
        <FormInput type="textarea" control={form.controls.description} />

        <FormCheckbox control={form.controls.isRequired} />
      </div>
    </FormContainer>
  );
});
