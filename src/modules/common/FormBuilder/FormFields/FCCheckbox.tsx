import React, { memo, useEffect } from 'react';
import { t } from 'ttag';
import { formGroup, formControl, FormDataType } from '@core/utils/form';
import { FormInput, FormCheckbox, FormContainer } from '@core/components/form';
import { FCItemControlProps } from '../FCItem';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { FCType } from './types';
import { R } from '@core/utils/r';

export function defineCheckboxForm() {
  const form = formGroup({
    id: formControl<number>({ initialValue: R.random(0, 10000) }),
    type: formControl<FCType>({ initialValue: FCType.checkbox }),
    title: formControl<string>({
      label: t`Title`,
      required: true,
      initialValue: t`Checkbox`,
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

export type FCCheckboxFormData = FormDataType<typeof defineCheckboxForm>;
export type FCCheckboxForm = ReturnType<typeof defineCheckboxForm>;

export interface FCCheckboxProps extends FCItemControlProps {
  form: FCCheckboxForm;
}

export const FCCheckbox = memo((props: FCCheckboxProps) => {
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
