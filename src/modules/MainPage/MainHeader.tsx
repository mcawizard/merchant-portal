import React, { memo, ReactNode, useMemo, useState, useEffect, Fragment } from 'react';
import { MainNavBar } from './MainNavBar';
import './header.scss';
import { useHistory } from '@core/router';
import { useObservable } from '@core/utils/hooks/rxjs';
import clsx from 'clsx';
import { SidebarToggleButton } from './SidebarToggleButton';

export interface DashboadHeaderProps {
  switcher?: ReactNode;
  children?: ReactNode;
  header: boolean;
}

export const MainHeader = memo((props: DashboadHeaderProps) => {
  const { switcher, children, header } = props;
  const [isCompactClose, setCompactClose] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function tToggle() {
    const body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle('sidebar-enable');
    } else {
      body.classList.toggle('vertical-collpsed');
      body.classList.toggle('sidebar-enable');
    }
  }
  const history = useHistory();
  if (!header) return null;

  return (
    <React.Fragment>
      <header
        className={clsx(
          'app-header transition-content sticky top-0 z-20 flex h-[65px] shrink-0 items-center justify-between border-b border-gray-200 bg-white/80 px-(--margin-x) backdrop-blur-sm  dark:border-dark-600',
          'dark:bg-transparent',
        )}
      >
        <SidebarToggleButton />

        {/* <div className="flex items-center gap-2 ltr:-mr-1.5 rtl:-ml-1.5">
          <div className="btn header-item noti-icon align-items-center d-flex justify-content-center" onClick={() => {}}>
            <i className="bx bxs-help-circle" style={{ fontSize: 'x-large' }} />
          </div>
        </div> */}
      </header>
    </React.Fragment>
  );
});
