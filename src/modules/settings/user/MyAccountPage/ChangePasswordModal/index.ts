import { openModal } from '@core/components/ModalStack';

export async function openChangePassswordModal() {
  const { ChangePasswordModal } = await import('./ChangePasswordModal');

  openModal(ChangePasswordModal, {});
}
