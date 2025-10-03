import { FieldProps, FormControl, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { CSSProperties, memo, useMemo, ReactNode } from 'react';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { Form, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FormHelperText } from '@mui/material';

export type FormCheckboxProps = FieldProps<FormControl<boolean>> & {
  onChange?(value: boolean): void;
  tooltip?: string;
  children?: ReactNode;
  className?: string;
  noBottomPadding?: boolean;
  disabled?: boolean;
};

export const FormCheckbox = memo((props: FormCheckboxProps) => {
  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldValue = fieldState.value || false;

  const fieldReadonly = fieldConfig.readonly || false;
  const fieldDisabled = fieldConfig.disabled || props.disabled || false;
  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  return (
    <React.Fragment>
      <Form.Item
        valuePropName="checked"
        tooltip={props.tooltip}
        labelAlign={'left'}
        validateStatus={fieldError ? 'error' : ''}
        help={fieldError}
        required={fieldConfig.required || false}
      >
        <Checkbox
          id={formControl.uid}
          checked={fieldValue}
          disabled={fieldDisabled}
          onChange={event => {
            formControl.setValue(event.target.checked);
            props.onChange && props.onChange(event.target.checked);
          }}
        >
          {props.children || fieldConfig.label}
        </Checkbox>
        {!!props.tooltip && (
          <Tooltip title={props.tooltip}>
            <span className="text-muted ml-1 hover-pointer">
              <QuestionCircleOutlined />
            </span>
          </Tooltip>
        )}
      </Form.Item>
    </React.Fragment>
  );
});

export interface FormCheckboxGrupedProps<V = any> {
  value: V;
  label?: React.ReactNode;
  disabled?: boolean;
  onPress?(value: V): void;
  noPadding?: boolean;
  className?: string;
}

function FormCheckboxComponent<V = any>(props: FormCheckboxGrupedProps<V>) {
  const context = React.useContext(Context);
  const { formControl, fieldState, fieldConfig } = useFormField(context && context.props!);

  const onPress = React.useCallback(() => {
    const currentValue = (fieldState.value || []) as string[];
    const newValue = !currentValue.includes(R.toString(props.value))
      ? [...currentValue, props.value]
      : currentValue.filter(v => v !== R.toString(props.value));
    formControl.setValue(newValue);
    if (props.onPress) props.onPress(props.value);
  }, [formControl, props, fieldState.value]);

  const active = fieldState && fieldState.value && (fieldState.value as string[]).includes(R.toString(props.value));

  const disabled = fieldConfig.disabled || props.disabled || false;
  const error = !!fieldState.errors;

  return (
    <React.Fragment>
      <div className={`custom-control custom-checkbox custom-checkbox-primary ${props.className || ''} ${props.noPadding ? '' : 'mb-3'}`}>
        <input
          id={`${formControl.uid}-${props.value}`}
          type="checkbox"
          className="custom-control-input text-danger"
          checked={active}
          onChange={onPress}
          onFocus={() => formControl.onFocus()}
          onBlur={() => formControl.onBlur()}
          disabled={disabled}
        />

        {!R.isEmpty(props.label) && (
          <label className="custom-control-label" htmlFor={`${formControl.uid}-${props.value}`}>
            {props.label}
          </label>
        )}
      </div>
    </React.Fragment>
  );
}

interface ContextData<T extends any> {
  props: FormCheckboxGroupProps<T> | null;
}

const Context = React.createContext<ContextData<any>>({ props: null });

export interface FormCheckboxGroupProps<V = any> extends FieldProps<FormControl<V>> {
  children?: React.ReactNode;
}

export function FormCheckboxGroupComponent<V = any>(props: FormCheckboxGroupProps<V>) {
  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  return (
    <Context.Provider value={{ props }}>
      {!!fieldError && <FormHelperText className="mui-error text-danger mb-2">{fieldError}</FormHelperText>}
      {props.children}
    </Context.Provider>
  );
}

export class FormCheckboxGruped<V = any> extends React.PureComponent<FormCheckboxGrupedProps<V>> {
  public render() {
    return <FormCheckboxComponent {...this.props} />;
  }
}

export class FormCheckboxGroup<V = any> extends React.PureComponent<FormCheckboxGroupProps<V>> {
  public render() {
    return <FormCheckboxGroupComponent {...this.props} />;
  }
}
