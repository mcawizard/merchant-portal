// Import Dependencies
import React, { memo } from 'react';
import clsx from 'clsx';
import { useBreakpointsContext } from '@modules/theme/contexts/breakpoint/context';
import { Link, useLocation } from 'react-router-dom';
import { LeftPanelNavigationItem } from '@modules/theme/navigation/menu';
import { isRouteActive } from '@modules/theme/hooks';
interface MenuItemProps {
  data: LeftPanelNavigationItem;
}
export const MenuItem = memo((props: MenuItemProps) => {
  const { data } = props;
  const { path } = data;
  const { lgAndDown } = useBreakpointsContext();
  // const { close } = useSidebarContext();

  const title = data.title;
  const { pathname } = useLocation();
  const isActive = isRouteActive(path, pathname);

  const handleMenuItemClick = () => lgAndDown && close();

  return (
    <Link
      to={path}
      onClick={handleMenuItemClick}
      className={clsx(
        'text-xs-plus flex cursor-pointer items-center justify-between px-2 tracking-wide outline-hidden transition-[color,padding-left,padding-right] duration-300 ease-in-out hover:ltr:pl-4 hover:rtl:pr-4',
        isActive
          ? 'text-primary-600 dark:text-primary-400 font-medium'
          : 'dark:text-dark-200 dark:hover:text-dark-50 dark:focus:text-dark-50 text-gray-600 hover:text-gray-900 focus:text-gray-900',
      )}
    >
      <div data-menu-active={false} className="flex min-w-0 items-center justify-between" style={{ height: '34px' }}>
        <div className="flex min-w-0 items-center space-x-2 ">
          <div
            className={clsx(
              false ? 'bg-primary-600 dark:bg-primary-400 opacity-80' : 'opacity-50 transition-all',
              'size-1.5 rounded-full border border-current',
            )}
          ></div>
          <span className="truncate">{title}</span>
        </div>
      </div>
    </Link>
  );
});
