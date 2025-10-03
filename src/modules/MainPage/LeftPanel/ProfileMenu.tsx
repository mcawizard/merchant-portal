import React, { memo, useCallback } from 'react';

import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { UserService } from '@business/services';

// ----------------------------------------------------------------------

const links = [
  {
    id: '1',
    title: 'Profile',
    description: 'Your profile Setting',
    to: '/settings/my-account',
    icon: 'fa-duotone fa-solid fa-user',
    color: 'warning',
  },
  // {
  //   id: '4',
  //   title: 'Billing',
  //   description: 'Your billing information',
  //   to: '/settings/billing',
  //   icon: 'fa-duotone fa-solid fa-credit-card',
  //   color: 'error',
  // },
  {
    id: '5',
    title: 'Settings',
    description: 'Settings',
    to: '/settings/settings',
    icon: 'fa-duotone fa-solid fa-gear',
    color: 'success',
  },
];

export const ProfileMenu = memo(() => {
  const user = useObservable(Session.user$);

  const handleLogout = useCallback(() => {
    Session.logout().subscribe();
  }, []);

  if (!user) return null;

  return (
    <Popover className="relative">
      <PopoverButton as={Avatar} size={'large'} src={user.avatar} alt="Profile">
        {UserService.getInitials(user.name)}
      </PopoverButton>
      <Transition
        enter="duration-200 ease-out"
        enterFrom="translate-x-2 opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="duration-200 ease-out"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-2 opacity-0"
      >
        <PopoverPanel
          anchor={{ to: 'right end', gap: 12 }}
          className="border-gray-150 shadow-soft dark:border-dark-600 backdrop-blur-sm  z-70 flex w-64 flex-col rounded-lg border  transition dark:shadow-none"
        >
          {({ close }) => (
            <>
              <div className=" flex items-center gap-4 rounded-t-lg bg-gray-900 px-4 py-4">
                <Avatar size="large" src={user.avatar} alt="Profile">
                  {UserService.getInitials(user.name)}
                </Avatar>
                <div>
                  <Link
                    className="hover:text-white-600 focus:text-primary-600 dark:text-dark-100 dark:hover:text-white-400 dark:focus:text-white-400 text-base font-medium text-gray-700"
                    to="/settings/general"
                  >
                    {user.name}
                  </Link>

                  <p className="dark:text-dark-300 mt-0.5 text-xs text-gray-400">{user.email}</p>
                </div>
              </div>
              <div className="flex flex-col pt-2 pb-4">
                {links.map(link => (
                  <Link
                    key={link.id}
                    to={link.to}
                    onClick={close}
                    className="group profile-menu-item flex items-center gap-3 px-4 py-2 tracking-wide outline-hidden transition-all"
                  >
                    <Avatar shape="square" className={`bg-${link.color}-100 text-${link.color}-600`}>
                      <i className={`${link.icon} `} />
                      {/* <link.Icon className="size-4.5" /> */}
                    </Avatar>
                    <div>
                      <span className="group-hover:text-white-600 group-focus:text-primary-600 dark:text-dark-100 dark:group-hover:text-white-400 dark:group-focus:text-white-400 font-medium text-gray-800 transition-colors">
                        {link.title}
                      </span>
                      <div className="dark:text-dark-300 truncate text-xs text-gray-400">{link.description}</div>
                    </div>
                  </Link>
                ))}
                <div className="px-2 pt-4">
                  <Button className="w-full gap-2 mr-2" variant="outlined" onClick={handleLogout}>
                    <i className="fa-duotone fa-solid fa-left-from-bracket"></i>
                    <span>Logout</span>
                  </Button>
                </div>
              </div>
            </>
          )}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
});
