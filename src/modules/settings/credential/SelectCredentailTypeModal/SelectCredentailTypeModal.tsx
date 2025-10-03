import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState } from '@core/utils/form';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction } from '@core/components/Modal';
import { FormContainer, FormSelect } from '@core/components/form';
import { useModalInstance } from '@core/components/ModalStack';
import { SelectCredentailTypeModalBloc } from './SelectCredentailTypeModalBloc';
import { useBloc } from '@core/utils/bloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { t } from 'ttag';
import { openAddEditCredentialModal } from '../AddEditCredentialModal';
import { CredentialTypeResponse } from '@business/entities/credential';
import { Avatar } from 'antd';

function defineCredentialForm() {
  return formGroup({
    type: formControl<string>({
      placeholder: 'Search for a app',
      required: true,
    }),
  });
}

export type CredentailFormData = FormDataType<typeof defineCredentialForm>;
export interface SelectCredentailTypeModal {
  onDone?: () => void;
}

export const SelectCredentailTypeModal = memo((props: SelectCredentailTypeModal) => {
  const modal = useModalInstance();
  const bloc = useBloc(SelectCredentailTypeModalBloc);
  const form = useMemo(() => defineCredentialForm(), []);
  const types = useObservable(bloc.types$, []);

  const onSubmit = useCallback(
    (data: CredentailFormData) => {
      modal.close();
      openAddEditCredentialModal({
        toolId: data.type,
        onDone: () => {
          props.onDone?.();
        },
      });
    },
    [props, modal],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={'Add new connection'} />
      <ModalContent>
        <FormContainer onSubmit={form.submit}>
          <span className="mb-2">Select an app or service to connect to</span>
          <FormSelect
            autoFocus
            control={form.controls.type}
            items={types}
            valueAccessor={i => i.tool.id}
            labelAccessor={l => l.name}
            optionRender={item => {
              const creds = item.data.item as CredentialTypeResponse;
              return (
                <div className="d-flex pt-2 pb-2 border-bottom">
                  <div className="mr-4">
                    <Avatar src={creds.tool.logo} />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <span className="font-weight-medium font-size-16">{creds.name}</span>
                    <div className="d-flex align-items-center">
                      <span className="text-muted font-size-14 mr-2">{creds.description}</span>
                    </div>
                  </div>
                </div>
              );
            }}
          />
        </FormContainer>
      </ModalContent>
      <ModalFooter>
        <ModalAction intent="primary" text={t`Continue`} loading={submitting} autoClose={false} onClick={form.submit} />
      </ModalFooter>
    </Modal>
  );
});
