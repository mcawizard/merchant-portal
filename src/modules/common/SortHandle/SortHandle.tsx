import { DraggableSyntheticListeners } from '@dnd-kit/core';
import React, { memo } from 'react';

export interface SortHandleProps {
  listeners?: DraggableSyntheticListeners;
  className?: string;
}

export const SortHandle = memo((props: SortHandleProps) => {
  const { listeners, className } = props;
  return (
    <div className={className ? className : 'p-2'} {...listeners}>
      <i className="fa-duotone fa-solid fa-grip-dots-vertical"></i>
    </div>
  );
});
