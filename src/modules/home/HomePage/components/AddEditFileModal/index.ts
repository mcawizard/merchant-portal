import { openModal } from '@core/components/ModalStack';
import { AddEditFileModalProps } from './AddEditFileModal';

export async function openAddEditFileModal(props: AddEditFileModalProps) {
  const { AddEditFileModal } = await import('./AddEditFileModal');

  openModal(AddEditFileModal, props);
}
