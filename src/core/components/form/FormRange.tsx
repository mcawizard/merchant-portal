import { FormControl } from '@core/utils/form';
import React from 'react';

export type FormRangeProps<C extends FormControl<any>> = {
  control: C;
  type?: 'range';
  min?: number;
  max?: number;
  step?: number;
  tooltip?: string;
  formItemClassName?: string;
  formStyle?: React.CSSProperties;
  disabled?: boolean;
  onChange?(value: number): void;
};

export function FormRange<C extends FormControl<any>>(props: FormRangeProps<C>) {
  const { control, min, max, step, tooltip, formItemClassName, formStyle, disabled, onChange } = props;

  return (
    <div className={formItemClassName} style={formStyle}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={control.value}
        disabled={disabled}
        onChange={e => {
          control.setValue(e.target.value as unknown as C['value']);
          onChange?.(e.target.value as unknown as number);
        }}
        className="d-flex flex-column justify-content-center"
      />
      {tooltip && <div>{tooltip}</div>}
    </div>
  );
}
