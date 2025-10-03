import React, { memo, Fragment } from 'react';
import { motion } from 'framer-motion';
import { R } from '@core/utils/r';
export interface AnimatedItemsProps {
  children: React.ReactElement[] | React.ReactElement;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  delay?: number;
}

export const AnimatedItems = memo((props: AnimatedItemsProps) => {
  const { direction = 'right', distance = 50, delay = 0.1, children } = props;
  const directionMap = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance },
  };

  return (
    <Fragment>
      {(R.isArray(children) ? children : [children]).map((child, index) => (
        <motion.div
          key={index}
          initial={{ ...directionMap[direction], opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{ ...directionMap[direction], opacity: 0 }}
          transition={{ delay: index * delay }}
        >
          {child}
        </motion.div>
      ))}
    </Fragment>
  );
});
