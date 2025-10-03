import React, { memo, useCallback } from 'react';
import { AllFC, FCType, getFormData } from './FormFields/types';
import { Col } from 'reactstrap';
import { R } from '@core/utils/r';
import { useFormBuilderContext } from './FormBuilderContext';

interface FCAnchorProps {
  type: FCType;
  onAdd(type: FCType): void;
}
const FCAnchor = memo((props: FCAnchorProps) => {
  const data = getFormData(props.type);

  return (
    <Col lg={12} onClick={() => props.onAdd(props.type)} className="fc-control-item">
      <span style={{ flex: 1, display: 'flex' }}>{data.title}</span>
      <i className="fa fa-arrow-right"></i>
    </Col>
  );
});

export interface ControlsPanelProps {
  types?: FCType[];
}

export const ControlsPanel = memo((props: ControlsPanelProps) => {
  const { types } = props;
  const { setItems } = useFormBuilderContext();

  const onAdd = useCallback(
    (type: FCType) => {
      setItems(items => [...items, getFormData(type)]);
    },
    [setItems],
  );

  return (
    <div style={{ minWidth: 250 }}>
      {(types || AllFC).map((type, index) => (
        <FCAnchor type={type} key={index} onAdd={onAdd} />
      ))}
    </div>
  );
});
