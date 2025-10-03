import React, { memo } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { LeftPanelItem } from './Menu/LeftPanelItem';
import { settings } from './Menu/settings';
import { useThemeContext } from '@modules/theme/contexts/theme/context';
import { Styles } from '@core/utils/css';
import { Menu } from './Menu';
import { LeftPanelNavigationItem } from '@modules/theme/navigation/menu';
import { ProfileMenu } from './ProfileMenu';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';

export interface LeftPanelProps {
  nav: LeftPanelNavigationItem[];
  activeSegment: string;
  setActiveSegment: (path: string) => void;
}

export const LeftPanel = memo((props: LeftPanelProps) => {
  const { nav, activeSegment, setActiveSegment } = props;
  const { cardSkin } = useThemeContext();
  const user = useObservable(Session.user$);
  return (
    <div className="main-panel">
      <div
        className={clsx(
          'flex h-full w-full flex-col items-center border-gray-150 bg-white dark:border-dark-600/80 ltr:border-r rtl:border-l',
          'dark:bg-transparent',
        )}
      >
        {/* Application Logo */}
        <div className="flex pt-3.5">
          <Link to="/home">
            <img src={Styles.assets('images/favicon.png')} className="size-10 text-primary-600 dark:text-primary-400" />
          </Link>
        </div>

        <Menu nav={nav} activeSegment={activeSegment} setActiveSegment={setActiveSegment} />
        <span className=" company-name shiny-text">{user?.companyName}</span>
        {/* Bottom Links */}
        <div className="flex flex-col items-center space-y-3 py-2.5">
          <LeftPanelItem to="/settings/settings" title={'Settings'} isActive={activeSegment === settings.path} icon={'fa-duotone fa-solid fa-gear'} />
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
});
