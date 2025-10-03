import React, { memo, ReactNode } from 'react';
import { SortableContainer } from 'react-sortable-hoc';

export interface SortableListProps {
  children?: ReactNode;
  wrap?: boolean;
}

const SortableListInner = memo((props: SortableListProps) => {
  const { children } = props;
  return <div>{children}</div>;
});

export const SortableList = SortableContainer(SortableListInner);
