import React, { memo, useCallback, useMemo } from 'react';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState } from '@core/utils/form';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction } from '@core/components/Modal';
import { tap, switchMap } from 'rxjs/operators';
import { FormContainer } from '@core/components/form';
import { useModalInstance } from '@core/components/ModalStack';
import { useBloc } from '@core/utils/bloc';
import { t } from 'ttag';
import { of } from 'rxjs';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { AddEditFileModalBloc } from './AddEditFileModalBloc';
import { Dropzone } from '@modules/common';
import { UploadFile } from 'antd';

function defineFileForm() {
  return formGroup({
    files: formControl<UploadFile[]>({
      label: 'Files',
      initialValue: [],
    }),
  });
}

export interface AddEditFileModalProps {
  id?: string;
}

export type FileFormData = FormDataType<typeof defineFileForm>;

export const AddEditFileModal = memo((props: AddEditFileModalProps) => {
  const { id } = props;
  const modal = useModalInstance();
  const bloc = useBloc(AddEditFileModalBloc);
  const form = useMemo(() => defineFileForm(), []);
  const loading = useLoadingState(bloc.loading);

  const onSubmit = useCallback(
    (data: FileFormData) => {
      return of(null).pipe(
        // switchMap(() => bloc.add(data)),
        switchMap(() => of(null)),
        tap(() => modal.close()),
      );
    },
    [modal],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={id ? 'Update File' : 'Add File'} />
      <ModalContent>
        <FormContainer onSubmit={form.submit}>
          <Dropzone
            title="Add Files"
            uploadPath="files"
            multiple={true}
            showUploadList
            accept=".pdf,.pdf,.docx,.csv,.pptx,.txt,.xlsx,.doc,.xls"
            autoUpload={false}
            onChange={files => form.patchValue({ files: files || [] })}
          />
        </FormContainer>
      </ModalContent>
      <ModalFooter>
        <ModalAction color="primary" text={t`Save`} loading={submitting} autoClose={false} onClick={form.submit} />
      </ModalFooter>
    </Modal>
  );
});
