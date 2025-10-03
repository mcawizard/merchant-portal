import { openModal } from '@core/components/ModalStack';
import { AddEditIndustryModalProps } from './AddEditIndustryModal';

export async function openAddEditIndustryModal(props: AddEditIndustryModalProps) {
  const { AddEditIndustryModal } = await import('./AddEditIndustryModal');

  openModal(AddEditIndustryModal, props);
}
