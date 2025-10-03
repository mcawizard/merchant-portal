import { FieldProps, FormControl, FormControlData, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { ReactNode, useMemo } from 'react';
import { Form, Segmented, SegmentedProps, Select, SelectProps, Space } from 'antd';
import { BaseOptionType } from 'antd/es/select';

export interface FormSegmentedProps<I, V, C extends FormControl<V>> extends FieldProps<C> {
  items?: I[];
  valueAccessor(item: I, index: number): V;
  labelAccessor(item: I, index: number): string;
  tooltip?: string | ReactNode;
  disabled?: boolean;
  onChange?(value: V | null): void;
}

export function FormSegmented<C extends FormControl<any>, I, V extends any>(
  props: FormSegmentedProps<I, V, C> & Omit<SegmentedProps<any>, 'options'>,
) {
  const { formControl, fieldState, fieldConfig } = useFormField(props);
  const { type, valueAccessor, labelAccessor, tooltip, onChange, ...rest } = props;

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const fieldDisabled = fieldConfig.disabled || props.disabled || false;

  const fieldValue = fieldState.value;
  const options: BaseOptionType[] = useMemo(() => {
    return R.map(props.items, (item, index) => {
      return {
        value: props.valueAccessor(item, index),
        label: props.labelAccessor(item, index),
      };
    });
  }, [props]);

  return (
    <Form.Item
      tooltip={props.tooltip}
      label={fieldConfig.label}
      labelAlign={'left'}
      labelCol={{ span: 24 }}
      validateStatus={fieldError ? 'error' : ''}
      help={fieldError}
      required={fieldConfig.required || false}
    >
      <Segmented
        options={options}
        value={fieldValue}
        disabled={fieldDisabled}
        onChange={value => {
          formControl.setValue(value);
          props.onChange && props.onChange(value);
        }}
        {...rest}
      />
    </Form.Item>
  );
}
