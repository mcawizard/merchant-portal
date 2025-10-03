import { FieldProps, FormControl, ServerValidation, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { ChangeEvent, Fragment, useCallback, useMemo } from 'react';
import { Form, Input, InputProps, InputNumber, Spin } from 'antd';
import { finalize, ignoreElements, Observable, tap } from 'rxjs';
import { ignoreError } from '@core/utils/rxjs/operators';

export interface InputBaseProps {
  tooltip?: string;
  onText?(text: string): void;
  onDebounceText?(text: string): void;
  debounceTime?: number;
  debounce?: boolean;
  onlyNumbers?: boolean;
  parseToFloat?: boolean;
  noMarginBottom?: boolean;
  loading?: boolean;
  formItemClassName?: string;
  formStyle?: React.CSSProperties;
  description?: string;
  validate?: (value: string) => Observable<ServerValidation>;
}

export interface FormStringInputProps<C extends FormControl<any>> extends FieldProps<C>, InputBaseProps {
  type?: 'text' | 'password' | 'search';
}
export interface FormTextAreaInputProps<C extends FormControl<any>> extends FieldProps<C>, InputBaseProps {
  type?: 'textarea';
  autoSize?: { minRows?: number; maxRows?: number };
}

export interface FormNumberInputProps<C extends FormControl<any>> extends FieldProps<C>, InputBaseProps {
  type?: 'number';
  step?: number;
  min?: number;
  max?: number;
}

export type FormInputProps<C extends FormControl<any>> = FormStringInputProps<C> | FormNumberInputProps<C> | FormTextAreaInputProps<C>;

export function FormInput<C extends FormControl<any>>(props: FormInputProps<C> & InputProps) {
  const {
    type = 'text',
    readonly,
    onlyNumbers = false,
    parseToFloat = false,
    tooltip,
    onText,
    onDebounceText,
    debounce = false,
    debounceTime = 300,
    noMarginBottom = false,
    validate,
    formItemClassName = '',
    formStyle = {},
    ...rest
  } = props;

  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldValue = R.toString(fieldState.value) || '';
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;
  const fieldStatus = fieldState.status;

  const fieldReadonly = fieldConfig.readonly || false;
  const fieldDisabled = props.disabled || fieldConfig.disabled || false;
  const [isServerLoading, setIsServerLoading] = React.useState(false);

  const fieldPlaceholder = fieldConfig.placeholder || '';

  const onDebounceChange = useCallback(
    (text: string) => {
      onDebounceText && onDebounceText(text);
    },
    [onDebounceText],
  );

  const innerDebounceChange = R.debounce(onDebounceChange, debounceTime);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let value: any = event.target.value;
      if (type === 'number') {
        // if (value) value = +value;
        if (R.isNaN(value)) value = null;
      }

      formControl.setValue(value);
      onText && onText(value);
      innerDebounceChange(value);
    },
    [formControl, onText, type, innerDebounceChange],
  );

  const handleFocus = useCallback(
    (event: any) => {
      formControl.onFocus();
      props.onFocus?.(event);
    },
    [formControl, props],
  );
  const checkForServerErrors = useCallback(
    (value: string) => {
      if (fieldStatus == 'valid' || (fieldStatus == 'invalid' && formControl.hasCustomError)) {
        setIsServerLoading(true);
        validate!(value)
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
    [fieldStatus, validate, fieldValue],
  );

  const handleBlur = useCallback(
    (event: any) => {
      if (onlyNumbers) {
        formControl.setValue(fieldValue.replace(/\D/g, ''));
      }
      if (parseToFloat) {
        formControl.setValue(fieldValue.replace(/\,/g, ''));
      }
      formControl.onBlur();
      props.onBlur?.(event);
      props.validate && checkForServerErrors(fieldValue);
    },
    [fieldValue, formControl, onlyNumbers, parseToFloat, props, checkForServerErrors],
  );
  const baseProps = {
    placeholder: fieldPlaceholder,
    value: fieldValue,
    onBlur: handleBlur,
    onFocus: handleFocus,
    disabled: fieldDisabled,
    readOnly: fieldReadonly,
    id: formControl.uid,
  };

  return (
    <Form.Item
      style={noMarginBottom ? { marginBottom: 0, ...formStyle } : formStyle}
      tooltip={tooltip}
      className={formItemClassName}
      label={fieldConfig.label}
      labelAlign={'left'}
      labelCol={{ span: 24 }}
      validateStatus={fieldError ? 'error' : ''}
      help={fieldError}
      required={fieldConfig.required || false}
    >
      {type == 'text' && <Input {...baseProps} onChange={handleChange} {...rest} suffix={isServerLoading ? <Spin size="small" /> : props.suffix} />}
      {type == 'search' && <Input.Search {...baseProps} loading={props.loading} allowClear onChange={handleChange} {...rest} />}
      {type == 'textarea' && <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} {...baseProps} onChange={handleChange} {...(rest as any)} />}
      {type == 'password' && <Input.Password {...baseProps} onChange={handleChange} />}
      {type == 'number' && (
        <InputNumber
          {...baseProps}
          min={props.min}
          max={props.max}
          step={props.step}
          value={fieldValue}
          onChange={value => {
            formControl.setValue(value);
            onText && onText(value as any);
          }}
        />
      )}
    </Form.Item>
  );
}
