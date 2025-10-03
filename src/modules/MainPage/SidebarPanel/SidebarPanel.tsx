import React, { memo } from 'react';
import clsx from 'clsx';
import { Menu } from './Menu/Menu';
import { useThemeContext } from '@modules/theme/contexts/theme/context';
import { LeftPanelNavigationItem } from '@modules/theme/navigation/menu';
import { Button } from 'antd';

export interface SidebarPanelProps {
  currentSegment?: LeftPanelNavigationItem;
  close?: () => void;
  pathname: string;
}
export const SidebarPanel = memo((props: SidebarPanelProps) => {
  const { currentSegment, close, pathname } = props;
  const { cardSkin } = useThemeContext();

  const title = currentSegment?.title;

  return (
    <div
      className={clsx(
        'prime-panel flex h-full flex-col',
        cardSkin === 'shadow-sm' ? 'shadow-soft dark:shadow-dark-900/60' : 'dark:border-dark-600/80 ltr:border-r rtl:border-l',
      )}
    >
      <div
        className={clsx('flex h-full grow flex-col  ltr:pl-(--main-panel-width) rtl:pr-(--main-panel-width)', 'bg-dark-blury dark:xl:bg-transparent')}
      >
        <div className="relative flex h-16 w-full shrink-0 items-center justify-between pl-4 pr-1 rtl:pl-1 rtl:pr-4">
          <p className="truncate text-base tracking-wider text-gray-800 dark:text-dark-100">{title}</p>
          <div className="xl:hidden">
            <Button onClick={close} type="text" shape="circle">
              <i className="fa-duotone fa-solid fa-chevron-left" />
            </Button>
          </div>
        </div>
        {currentSegment?.children && <Menu items={currentSegment?.children.filter(item => !item.hide)} pathname={pathname} />}
      </div>
    </div>
  );
});
