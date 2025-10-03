import { FieldProps, FormControl, FormControlData, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { useMemo } from 'react';
import { Observable } from 'rxjs';
import { Form, Select, SelectProps, Space } from 'antd';
import { BaseOptionType } from 'antd/es/select';
import { FormSelectBaseProps } from './FormSelect';

export interface FormSelectTagsProps<C extends FormControl<any>, I>
  extends FormSelectBaseProps<I, FormControlData<C>[0]>,
    Omit<FieldProps<C>, 'disabled'> {
  onChange?(value: FormControlData<C> | null): void;
}

export type FormTagsProps<C extends FormControl<any>, I> = FormSelectTagsProps<C, I>;

export function FormTags<C extends FormControl<any>, I>(props: FormTagsProps<C, I> & Omit<SelectProps<any, any>, 'options'>) {
  // export function FormSelect<I, V>(props: FormSelectProps<I, V> & { config?: Omit<SelectProps<any, any>, 'options'> }) {
  const { formControl, fieldState, fieldConfig } = useFormField(props);
  const { valueAccessor, labelAccessor, sectionAccessor, tooltip, hasSections, onChange, noMarginBottom, formStyle, ...rest } = props;

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const fieldReadonly = fieldConfig.readonly || props.readonly || false;
  const fieldDisabled = fieldConfig.disabled || props.disabled || false;

  const fieldValue = fieldState.value;
  const options: BaseOptionType[] = useMemo(() => {
    return R.map(props.items, (item, index) => {
      return {
        value: props.valueAccessor(item, index),
        label: props.labelAccessor(item, index),
        item,
      };
    });
  }, [props]);

  return (
    <Form.Item
      style={noMarginBottom ? { marginBottom: 0, ...formStyle } : formStyle}
      tooltip={props.tooltip}
      label={fieldConfig.label}
      labelAlign={'left'}
      labelCol={{ span: 24 }}
      validateStatus={fieldError ? 'error' : ''}
      help={fieldError}
      required={fieldConfig.required || false}
    >
      <Select
        mode={'tags'}
        dropdownStyle={{ zIndex: 9999 }}
        options={options}
        showSearch
        placeholder={fieldConfig.placeholder}
        value={fieldValue}
        optionFilterProp="label"
        disabled={fieldDisabled}
        onChange={value => {
          console.log('Selected Tags:', value);
          formControl.setValue(value);
          props.onChange && props.onChange(value);
        }}
        {...rest}
      />
    </Form.Item>
  );
}
