import React, { memo } from 'react';
import { Button } from '@core/components/Button';
import { HTMLErrorBoundary } from '../HTMLErrorBoundary';

export interface RepeatingControlsProps {
  isLast: boolean;
  onAdd: () => void;
  onRemove: () => void;
  onDuplicate?: () => void;
  style?: React.CSSProperties;
  duplicate?: boolean;
}

export const RepeatingControls = memo((props: RepeatingControlsProps) => {
  const { isLast, onAdd, onRemove, style, duplicate, onDuplicate } = props;
  return (
    <HTMLErrorBoundary>
      <div className="ml-2 align-items-center d-flex" style={{ maxWidth: duplicate ? 155 : 100, ...style }}>
        <Button type="button" onClick={() => onRemove()} color="danger" className="inner" style={{ flex: 1, marginRight: 2 }}>
          <i className="bx bx-trash"></i>
        </Button>
        {duplicate && (
          <Button type="button" onClick={onDuplicate} color="primary" className="inner" style={{ flex: 1, marginRight: 2 }}>
            <i className="bx bx-copy"></i>
          </Button>
        )}
        {isLast && (
          <Button type="button" onClick={() => onAdd()} className="inner" style={{ flex: 1, marginLeft: 2 }}>
            <i className="bx bx-plus"></i>
          </Button>
        )}
      </div>
    </HTMLErrorBoundary>
  );
});
