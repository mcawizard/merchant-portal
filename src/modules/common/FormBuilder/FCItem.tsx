import React, { useState } from 'react';

import { Collapse, Input, Label } from 'reactstrap';
import { FCData } from './FormFields/types';
import { SortableElement } from 'react-sortable-hoc';

export interface FCItemControlProps {
  onLabel?(label: string): void;
}

export interface FCItemProp {
  item: FCData<any>;
  onRemove(): void;
  isOpen?: boolean;
}

function FCItemInner(props: FCItemProp) {
  const { item } = props;

  const Component = item.component as any;
  const [isOpen, setOpen] = useState(props.isOpen || false);
  const [label, setLabel] = useState('Untitled');

  return (
    <div className="my-2 d-flex flex-column" style={{ border: 1, borderStyle: 'dotted', borderColor: ' #e3e3e3', borderRadius: 10, padding: 10 }}>
      <div className="d-flex flex-row">
        <Label style={{ flex: 1 }}>{label}</Label>
        <div>{item.title}</div>
      </div>
      <Input
        className="form-control"
        readOnly
        style={{ backgroundColor: '#e9ecef', opacity: 1, cursor: 'pointer' }}
        onClick={() => setOpen(!isOpen)}
      />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <a className="py-2 text-danger" onClick={props.onRemove}>
          <i className="fa fa-trash"></i>
        </a>
      </div>
      <Collapse isOpen={isOpen}>
        <div style={{ border: 1, borderStyle: 'dotted', borderColor: ' #e3e3e3', borderRadius: 10 }}>
          <Component {...props} form={item.form} onLabel={setLabel} />
        </div>
      </Collapse>
    </div>
  );
}

export const FCItem = SortableElement(FCItemInner);
