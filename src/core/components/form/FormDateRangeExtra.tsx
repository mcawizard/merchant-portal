import { FieldProps, FormControl, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import { TimeInput, toMoment } from '@core/utils/time';
import FormHelperText from '@mui/material/FormHelperText';

import moment from 'moment';
import React, { Fragment, useCallback, useEffect, useMemo, useRef } from 'react';
import { FormGroup, Label } from 'reactstrap';
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import { DATE_FORMAT } from '@business/constants/time';
import { NoUndefinedRangeValueType } from 'rc-picker/lib/PickerInput/RangePicker';
const MomentDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig);
const { RangePicker } = MomentDatePicker;

export interface FormDateRangeExtraInputProps extends FieldProps<FormControl<string> | FormControl<string | null>> {
  minDate?: TimeInput;
  maxDate?: TimeInput;
  onChange?(range: string): void;
  appendToBody?: boolean;
  anchorDirection?: 'left' | 'right';
  withoutGroup?: boolean;
  small?: boolean;
  startWithBlank?: boolean;
  ranges?: { label: string; value: [Moment, Moment] }[];
}

export function FormDateRangeExtra(props: FormDateRangeExtraInputProps) {
  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldValue = fieldState.value;
  const sStart = R.toNumber(R.toString(fieldValue).split('-')[0]);
  const sEnd = R.toNumber(R.toString(fieldValue).split('-')[1]);

  const startDate = useMemo(() => {
    if (sStart) {
      return toMoment(sStart).toDate();
    } else {
      if (props.startWithBlank) return undefined;
      return toMoment().subtract(30, 'day').toDate();
    }
  }, [props.startWithBlank, sStart]);
  const endDate = useMemo(() => {
    if (sEnd) {
      return toMoment(sEnd).toDate();
    } else {
      if (props.startWithBlank) return undefined;
      return toMoment().toDate();
    }
  }, [props.startWithBlank, sEnd]);

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;

  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const fieldPlaceholder = fieldConfig.placeholder || 'mm/dd/yyyy';

  const handleChange = useCallback(
    (date: NoUndefinedRangeValueType<moment.Moment> | null) => {
      if (date && date.length === 2) {
        const fieldValue = `${moment(date[0])?.startOf('day').unix()}-${moment(date[1])?.endOf('day').unix()}`;
        formControl.setValue(fieldValue);
        props.onChange && props.onChange(fieldValue);
      } else {
        formControl.setValue('');
        props.onChange && props.onChange('');
      }
    },
    [formControl, props],
  );

  const presets = useMemo(() => {
    if (props.ranges) return props.ranges;
    return [
      { label: 'Today', value: [moment(), moment()] },
      { label: 'Yesterday', value: [moment().subtract(1, 'days'), moment().subtract(1, 'days')] },
      { label: 'Last 7 Days', value: [moment().subtract(6, 'days'), moment()] },
      { label: 'Last 30 Days', value: [moment().subtract(29, 'days'), moment()] },
      { label: 'This Month', value: [moment().startOf('month'), moment().endOf('month')] },
      {
        label: 'Last Month',
        value: [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      },
      { label: 'This year', value: [moment().startOf('year'), moment().endOf('year')] },
      { label: 'Last year', value: [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')] },
    ];
  }, [props.ranges]);

  const content = useMemo(
    () => (
      <Fragment>
        {fieldConfig.label && (
          <>
            <Label for={formControl.uid}>{fieldConfig.label}</Label> <br />
          </>
        )}
        <RangePicker
          size="large"
          placeholder={[fieldPlaceholder, fieldPlaceholder]}
          style={{ width: '100%' }}
          allowClear={props.startWithBlank == true}
          format={DATE_FORMAT}
          key={formControl.uid + (startDate ? '1' : '0') + (endDate ? '1' : '0')}
          value={[startDate ? toMoment(startDate) : undefined, endDate ? toMoment(endDate) : undefined]}
          onChange={values => handleChange(values)}
          presets={presets as any}
        />

        {!!fieldError && (
          <FormHelperText className="mui-error" style={{ color: '#f44336' }}>
            {fieldError}
          </FormHelperText>
        )}
      </Fragment>
    ),
    [fieldConfig.label, formControl, startDate, endDate, props, fieldError, handleChange, fieldPlaceholder, presets],
  );

  if (props.withoutGroup) {
    return <div className="theme_date-picker">{content}</div>;
  }

  return <FormGroup className="theme_date-picker">{content}</FormGroup>;
}
