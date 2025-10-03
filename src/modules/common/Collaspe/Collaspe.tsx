import { Card } from 'antd';
import React, { memo, PropsWithChildren, ReactNode, useEffect } from 'react';
import { CardTitle, Collapse as ReactCollaspe } from 'reactstrap';

export interface CollaspeProps {
  title: ReactNode | string;
  onToggle?: (open: boolean) => void;
  card?: boolean;
  initialOpen?: boolean;
}

export const Collaspe = memo((props: PropsWithChildren<CollaspeProps>) => {
  const { title, onToggle, card, initialOpen = false } = props;
  const [isOpen, setOpen] = React.useState(initialOpen);
  const Container = card ? Card : 'div';

  useEffect(() => {
    onToggle?.(isOpen);
  }, [isOpen]);

  return (
    <Container>
      <CardTitle className="card-title_items">
        <div className="font-size-14" style={{ cursor: 'pointer' }} onClick={() => setOpen(!isOpen)}>
          {title}
        </div>
        <div className="action">
          <a className="ml-2" onClick={() => setOpen(!isOpen)}>
            <i className={`bx bx-chevron-${isOpen ? 'up' : 'down'} font-size-22`}></i>
          </a>
        </div>
      </CardTitle>
      <ReactCollaspe isOpen={isOpen}>
        <div className="pt-4">{props.children}</div>
      </ReactCollaspe>
    </Container>
  );
});
