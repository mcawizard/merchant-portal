import { CredentialTypeResponse } from '@business/entities/credential';
import { InputRenderer } from '@modules/common/InputRenderer';
import React, { memo } from 'react';
import { CredentialForm } from '../AddEditCredentialModal';

export interface CFormProps {
  credentialType?: CredentialTypeResponse;
  form: CredentialForm;
}

export const CForm = memo((props: CFormProps) => {
  const { credentialType, form } = props;
  return <InputRenderer inputs={credentialType?.inputs || []} form={form.controls.data} />;
});
