import { FieldProps, FormControl, FormControlData, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { useMemo } from 'react';
import { Observable } from 'rxjs';
import { Form, Select, SelectProps, Space } from 'antd';
import { BaseOptionType } from 'antd/es/select';

export interface FormSelectBaseProps<I, V> {
  items?: I[];
  valueAccessor(item: I, index: number): V;
  labelAccessor(item: I, index: number): string;
  sectionAccessor?(item: I, index: number): string;
  tooltip?: string;
  disabled?: boolean;
  hasSections?: boolean;
  noMarginBottom?: boolean;
  formStyle?: React.CSSProperties;
}

export interface FormSelectSingleProps<C extends FormControl<any>, I>
  extends FormSelectBaseProps<I, FormControlData<C>>,
    Omit<FieldProps<C>, 'disabled'> {
  type?: 'single';
  onChange?(value: FormControlData<C> | null): void;
}

export interface FormSelectMultipleProps<C extends FormControl<any>, I>
  extends FormSelectBaseProps<I, FormControlData<C>[0]>,
    Omit<FieldProps<C>, 'disabled'> {
  type?: 'multiple';
  onChange?(value: FormControlData<C> | null): void;
}

export type FormSelectProps<C extends FormControl<any>, I> = FormSelectSingleProps<C, I> | FormSelectMultipleProps<C, I>;

export function FormSelect<C extends FormControl<any>, I>(props: FormSelectProps<C, I> & Omit<SelectProps<any, any>, 'options'>) {
  // export function FormSelect<I, V>(props: FormSelectProps<I, V> & { config?: Omit<SelectProps<any, any>, 'options'> }) {
  const { formControl, fieldState, fieldConfig } = useFormField(props);
  const { type, valueAccessor, labelAccessor, sectionAccessor, tooltip, hasSections, onChange, noMarginBottom, formStyle, ...rest } = props;

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const fieldReadonly = fieldConfig.readonly || props.readonly || false;
  const fieldDisabled = fieldConfig.disabled || props.disabled || false;

  const fieldValue = fieldState.value;
  const options: BaseOptionType[] = useMemo(() => {
    if (props.hasSections && props.sectionAccessor) {
      const items = R.map(props.items, (item, index) => {
        return {
          section: props.sectionAccessor!(item, index),
          value: props.valueAccessor(item, index),
          label: props.labelAccessor(item, index),
          item,
        };
      });
      const groupedByItems = R.groupBy(items, 'section');
      return R.keys(groupedByItems).map(section => {
        return {
          title: section,
          label: section,
          options: groupedByItems[section].map(item => ({ label: item.label, value: item.value, item })),
        };
      });
    }
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
        mode={props.type == 'multiple' ? 'multiple' : undefined}
        dropdownStyle={{ zIndex: 9999 }}
        options={options}
        showSearch
        placeholder={fieldConfig.placeholder}
        value={fieldValue}
        optionFilterProp="label"
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
