import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState } from '@core/utils/form';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction } from '@core/components/Modal';
import { tap, switchMap } from 'rxjs/operators';
import { FormContainer, FormInput, FormSelect, FormText } from '@core/components/form';
import { useModalInstance } from '@core/components/ModalStack';
import { AddEditCredentialModalBloc } from './AddEditCredentialModalBloc';
import { useBloc } from '@core/utils/bloc';
import { useObservable, useNonNilObservable } from '@core/utils/hooks/rxjs';
import { t } from 'ttag';
import { of } from 'rxjs';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { defineInputsForm, InputRenderer } from '@modules/common/InputRenderer';
import { InputFieldResponse } from '@business/entities/input';
import { CredentialResponse } from '@business/entities/credential';
import { CForm } from './Components/CForm';
import { CGoogle } from './Components/CGoogle';
import { InfoBanner } from '@modules/common';
import { Session } from '@modules/auth/session';

function defineCredentialForm(type: string, inputs: InputFieldResponse[], oAuth = false) {
  return formGroup({
    name: formControl<string>({
      label: 'Name',
      required: true,
    }),
    type: formControl<string>({
      required: true,
      initialValue: type,
    }),
    data: oAuth ? formControl<any>({}) : defineInputsForm(inputs),
  });
}

export type CredentialForm = ReturnType<typeof defineCredentialForm>;

export interface AddEditCredentialModalProps {
  id?: string;
  toolId: string;
  onDone?: (credential: CredentialResponse) => void;
}

export type CredentialFormData = FormDataType<typeof defineCredentialForm>;

export const AddEditCredentialModal = memo((props: AddEditCredentialModalProps) => {
  const { id, onDone, toolId } = props;
  const modal = useModalInstance();
  // const bloc = useBloc(AddEditCredentialModalBloc, type, id);
  const bloc = useBloc(AddEditCredentialModalBloc, toolId, id);
  const credential = useObservable(bloc.credential$);
  const credentialType = useObservable(bloc.credentialType$);
  const form = useMemo(() => defineCredentialForm(toolId, credentialType?.inputs || [], credentialType?.type === 'oauth2'), [toolId, credentialType]);
  const loading = useLoadingState(bloc.loading);
  const [validated, setValidated] = useState(false);
  const user = useObservable(Session.user$);

  useEffect(() => {
    if (!id && credentialType) {
      form.patchValue({ name: (user ? `${user.name} - ` : '') + credentialType!.name });
    }
  }, [id, credentialType, form, user]);

  const onSubmit = useCallback(
    (data: CredentialFormData) => {
      return of(null).pipe(
        switchMap(() => {
          if (credential) {
            return bloc.edit(credential.id, data);
          } else {
            return bloc.add(data);
          }
        }),
        tap(() => modal.close()),
        tap(credential => onDone && onDone(credential)),
      );
    },
    [bloc, modal, credential, onDone],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  useEffect(() => {
    if (credential) {
      form.patchValue(credential);
    }
  }, [form, credential]);

  return (
    <Modal maxWidth="md">
      <ModalHeader>
        <FormText control={form.controls.name} />
      </ModalHeader>
      <ModalContent loading={loading.loading}>
        <FormContainer onSubmit={form.submit}>
          {validated && (
            <InfoBanner className="mb-4" type="success">
              You credentials has been updated
            </InfoBanner>
          )}
          {credentialType?.type == 'form' && <CForm form={form} credentialType={credentialType} />}
          {credentialType?.type == 'oauth2' && <CGoogle form={form} toolId={toolId} bloc={bloc} onDone={() => setValidated(true)} />}
        </FormContainer>
      </ModalContent>
      {(credentialType?.type == 'form' || validated) && (
        <ModalFooter>
          <ModalAction color="primary" text={t`Save`} loading={submitting} autoClose={false} onClick={form.submit} disabled={loading.loading} />
        </ModalFooter>
      )}
    </Modal>
  );
});
