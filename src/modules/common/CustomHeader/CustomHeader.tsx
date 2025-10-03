import React, { memo, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { SidebarToggleButton } from '@modules/MainPage/SidebarToggleButton';
import { useMainPageConfig } from '@modules/MainPage/context';

export interface CustomHeaderProps {
  hasSidebar?: boolean;
}

export const CustomHeader = memo((props: PropsWithChildren<CustomHeaderProps>) => {
  const { hasSidebar = true } = props;

  return (
    <header
      className={clsx(
        'dark:bg-transparent',

        'transition-content relative z-10 flex h-[65px] w-full shrink-0 items-center justify-between border-b border-gray-150 bg-white px-[calc(var(--margin-x)-.5rem)] shadow-xs dark:border-dark-600 mb-3',

        hasSidebar ? 'px-[calc(var(--margin-x)-.5rem)]' : 'px-[calc(var(--margin-x)-3rem)]',
      )}
    >
      <div className="flex min-w-0 items-center gap-1">
        <div className="size-7 ltr:ml-1 rtl:mr-1">
          <SidebarToggleButton />
        </div>
      </div>

      <div className="flex min-w-0 items-center flex-1 ">{props.children}</div>
      {/* <div className="flex items-center gap-2 ltr:-mr-1.5 rtl:-ml-1.5">
        <div className="btn header-item noti-icon align-items-center d-flex justify-content-center" onClick={() => {}}>
          <i className="bx bxs-help-circle" style={{ fontSize: 'x-large' }} />
        </div>
      </div> */}
    </header>
  );
});
