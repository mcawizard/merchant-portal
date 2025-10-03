import { SelectUserModalProps } from './SelectUserModal';
import { openModal } from '@core/components/ModalStack';

export async function openSelectUserModal(props: SelectUserModalProps) {
  const { SelectUserModal } = await import('./SelectUserModal');

  openModal(SelectUserModal, props);
}
