import React, { memo, useEffect, useRef } from 'react';
import { useSidebarContext } from '@modules/theme/contexts/sidebar/context';
import { Link, useLocation } from 'react-router-dom';
import { ScrollShadow } from '@modules/common/ScrollShadow';
import { LeftPanelItem } from './LeftPanelItem';
import { LeftPanelNavigationItem } from '@modules/theme/navigation/menu';
import { isRouteActive } from '@modules/theme/hooks';
import { useHistory } from '@core/router';
import { useMainPageContext } from '@modules/MainPage/context';
export interface MenuProps {
  nav: LeftPanelNavigationItem[];
  activeSegment: string;
  setActiveSegment: (path: string) => void;
}

export const Menu = memo((props: MenuProps) => {
  const { nav, activeSegment, setActiveSegment } = props;
  const { isExpanded, open } = useSidebarContext();
  const { pathname } = useLocation();
  const history = useHistory();
  const { sidebar, setConfig } = useMainPageContext();

  const handleSegmentSelect = path => {
    setActiveSegment(path);
    if (!isExpanded) {
      open();
    }
  };

  const getProps = (item: LeftPanelNavigationItem) => {
    // Automatically navigate to the first child if it exists
    const hasChildren = item.children && item.children.length > 0;
    const firstChildPath = hasChildren ? item.children[0].path : null;

    // Check if current route matches this menu item or any of its children
    const isCurrentlyActive = item.path === activeSegment || (item.children && item.children.some(child => isRouteActive(child.path, pathname)));

    return {
      to: firstChildPath || item.path,
      onClick: item.isButton
        ? () => {
            // For button menus, restore sidebar state and set active segment
            if (setConfig) {
              setConfig(prev => ({ ...prev, sidebar: true }));
            }
            handleSegmentSelect(item.path);

            // Navigate to first child
            if (firstChildPath) {
              history.push(firstChildPath);
            }
          }
        : undefined,
      onSegmentSelect: path => {
        // Ensure sidebar is enabled when segment is selected
        if (setConfig) {
          setConfig(prev => ({ ...prev, sidebar: true }));
        }
        setActiveSegment(path);
        if (!isExpanded) {
          open();
        }
      },
      isActive: isCurrentlyActive,
      title: item.title,
      isButton: item.isButton,
    };
  };

  return (
    <ScrollShadow
      data-root-menu
      className="hide-scrollbar flex w-full grow flex-col items-center space-y-4 overflow-y-auto  lg:space-y-3 xl:pt-5 2xl:space-y-4"
    >
      {nav.map(item => {
        return <LeftPanelItem key={item.path} {...getProps(item)} icon={item.icon} />;
      })}
    </ScrollShadow>
  );
});
