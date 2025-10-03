// Import Dependencies
import React, { ElementType } from 'react';
import clsx from 'clsx';
import { useBreakpointsContext } from '@modules/theme/contexts/breakpoint/context';
import { Link } from 'react-router-dom';
import { useHistory } from '@core/router';
import { useMainPageContext } from '@modules/MainPage/context';

export interface LeftPanelItemProps {
  title: string;
  isActive?: boolean;
  icon?: string;
  isButton?: boolean;
  to?: string;
  onClick?: () => void;
  onSegmentSelect?: (path: string) => void;
}

export function LeftPanelItem({ title, isActive, icon, isButton = false, onClick, to, onSegmentSelect, ...rest }: LeftPanelItemProps) {
  const { lgAndUp } = useBreakpointsContext();
  const { sidebar, setConfig } = useMainPageContext();
  const history = useHistory();

  // Always use button for menu items when coming from no-sidebar pages
  // This ensures we can properly handle state restoration
  const shouldUseLink = !isButton && to && sidebar;
  const Element: ElementType = shouldUseLink ? Link : 'button';

  const handleClick = () => {
    // For all button clicks, always check if we need to restore sidebar
    if (isButton || (!sidebar && to)) {
      // Restore sidebar state first
      if (setConfig) {
        setConfig(prev => ({ ...prev, sidebar: true }));
      }

      // Handle the click action (either onClick or navigate)
      if (onClick) {
        onClick();
      } else if (to) {
        // Update the active segment
        if (onSegmentSelect) {
          onSegmentSelect(to);
        }
        // Navigate
        history.push(to);
      }
    } else if (onClick) {
      onClick();
    }
  };

  const elementProps = {
    ...rest,
    ...(shouldUseLink && { to }),
    ...(!shouldUseLink && { onClick: handleClick }),
  };

  return (
    <Element
      data-root-menu-item
      {...{
        'data-tooltip': lgAndUp ? true : undefined,
        'data-tooltip-content': title,
        'data-tooltip-place': 'right',
      }}
      className={clsx(
        'relative flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg outline-hidden transition-colors duration-200',
        isActive
          ? 'bg-primary-600/10 text-primary-600 dark:bg-primary-400/15 dark:text-primary-400'
          : 'hover:bg-primary-600/20 focus:bg-primary-600/20 active:bg-primary-600/25 dark:text-dark-200 dark:hover:bg-dark-300/20 dark:focus:bg-dark-300/20 dark:active:bg-dark-300/25 text-gray-500',
      )}
      {...elementProps}
    >
      <i className={`${icon}`} style={{ fontSize: 22 }} />
    </Element>
  );
}
