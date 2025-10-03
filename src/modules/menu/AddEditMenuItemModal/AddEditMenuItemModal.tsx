import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState, Validators } from '@core/utils/form';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction } from '@core/components/Modal';
import { tap, switchMap } from 'rxjs/operators';
import { FormContainer, FormInput, FormSelect } from '@core/components/form';
import { useModalInstance } from '@core/components/ModalStack';
import { AddEditMenuItemModalBloc } from './AddEditMenuItemModalBloc';
import { useBloc } from '@core/utils/bloc';
import { useObservable, useNonNilObservable } from '@core/utils/hooks/rxjs';
import { t } from 'ttag';
import { of } from 'rxjs';
import { useLoadingState } from '@core/utils/repository/loading_state';

function defineMenuItemForm() {
  return formGroup({
    title: formControl<string>({
      label: 'Title',
      required: true,
    }),
    link: formControl<string>({
      label: 'Link',
      required: true,
      validators: [Validators.url],
    }),
  });
}

export interface AddEditMenuItemModalProps {
  menuId: string;
  menuItemId?: string;
  onDone?: () => void;
}

export type IndustryFormData = FormDataType<typeof defineMenuItemForm>;

export const AddEditMenuItemModal = memo((props: AddEditMenuItemModalProps) => {
  const { menuId, menuItemId, onDone } = props;
  const modal = useModalInstance();
  const bloc = useBloc(AddEditMenuItemModalBloc, menuItemId);
  const form = useMemo(() => defineMenuItemForm(), []);
  const menuItem = useObservable(bloc.menuItem$);
  const formValues = useNonNilObservable(form.value$);
  const loading = useLoadingState(bloc.loading);

  const onSubmit = useCallback(
    (data: IndustryFormData) => {
      return of(null).pipe(
        switchMap(() => {
          if (menuItemId) {
            return bloc.editItem(menuItemId, data);
          } else {
            return bloc.addItem(menuId, data);
          }
        }),
        tap(() => onDone && onDone()),
        tap(() => modal.close()),
      );
    },
    [onDone, menuItemId, bloc, menuId, modal],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  useEffect(() => {
    if (menuItem) {
      form.patchValue(menuItem);
    }
  }, [form, menuItem]);

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={menuItemId ? 'Update Menu Item' : 'Add Menu Item'} />
      <ModalContent loading={loading.loading}>
        <FormContainer onSubmit={form.submit}>
          <FormInput autoFocus control={form.controls.title} />
          <FormInput control={form.controls.link} />
        </FormContainer>
      </ModalContent>
      <ModalFooter>
        <ModalAction intent="primary" text={t`Save`} loading={submitting} autoClose={false} onClick={form.submit} disabled={loading.loading} />
      </ModalFooter>
    </Modal>
  );
});
