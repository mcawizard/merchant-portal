import { openModal } from '@core/components/ModalStack';
import { GraphValuesOverlayProps } from './GraphValuesOverlay';

export async function openGraphValuesOverlay(props: GraphValuesOverlayProps) {
  const { GraphValuesOverlay } = await import('./GraphValuesOverlay');

  openModal(GraphValuesOverlay, props);
}
