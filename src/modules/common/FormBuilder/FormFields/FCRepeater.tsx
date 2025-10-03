import React, { memo, useEffect, useCallback, useState } from 'react';
import { formGroup, formControl, FormDataType, formArray } from '@core/utils/form';
import { FormContainer, FormInput, FormCheckbox } from '@core/components/form';
// import { FCItemControlProps } from '../FCItem';
import { FCType, FCFormDataType } from './types';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { openFormBuilderOverlay } from '@modules/common/FormBuilder/FormBuilderOverlay';
import { Button } from '@core/components/Button';
import { FCItemControlProps } from '../FCItem';

export function defineRepeaterForm() {
  const form = formGroup({
    type: formControl<FCType>({ initialValue: FCType.repeater }),
    columns: formControl<boolean>({ initialValue: true, label: 'Enable Columns' }),
    items: formControl<any[]>({
      initialValue: [],
    }),
  });

  return form;
}

export type FCRepeaterFormData = FormDataType<typeof defineRepeaterForm>;
export type FCRepeaterForm = ReturnType<typeof defineRepeaterForm>;

export interface FCRepeaterProps extends FCItemControlProps {
  form: FCRepeaterForm;
}

export const FCRepeater = memo((props: FCRepeaterProps) => {
  const { onLabel, form } = props;

  const formValue = useNonNilObservable(form.value$);

  const onConfigureForm = useCallback(() => {
    openFormBuilderOverlay({ onSave: items => form.patchValue({ items }), fields: formValue.items });
  }, [form, formValue.items]);

  return (
    <FormContainer onSubmit={form.submit}>
      <div className="p-3">
        <FormCheckbox control={form.controls.columns} />
        <Button type="button" onClick={onConfigureForm}>
          Configure Form
        </Button>
      </div>
    </FormContainer>
  );
});
