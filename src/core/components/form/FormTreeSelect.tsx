import { FieldProps, FormControl, FormControlData, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { useMemo } from 'react';
import { Observable } from 'rxjs';
import { Form, Select, SelectProps, Space, TreeSelect, TreeSelectProps } from 'antd';
import { BaseOptionType } from 'antd/es/select';

export interface FormTreeSelectBaseProps<I, V> {
  items: BaseOptionType[];
  clearable?: boolean;
  noItemText?: string;
  tooltip?: string;
  disabled?: boolean;
  hasSections?: boolean;
}

export interface FormTreeSelectSingleProps<C extends FormControl<any>, I>
  extends FormTreeSelectBaseProps<I, FormControlData<C>>,
    Omit<FieldProps<C>, 'disabled'> {
  type?: 'single';
  onChange?(value: FormControlData<C> | null): void | Observable<any>;
}

export interface FormTreelectMultipleProps<C extends FormControl<any>, I>
  extends FormTreeSelectBaseProps<I, FormControlData<C>[0]>,
    Omit<FieldProps<C>, 'disabled'> {
  type?: 'multiple';
  onChange?(value: FormControlData<C> | null): void | Observable<any>;
}

export type FormTreeSelectProps<C extends FormControl<any>, I> = FormTreeSelectSingleProps<C, I> | FormTreelectMultipleProps<C, I>;

export function FormTreeSelect<C extends FormControl<any>, I>(props: FormTreeSelectProps<C, I> & Omit<TreeSelectProps<any, any>, 'options'>) {
  const { formControl, fieldState, fieldConfig } = useFormField(props);
  const { type, ...rest } = props;

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const fieldReadonly = fieldConfig.readonly || props.readonly || false;
  const fieldDisabled = fieldConfig.disabled || props.disabled || false;

  const fieldValue = fieldState.value;

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
      <TreeSelect
        dropdownStyle={{ zIndex: 9999 }}
        treeDefaultExpandAll
        treeCheckable={props.type == 'multiple'}
        treeData={props.items}
        showCheckedStrategy={TreeSelect.SHOW_ALL}
        showSearch
        value={fieldValue || undefined}
        disabled={fieldDisabled}
        filterTreeNode={(input, node) => {
          return (node.title || '').toString().toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }}
        onChange={value => {
          formControl.setValue(value);
          props.onChange && props.onChange(value);
        }}
        {...rest}
      />
    </Form.Item>
  );
}
