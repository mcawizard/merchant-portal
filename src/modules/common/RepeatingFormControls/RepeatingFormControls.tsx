import { Button } from '@core/components/Button';
import React, { memo, useMemo } from 'react';

export interface RepeatingFormControlsProps {
  style?: React.CSSProperties;
  isLast: boolean;
  isFirst: boolean;
  currentIndex: number;
  total: number;
  onAdd: () => void;
  onRemove: () => void;
  mustHaveOne?: boolean;
}

export const RepeatingFormControls = memo((props: RepeatingFormControlsProps) => {
  const { isLast, onAdd, onRemove, style, isFirst, total, currentIndex, mustHaveOne = false } = props;
  const canDelete = useMemo(() => {
    if (mustHaveOne && total === 1) {
      return false;
    }
    return true;
  }, [mustHaveOne, total]);

  return (
    <div className="ml-2 align-items-center d-flex" style={{ maxWidth: 100, ...style }}>
      {canDelete && (
        <Button intent="primary" type="button" onClick={() => onRemove()} color="danger" className="inner" style={{ flex: 1, marginRight: 2 }}>
          <i className="bx bx-trash"></i>
        </Button>
      )}
      {isLast && (
        <Button intent="primary" color="green" type="button" onClick={() => onAdd()} className="inner" style={{ flex: 1, marginLeft: 2 }}>
          <i className="bx bx-plus"></i>
        </Button>
      )}
    </div>
  );
});
