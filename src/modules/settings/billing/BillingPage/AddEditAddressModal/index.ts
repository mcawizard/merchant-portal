import { openModal } from '@core/components/ModalStack';
import { AddEditAddressModalProps } from './AddEditAddressModal';

export async function openAddEditAddress(props: AddEditAddressModalProps) {
  const { AddEditAddressModal } = await import('./AddEditAddressModal');

  openModal(AddEditAddressModal, props);
}
