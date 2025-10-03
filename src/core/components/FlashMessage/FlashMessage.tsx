import React from 'react';
import { getEndpointResponseErrorMessage } from '@business/api/endpoint';
import { Theme } from '@core/utils/css';
import { R } from '@core/utils/r';
import type { IconType } from 'antd/es/notification/interface';
import { notification } from 'antd';
import { t } from 'ttag';
import './flash_message.scss';
import { toast } from 'sonner';
export interface FlashMessageButton {
  text: string;
  callback: any;
}

export interface MesssageOptions {
  autoHide?: boolean;
  duration?: number;
  detectNetworkStatus?: boolean;
  buttons?: FlashMessageButton[];
  killer?: boolean;
  progressBar?: boolean;
  forceTimeout?: boolean;
  html?: boolean;
  buttonClass?: string;
  layout?:
    | 'top'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'center'
    | 'centerLeft'
    | 'centerRight'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight';
}

export type MessageType = 'alert' | 'info' | 'success' | 'danger' | 'warning';

export const FlashMessage = {
  show,
  info,
  success,
  warning,
  danger,
  error,
};

const ICONS: Record<MessageType, string> = {
  alert: '',
  info: 'fal fa-info-circle',
  success: 'fal fa-check-circle',
  warning: 'fal fa-exclamation-triangle',
  danger: 'fal fa-exclamation-circle',
};
const NOTI_CLASSES: Record<MessageType, string> = {
  alert: '',
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
};

export function show(type: MessageType, text: string, subtext?: string, options?: MesssageOptions) {
  if (subtext) {
    subtext = R.addDot(subtext);
  }

  if (text && !subtext) {
    subtext = text;
    text = '';

    if (type === 'info') text = t`Information`;
    if (type === 'success') text = t`Success`;
    if (type === 'warning') text = t`Warning`;
    if (type === 'danger') text = t`Error`;
  }

  const icon = ICONS[type];

  if (type == 'success') {
    return toast.success(text, { description: subtext, position: 'bottom-right' });
  } else if (type == 'danger') {
    return toast.error(text, { description: subtext, position: 'bottom-right' });
  } else if (type == 'info') {
    return toast.info(text, { description: subtext, position: 'bottom-right' });
  } else if (type == 'warning') {
    return toast.warning(text, { description: subtext, position: 'bottom-right' });
  }
  return toast.info(text, { description: subtext, position: 'bottom-right' });
}

export function info(text: string, subtext?: string, options?: MesssageOptions) {
  return show('info', text, subtext, options);
}

function success(text: string, subtext?: string, options?: MesssageOptions) {
  return show('success', text, subtext, options);
}

function warning(text: string, subtext?: string, options?: MesssageOptions) {
  return show('warning', text, subtext, options);
}

function danger(text: string, subtext?: string, options?: MesssageOptions) {
  return show('danger', text, subtext, options);
}

function error(error: any, text: string, subtext?: string, options?: MesssageOptions) {
  if (error) {
    console.log('[FlashMessage] error:', error, options);
  }

  const online = R.isBoolean(window.navigator?.onLine) ? window.navigator.onLine : true;

  if (!online && (!options || options.detectNetworkStatus !== false)) {
    text = t`Unable to connect to the servers.`;
    subtext = t`Please check your internet connection and try again.`;
  } else {
    error = getEndpointResponseErrorMessage(error);

    if (subtext || error) {
      subtext = R.compact([subtext, error]).join('. ');
    }
  }

  return danger(text, subtext, options);
}
