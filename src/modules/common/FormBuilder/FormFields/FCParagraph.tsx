import React, { memo, useEffect } from 'react';
import { t } from 'ttag';
import { formGroup, formControl, FormDataType, Validators } from '@core/utils/form';
import { FormInput, FormCheckbox, FormContainer } from '@core/components/form';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
// import { FCItemControlProps } from '../FCItem';
import { FCType } from './types';
import { FCItemControlProps } from '../FCItem';

export function defineParagraphForm() {
  const form = formGroup({
    type: formControl<FCType>({ initialValue: FCType.paragraph }),
    title: formControl<string>({
      label: t`Title`,
      required: true,
      initialValue: t`Paragraph`,
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
    showTextEditor: formControl<boolean>({
      label: t`Show Text Editor`,
    }),
    minValueLength: formControl<number>({
      label: t`Min Value Length`,
      initialValue: 3,
      validators: [Validators.integer],
    }),
  });

  return form;
}

export type FCParagraphFormData = FormDataType<typeof defineParagraphForm>;
export type FCParagraphForm = ReturnType<typeof defineParagraphForm>;

export interface FCParagraphProps extends FCItemControlProps {
  form: FCParagraphForm;
}

export const FCParagraph = memo((props: FCParagraphProps) => {
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
        <FormInput autoFocus={true} control={form.controls.title} />
        <FormInput control={form.controls.placeholder} />
        <FormInput type="textarea" control={form.controls.description} />
        <FormCheckbox control={form.controls.isRequired} />
        <FormCheckbox control={form.controls.showTextEditor} />
        <FormInput control={form.controls.minValueLength} />
      </div>
    </FormContainer>
  );
});
