// Import Dependencies
import React from 'react';
import { forwardRef } from 'react';

// Local imports
import { AccordionProvider } from './AccordionProvider';
import { Box } from '@mui/material';

export interface AccordionProps {
  id?: string;
  children?: React.ReactNode;
  multiple?: boolean;
  value?: any;
  defaultValue?: any;
  onChange?: (value: any) => void;
  transitionDuration?: number;
  loop?: boolean;
  className?: string;
}

const Accordion = forwardRef<any, AccordionProps>((props, ref) => {
  const { id, children, multiple = false, value, defaultValue, onChange, transitionDuration, loop, ...rest } = props;

  return (
    <AccordionProvider
      id={id}
      multiple={multiple}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      transitionDuration={transitionDuration}
      loop={loop}
    >
      <Box {...rest} data-accordion ref={ref}>
        {children}
      </Box>
    </AccordionProvider>
  );
});

export { Accordion };
