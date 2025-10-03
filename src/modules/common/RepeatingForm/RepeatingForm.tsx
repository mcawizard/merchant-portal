import { FormArray, FormGroup } from '@core/utils/form';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import React, { memo, useCallback } from 'react';
import { Sortable } from '../Sortable';
import { R } from '@core/utils/r';
import { DraggableSyntheticListeners } from '@dnd-kit/core';

export interface RepeatingFormItem<T> {
  form: T;
  index: number;
  listeners?: DraggableSyntheticListeners;
  key: string;

  repeatingControlsProps: {
    isLast: boolean;
    isFirst: boolean;
    total: number;
    currentIndex: number;
    onAdd: () => void;
    onRemove: () => void;
    mustHaveOne?: boolean;
  };
}

export interface RepeatingFormProps {
  form: FormArray<FormGroup<any>>;
  render: (item: RepeatingFormItem<any>, index: number) => React.ReactElement;
  sortable?: boolean;
  getKey?: (item: any) => string;
  onSort?: (items: any[]) => void;
  mustHaveOne?: boolean;
}

export const RepeatingForm = memo((props: RepeatingFormProps) => {
  const { form, render, sortable, getKey, onSort, mustHaveOne = false } = props;
  const items = useNonNilObservable(form.items$);
  const itemsValue = useNonNilObservable(form.value$);

  const onAdd = useCallback(() => form.push(), [form]);
  const onRemove = useCallback((index: number) => form.removeAt(index), [form]);

  if (sortable) {
    return (
      <Sortable
        handle
        onSort={items => {
          if (items.length > 0 && R.keys(items[0]).includes('menuOrder')) {
            items = items.map((item, index) => ({ ...item, menuOrder: index }));
          }
          form.setValue(items);
          onSort?.(items);
        }}
        activationConstraint={{
          delay: 100,
          tolerance: 5,
        }}
        direction="grid"
        items={itemsValue}
        getId={(item, index) => (getKey ? getKey(item) : `${index}-${R.get(items, index)?.uid || R.random(1000)}`)}
        // useDragOverlay
        renderItem={(value, index, listeners) => {
          return render(
            {
              form: items[index],
              index,
              listeners,
              repeatingControlsProps: {
                isLast: index === items.length - 1,
                isFirst: index === 0,
                onAdd,
                onRemove: () => onRemove(index),
                total: items.length,
                currentIndex: index,
                mustHaveOne,
              },
              key: getKey ? getKey(value) : `${index}-${R.get(items, index)?.uid || R.random(1000)}`,
            },
            index,
          );
        }}
      ></Sortable>
    );
  }

  return (
    <div>
      {items.map((control, index) =>
        render(
          {
            form: control,
            index,
            repeatingControlsProps: {
              isLast: index === items.length - 1,
              isFirst: index === 0,
              total: items.length,
              onAdd,
              onRemove: () => onRemove(index),
              currentIndex: index,
              mustHaveOne,
            },
            key: getKey ? getKey(control) : `${index}-${R.get(items, index)?.uid || R.random(1000)}`,
          },
          index,
        ),
      )}
    </div>
  );
});
