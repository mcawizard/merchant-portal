// Import Dependencies

import { NAV_TYPE_ITEM } from '@modules/theme/config/constants/app';

// Local Imports

// ----------------------------------------------------------------------

export const settings = {
  id: 'settings',
  type: NAV_TYPE_ITEM,
  path: '/settings',
  title: 'Settings',
  transKey: 'nav.settings.settings',
  //   Icon: SettingIcon,
  childs: [
    {
      id: 'general',
      type: NAV_TYPE_ITEM,
      path: '/settings/general',
      title: 'General',
      transKey: 'nav.settings.general',
      //   Icon: UserIcon,
    },
    {
      id: 'appearance',
      type: NAV_TYPE_ITEM,
      path: '/settings/appearance',
      title: 'Appearance',
      transKey: 'nav.settings.appearance',
      //   Icon: TbPalette,
    },
  ],
};
