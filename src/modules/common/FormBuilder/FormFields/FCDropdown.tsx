import React, { memo, useEffect } from 'react';
import { t } from 'ttag';
import { formGroup, formControl, FormDataType } from '@core/utils/form';
import { FormInput, FormCheckbox, FormContainer } from '@core/components/form';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
// import { FCItemControlProps } from '../FCItem';
import { FCType } from './types';
import { R } from '@core/utils/r';
import { FCItemControlProps } from '../FCItem';

export function defineDropdownForm() {
  const form = formGroup({
    id: formControl<number>({ initialValue: R.random(0, 10000) }),
    type: formControl<FCType>({ initialValue: FCType.dropdown }),
    title: formControl<string>({
      label: t`Title`,
      required: true,
      initialValue: t`Dropdown`,
    }),
    placeholder: formControl<string>({
      label: t`Placeholder`,
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
      initialValue: true,
    }),
    addMultiple: formControl<boolean>({
      label: t`Add Mutiple`,
    }),
  });

  return form;
}

export type FCDropdownFormData = FormDataType<typeof defineDropdownForm>;
export type FCDropdownForm = ReturnType<typeof defineDropdownForm>;

export interface FCDropdownProps extends FCItemControlProps {
  form: FCDropdownForm;
}

export const FCDropdown = memo((props: FCDropdownProps) => {
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
        <FormInput type="textarea" control={form.controls.options} />
        <FormCheckbox control={form.controls.addMultiple} />
        <FormCheckbox control={form.controls.isRequired} />
      </div>
    </FormContainer>
  );
});
