import { classnames, CssProp } from '@core/utils/css';
import React, { ButtonHTMLAttributes, Fragment, memo, PropsWithChildren, ReactNode, useMemo } from 'react';
import { WithTooltip } from '@modules/common';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends Omit<AntButtonProps, 'icon' | 'type'> {
  icon?: string;
  type?: 'submit' | 'button';
}

export const Button = memo((props: ButtonProps) => {
  const { color = 'primary', type = 'button', variant = 'solid', icon, ...rest } = props;
  return <AntButton htmlType={type} color={color} variant={variant} icon={getIcon(icon)} disabled={rest.disabled} {...rest}></AntButton>;
});

function getIcon(icon?: string, iconExtraClasses?: string) {
  if (!icon) return null;
  return <i className={`font-size-16 align-middle mr-2 ${iconExtraClasses} ${icon}`}></i>;
}
