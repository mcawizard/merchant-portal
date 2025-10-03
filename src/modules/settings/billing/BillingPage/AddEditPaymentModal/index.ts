import { openModal } from '@core/components/ModalStack';
import { AddEditPaymentModalProps } from './AddEditPaymentModal';

export async function openAddEditPaymentMethod(props: AddEditPaymentModalProps) {
  const { AddEditPaymentModal } = await import('./AddEditPaymentModal');

  openModal(AddEditPaymentModal, props);
}
