import React, { memo, ReactNode } from 'react';
interface ComingSoonProps {
  children?: string | ReactNode;
}
export const ComingSoon = memo((props: ComingSoonProps) => {
  return (
    <div className="absolute flex items-center flex-column gap-0.5 justify-center top-0 bottom-0 left-0 right-0 coming-soon">
      {!!props.children && <h1 className="text-xl font-medium text-center mb-2">{props.children}</h1>}
      <div className="text-gradient">Coming Soon</div>
    </div>
  );
});
