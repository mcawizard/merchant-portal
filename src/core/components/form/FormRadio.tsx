import React, { CSSProperties, ReactNode, Fragment } from 'react';
import { FormControl, useFormField, FieldProps } from '@core/utils/form';
import { Form, Radio, Space } from 'antd';
interface ContextData<T extends any> {
  props: FormRadioGroupProps<T> | null;
}

export const Context = React.createContext<ContextData<any>>({ props: null });

export interface FormRadioGroupProps<V = any> extends FieldProps<FormControl<V>> {
  children?: React.ReactNode;
}

function FormRadioGroupComponent<V = any>(props: FormRadioGroupProps<V>) {
  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  return (
    <Context.Provider value={{ props }}>
      <Form.Item validateStatus={fieldError ? 'error' : ''} help={fieldError} required={fieldConfig.required || false} labelCol={{ span: 24 }}>
        <Radio.Group value={fieldState.value}>
          <Space direction="vertical">{props.children}</Space>
        </Radio.Group>
      </Form.Item>
    </Context.Provider>
  );
}

export interface FormRadioProps<V = any> {
  value: V;
  children?: React.ReactNode;
  disabled?: boolean;
  onPress?(value: V): void;
}

function FormRadioComponent<V = any>(props: FormRadioProps<V>) {
  const context = React.useContext(Context);
  const { formControl, fieldState, fieldConfig } = useFormField(context && context.props!);

  const onPress = React.useCallback(() => {
    formControl.setValue(props.value);
    if (props.onPress) props.onPress(props.value);
  }, [formControl, props]);

  const disabled = fieldConfig.disabled || props.disabled || false;

  return (
    <Radio value={props.value} disabled={disabled} id={`${formControl.uid}-${props.value}`} onChange={onPress}>
      {props.children}
    </Radio>
  );
}

export class FormRadio<V = any> extends React.PureComponent<FormRadioProps<V>> {
  public render() {
    return <FormRadioComponent {...this.props} />;
  }
}

export class FormRadioGroup<V = any> extends React.PureComponent<FormRadioGroupProps<V>> {
  public render() {
    return <FormRadioGroupComponent {...this.props} />;
  }
}
