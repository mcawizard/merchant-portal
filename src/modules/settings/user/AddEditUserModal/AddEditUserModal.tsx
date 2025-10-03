import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState, Validators } from '@core/utils/form';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction, ModalDrawer } from '@core/components/Modal';
import { tap, switchMap } from 'rxjs/operators';
import { FormContainer, FormInput, FormInputPhone, FormSelect, FormUploadImage } from '@core/components/form';
import { useModalInstance } from '@core/components/ModalStack';
import { AddEditUserModalBloc } from './AddEditUserModalBloc';
import { useBloc } from '@core/utils/bloc';
import { useObservable, useNonNilObservable } from '@core/utils/hooks/rxjs';
import { t } from 'ttag';
import { of } from 'rxjs';
import { UserAPI } from '@business/api/user_api';
import { UploadResponse } from '@business/entities/common';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { UserRole } from '@business/entities/user';
import { RoleService } from '@business/services';

export function defineUserForm() {
  return formGroup({
    firstName: formControl<string>({
      label: 'First Name',
      required: true,
    }),
    lastName: formControl<string>({
      label: 'Last Name',
      required: true,
    }),
    email: formControl<string>({
      label: 'Email',
      required: true,
      validators: [Validators.email],
    }),
    phone: formControl<string>({
      label: 'Phone',
      required: false,
    }),
    avatar: formControl<string>({
      label: 'Phone',
      required: false,
    }),
    role: formControl<UserRole>({
      label: 'Role',
      required: true,
      initialValue: UserRole.user,
    }),
  });
}

export interface AddEditUserModalProps {
  id?: string;
  onDone?: () => void;
}

export type UserFormData = FormDataType<typeof defineUserForm>;

export const AddEditUserModal = memo((props: AddEditUserModalProps) => {
  const { id, onDone } = props;
  const modal = useModalInstance();
  const bloc = useBloc(AddEditUserModalBloc, id);
  const form = useMemo(() => defineUserForm(), []);
  const user = useObservable(bloc.user$);
  const errors = useNonNilObservable(form.errors$);
  const loading = useLoadingState(bloc.loading);

  const onSubmit = useCallback(
    (data: UserFormData) => {
      return of(null).pipe(
        switchMap(() => {
          if (user) {
            return bloc.edit(user.id, data);
          } else {
            return bloc.add(data);
          }
        }),
        tap(() => modal.close()),
        tap(onDone),
      );
    },
    [bloc, modal, user, onDone],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  useEffect(() => {
    if (user) {
      form.patchValue(user);
    }
  }, [form, user]);

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={id ? 'Update User' : 'Add User'} />
      <ModalContent loading={loading.loading}>
        <FormContainer onSubmit={form.submit}>
          <FormInput autoFocus control={form.controls.firstName} />
          <FormInput control={form.controls.lastName} />
          <FormInput control={form.controls.email} validate={email => UserAPI.emailCheck(email, user?.id)} />
          <FormSelect
            control={form.controls.role}
            items={RoleService.getAllRoles()}
            labelAccessor={i => RoleService.getRoleName(i)}
            valueAccessor={i => i}
          />
          <FormInputPhone control={form.controls.phone} />
          <FormUploadImage listType="picture-circle" control={form.controls.avatar} uploadPath="users/" />
          {!!errors && errors.map((error, index) => <div key={index}>{error}</div>)}
        </FormContainer>
      </ModalContent>
      <ModalFooter>
        <ModalAction text={t`Save`} loading={submitting} autoClose={false} onClick={form.submit} disabled={loading.loading} />
      </ModalFooter>
    </Modal>
  );
});
