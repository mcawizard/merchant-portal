import { AccountSwitchModalProps } from './AccountSwitchModal';
import { openModal } from '@core/components/ModalStack';

export async function openAccountSwitchModal(props: AccountSwitchModalProps) {
  const { AccountSwitchModal } = await import('./AccountSwitchModal');

  openModal(AccountSwitchModal, props);
}
