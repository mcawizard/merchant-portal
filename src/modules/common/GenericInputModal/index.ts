import { GenericInputModalProps } from './GenericInputModal';
import { openModal } from '@core/components/ModalStack';

export async function openGenericInputModal(props: GenericInputModalProps) {
  const { GenericInputModal } = await import('./GenericInputModal');

  openModal(GenericInputModal, props);
}
