import React, { memo, useCallback, useMemo } from 'react';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState } from '@core/utils/form';
import { Modal, ModalHeader, ModalContent, ModalFooter, ModalAction } from '@core/components/Modal';
import { tap, switchMap } from 'rxjs/operators';
import { FormContainer, FormSelect } from '@core/components/form';
import { useModalInstance } from '@core/components/ModalStack';
import { useBloc } from '@core/utils/bloc';
import { t } from 'ttag';
import { of } from 'rxjs';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { AddEditFileModalBloc } from './AddEditFileModalBloc';
import { Dropzone } from '@modules/common';
import { UploadFile } from 'antd';
import { useObservable } from '@core/utils/hooks/rxjs';

function defineFileForm(deal_id: string) {
  return formGroup({
    deal_id: formControl<string>({
      label: 'Deal ID',
      initialValue: deal_id,
      disabled: true,
    }),
    file_category_id: formControl<string>({
      label: 'File Category',
      required: true,
    }),
    file: formControl<File>({
      label: 'File',
    }),
  });
}

export interface AddEditFileModalProps {
  deal_id: string;
}

export type FileFormData = FormDataType<typeof defineFileForm>;

export const AddEditFileModal = memo((props: AddEditFileModalProps) => {
  const { deal_id } = props;
  const modal = useModalInstance();
  const bloc = useBloc(AddEditFileModalBloc);
  const form = useMemo(() => defineFileForm(deal_id), [deal_id]);
  const loading = useLoadingState(bloc.loading);

  const categories = useObservable(bloc.categories$, []);

  const onSubmit = useCallback(
    (data: FileFormData) => {
      return of(null).pipe(
        switchMap(() => bloc.add(data)),
        tap(() => modal.close()),
      );
    },
    [modal, bloc],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={'Add File'} />
      <ModalContent loading={loading.loading}>
        <FormContainer onSubmit={form.submit}>
          <Dropzone
            title="Add Files"
            uploadPath="files"
            multiple={false}
            showUploadList
            accept=".pdf,.pdf,.docx,.csv,.pptx,.txt,.xlsx,.doc,.xls"
            autoUpload={false}
            onChange={files => form.patchValue({ file: files[0] })}
          />
          <FormSelect
            items={categories}
            labelAccessor={item => item.file_category_name}
            valueAccessor={item => item.id}
            control={form.controls.file_category_id}
          />
        </FormContainer>
      </ModalContent>
      <ModalFooter>
        <ModalAction color="primary" text={t`Save`} loading={submitting} autoClose={false} onClick={form.submit} />
      </ModalFooter>
    </Modal>
  );
});
