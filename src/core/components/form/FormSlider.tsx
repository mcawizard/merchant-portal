import { Form, Slider, Spin } from 'antd';
import { FieldProps, FormControl, ServerValidation, useFormField } from '@core/utils/form';
import React, { useCallback, useState } from 'react';
import { finalize, Observable, tap } from 'rxjs';
import { ignoreError } from '@core/utils/rxjs/operators';

export interface FormSliderProps<C extends FormControl<number>> extends FieldProps<C> {
  min?: number;
  max?: number;
  step?: number;
  tooltip?: string;
  noMarginBottom?: boolean;
  loading?: boolean;
  formItemClassName?: string;
  formStyle?: React.CSSProperties;
  validate?: (value: number) => Observable<ServerValidation>;
  onChange?: (value: number) => void;
  disabled?: boolean;
  readonly?: boolean;
  showSliderValue?: boolean;
}

export function FormSlider<C extends FormControl<number>>(props: FormSliderProps<C>) {
  const {
    tooltip,
    min = 0,
    max = 100,
    step = 1,
    noMarginBottom = false,
    formItemClassName = '',
    formStyle = {},
    loading = false,
    showSliderValue = false,
    validate,
    onChange,
  } = props;

  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldTouched = fieldState.touched || formControl.inheritedSubmitted || false;
  const fieldError = fieldTouched && fieldState.errorMessage ? fieldState.errorMessage : null;
  const fieldStatus = fieldState.status;

  const fieldDisabled = props.disabled || fieldConfig.disabled || false;
  const fieldReadonly = fieldConfig.readonly || false;
  const [isServerLoading, setIsServerLoading] = useState(false);

  const checkForServerErrors = useCallback(
    (value: number) => {
      if ((fieldStatus === 'valid' || (fieldStatus === 'invalid' && formControl.hasCustomError)) && validate) {
        setIsServerLoading(true);
        validate(value)
          .pipe(
            tap(result => {
              formControl.addError(result.message || null);
            }),
            ignoreError(),
            finalize(() => setIsServerLoading(false)),
          )
          .subscribe();
      }
    },
    [fieldStatus, formControl, validate],
  );

  const handleChange = (value: number) => {
    formControl.setValue(value);
    onChange?.(value);
    validate && checkForServerErrors(value);
  };

  return (
    <Form.Item
      style={noMarginBottom ? { marginBottom: 0, ...formStyle } : formStyle}
      tooltip={tooltip}
      className={formItemClassName}
      label={fieldConfig.label}
      labelAlign="left"
      labelCol={{ span: 24 }}
      validateStatus={fieldError ? 'error' : ''}
      help={fieldError}
      required={fieldConfig.required || false}
    >
      <div style={{ alignItems: 'center', gap: 8 }}>
        <Slider
          min={min}
          max={max}
          step={step}
          value={fieldState.value}
          onChange={handleChange}
          disabled={fieldDisabled || fieldReadonly}
          tooltip={{ placement: 'top' }}
        />
        {showSliderValue && <>{isServerLoading || loading ? <Spin size="small" /> : <span>{fieldState.value}</span>}</>}
      </div>
    </Form.Item>
  );
}
