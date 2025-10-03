import React, { memo } from 'react';
import { Col, Row } from 'reactstrap';

export interface EqualWidthProps {
  children: React.ReactElement[];
}

export const EqualWidth = memo((props: EqualWidthProps) => {
  return (
    <Row>
      {props.children.map((child, index) => (
        <Col key={index}>{child}</Col>
      ))}
    </Row>
  );
});
