import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState } from '@core/utils/form';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction } from '@core/components/Modal';
import { tap, switchMap } from 'rxjs/operators';
import { FormContainer, FormInput, FormSelect } from '@core/components/form';
import { useModalInstance } from '@core/components/ModalStack';
import { AddEditMenuModalBloc } from './AddEditMenuModalBloc';
import { useBloc } from '@core/utils/bloc';
import { useObservable, useNonNilObservable } from '@core/utils/hooks/rxjs';
import { t } from 'ttag';
import { of } from 'rxjs';
import { useLoadingState } from '@core/utils/repository/loading_state';

function defineMenuForm() {
  return formGroup({
    title: formControl<string>({
      label: 'Title',
      required: true,
    }),
  });
}

export interface AddEditMenuModalProps {
  id?: string;
  onDone?: () => void;
}

export type IndustryFormData = FormDataType<typeof defineMenuForm>;

export const AddEditMenuModal = memo((props: AddEditMenuModalProps) => {
  const { id, onDone } = props;
  const modal = useModalInstance();
  const bloc = useBloc(AddEditMenuModalBloc, id);
  const form = useMemo(() => defineMenuForm(), []);
  const menu = useObservable(bloc.menu$);
  const formValues = useNonNilObservable(form.value$);
  const loading = useLoadingState(bloc.loading);

  const onSubmit = useCallback(
    (data: IndustryFormData) => {
      return of(null).pipe(
        switchMap(() => {
          if (menu) {
            return bloc.edit(menu.id, data);
          } else {
            return bloc.add(data);
          }
        }),
        tap(() => modal.close()),
        tap(onDone),
      );
    },
    [bloc, modal, menu],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  useEffect(() => {
    if (menu) {
      form.patchValue(menu);
    }
  }, [form, menu]);

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={id ? 'Update Menu' : 'Add Menu'} />
      <ModalContent loading={loading.loading}>
        <FormContainer onSubmit={form.submit}>
          <FormInput autoFocus control={form.controls.title} />
        </FormContainer>
      </ModalContent>
      <ModalFooter>
        <ModalAction intent="primary" text={t`Save`} loading={submitting} autoClose={false} onClick={form.submit} disabled={loading.loading} />
      </ModalFooter>
    </Modal>
  );
});
