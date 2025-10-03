import React, { useCallback, Fragment } from 'react';
import { FormControl, useFormField, FieldProps } from '@core/utils/form';
import { R } from '@core/utils/r';
import { Label, FormGroup, FormGroupProps } from 'reactstrap';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './forminputphone.scss';

interface CountryData {
  name: string;
  dialCode: string;
  countryCode: string;
  format: string;
}

export interface FormInputPhoneInternalProps<C extends FormControl<any>> extends FieldProps<C> {
  groupProps?: FormGroupProps;
  withoutGroup?: boolean;
  autoFocus?: boolean;
  onText?(text: string): void;
}

export type FormInputPhoneProps<C extends FormControl<any>> = FormInputPhoneInternalProps<C>;

export function FormInputPhone<C extends FormControl<any>>(props: FormInputPhoneProps<C> & PhoneInputProps) {
  const { readonly, withoutGroup = false, onText, ...rest } = props;

  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldValue = R.toString(fieldState.value) || '';
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const fieldDisabled = fieldConfig.disabled || false;

  const fieldPlaceholder = fieldConfig.placeholder || '';

  const handleChange = useCallback(
    (value: string) => {
      formControl.setValue('+' + value);
      onText && onText('+' + value);
    },
    [formControl, onText],
  );

  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      const pastedValue = event.clipboardData.getData('text');
      const numericValue = pastedValue.replace(/\D/g, ''); // Remove all non-numeric characters
      let newValue;
      if (numericValue.length === 10) {
        newValue = '1' + numericValue;
      } else {
        newValue = numericValue;
      }

      formControl.setValue(newValue);
      onText && onText(newValue);
    },
    [formControl, onText],
  );

  const handleFocus = useCallback(() => {
    formControl.onFocus();
  }, [formControl]);

  const handleBlur = useCallback(() => {
    formControl.onBlur();
  }, [formControl]);

  const content = (
    <Fragment>
      {fieldConfig.label && <Label for={formControl.uid}>{fieldConfig.label}</Label>}
      <PhoneInput
        {...rest}
        country={'us'}
        placeholder={fieldPlaceholder}
        disabled={fieldDisabled}
        value={fieldValue}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        inputProps={{ required: fieldConfig.required, autoFocus: props.autoFocus, onPaste: handlePaste }}
      />
      {!!fieldError && <span style={{ color: '#f44336', paddingTop: 10 }}>{fieldError}</span>}
    </Fragment>
  );

  if (withoutGroup) return content;
  return <FormGroup {...props.groupProps}>{content}</FormGroup>;
}
