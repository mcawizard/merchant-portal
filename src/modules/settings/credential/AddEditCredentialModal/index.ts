import { openModal } from '@core/components/ModalStack';
import { AddEditCredentialModalProps } from './AddEditCredentialModal';

export async function openAddEditCredentialModal(props: AddEditCredentialModalProps) {
  const { AddEditCredentialModal } = await import('./AddEditCredentialModal');

  openModal(AddEditCredentialModal, props);
}
