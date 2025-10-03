// Import Dependencies
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Local Imports

import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';

interface AccordionButtonProps {
  children: React.ReactNode | ((props: { open: boolean }) => React.ReactNode);
  className?: string | ((props: { open: boolean }) => string);
  disabled?: boolean;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  component?: React.ElementType;
  onClick?: (event: React.MouseEvent) => void;
}

const AccordionButton = forwardRef<any, AccordionButtonProps>((props, ref) => {
  const { children, disabled, onKeyDown, component, onClick, className, ...rest } = props;

  const Component = component || 'button';
  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();

  const isActive = ctx.isItemActive(value);

  return (
    <Component
      {...rest}
      ref={ref}
      data-accordion-control
      disabled={disabled}
      className={typeof className === 'function' ? className({ open: isActive }) : className}
      onClick={event => {
        onClick?.(event);
        ctx.onChange(value);
      }}
      type="button"
      aria-expanded={isActive}
      aria-controls={`${ctx.panelId}-${value}`}
      id={`${ctx.buttonId}-${value}`}
      // onKeyDown={createScopedKeydownHandler({
      //   siblingSelector: '[data-accordion-control]',
      //   parentSelector: '[data-accordion]',
      //   activateOnFocus: false,
      //   loop: ctx.loop,
      //   orientation: 'vertical',
      //   onKeyDown,
      // })}
    >
      {typeof children === 'function' ? children({ open: isActive }) : children}
    </Component>
  );
});

export { AccordionButton };
