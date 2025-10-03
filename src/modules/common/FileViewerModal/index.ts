import { FileViewerModalProps } from './FileViewerModal';
import { openModal } from '@core/components/ModalStack';

export async function openFileViewerModal(props: FileViewerModalProps) {
  const { FileViewerModal } = await import('./FileViewerModal');

  openModal(FileViewerModal, props);
}
