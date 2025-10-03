import { Alert, AlertProps } from 'antd';
import React, { CSSProperties, memo, ReactNode } from 'react';
import { Badge } from 'reactstrap';

export interface InfoBannerProps extends AlertProps {
  children: string | ReactNode;
}

export const InfoBanner = memo((props: InfoBannerProps) => {
  const { children, ...rest } = props;
  return <Alert {...rest} message={props.children}></Alert>;
});
