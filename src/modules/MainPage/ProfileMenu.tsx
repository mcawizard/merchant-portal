import { UserService } from '@business/services/user_service';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { Avatar } from 'antd';
import React, { memo, useCallback, useState, useMemo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { SwitchAccountMenu } from './SwtichAccountMenu';

export const ProfileMenu = memo(() => {
  const [menu, setMenu] = useState(false);
  const user = useObservable(Session.user$);
  const handleLogout = useCallback(() => {
    Session.logout().subscribe();
  }, []);

  if (!user) return null;

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inlie-block">
        <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
          <Avatar src={user.avatar} size={'large'}>
            {UserService.getInitials(user.name)}
          </Avatar>
          {/* <span className="ml-2 mr-1">{user?.firstName}</span>
          <i className="fa fa-chevron-down" /> */}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag={Link} to="/my-account">
            <i className="fa-duotone fa-solid fa-user-large font-size-16 align-middle mr-2" />
            My Account
          </DropdownItem>
          <DropdownItem tag={Link} to="/connections">
            <i className="ffa-duotone fa-solid fa-code font-size-16 align-middle mr-2" />
            Connections
          </DropdownItem>
          <SwitchAccountMenu />
          <div className="dropdown-divider" />
          <a className="dropdown-item" onClick={handleLogout}>
            <i className="fa-duotone fa-solid fa-power-off font-size-16 align-middle mr-2 text-danger" />
            <span>Logout</span>
          </a>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
});
