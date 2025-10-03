import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LeftPanel } from './LeftPanel';
import { LEFT_PANEL_NAVIGATION } from '@modules/theme/navigation/menu';
import { SidebarPanel } from './SidebarPanel';
import { isRouteActive, useDidUpdate } from '@modules/theme/hooks';
import { useSidebarContext } from '@modules/theme/contexts/sidebar/context';
import { useBreakpointsContext } from '@modules/theme/contexts/breakpoint/context';
import { useObservable } from '@core/utils/hooks/rxjs/useObservable';
import { Session } from '@modules/auth/session';
import { CommonService } from '@business/services/common_service';

export interface MainSidebarProps {
  sidebar?: boolean;
}

export const MainSidebar = memo((props: MainSidebarProps) => {
  const { sidebar = true } = props;
  const { pathname } = useLocation();
  const ref = useRef<any>();
  const { name, lgAndDown } = useBreakpointsContext();
  const { isExpanded, close } = useSidebarContext();

  const initialSegment = useMemo(
    () => {
      // First check for direct path matches
      let initial = LEFT_PANEL_NAVIGATION.find(item => isRouteActive(item.path, pathname));

      // If no direct match, check if current path matches any child paths
      if (!initial) {
        initial = LEFT_PANEL_NAVIGATION.find(item => item.children && item.children.some(child => isRouteActive(child.path, pathname)));
      }

      if (!initial) {
        return LEFT_PANEL_NAVIGATION[0];
      }
      return initial;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const [activeSegmentPath, setActiveSegmentPath] = useState(initialSegment!.path);

  const currentSegment = useMemo(() => {
    return LEFT_PANEL_NAVIGATION.find(item => item.path === activeSegmentPath);
  }, [activeSegmentPath]);

  useDidUpdate(() => {
    // Find the segment that matches the current pathname (including hidden items)
    let matchingSegment = LEFT_PANEL_NAVIGATION.find(item => isRouteActive(item.path, pathname));

    // If no direct match, check if current path matches any child paths
    if (!matchingSegment) {
      matchingSegment = LEFT_PANEL_NAVIGATION.find(item => item.children && item.children.some(child => isRouteActive(child.path, pathname)));
    }

    // Update active segment if we found a match and it's different from current
    if (matchingSegment && matchingSegment.path !== activeSegmentPath) {
      setActiveSegmentPath(matchingSegment.path);
    }
  }, [pathname, activeSegmentPath]);
  // console.log(lgAndDown, name, isExpanded);

  useDidUpdate(() => {
    if (lgAndDown && isExpanded) {
      close();
    }
  }, [name]);

  const user = useObservable(Session.user$);
  const hasFullAccess = useMemo(() => CommonService.hasFullAccess(user), [user]);

  const visibleNavigation = useMemo(() => {
    if (!hasFullAccess) {
      return LEFT_PANEL_NAVIGATION.filter(item => item.title !== 'Workflows' && !item.hide);
    }
    return LEFT_PANEL_NAVIGATION.filter(item => !item.hide);
  }, [hasFullAccess]);

  return (
    <>
      <LeftPanel nav={visibleNavigation} activeSegment={activeSegmentPath} setActiveSegment={setActiveSegmentPath} />
      {sidebar && <SidebarPanel close={close} currentSegment={currentSegment} pathname={'/'} />}
    </>
  );
});
