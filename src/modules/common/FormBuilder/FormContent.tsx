import React, { memo, useCallback, useState, useMemo } from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import { useFormBuilderContext } from './FormBuilderContext';
import { FCData } from './FormFields/types';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { TableActions } from '../TableActions';
import { R } from '@core/utils/r';
import classNames from 'classnames';
import { Card, CardBody } from 'reactstrap';
import { SortableElement, SortEnd } from 'react-sortable-hoc';
import { SortableList } from '../SortableNew';
import { useLazyEffect } from '@core/utils/react';
import { getFieldJSX, getFieldControl } from '@modules/data/forms/FormViewModal/FormViewModal';
// import { getFieldControl, getFieldJSX } from '@modules/forms/FormViewModal/FormViewModal';

interface FormContentProps {
  onChange?(index: number, item: any): void;
}

export const FormContent = memo((props: FormContentProps) => {
  const { onChange } = props;
  const { items, setItems } = useFormBuilderContext();

  const onSortEnd = useCallback(
    (sort: SortEnd) => {
      const oldIndex = sort.oldIndex;
      const newIndex = sort.newIndex;
      const newItems = R.move(items, oldIndex, newIndex);
      setItems(newItems);
    },
    [items, setItems],
  );
  return (
    <div className="form-content noselect">
      <Card style={{ marginBottom: 0 }}>
        <CardBody>
          <div style={{ height: 'calc(100vh - 210px)' }}>
            <ScrollBar>
              <div style={{ marginRight: 20 }}>
                {/* <SortableList lockAxis="y" distance={2} helperClass="z5000" onSortEnd={onSortEnd}> */}
                {items.map((item, index) => (
                  <FCBaseItem key={`${item.form.uid}-${index}`} item={item} index={index} innerIndex={index} onChange={onChange} />
                ))}
                {/* </SortableList> */}
              </div>
            </ScrollBar>
          </div>
        </CardBody>
      </Card>
    </div>
  );
});

interface FCBaseItemProps {
  item: FCData<any>;
  index: number;
  innerIndex: number;
  onChange?(index: number, item: any): void;
}

const FCBaseItemInner = memo((props: FCBaseItemProps) => {
  const { item, innerIndex, onChange } = props;
  const { items, setItems, selectedIndex, setSelectedIndex } = useFormBuilderContext();
  const formValue = useNonNilObservable(item.form.value$ as any) as any;
  const [isHover, setHover] = useState(false);
  const selected = useMemo(() => selectedIndex == innerIndex, [selectedIndex, innerIndex]);
  const control = useMemo(() => getFieldControl(formValue), [formValue]);

  useLazyEffect(() => {
    onChange && onChange(innerIndex, formValue);
  }, [formValue, onChange]);

  const onRemove = useCallback(
    (index: number) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    },
    [items, setItems],
  );

  return (
    <div
      className={classNames('fc-item-base', { selected })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => (selected ? setSelectedIndex(-1) : setSelectedIndex(innerIndex))}
    >
      {isHover && <TableActions style={{ position: 'absolute', top: 0, right: 5, zIndex: 2000 }} onDelete={() => onRemove(innerIndex)} />}
      {getFieldJSX(formValue, innerIndex, control)}
    </div>
  );
});

const FCBaseItem = SortableElement(FCBaseItemInner);
