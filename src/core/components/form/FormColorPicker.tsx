import { FieldProps, FormControl, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { ChangeEvent, CSSProperties, Fragment, useCallback, useMemo } from 'react';
import { Col, ColorPicker, Divider, Form, Row, theme } from 'antd';
import { cyan, generate, green, presetPalettes, red } from '@ant-design/colors';
import type { ColorPickerProps } from 'antd';

export interface FormColorStringInputProps<C extends FormControl<any>> extends FieldProps<C> {
  tooltip?: string;
  container?: string;
  onColor?(color: string): void;
}

export type FormColorInputProps<C extends FormControl<any>> = FormColorStringInputProps<C>;

type Presets = Required<ColorPickerProps>['presets'][number];

const genPresets = (presets = presetPalettes) =>
  Object.entries(presets).map<Presets>(([label, colors]) => ({
    label,
    colors,
  }));

export function FormColorPicker<C extends FormControl<any>>(props: FormColorInputProps<C> & ColorPickerProps) {
  const { onColor, tooltip, ...rest } = props;
  const { token } = theme.useToken();

  const { formControl, fieldState, fieldConfig } = useFormField(props);

  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldValue = R.toString(fieldState.value) || '';
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const fieldReadonly = fieldConfig.readonly || false;
  const fieldDisabled = fieldConfig.disabled || false;

  const fieldPlaceholder = fieldConfig.placeholder || '';

  const presets = genPresets({
    primary: generate(token.colorPrimary),
    red,
    green,
    cyan,
  });

  const handleChange = useCallback(
    (color: string) => {
      formControl.setValue(color);
      onColor && onColor(color);
    },
    [formControl, onColor],
  );

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
        <ColorPicker
          allowClear
          disabled={fieldDisabled}
          value={fieldValue}
          styles={{ popupOverlayInner: { width: 480 } }}
          presets={presets}
          // panelRender={customPanelRender}
          onChange={value => {
            handleChange(value.toHexString());
            onColor && onColor(value.toHexString());
          }}
          showText={!R.isEmpty(fieldValue)}
        />
      </Form.Item>
    </Form>
  );
}
