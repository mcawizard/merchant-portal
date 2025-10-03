import { ModalAction, ModalContent, ModalFooter, ModalHeader, ModalDrawer } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import React, { memo, useState } from 'react';
import { css } from '@emotion/react';
import { FormBuilder, FormBuilderProps, FormBuilderHandle } from '../FormBuilder';
import { Observable, isObservable } from 'rxjs';
import { R } from '@core/utils/r';
import { FCFormDataType } from '../FormFields/types';

const styles = {
  content: css`
    padding: 25px !important;
    background-color: #f8f8fb;
  `,
};

export type FormBuilderOverlayProps = Omit<FormBuilderProps, 'onDataChange'> & {
  onSave(items: FCFormDataType[]): void | Observable<any>;
  title?: string;
};

export const FormBuilderOverlay = memo((props: FormBuilderOverlayProps) => {
  const { title } = props;
  const modal = useModalInstance();
  const refBuilder = React.createRef<FormBuilderHandle>();

  return (
    <ModalDrawer maxWidth="xl">
      <ModalHeader>
        <div className="d-flex flex-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', height: 50 }}>{title || 'Form Builder'}</div>
        </div>
      </ModalHeader>
      <div style={{ backgroundColor: '#f8f8fb', padding: 25 }}>
        <FormBuilder {...props} handlesRef={refBuilder} />
      </div>
      <ModalFooter>
        <ModalAction
          intent="primary"
          text={`Save`}
          autoClose={false}
          onClick={() => {
            const result = props.onSave(refBuilder.current?.fields() || props.fields || []);
            if (isObservable(result)) {
              result.subscribe(() => modal.close());
            } else {
              modal.close();
            }
          }}
        />
      </ModalFooter>
    </ModalDrawer>
  );
});
