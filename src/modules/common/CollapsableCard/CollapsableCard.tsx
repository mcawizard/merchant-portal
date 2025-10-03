import { Card } from 'antd';
import React, { memo } from 'react';
import { Collapse } from 'reactstrap';

export interface CollapsableCardProps extends React.ComponentProps<typeof Card> {
  initialOpen?: boolean;
}

export const CollapsableCard = memo((props: CollapsableCardProps) => {
  const { initialOpen = false, children, ...rest } = props;
  const [isOpen, setOpen] = React.useState(initialOpen);

  return (
    <Card
      {...rest}
      styles={{ body: !isOpen ? { display: 'none' } : {} }}
      extra={
        <div className="action">
          <a className="ml-2" onClick={() => setOpen(!isOpen)}>
            <i className={`bx bx-chevron-${isOpen ? 'up' : 'down'} font-size-22`}></i>
          </a>
        </div>
      }
    >
      <Collapse isOpen={isOpen}>{children}</Collapse>
    </Card>
  );
});
