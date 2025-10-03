import { Modal, ModalAction, ModalContent, ModalFooter, ModalHeader } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { useWillUnmount } from '@core/utils/hooks/react';
import { tapError } from '@core/utils/rxjs/operators';
import { css } from '@emotion/react';
import React, { Fragment, memo, ReactNode, useCallback, useState } from 'react';
import { isObservable, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { t } from 'ttag';

const styles = {
  content: css`
    padding: 25px 35px !important;
    font-size: 18px;

    p {
      margin-bottom: 18px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  `,

  footerContent: css`
    flex-direction: row;
    justify-content: flex-start !important;
    font-size: 18px;
    padding: 25px 35px 30px !important;
  `,

  danger: css`
    // background-color: var(--color-dark-700);
  `,
};

export type AlertType = 'info' | 'danger';

export interface AlertProps {
  type?: AlertType;
  title: ReactNode;
  content: ReactNode;
  footerContent?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  closeText?: string;
  extraActions?: ReactNode;
  showConfirm?: boolean;
  onConfirm?(): void | Observable<any>;
  onCancel?(): void;
  onClose?(): void;
}

export const AlertModal = memo((props: AlertProps) => {
  const modal = useModalInstance();

  const { onConfirm, onCancel, onClose } = props;

  const showConfirm = !!props.showConfirm || !!onConfirm;

  useWillUnmount(() => {
    if (onClose) setTimeout(onClose);
  });

  const [loading, setLoading] = useState(false);

  const handleConfirm = useCallback(() => {
    if (!onConfirm) return;

    const result = onConfirm();

    if (isObservable(result)) {
      setLoading(true);

      result
        .pipe(
          tap(() => modal.close()),
          tapError(() => setLoading(false)),
        )
        .subscribe();
    } else {
      modal.close();
    }
  }, [modal, onConfirm]);

  return (
    <Modal maxWidth="xs">
      <ModalHeader noBorder title={props.title} />

      <ModalContent customCss={[styles.content, props.type === 'danger' && styles.danger]}>{props.content}</ModalContent>

      {props.footerContent && (
        <ModalFooter noBorder customCss={styles.footerContent}>
          {props.footerContent}
        </ModalFooter>
      )}

      <ModalFooter noBorder>
        {props.extraActions && <Fragment>{props.extraActions}</Fragment>}
        {showConfirm ? (
          <Fragment>
            <ModalAction color={'default'} text={props.cancelText || props.closeText || t`Cancel`} disabled={loading} onClick={onCancel} />
            <ModalAction danger={props.type === 'danger'} text={props.confirmText} loading={loading} autoClose={!onConfirm} onClick={handleConfirm} />
          </Fragment>
        ) : (
          <ModalAction text={props.closeText || props.cancelText || t`Close`} />
        )}
      </ModalFooter>
    </Modal>
  );
});
