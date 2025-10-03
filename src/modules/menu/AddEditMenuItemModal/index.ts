import { openModal } from '@core/components/ModalStack';
import { AddEditMenuItemModalProps } from './AddEditMenuItemModal';

export async function openAddEditMenuItemModal(props: AddEditMenuItemModalProps) {
  const { AddEditMenuItemModal } = await import('./AddEditMenuItemModal');

  openModal(AddEditMenuItemModal, props);
}
