import { Alert } from '@core/components/Alert';
import React, { Fragment, ReactNode } from 'react';
import { Subject } from 'rxjs';
import { t } from 'ttag';

export function showDeleteConfirmation(title: string, message: string, options?: { btnLabel?: string; onDeleted?(): void }) {
  const result$ = new Subject<void>();

  Alert.danger({
    title,
    content: (
      <Fragment>
        <p dangerouslySetInnerHTML={{ __html: message }}></p>
      </Fragment>
    ),
    confirmText: (options && options.btnLabel) || t`Delete`,
    onConfirm: () => result$.next(),
    onClose: () => result$.complete(),
  });

  return result$;
}

export function showConfirmation(title: string, message: string, options?: { btnYesLabel?: string; btnNoLabel?: string }) {
  const result$ = new Subject<void>();

  Alert.show({
    title,
    content: (
      <Fragment>
        <p dangerouslySetInnerHTML={{ __html: message }}></p>
      </Fragment>
    ),
    confirmText: (options && options.btnYesLabel) || t`Yes`,
    cancelText: (options && options.btnNoLabel) || t`No`,
    onConfirm: () => result$.next(),
    onClose: () => result$.complete(),
  });

  return result$;
}

export function showYesNo(title: string, message: string, options?: { btnYesLabel?: string; btnNoLabel?: string }) {
  const result$ = new Subject<boolean>();

  Alert.show({
    title,
    content: (
      <Fragment>
        <p dangerouslySetInnerHTML={{ __html: message }}></p>
      </Fragment>
    ),
    confirmText: (options && options.btnYesLabel) || t`Yes`,
    cancelText: (options && options.btnNoLabel) || t`No`,
    onConfirm: () => result$.next(true),
    onCancel: () => result$.next(false),
    onClose: () => result$.complete(),
  });

  return result$;
}

export function showBooleanAlert(title: string, message: string, cancelText?: string, extraActions?: ReactNode) {
  const result$ = new Subject<boolean>();

  Alert.show({
    title,
    content: (
      <Fragment>
        <p dangerouslySetInnerHTML={{ __html: message }}></p>
      </Fragment>
    ),
    extraActions: extraActions,
    showConfirm: false,
    cancelText: cancelText,
    onCancel: () => result$.next(false),
    onClose: () => result$.complete(),
  });

  return result$;
}

export function showAlert(title: string, message: string, cancelText?: string, extraActions?: ReactNode) {
  const result$ = new Subject<void>();

  Alert.show({
    title,
    content: (
      <Fragment>
        <p dangerouslySetInnerHTML={{ __html: message }}></p>
      </Fragment>
    ),
    extraActions: extraActions,
    showConfirm: false,
    cancelText: cancelText,
    onClose: () => result$.next(),
  });

  return result$;
}
