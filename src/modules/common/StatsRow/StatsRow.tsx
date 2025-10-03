import { StatResponse } from '@business/entities/common';
import { Card, Statistic } from 'antd';
import React, { memo } from 'react';
import { Col, Row } from 'reactstrap';

export interface StatsRowProps {
  items: StatResponse[];
}

export const StatsRow = memo((props: StatsRowProps) => {
  const { items } = props;
  if (items.length === 0) return null;

  return (
    <Row>
      {items.map((item, index) => (
        <Stat {...item} key={index} />
      ))}
    </Row>
  );
});

const Stat = memo((props: StatResponse) => {
  const { title, value, percision, prefix, suffix } = props;
  return (
    <Col>
      <Card bordered={false} size="small">
        <Statistic title={title} value={value} precision={percision} suffix={suffix} prefix={prefix} />
      </Card>
    </Col>
  );
});
