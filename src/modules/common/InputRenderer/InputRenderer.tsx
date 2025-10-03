import { InputFieldResponse } from '@business/entities/input';
import { FormInput } from '@core/components/form';
import { formControl, formGroup, FormGroup } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { memo } from 'react';

export function defineInputsForm(inputs: InputFieldResponse[]) {
  return formGroup({
    ...R.fromPairs(inputs.map(input => [input.name, getFieldControl(input)])),
  });
}

export function getFieldControl(input: InputFieldResponse) {
  switch (input.type) {
    case 'string':
      return formControl<string>({
        required: input.required,
        label: input.title,
        // placeholder: !R.isEmpty(input.placeholder) ? input.placeholder : undefined,
      });
    case 'boolean':
      return formControl<boolean>({
        required: input.required,
        label: input.title,
        // placeholder: !R.isEmpty(input.placeholder) ? input.placeholder : undefined,
      });
    default:
      return formControl<boolean>({
        required: input.required,
        label: input.title,
        // placeholder: !R.isEmpty(input.placeholder) ? input.placeholder : undefined,
      });
  }
}

export interface InputRendererProps {
  inputs: InputFieldResponse[];
  form: FormGroup<any>;
}

export const InputRenderer = memo((props: InputRendererProps) => {
  const { inputs, form } = props;
  return (
    <div>
      {inputs.map((input, index) => {
        const control = form.controls[input.name];
        if (!control) return null;
        return (
          <div key={index}>
            <FormInput type={input.password ? 'password' : 'text'} control={control} />
          </div>
        );
      })}
    </div>
  );
});
