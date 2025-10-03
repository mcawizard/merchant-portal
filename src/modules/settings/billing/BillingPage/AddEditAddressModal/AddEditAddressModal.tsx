import React, { memo, useCallback, useMemo } from 'react';
import { FormCheckbox, FormInput, FormSelect } from '@core/components/form';
import { Modal, ModalAction, ModalContent, ModalFooter, ModalHeader } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { useBloc } from '@core/utils/bloc';
import { formControl, FormDataType, formGroup, useFormConfig, useFormState } from '@core/utils/form';
import { useNonNilObservable, useObservable } from '@core/utils/hooks/rxjs';
import { css } from '@emotion/react';
import { Col, Row } from 'reactstrap';
import { switchMap, tap } from 'rxjs/operators';
import { t } from 'ttag';
import { AddEditAddressModalBloc } from './AddEditAddressModalBloc';
import { AddressService } from '@business/services/address_service';

function defineAddressForm() {
  return formGroup({
    address: formControl<string>({
      label: 'Address',
      placeholder: 'Address',
      required: true,
    }),
    addressLineTwo: formControl<string | null>({
      placeholder: 'Address Line 2',
    }),
    city: formControl<string>({
      label: 'City',
      placeholder: 'City',
      required: true,
    }),
    state: formControl<string>({
      label: 'State',
      placeholder: 'State / Province / Region',
      required: true,
    }),
    postal: formControl<string>({
      label: 'Postal Code',
      placeholder: 'Postal Code',
    }),
    country: formControl<string>({
      label: 'Country',
      placeholder: 'Country',
      required: true,
    }),
  });
}

export type AddressFormData = FormDataType<typeof defineAddressForm>;

const styles = {
  content: css`
    padding: 25px !important;
  `,
};

export interface AddEditAddressModalProps {
  address?: any;
  onDone?(addressId: string): void;
}

export const AddEditAddressModal = memo((props: AddEditAddressModalProps) => {
  const { onDone } = props;
  const modal = useModalInstance();
  const bloc = useBloc(AddEditAddressModalBloc);
  const form = useMemo(() => defineAddressForm(), []);
  const formValue = useNonNilObservable(form.value$);

  const onSubmit = useCallback(
    data => {
      return bloc.addAddress(data).pipe(tap(() => modal.close()));
    },
    [bloc],
  );

  const statesItems = useMemo(() => {
    if (formValue.country) {
      return AddressService.getStatesItems(formValue.country);
    }
    return [];
  }, [formValue]);

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Modal maxWidth="sm">
      <ModalHeader title={!true ? 'Update Address' : 'Add Address'} />
      <ModalContent formContainer={{ onSubmit: form.submit }} customCss={styles.content}>
        <FormInput autoFocus control={form.controls.address} />
        <FormInput control={form.controls.addressLineTwo} />
        <FormSelect
          control={form.controls.country}
          items={AddressService.getCountriesItems()}
          labelAccessor={i => i.label}
          valueAccessor={i => i.value}
        />
        <FormInput control={form.controls.city} />
        <Row>
          <Col md={6}>
            {!!statesItems.length && (
              <FormSelect
                placeholder={formValue.country === 'US' ? 'State' : 'State / Province / Region'}
                control={form.controls.state}
                items={statesItems}
                valueAccessor={i => i.value}
                labelAccessor={i => i.label}
              />
            )}
            {!statesItems.length && <FormInput control={form.controls.state} />}
          </Col>
          <Col md={6}>
            <FormInput control={form.controls.postal} />
          </Col>
        </Row>
      </ModalContent>
      <ModalFooter>
        <ModalAction text={t`Save`} loading={submitting} autoClose={false} onClick={form.submit} />
      </ModalFooter>
    </Modal>
  );
});
