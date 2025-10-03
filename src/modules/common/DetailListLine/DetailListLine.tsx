import { List } from 'antd';
import classNames from 'classnames';
import React, { memo, ReactNode } from 'react';
import { WithTooltip } from '../WithTooltip';

export interface DetailListLineProps {
  label: string;
  value?: string | number | ReactNode;
  bold?: boolean;
  tooltip?: string | ReactNode;
}

export const DetailListLine = memo((props: DetailListLineProps) => {
  const { label, value, bold = false } = props;
  return (
    <List.Item>
      <div className="d-flex align-items-center justify-content-between flex-fill flex-wrap">
        <div className="text-muted">{label}</div>
        <WithTooltip tooltip={props.tooltip}>
          <div style={{ overflowWrap: 'anywhere' }} className={classNames({ 'font-weight-bold': bold })}>
            {value}
          </div>
        </WithTooltip>
      </div>
    </List.Item>
  );
});
