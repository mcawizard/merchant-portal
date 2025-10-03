import React, { forwardRef } from 'react';

import { useAccordionContext } from './Accordion.context';
import { useAccordionItemContext } from './AccordionItem.context';
import { MenuCollapse } from './MenuCollapse';

interface AccordionPanelProps {
  children: React.ReactNode | ((props: { open: boolean }) => React.ReactNode);
  className?: string | ((props: { open: boolean }) => string);
  collapseProps?: object;
}

const AccordionPanel = forwardRef<any, AccordionPanelProps>((props, ref) => {
  const { children, className, collapseProps, ...rest } = props;
  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();

  const isActive = ctx.isItemActive(value);

  return (
    <MenuCollapse {...collapseProps} ref={ref} in={ctx.isItemActive(value)} transitionDuration={ctx.transitionDuration}>
      <div className={typeof className === 'function' ? className({ open: isActive }) : className} {...rest}>
        {typeof children === 'function' ? children({ open: isActive }) : children}
      </div>
    </MenuCollapse>
  );
});

export { AccordionPanel };
