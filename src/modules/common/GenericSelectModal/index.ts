import { GenericSelectModalProps } from './GenericSelectModal';
import { openModal } from '@core/components/ModalStack';

export async function openGenericSelectModal<T>(props: GenericSelectModalProps<T>) {
  const { GenericSelectModal } = await import('./GenericSelectModal');

  openModal(GenericSelectModal, props);
}
