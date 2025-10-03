import React, { memo, useEffect } from 'react';
import { formGroup, formControl, FormDataType } from '@core/utils/form';
import { FormContainer, FormInput, FormCheckbox } from '@core/components/form';
// import { FCItemControlProps } from '../FCItem';
import { FCType } from './types';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { FCItemControlProps } from '../FCItem';

export function defineProcessForm() {
  const form = formGroup({
    type: formControl<FCType>({ initialValue: FCType.process }),
    videos: formControl<boolean>({
      label: 'Enable Videos',
      initialValue: true,
    }),
  });

  return form;
}

export type FCProcessFormData = FormDataType<typeof defineProcessForm>;
export type FCProcessForm = ReturnType<typeof defineProcessForm>;

export interface FCProcessProps extends FCItemControlProps {
  form: FCProcessForm;
}

export const FCProcess = memo((props: FCProcessProps) => {
  const { onLabel, form } = props;

  const formValue = useNonNilObservable(form.value$);

  return (
    <FormContainer onSubmit={form.submit}>
      <div className="p-3">
        <FormCheckbox control={form.controls.videos} />
      </div>
    </FormContainer>
  );
});
