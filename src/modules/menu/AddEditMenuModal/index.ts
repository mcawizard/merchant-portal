import { openModal } from '@core/components/ModalStack';
import { AddEditMenuModalProps } from './AddEditMenuModal';

export async function openAddEditMenuModal(props: AddEditMenuModalProps) {
  const { AddEditMenuModal } = await import('./AddEditMenuModal');

  openModal(AddEditMenuModal, props);
}
