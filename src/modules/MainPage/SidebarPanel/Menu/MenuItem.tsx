import React, { memo } from 'react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { useBreakpointsContext } from '@modules/theme/contexts/breakpoint/context';
import { LeftPanelNavigationItem } from '@modules/theme/navigation/menu';
import { useSidebarContext } from '@modules/theme/contexts/sidebar/context';
import { isRouteActive } from '@modules/theme/hooks';

// ----------------------------------------------------------------------
export interface MenuItemProps {
  data: LeftPanelNavigationItem;
}

export const MenuItem = memo((props: MenuItemProps) => {
  const { data } = props;
  const { path } = data;
  const { lgAndDown } = useBreakpointsContext();
  const { close } = useSidebarContext();
  const title = data.title;
  const { pathname } = useLocation();
  const isActive = isRouteActive(path, pathname);

  const handleMenuItemClick = () => lgAndDown && close();

  return (
    <Link
      to={path}
      onClick={handleMenuItemClick}
      className={clsx(
        'outline-hidden transition-colors duration-300 ease-in-out',
        isActive ? 'font-medium text-white-600 dark:text-white' : 'text-gray-600 hover:text-gray-900 dark:text-dark-200 dark:hover:text-dark-50',
      )}
    >
      <div data-menu-active={false} style={{ height: '34px' }} className="flex items-center justify-between text-xs-plus tracking-wide">
        <span className="mr-1 truncate"> {title}</span>
        {/* {info && info.val && (
          <Badge color={info.color} variant="soft" className="h-4.5 min-w-[1rem] shrink-0 p-[5px] text-tiny-plus">
            {info.val}
          </Badge>
        )} */}
      </div>
    </Link>
  );
});
