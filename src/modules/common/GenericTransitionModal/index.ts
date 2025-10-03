import { GenericTransitionModalProps } from './GenericTransitionModal';
import { openModal } from '@core/components/ModalStack';
import { GenericTransitionModal } from './GenericTransitionModal';

export async function openGenericTransitionModal(props: GenericTransitionModalProps) {
  const { GenericTransitionModal } = await import('./GenericTransitionModal');

  openModal(GenericTransitionModal, props);
}
