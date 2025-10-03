import { Modal, ModalAction, ModalContent, ModalFooter, ModalHeader } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { formControl, formGroup, useFormConfig, useFormState, Validators } from '@core/utils/form';
import React, { memo, useCallback, useMemo, useEffect } from 'react';
import { tap } from 'rxjs/operators';
import { FormInput } from '@core/components/form';
import { useBloc } from '@core/utils/bloc';
import { ChangePasswordModalBloc } from './ChangePasswordModalBloc';
import { useObservable, useNonNilObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { css } from '@emotion/react';

function defineChangePasswordForm() {
  return formGroup({
    password: formControl<string>({
      label: `Password`,
      required: true,
      validators: [Validators.minLength(6)],
    }),
    cpassword: formControl<string>({
      label: `Confirm Password`,
      required: true,
      validators: [Validators.minLength(6)],
    }),
  });
}

const styles = {
  content: css`
    padding: 25px !important;
  `,
};

export const ChangePasswordModal = memo(() => {
  const modal = useModalInstance();
  const bloc = useBloc(ChangePasswordModalBloc);
  const user = useObservable(Session.user$);

  const form = useMemo(() => defineChangePasswordForm(), []);
  const formValue = useNonNilObservable(form.value$);
  const onSubmit = useCallback(
    ({ password }) => {
      return bloc.changePassword(user ? user.id : '0', password).pipe(tap(() => modal.close()));
    },
    [bloc, modal, user],
  );

  useEffect(() => {
    form.controls.cpassword.setConfig({
      validators: [Validators.equals(formValue.password, 'Confirm password does not match')],
    });
  }, [form.controls.cpassword, formValue.password]);

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={'Change Password'} />
      <ModalContent formContainer={{ onSubmit: form.submit }} customCss={styles.content}>
        <FormInput autoFocus type="password" control={form.controls.password} />
        <FormInput type="password" control={form.controls.cpassword} />
      </ModalContent>
      <ModalFooter>
        <ModalAction intent="primary" text={'Change Password'} loading={submitting} autoClose={false} onClick={form.submit} />
      </ModalFooter>
    </Modal>
  );
});
