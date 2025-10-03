import React, { memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

export interface CustomSidebarProps {
  a?: string;
}

export const CustomSidebar = memo((props: PropsWithChildren<CustomSidebarProps>) => {
  return (
    <div className={clsx('prime-panel flex flex-col', 'border-gray-200 dark:border-dark-600/80 ltr:border-r rtl:border-l')}>
      <div
        className={clsx('flex h-full grow flex-col bg-transparent ltr:pl-(--main-panel-width) rtl:pr-(--main-panel-width)', 'dark:bg-transparent')}
      >
        {props.children}
      </div>
    </div>
  );
});
