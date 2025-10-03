// Import Dependencies
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Local Imports

import { AccordionItemContextProvider } from './AccordionItem.context';
import { useAccordionContext } from './Accordion.context';
import { Box } from '@mui/material';

interface AccordionItemProps {
  children: React.ReactNode | ((props: { open: boolean }) => React.ReactNode);
  className?: string | ((props: { open: boolean }) => string);
  value: string;
}

const AccordionItem = forwardRef<any, AccordionItemProps>((props, ref) => {
  const { children, className, value, ...rest } = props;
  const ctx = useAccordionContext();
  const isActive = ctx.isItemActive(value);

  return (
    <AccordionItemContextProvider value={{ value }}>
      <Box
        ref={ref}
        data-state={isActive ? 'open' : null}
        className={typeof className === 'function' ? className({ open: isActive }) : className}
        {...rest}
      >
        {typeof children === 'function' ? children({ open: isActive }) : children}
      </Box>
    </AccordionItemContextProvider>
  );
});

export { AccordionItem };
