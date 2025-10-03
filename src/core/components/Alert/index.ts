import { AlertProps } from './Alert';
import { openModal } from '../ModalStack';

export const Alert = {
  show,
  info,
  danger,
};

function show(props: AlertProps) {
  import('./Alert').then(module => openModal(module.AlertModal as any, props));
}

function info(props: Omit<AlertProps, 'type'>) {
  return show({ ...props, type: 'info' });
}

function danger(props: Omit<AlertProps, 'type'>) {
  return show({ ...props, type: 'danger' });
}
