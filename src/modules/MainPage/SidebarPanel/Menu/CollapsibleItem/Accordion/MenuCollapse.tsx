// Import Dependencies
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { useCollapse } from '@modules/theme/hooks/useCollapse';

// ----------------------------------------------------------------------

interface MenuCollapseProps {
  children: React.ReactNode | ((props: { open: boolean }) => React.ReactNode);
  in: boolean;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  style?: React.CSSProperties;
  onTransitionEnd?: () => void;
  min?: string;
}

const MenuCollapse = forwardRef<any, MenuCollapseProps>((props, ref) => {
  const { children, in: opened, transitionDuration, transitionTimingFunction, min, style, onTransitionEnd, ...rest } = props;

  const getCollapseProps = useCollapse({
    opened,
    transitionDuration,
    transitionTimingFunction,
    min,
    onTransitionEnd,
  });

  if (transitionDuration === 0) {
    return opened ? <Box {...rest}>{children}</Box> : null;
  }

  return <Box {...getCollapseProps({ style, ref, ...rest })}>{children}</Box>;
});

export { MenuCollapse };
