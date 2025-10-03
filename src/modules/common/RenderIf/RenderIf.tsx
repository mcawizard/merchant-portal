import React, { memo, PropsWithChildren } from 'react';

export interface OnlyRenderProps {
  condition: boolean;
}

export const RenderIf = memo((props: PropsWithChildren<OnlyRenderProps>) => {
  const { condition, children } = props;
  if (condition) {
    return <>{children}</>;
  }

  return null;
});
