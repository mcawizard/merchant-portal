import React, { memo, useEffect, useMemo } from 'react';
import { t } from 'ttag';
import { formGroup, formControl, FormDataType, Validators } from '@core/utils/form';
import { FormInput, FormCheckbox, FormContainer } from '@core/components/form';
// import { FCItemControlProps } from '../FCItem';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { FCType } from './types';
import { R } from '@core/utils/r';
import { FCItemControlProps } from '../FCItem';

export function defineTextForm() {
  const form = formGroup({
    id: formControl<number>({ initialValue: R.random(0, 10000) }),
    type: formControl<FCType>({ initialValue: FCType.text }),
    title: formControl<string>({
      label: t`Title`,
      required: true,
      initialValue: t`Title`,
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
    minValueLength: formControl<number>({
      label: t`Min Value Length`,
      initialValue: 3,
      validators: [Validators.integer],
    }),
  });

  return form;
}

export type FCTextFormData = FormDataType<typeof defineTextForm>;
export type FCTextForm = ReturnType<typeof defineTextForm>;

export interface FCTextProps extends FCItemControlProps {
  form: FCTextForm;
}

export const FCText = memo((props: FCTextProps) => {
  const { form, onLabel } = props;
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
        <FormInput control={form.controls.minValueLength} />
      </div>
    </FormContainer>
  );
});

export const FCTextPreview = memo((props: FCTextFormData) => {
  const control = useMemo(() => formControl<string>({ placeholder: props.placeholder, label: props.title, required: props.isRequired }), [props]);
  return <FormInput control={control} readonly readOnly />;
});
