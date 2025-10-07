// Import Dependencies
import React from 'react';
// Local Imports
import { ThemeContext } from './context';
import { defaultTheme } from '@modules/theme/config/theme';
import { useLocalStorage, useMediaQuery } from '@modules/theme/hooks';
import { colors } from '@modules/theme/config/constants/colors';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

const initialState = {
  ...defaultTheme,
  isDark: false, // Explicitly disable dark theme
  setThemeMode: () => {},
  setThemeLayout: () => {},
  toggleMonochromeMode: () => {},
  setLightColorScheme: () => {},
  setDarkColorScheme: () => {},
  setPrimaryColorScheme: () => {},
  setNotificationPosition: () => {},
  setNotificationExpand: () => {},
  resetTheme: () => {},
};

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: light)';

const _html = document?.documentElement;

export function ThemeProvider({ children }) {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: 'light', // Force light mode
    themeLayout: initialState.themeLayout,
    cardSkin: initialState.cardSkin,
    isMonochrome: initialState.isMonochrome,
    darkColorScheme: initialState.darkColorScheme,
    lightColorScheme: initialState.lightColorScheme,
    primaryColorScheme: initialState.primaryColorScheme,
    notification: { ...initialState.notification },
  });

  // Force isDark to always be false - dark theme disabled
  const isDark = false;

  const setThemeMode = val => {
    setSettings(settings => {
      return {
        ...settings,
        themeMode: val,
      };
    });
  };

  const setThemeLayout = val => {
    setSettings({
      ...settings,
      themeLayout: val,
    });
  };

  const setMonochromeMode = val => {
    setSettings({
      ...settings,
      isMonochrome: val,
    });
  };

  const setDarkColorScheme = val => {
    setSettings({
      ...settings,
      darkColorScheme: {
        name: val,
        ...colors[val],
      },
    });
  };

  const setLightColorScheme = val => {
    setSettings({
      ...settings,
      lightColorScheme: {
        name: val,
        ...colors[val],
      },
    });
  };

  const setPrimaryColorScheme = val => {
    setSettings(settings => {
      return {
        ...settings,
        primaryColorScheme: {
          name: val,
          ...colors[val],
        },
      };
    });
  };

  const setNotificationPosition = val => {
    setSettings({
      ...settings,
      notification: {
        ...settings.notification,
        position: val,
      },
    });
  };

  const setNotificationExpand = val => {
    setSettings({
      ...settings,
      notification: {
        ...settings.notification,
        isExpanded: val,
      },
    });
  };

  const setNotificationMaxCount = val => {
    setSettings({
      ...settings,
      notification: {
        ...settings.notification,
        visibleToasts: val,
      },
    });
  };

  const setCardSkin = val => {
    setSettings(settings => {
      return { ...settings, cardSkin: val };
    });
  };

  const resetTheme = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      isMonochrome: initialState.isMonochrome,
      darkColorScheme: initialState.darkColorScheme,
      lightColorScheme: initialState.lightColorScheme,
      primaryColorScheme: initialState.primaryColorScheme,
      cardSkin: initialState.cardSkin,
      notification: { ...initialState.notification },
    });
  };

  useEffect(() => {
    // Force remove dark class since dark theme is disabled
    _html.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    settings.isMonochrome ? document.body.classList.add('is-monochrome') : document.body.classList.remove('is-monochrome');
  }, [settings.isMonochrome]);

  useEffect(() => {
    _html.dataset.themeLight = settings.lightColorScheme.name;
  }, [settings.lightColorScheme]);

  useEffect(() => {
    _html.dataset.themeDark = settings.darkColorScheme.name;
  }, [settings.darkColorScheme]);

  useEffect(() => {
    _html.dataset.themePrimary = settings.primaryColorScheme.name;
  }, [settings.primaryColorScheme]);

  useEffect(() => {
    _html.dataset.cardSkin = settings.cardSkin;
  }, [settings.cardSkin]);

  useEffect(() => {
    if (document) document.body.dataset.layout = settings.themeLayout;
  }, [settings.themeLayout]);

  if (!children) {
    return null;
  }

  return (
    <ThemeContext
      value={{
        ...settings,
        isDark: false,
        setMonochromeMode,
        setThemeMode,
        setThemeLayout,
        setLightColorScheme,
        setDarkColorScheme,
        setPrimaryColorScheme,
        setNotificationPosition,
        setNotificationExpand,
        setNotificationMaxCount,
        setCardSkin,
        setSettings,
        resetTheme,
      }}
    >
      {children}
    </ThemeContext>
  );
}
