import { FieldProps, FormControl, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { useCallback } from 'react';
import { TextProps, Text, TextState } from '@modules/common/Text';
import { TipTapEditor } from '../TipTapEditor';

export interface FormTextProps<C extends FormControl<any>> extends FieldProps<C>, Omit<TextProps, 'onChange' | 'state'> {
  onChange?(html: string): void;
}

export function FormText<C extends FormControl<any>>(props: FormTextProps<C>) {
  const { onChange, ...rest } = props;

  const { formControl, fieldState } = useFormField(props);

  const fieldValue = R.toString(fieldState.value) || '';

  const handleChange = useCallback(
    (text: string) => {
      formControl.setValue(text);
      onChange && onChange(text);
    },
    [formControl, onChange],
  );

  const handleFocus = useCallback(() => {
    formControl.onFocus();
    props.onFocus && props.onFocus();
  }, [formControl, props]);

  const handleBlur = useCallback(() => {
    formControl.onBlur();
    props.onBlur && props.onBlur();
  }, [formControl, props]);

  return <TipTapEditor onBlur={handleBlur} onFocus={handleFocus} html={false} toolbar={false} value={fieldValue} onChange={handleChange} />;
}
