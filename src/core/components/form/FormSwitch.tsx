import { FieldProps, FormControl, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { CSSProperties, memo, useMemo, ReactNode } from 'react';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { Form, Switch, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

export type FormSwitchProps = FieldProps<FormControl<boolean>> & {
  onChange?(value: boolean): void;
  tooltip?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  noBottomPadding?: boolean;
};

export const FormSwitch = memo((props: FormSwitchProps) => {
  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldValue = fieldState.value || false;

  const fieldReadonly = fieldConfig.readonly || false;
  const fieldDisabled = fieldConfig.disabled || props.disabled;
  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  return (
    <React.Fragment>
      <Form layout="horizontal" preserve={false} colon={false} labelAlign="right">
        <Form.Item
          valuePropName="checked"
          tooltip={props.tooltip}
          validateStatus={fieldError ? 'error' : ''}
          style={{ marginBottom: props.noBottomPadding ? 0 : 'initial' }}
          help={fieldError}
          required={fieldConfig.required || false}
          labelCol={{ style: { order: 1 } }}
        >
          <Switch
            id={formControl.uid}
            checked={fieldValue}
            disabled={fieldDisabled}
            onChange={value => {
              formControl.setValue(value);
              props.onChange && props.onChange(value);
            }}
          ></Switch>
          <span className="ml-2">{fieldConfig.label}</span>
          {!!props.tooltip && (
            <Tooltip title={props.tooltip}>
              <span className="text-muted ml-2 hover-pointer">
                <QuestionCircleOutlined />
              </span>
            </Tooltip>
          )}
          {props.children}
        </Form.Item>
      </Form>
    </React.Fragment>
  );
});
