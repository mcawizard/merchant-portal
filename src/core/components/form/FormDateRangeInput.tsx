import { FieldProps, FormControl, useFormField } from '@core/utils/form';
import React, { Fragment, useEffect, useCallback } from 'react';
import { DatePicker, DatePickerProps, Form } from 'antd';
import { toMoment } from '@core/utils/time';
import { R } from '@core/utils/r';
import { Moment } from 'moment';
import { Formatter } from '@core/utils/formatter';
import { DATE_FORMAT, DateRange } from '@business/constants/time';
import { RangePickerProps } from 'antd/es/date-picker';

interface FormDateInputBaseProps<C> {
  clearable?: boolean;
  showTime?: boolean;
  tooltip?: string;
  minDate?: Moment;
  maxDate?: Moment;
  options?: Partial<RangePickerProps>;
  disabled?: boolean;
  onChange?(date: C | null): void;
}

export interface FormDateInputRangeNumberProps<C extends DateRange<any>> extends FormDateInputBaseProps<C>, FieldProps<FormControl<C>> {
  type?: 'number';
}

export interface FormDateInputRangeStringProps<C extends DateRange<any>> extends FormDateInputBaseProps<C>, FieldProps<FormControl<C>> {
  type?: 'string';
}

export type FormDateRangeInputProps<T extends string | number, C extends DateRange<T>> =
  | FormDateInputRangeNumberProps<C>
  | FormDateInputRangeStringProps<C>;

export function FormDateRangeInput<T extends string | number, C extends DateRange<T>>(props: FormDateRangeInputProps<T, C>) {
  const { tooltip } = props;
  const { formControl, fieldState, fieldConfig } = useFormField(props);
  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldValue = fieldState.value ? [toMoment(fieldState.value[0]), toMoment(fieldState.value[1])] : undefined;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const onChange = (value: Moment[]) => {
    if (!value) {
      formControl.setValue(null);
      props.onChange && props.onChange(null);
      return;
    }
    if (props.type === 'number') {
      const range: DateRange<T> = { start: value[0].endOf('day').unix() as any, end: value[1].endOf('day').unix() as any };
      formControl.setValue(range as any);
      props.onChange && props.onChange(range as any);
    } else {
      const range: DateRange<T> = {
        start: Formatter.formatTime(value[0].endOf('day')) as any,
        end: Formatter.formatTime(value[1].endOf('day')) as any,
      };
      formControl.setValue(range as any);
      props.onChange && props.onChange(range as any);
    }
  };

  return (
    <Form layout="vertical" preserve={false}>
      <Form.Item
        tooltip={tooltip}
        label={fieldConfig.label}
        labelAlign={'left'}
        validateStatus={fieldError ? 'error' : ''}
        help={fieldError}
        required={fieldConfig.required || false}
      >
        <DatePicker.RangePicker
          format={[DATE_FORMAT, DATE_FORMAT]}
          style={{ width: '100%' }}
          value={fieldValue as any}
          allowClear={props.clearable || false}
          popupStyle={{ zIndex: 9999 }}
          maxDate={props.maxDate as any}
          minDate={props.minDate as any}
          disabled={props.disabled}
          onChange={c => onChange(c as any)}
          {...props.options}
        />
      </Form.Item>
    </Form>
  );
}
