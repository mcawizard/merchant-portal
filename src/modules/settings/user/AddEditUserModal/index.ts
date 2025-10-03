import { openModal } from '@core/components/ModalStack';
import { AddEditUserModalProps } from './AddEditUserModal';

export async function openAddEditUserModal(props: AddEditUserModalProps) {
  const { AddEditUserModal } = await import('./AddEditUserModal');

  openModal(AddEditUserModal, props);
}
