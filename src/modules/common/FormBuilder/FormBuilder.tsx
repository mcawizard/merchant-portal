import React, { memo, useState, useEffect, useImperativeHandle, RefObject, useCallback } from 'react';
import { ControlsPanel } from './ControlsPanel';
import { FormContent } from '././FormContent';
import { PropertiesPanel } from './PropertiesPanel';
import './index.scss';
import { FormBuilderContext } from './FormBuilderContext';
import { FCData, FCType, FCFormDataType, getFormData } from './FormFields/types';
import { R } from '@core/utils/r';

export interface FormBuilderHandle {
  fields: () => FCFormDataType[];
}

export interface FormBuilderProps {
  types?: FCType[];
  handlesRef?: RefObject<FormBuilderHandle>;
  fields?: FCFormDataType[];
  onFields?: (fields: FCFormDataType[]) => void;
}

export const FormBuilder = memo((props: FormBuilderProps) => {
  const { fields, onFields } = props;
  const [items, setItems] = useState<FCData<any>[]>(
    (fields || []).map(f => {
      const data = getFormData(f.type);
      data.form.patchValue(f);
      return data;
    }),
  );
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [formValues, setFormValues] = useState<Record<number, any>>({});

  useImperativeHandle(
    props.handlesRef,
    () => ({
      fields: () => {
        return items.map(item => item.form.value);
      },
    }),
    [items],
  );

  useEffect(() => {
    onFields && onFields(items.map((item, index) => R.get(formValues, index) || item.form.value));
  }, [onFields, formValues, items]);

  const onFormChange = useCallback((index: number, value: any) => {
    setFormValues(values => ({ ...values, [index]: value }));
  }, []);

  return (
    <div className="d-flex">
      <FormBuilderContext.Provider value={{ items, setItems, selectedIndex, setSelectedIndex }}>
        <ControlsPanel types={props.types} />
        <FormContent onChange={onFormChange} />
        <PropertiesPanel />
      </FormBuilderContext.Provider>
    </div>
  );
});
