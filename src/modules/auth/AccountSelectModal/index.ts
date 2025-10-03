import { openModal } from '@core/components/ModalStack';
import { Subject } from 'rxjs';
import { AccountSelectModalProps } from './AccountSelectModal';

export function openAccountSelectModal(props: Omit<AccountSelectModalProps, 'onSelect' | 'onCancel'>) {
  const obs$ = new Subject<string>();

  const onSelect = (appId: string) => {
    obs$.next(appId);
    obs$.complete();
  };

  const onCancel = () => {
    obs$.next('');
    obs$.complete();
  };

  import('./AccountSelectModal').then(module => openModal(module.AccountSelectModal, { ...props, onSelect, onCancel }));

  return obs$;
}
