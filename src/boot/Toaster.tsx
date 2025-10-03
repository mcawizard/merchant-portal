import { defaultTheme } from '@modules/theme/config/theme';
import { useThemeContext } from '@modules/theme/contexts/theme/context';
import React from 'react';

import { Toaster as SonnerToaster } from 'sonner';

// ----------------------------------------------------------------------

export default function Toaster() {
  const { notification } = useThemeContext();

  return (
    <SonnerToaster
      theme={true ? 'dark' : 'light'}
      offset="16px"
      position={notification?.position || defaultTheme?.notification?.position}
      expand={notification?.isExpanded || defaultTheme?.notification?.isExpanded}
      visibleToasts={notification?.visibleToasts || defaultTheme?.notification?.visibleToasts}
      richColors
    />
  );
}
