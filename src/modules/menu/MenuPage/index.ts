export { MenuSettingPage as default } from './MenuSettingPage';
import { openModal } from '@core/components/ModalStack';
import { AddEditMenuSettingModalProps } from './AddEditMenuSettingModal';

export async function openAddEditMenuSettingModal(props: AddEditMenuSettingModalProps) {
  const { AddEditMenuSettingModal } = await import('./AddEditMenuSettingModal');

  openModal(AddEditMenuSettingModal, props);
}
