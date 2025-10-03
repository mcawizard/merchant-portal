import { FieldProps, FormControl, useFormField } from '@core/utils/form';
import React, { Fragment, useEffect, useCallback } from 'react';
import { DatePicker, DatePickerProps, Form, Space } from 'antd';
import { toMoment } from '@core/utils/time';
import { R } from '@core/utils/r';
import { Moment } from 'moment';
import { Formatter } from '@core/utils/formatter';
import { DATE_FORMAT } from '@business/constants/time';

interface FormDateInputBaseProps<C> {
  clearable?: boolean;
  tooltip?: string;
  minDate?: Moment;
  maxDate?: Moment;
  options?: Partial<DatePickerProps>;
  disabled?: boolean;
  description?: string;
  onChange?(date: C | null): void;
}

export interface FormDateInputNumberProps<C extends any> extends FormDateInputBaseProps<C>, FieldProps<FormControl<C> | FormControl<C | null>> {
  type?: 'number';
}

export interface FormDateInputStringProps<C extends any> extends FormDateInputBaseProps<C>, FieldProps<FormControl<C> | FormControl<C | null>> {
  type?: 'string';
}

export type FormDateInputProps<C extends string | number> = FormDateInputNumberProps<C> | FormDateInputStringProps<C>;

export function FormDateInput<C extends string | number>(props: FormDateInputProps<C>) {
  const { tooltip } = props;
  const { formControl, fieldState, fieldConfig } = useFormField(props);
  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldValue = fieldState.value ? toMoment(fieldState.value) : undefined;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const onChange = (value: Moment) => {
    if (!value) {
      formControl.setValue(null);
      props.onChange && props.onChange(null);
      return;
    }
    if (props.type === 'number') {
      formControl.setValue(value.unix() as any);
      props.onChange && props.onChange(value.unix() as any);
    } else {
      formControl.setValue(Formatter.formatTime(value) as any);
      props.onChange && props.onChange(Formatter.formatTime(value) as any);
    }
  };

  return (
    <Form.Item
      tooltip={tooltip}
      label={fieldConfig.label}
      labelAlign={'left'}
      validateStatus={fieldError ? 'error' : ''}
      help={fieldError}
      labelCol={{ span: 24 }}
      required={fieldConfig.required || false}
    >
      <DatePicker
        format={DATE_FORMAT}
        style={{ width: '100%' }}
        value={fieldValue as any}
        allowClear={props.clearable || false}
        popupStyle={{ zIndex: 9999 }}
        onChange={c => onChange(c as Moment)}
        maxDate={props.maxDate as any}
        minDate={props.minDate as any}
        disabled={props.disabled}
        placeholder={fieldConfig.placeholder || undefined}
        {...props.options}
      />
    </Form.Item>
  );
}
