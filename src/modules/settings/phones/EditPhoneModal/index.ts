import { openModal } from '@core/components/ModalStack';
import { EditPhoneModalProps } from './EditPhoneModal';

export async function openEditPhoneModal(props: EditPhoneModalProps) {
  const { EditPhoneModal } = await import('./EditPhoneModal');

  openModal(EditPhoneModal, props);
}
