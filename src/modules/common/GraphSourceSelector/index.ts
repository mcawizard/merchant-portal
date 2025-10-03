import { openModal } from '@core/components/ModalStack';
import { GraphSourceSelectorProps } from './GraphSourceSelector';

export async function openGraphSourceSelectorModal(props: GraphSourceSelectorProps) {
  const { GraphSourceSelector } = await import('./GraphSourceSelector');

  openModal(GraphSourceSelector, props);
}
