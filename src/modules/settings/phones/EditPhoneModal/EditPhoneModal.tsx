import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Modal, ModalFooter, ModalAction, ModalContent } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { EditPhoneModalBloc } from './EditPhoneModalBloc';
import { useBloc } from '@core/utils/bloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState } from '@core/utils/form';
import { FormSelect } from '@core/components/form';
import { CompactPhoneResponse } from '@business/entities/phone';
import { tap } from 'rxjs';

export function definePhoneForm() {
  return formGroup({
    agent: formControl<string>({
      label: 'Agent',
    }),
  });
}
export type EditPhoneFormData = FormDataType<typeof definePhoneForm>;

export interface EditPhoneModalProps {
  phone: CompactPhoneResponse;
  onDone?: () => void;
}

export const EditPhoneModal = memo((props: EditPhoneModalProps) => {
  const { onDone, phone } = props;
  const modal = useModalInstance();
  const bloc = useBloc(EditPhoneModalBloc);
  const agents = useObservable(bloc.agents$, []);

  const loading = useLoadingState(bloc.loading);

  const form = useMemo(() => definePhoneForm(), []);

  const onSubmit = useCallback(
    data => {
      return bloc.updatePhoneAgent(props.phone.id, data.agent).pipe(
        tap(() => {
          onDone?.();
          modal.close();
        }),
      );
    },
    [bloc, props.phone.id],
  );

  useEffect(() => {
    if (phone) {
      form.patchValue({ agent: phone.agent?.id });
    }
  }, [phone]);

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form);

  return (
    <Modal maxWidth="sm">
      <ModalContent>
        <FormSelect control={form.controls.agent} items={agents} labelAccessor={i => i.name} valueAccessor={v => v.id} />
      </ModalContent>

      <ModalFooter>
        <ModalAction loading={submitting} text="Save" onClick={() => form.submit()} />
      </ModalFooter>
    </Modal>
  );
});
