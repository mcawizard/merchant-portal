import React, { ReactNode, memo, useCallback } from 'react';
import { Button, ButtonProps } from '@core/components/Button';
import { useModalInstance } from '@core/components/ModalStack';

export interface ModalActionProps extends ButtonProps {
  spacer?: boolean;
  text?: ReactNode;
  autoClose?: boolean;
  onClick?(): void;
  visible?: boolean;
}

export const ModalAction = memo((props: ModalActionProps) => {
  const { spacer, text, autoClose, onClick, visible, ...rest } = props;

  const modal = useModalInstance();

  const handleClick = useCallback(() => {
    if (spacer) return;

    if (onClick) onClick();

    if (autoClose !== false) modal.close();
  }, [autoClose, modal, onClick, spacer]);

  if (visible === false) return null;
  if (spacer) return <div style={{ flex: 1 }} />;

  return (
    <Button {...rest} onClick={handleClick}>
      {text}
    </Button>
  );
});
