import { openModal } from '@core/components/ModalStack';

export async function openCredentialsSelectModal() {
  const { SelectCredentailTypeModal } = await import('./SelectCredentailTypeModal');

  openModal(SelectCredentailTypeModal, {});
}
