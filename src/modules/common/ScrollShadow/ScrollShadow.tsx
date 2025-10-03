// Import Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { useDataScrollOverflow } from '@modules/theme/hooks/useDataScrollOverflow';
import { mergeRefs } from '@modules/theme/hooks/useMergedRef';

export interface ScrollShadowProps {
  component?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  size?: number;
  offset?: number;
  isEnabled?: boolean;
  orientation?: 'vertical' | 'horizontal' | 'both';
  style?: React.CSSProperties;
}
export const ScrollShadow = forwardRef<any, ScrollShadowProps>((props, ref) => {
  const { component, children, className, size = 10, offset = 0, isEnabled = true, orientation = 'vertical', style, ...rest } = props;

  const Component = component || 'div';

  const { ref: domRef } = useDataScrollOverflow({
    offset,
    isEnabled,
    overflowCheck: orientation,
  });

  return (
    <Component
      {...{
        ref: mergeRefs(domRef, ref),
        'data-orientation': orientation,
        className: clsx(
          orientation === 'vertical' && 'overflow-y-auto',
          orientation === 'horizontal' && 'overflow-x-auto',
          orientation === 'both' && 'overflow-auto',
          className,
        ),
        style: {
          '--scroll-shadow-size': `${size / 4}rem`,
          ...style,
        },
        ...rest,
      }}
    >
      {children}
    </Component>
  );
});
