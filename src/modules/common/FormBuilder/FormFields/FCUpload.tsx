import React, { memo, useEffect } from 'react';
import { t } from 'ttag';
import { formGroup, formControl, FormDataType } from '@core/utils/form';
import { FormInput, FormCheckbox, FormContainer } from '@core/components/form';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
// import { FCItemControlProps } from '../FCItem';
import { FCType } from './types';
import { FCItemControlProps } from '../FCItem';

export function defineUploadForm() {
  const form = formGroup({
    type: formControl<FCType>({ initialValue: FCType.upload }),
    title: formControl<string>({
      label: t`Title`,
      required: true,
      initialValue: t`Upload`,
    }),
    placeholder: formControl<string>({
      label: t`Placeholder`,
    }),
    description: formControl<string>({
      label: t`Description`,
    }),
    multipleFiles: formControl<boolean>({
      label: t`Allow Multiple Files With Drag & Drop `,
    }),
    isRequired: formControl<boolean>({
      label: t`Required`,
      initialValue: false,
    }),
  });

  return form;
}

export type FCUploadFormData = FormDataType<typeof defineUploadForm>;
export type FCUploadForm = ReturnType<typeof defineUploadForm>;

export interface FCUploadProps extends FCItemControlProps {
  form: FCUploadForm;
}

export const FCUpload = memo((props: FCUploadProps) => {
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
        {/* <FormInput control={form.controls.placeholder} /> */}
        <FormInput type="textarea" control={form.controls.description} />
        <FormCheckbox control={form.controls.multipleFiles} />
        <FormCheckbox control={form.controls.isRequired} />
      </div>
    </FormContainer>
  );
});
