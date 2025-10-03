import React, { memo, useEffect } from 'react';
import { formGroup, formControl, FormDataType } from '@core/utils/form';
import { FormContainer, FormSelect } from '@core/components/form';
// import { FCItemControlProps } from '../FCItem';
import { FCType } from './types';
import { FormHTML } from '@core/components/form/FormHTML';
import { FCItemControlProps } from '../FCItem';

export function defineDescriptionForm() {
  const form = formGroup({
    type: formControl<FCType>({ initialValue: FCType.desciption }),
    description: formControl<string>({
      required: true,
      initialValue: 'Description',
    }),
  });

  return form;
}

export type FCDescriptionFormData = FormDataType<typeof defineDescriptionForm>;
export type FCDescriptionForm = ReturnType<typeof defineDescriptionForm>;

export interface FCDescriptionProps extends FCItemControlProps {
  form: FCDescriptionForm;
}

export const FCDescription = memo((props: FCDescriptionProps) => {
  const { onLabel, form } = props;

  useEffect(() => {
    onLabel && onLabel('Text Description');
  }, [onLabel]);

  return (
    <FormContainer onSubmit={form.submit}>
      <div className="p-3">
        <FormHTML control={form.controls.description} />
      </div>
    </FormContainer>
  );
});
