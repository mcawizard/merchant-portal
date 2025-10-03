import { Select } from 'antd';
import React, { memo } from 'react';

export interface AddonSelectorProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  items: T[];
  labelAccessor?: (item: T) => string;
}

export function AddonSelector<T extends string>(props: AddonSelectorProps<T>) {
  const { value, onChange, items, labelAccessor } = props;
  return (
    <Select
      value={value}
      labelRender={value => <div>{labelAccessor ? labelAccessor(value.value as any) : value.label}</div>}
      style={{ width: 60 }}
      onSelect={value => onChange(value as any)}
    >
      {items.map((item, index) => (
        <Select.Option key={index} value={item}>
          {labelAccessor ? labelAccessor(item) : item}
        </Select.Option>
      ))}
    </Select>
  );
}
