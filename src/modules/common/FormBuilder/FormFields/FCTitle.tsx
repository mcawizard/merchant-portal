import React, { memo, useEffect } from 'react';
import { formGroup, formControl, FormDataType } from '@core/utils/form';
import { FormContainer, FormInput } from '@core/components/form';
// import { FCItemControlProps } from '../FCItem';
import { FCType } from './types';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { FCItemControlProps } from '../FCItem';

export function defineTitleForm() {
  const form = formGroup({
    type: formControl<FCType>({ initialValue: FCType.title }),
    title: formControl<string>({
      label: 'Section',
      required: true,
      initialValue: 'Section',
    }),
  });

  return form;
}

export type FCTitleFormData = FormDataType<typeof defineTitleForm>;
export type FCTitleForm = ReturnType<typeof defineTitleForm>;

export interface FCTitleProps extends FCItemControlProps {
  form: FCTitleForm;
}

export const FCTitle = memo((props: FCTitleProps) => {
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
        <FormInput control={form.controls.title} />
      </div>
    </FormContainer>
  );
});
