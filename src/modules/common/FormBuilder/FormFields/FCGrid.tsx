import React, { memo, useEffect, useMemo } from 'react';
import { t } from 'ttag';
import { formGroup, formControl, FormDataType, Validators } from '@core/utils/form';
import { FormInput, FormCheckbox, FormContainer } from '@core/components/form';
// import { FCItemControlProps } from '../FCItem';
import { FCType } from './types';
import { R } from '@core/utils/r';
import { FCItemControlProps } from '../FCItem';

export function defineGridForm() {
  const form = formGroup({
    id: formControl<number>({ initialValue: R.random(0, 10000) }),
    type: formControl<FCType>({ initialValue: FCType.grid }),
    title: formControl<string>({
      label: t`Title`,
      required: true,
      initialValue: t`Title`,
    }),
    no_rows: formControl<number>({
      label: t`No of rows`,
      initialValue: 1,
      validators: [Validators.integer],
    }),
    no_cols: formControl<number>({
      label: t`No of Columns`,
      initialValue: 1,
      validators: [Validators.integer],
    }),
  });

  return form;
}

export type FCGridFormData = FormDataType<typeof defineGridForm>;
export type FCGridForm = ReturnType<typeof defineGridForm>;

export interface FCTextProps extends FCItemControlProps {
  form: FCGridForm;
}

export const FCGrid = memo((props: FCTextProps) => {
  const { form } = props;

  return (
    <FormContainer onSubmit={form.submit}>
      <div className="p-3">
        <FormInput control={form.controls.title} />
        <FormInput control={form.controls.no_rows} type="number" />
        <FormInput control={form.controls.no_cols} type="number" />
      </div>
    </FormContainer>
  );
});
