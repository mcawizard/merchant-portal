// Import Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Local Imports
import { AccordionContextProvider } from './Accordion.context';
import { useId } from '@modules/theme/hooks/useId';
import { useUncontrolled } from '@modules/theme/hooks/useUncontrolled';

interface AccordionProviderProps {
  children: React.ReactNode;
  multiple?: boolean;
  value?: any;
  defaultValue?: any;
  onChange?: () => void;
  id?: string;
  transitionDuration?: number;
  loop?: boolean;
}

export interface AccordionContextValue {
  isItemActive: (itemValue: any) => boolean;
  onChange: (itemValue: any) => void;
  buttonId: string;
  panelId: string;
  transitionDuration?: number;
  loop?: boolean;
}

const AccordionProvider = (props: AccordionProviderProps) => {
  const { children, multiple, value, defaultValue, onChange, id, transitionDuration, loop } = props;

  const uid = useId(id, 'accordion');

  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange,
  });

  const isItemActive = itemValue => (Array.isArray(_value) ? _value.includes(itemValue) : itemValue === _value);

  const handleItemChange = itemValue => {
    const nextValue = Array.isArray(_value)
      ? _value.includes(itemValue)
        ? _value.filter(selectedValue => selectedValue !== itemValue)
        : [..._value, itemValue]
      : itemValue === _value
        ? null
        : itemValue;

    handleChange(nextValue);
  };

  return (
    <AccordionContextProvider
      value={{
        isItemActive,
        onChange: handleItemChange,
        buttonId: `${uid}-control`,
        panelId: `${uid}-panel`,
        transitionDuration,
        loop,
      }}
    >
      {children}
    </AccordionContextProvider>
  );
};

export { AccordionProvider };
