import { openModal } from '@core/components/ModalStack';
export async function openAvailableNumbersModal(props?: { onDone?: () => void }) {
  const { AvailableNumbersModal } = await import('./AvailableNumbersModal');

  openModal(AvailableNumbersModal, props || {});
}
