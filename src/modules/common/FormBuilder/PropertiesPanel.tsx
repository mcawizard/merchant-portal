import React, { memo, useMemo } from 'react';
import { useFormBuilderContext } from './FormBuilderContext';
import { R } from '@core/utils/r';
import { CardTitle } from 'reactstrap';

export const PropertiesPanel = memo(() => {
  const { items, selectedIndex } = useFormBuilderContext();
  const selectedItem = useMemo(() => R.get(items, selectedIndex), [items, selectedIndex]);
  if (!selectedItem) return <div style={{ width: 300 }}></div>;

  const Component = selectedItem.component;
  return (
    <div style={{ width: 300 }}>
      <CardTitle>Configuration</CardTitle>
      <hr />
      <Component form={selectedItem.form} onLabel={() => R.noop()} />
    </div>
  );
});
