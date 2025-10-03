import { AppModule } from '@business/entities/permission';
import { PermissionService } from '@business/services/permission_service';
import { Session } from '@modules/auth/session';

export interface LeftPanelNavigationItem {
  title: string;
  icon?: string;
  path: string;
  isButton?: boolean;
  hide?: boolean;
  module?: AppModule;

  divider?: boolean;
  children?: LeftPanelNavigationItem[];
}

export const LEFT_PANEL_NAVIGATION: LeftPanelNavigationItem[] = [
  {
    path: '/home',
    title: 'Home',
    icon: 'fa-duotone fa-solid fa-house-chimney-user',
    isButton: true,
    children: [{ path: '/home', title: 'Home' }],
  },
  {
    path: '/data',
    title: 'Data',
    icon: 'fa-duotone fa-solid fa-database',
    isButton: true,
    children: [
      {
        path: '/data/files',
        title: 'Files',
      },
      {
        path: '/data/background',
        title: 'Background',
      },
      // {
      //   path: '/data/library',
      //   title: 'Library',
      // },
    ],
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: 'fa-duotone fa-solid fa-sparkles',
    hide: true,
    isButton: true,
    children: [
      { path: '/settings/my-account', title: 'My Account' },
      { path: '/settings/settings', title: 'Settings' },
      { path: '/settings/divider', divider: true, title: '' },
      // { path: '/settings/billing', title: 'Billing', hide: !PermissionService.canView(Session.user, AppModule.billing) },
      { path: '/settings/divider', divider: true, title: '', hide: !PermissionService.canView(Session.user, AppModule.users) },
      { path: '/settings/phones', title: 'Phones', hide: !PermissionService.canView(Session.user, AppModule.phones) },
    ],
  },
];
