import { openModal } from '@core/components/ModalStack';
import { FormBuilderOverlayProps } from './FormBuilderOverlay';

export async function openFormBuilderOverlay(props: FormBuilderOverlayProps) {
  const { FormBuilderOverlay } = await import('./FormBuilderOverlay');

  openModal(FormBuilderOverlay, props);
}
