import { Modal, ModalAction, ModalContent, ModalFooter, ModalHeader } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { useBloc } from '@core/utils/bloc';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState, Validators } from '@core/utils/form';
import { R } from '@core/utils/r';
import { css } from '@emotion/react';
import React, { memo, useCallback, useMemo } from 'react';
import { AddEditPaymentModalBloc } from './AddEditPaymentModalBloc';
import { FormCheckbox, FormInput, FormSelect } from '@core/components/form';
import { Col, Row } from 'antd';
import { AddressService, CalendarService } from '@business/services';
import { useObservable } from '@core/utils/hooks/rxjs';
import { t } from 'ttag';
import { tap } from 'rxjs';

function definePaymentForm() {
  return formGroup({
    name: formControl<string>({
      placeholder: 'Cardholder Name',
      required: true,
      initialValue: '',
    }),
    cardNumber: formControl<string>({
      placeholder: 'CC#',
      required: true,
      validators: [Validators.creditCard],
      initialValue: '',
    }),
    expiryMonth: formControl<number>({
      placeholder: 'Month',
      required: true,
    }),
    expiryYear: formControl<number>({
      placeholder: 'Year',
      required: true,
    }),
    cvv: formControl<string>({
      placeholder: 'CVV',
      required: true,
      initialValue: '',
    }),
    addressId: formControl<string>({
      placeholder: 'Address',
      required: true,
    }),
  });
}

export type PaymentMethodFormData = FormDataType<typeof definePaymentForm>;
const styles = {
  content: css`
    padding: 25px !important;
  `,
};
export interface AddEditPaymentModalProps {
  payment?: any;
}
export const AddEditPaymentModal = memo((props: AddEditPaymentModalProps) => {
  const {} = props;
  const modal = useModalInstance();
  const bloc = useBloc(AddEditPaymentModalBloc);
  const form = useMemo(() => definePaymentForm(), []);

  const addresses = useObservable(bloc.addresses$, []);

  const onSubmit = useCallback(
    data => {
      return bloc.add(data).pipe(tap(() => modal.close()));
    },
    [bloc, modal],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={!true ? 'Update Payment Method' : 'Add Payment Method'} />
      <ModalContent customCss={styles.content}>
        <FormInput control={form.controls.name} />
        <FormInput control={form.controls.cardNumber} onlyNumbers />
        <Row gutter={16}>
          <Col span={8}>
            <FormInput control={form.controls.cvv} />
          </Col>
          <Col span={8}>
            <FormSelect
              control={form.controls.expiryMonth}
              items={CalendarService.getMonths()}
              labelAccessor={(m, index) => `${m} (${R.padStart(index + 1 + '', 2, '0')})`}
              valueAccessor={(m, index) => index + 1}
            />
          </Col>
          <Col span={8}>
            <FormSelect control={form.controls.expiryYear} items={CalendarService.getNYears(10)} labelAccessor={i => i} valueAccessor={i => i} />
          </Col>
        </Row>
        <FormSelect
          control={form.controls.addressId}
          items={addresses}
          labelAccessor={item => AddressService.getAddressString(item)}
          valueAccessor={item => item.id}
        />
      </ModalContent>
      <ModalFooter>
        <ModalAction text={t`Save`} loading={submitting} autoClose={false} onClick={form.submit} />
      </ModalFooter>
    </Modal>
  );
});
