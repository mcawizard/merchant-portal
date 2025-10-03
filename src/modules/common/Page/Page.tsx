import React, { memo, PropsWithChildren, useEffect } from 'react';
import clsx from 'clsx';
export interface PageProps {
  noSidebar?: boolean;
  className?: string;
}

export const Page = memo((props: PropsWithChildren<PageProps>) => {
  const { className, noSidebar = false } = props;

  return (
    <main className={clsx('main-content transition-content grid grid-cols-1', noSidebar ? 'noSidebar' : '', className)}>
      <div className="transition-content w-full px-(--margin-x) pt-3 lg:pt-3">
        <div className="min-w-0">{props.children}</div>
      </div>
    </main>
  );
});
