import React, { act, memo, useEffect, useMemo, useRef, useState } from 'react';
import {
  Active,
  Announcements,
  closestCenter,
  CollisionDetection,
  defaultDropAnimationSideEffects,
  DndContext,
  DraggableSyntheticListeners,
  DragOverlay,
  DropAnimation,
  KeyboardCoordinateGetter,
  KeyboardSensor,
  MeasuringConfiguration,
  Modifiers,
  MouseSensor,
  PointerActivationConstraint,
  PointerSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  AnimateLayoutChanges,
  arrayMove,
  horizontalListSortingStrategy,
  NewIndexGetter,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  SortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Item } from './Item';
import { createPortal } from 'react-dom';
import { Wrapper } from './Weapper';
import { R } from '@core/utils/r';
import styles from './Grid.module.css';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.5',
      },
    },
  }),
};

export interface SortableProps<T extends any> {
  items: T[];
  getId(item: T, index: number): UniqueIdentifier;
  renderItem(item: T, index: number, listeners?: DraggableSyntheticListeners): React.ReactElement;
  handle?: boolean;
  onSort(sortedItems: T[], oldIndex: number, nextIndex: number): void;
  direction?: 'horizontal' | 'vertical' | 'grid';
  isDisabled?(item: T): boolean;
  children?: React.ReactNode;

  activationConstraint?: PointerActivationConstraint;
  animateLayoutChanges?: AnimateLayoutChanges;
  adjustScale?: boolean;
  collisionDetection?: CollisionDetection;
  coordinateGetter?: KeyboardCoordinateGetter;
  dropAnimation?: DropAnimation | null;
  getNewIndex?: NewIndexGetter;
  measuring?: MeasuringConfiguration;
  modifiers?: Modifiers;
  removable?: boolean;
  reorderItems?: typeof arrayMove;
  onDragStart?(): void;
  onDragEnd?(): void;
  style?: React.CSSProperties;
  useDragOverlay?: boolean;
  getItemStyles?(args: {
    id: UniqueIdentifier;
    index: number;
    isSorting: boolean;
    isDragOverlay: boolean;
    overIndex: number;
    isDragging: boolean;
  }): React.CSSProperties;
  wrapperStyle?(args: { active: Pick<Active, 'id'> | null; index: number; isDragging: boolean; id: UniqueIdentifier }): React.CSSProperties;
}

export function Sortable<T>(props: SortableProps<T>) {
  const {
    items,
    getId,
    direction = 'vertical',
    handle = false,
    onSort,

    activationConstraint,
    coordinateGetter = sortableKeyboardCoordinates,
    collisionDetection = closestCenter,
    measuring,
    modifiers,
    isDisabled = () => false,
    animateLayoutChanges,
    renderItem,
    reorderItems = arrayMove,
    dropAnimation = dropAnimationConfig,
    useDragOverlay,
    getNewIndex,
    getItemStyles = () => ({}),
    adjustScale = false,
    wrapperStyle = () => ({}),
    children,
  } = props;

  const itemIds = useMemo(() => items.map((item, index) => getId(item, index)), [items]);

  const strategy = useMemo(() => {
    switch (direction) {
      case 'horizontal':
        return horizontalListSortingStrategy;
      case 'vertical':
        return verticalListSortingStrategy;
      case 'grid':
        return rectSortingStrategy;
      default:
        return verticalListSortingStrategy;
    }
  }, [direction]);

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint,
    }),
    useSensor(TouchSensor, {
      activationConstraint,
    }),
    useSensor(KeyboardSensor, {
      scrollBehavior: 'Cypress' in window ? 'auto' : undefined,
      coordinateGetter,
    }),
  );
  const getIndex = (id: UniqueIdentifier) => itemIds.indexOf(id);
  const activeIndex = activeId ? getIndex(activeId) : -1;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragStart={({ active }) => {
        if (!active) {
          return;
        }
        props.onDragStart?.();

        setActiveId(active.id);
      }}
      onDragEnd={({ over }) => {
        setActiveId(null);

        props.onDragEnd?.();
        if (over) {
          const overIndex = getIndex(over.id);
          if (activeIndex !== overIndex) {
            const sortedItems = reorderItems(items, activeIndex, overIndex);
            onSort(sortedItems, activeIndex, overIndex);
          }
        }
      }}
      onDragCancel={() => setActiveId(null)}
      measuring={measuring}
      modifiers={modifiers}
    >
      <SortableContext items={itemIds} strategy={strategy}>
        {items.map((item, index) => {
          const id = getId(item, index);
          return (
            <SortableItem
              key={id}
              id={id}
              handle={handle}
              index={index}
              style={getItemStyles}
              wrapperStyle={wrapperStyle}
              disabled={isDisabled(item)}
              renderItem={listeners => renderItem(item, index, listeners)}
              animateLayoutChanges={animateLayoutChanges}
              useDragOverlay={useDragOverlay}
              getNewIndex={getNewIndex}
            />
          );
        })}
      </SortableContext>
      {children}
      {useDragOverlay
        ? createPortal(
            <DragOverlay adjustScale={adjustScale} dropAnimation={dropAnimation}>
              {activeId ? (
                <Item
                  handle={handle}
                  wrapperStyle={wrapperStyle({
                    active: { id: activeId },
                    index: activeIndex,
                    isDragging: true,
                    id: activeId,
                  })}
                  style={getItemStyles({
                    id: activeId,
                    index: activeIndex,
                    isSorting: activeId !== null,
                    isDragging: true,
                    overIndex: -1,
                    isDragOverlay: true,
                  })}
                  dragOverlay
                >
                  {renderItem(
                    items.find((item, index) => getId(item, index) === activeId)!,
                    items.findIndex((item, index) => getId(item, index) === activeId),
                  )}
                </Item>
              ) : null}
            </DragOverlay>,
            document.body,
          )
        : null}
    </DndContext>
  );
}

interface SortableItemProps {
  animateLayoutChanges?: AnimateLayoutChanges;
  disabled?: boolean;
  getNewIndex?: NewIndexGetter;
  id: UniqueIdentifier;
  index: number;
  handle: boolean;
  useDragOverlay?: boolean;
  style(values: any): React.CSSProperties;
  renderItem(listeners?: DraggableSyntheticListeners): React.ReactElement;
  wrapperStyle: SortableProps<any>['wrapperStyle'];
}

export function SortableItem({
  disabled,
  animateLayoutChanges,
  getNewIndex,
  handle,
  id,
  index,
  style,
  renderItem,
  useDragOverlay,
  wrapperStyle,
}: SortableItemProps) {
  const { active, attributes, isDragging, isSorting, listeners, overIndex, setNodeRef, setActivatorNodeRef, transform, transition } = useSortable({
    id,
    animateLayoutChanges,
    disabled,
    getNewIndex,
  });

  return (
    <Item
      ref={setNodeRef}
      key={id}
      disabled={disabled}
      dragging={isDragging}
      sorting={isSorting}
      handle={handle}
      handleProps={
        handle
          ? {
              ref: setActivatorNodeRef,
            }
          : undefined
      }
      index={index}
      style={style({
        index,
        id,
        isDragging,
        isSorting,
        overIndex,
      })}
      transform={transform}
      transition={transition}
      wrapperStyle={wrapperStyle?.({ index, isDragging, active, id })}
      listeners={listeners}
      data-index={index}
      data-id={id}
      dragOverlay={!useDragOverlay && isDragging}
      {...attributes}
    >
      {renderItem(listeners)}
    </Item>
  );
}
export interface GridContinerProps {
  children: React.ReactNode;
  columns: number;
}

export function GridContainer({ children, columns }: GridContinerProps) {
  return (
    <div
      className={styles.gridContainer}
      style={
        {
          '--col-count': columns,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
