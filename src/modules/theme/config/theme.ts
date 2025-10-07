import { colors } from './constants/colors';

export interface ColorScheme {
  name: string;
}
export interface ThemeConfig {
  themeMode: 'light' | 'dark' | 'system';
  isMonochrome: boolean;
  themeLayout: 'main-layout' | 'sideblock';
  cardSkin: 'bordered' | 'shadow-sm';
  darkColorScheme: ColorScheme;
  lightColorScheme: ColorScheme;
  primaryColorScheme: ColorScheme;
  defaultLang: string;
  fallbackLang: string;
  notification: any;
}

const DEFAULT_DARK_COLOR = 'cinder';
// Options: "cinder", "navy", "mirage", "black", "mint"

const DEFAULT_LIGHT_COLOR = 'slate';
// Options: "slate", "gray", "neutral"

const DEFAULT_PRIMARY_COLOR = 'indigo';
// Options: "indigo", "blue", "green", "amber", "purple", "rose"

// Default theme configuration
export const defaultTheme: ThemeConfig = {
  themeMode: 'light', // Force light mode - dark theme disabled
  // Options: "light", "dark", "system"
  isMonochrome: false,
  // If true, the theme uses a monochrome color palette

  themeLayout: 'main-layout',
  // Options: "main-layout", "sideblock"
  cardSkin: 'bordered',
  // Options: "bordered", "shadow-sm"

  // Dark mode color scheme
  darkColorScheme: {
    name: DEFAULT_LIGHT_COLOR,
    // ...colors[DEFAULT_DARK_COLOR],
  },

  // Light mode color scheme
  lightColorScheme: {
    name: DEFAULT_LIGHT_COLOR,
    ...colors[DEFAULT_LIGHT_COLOR],
  },

  // Primary color scheme
  primaryColorScheme: {
    name: DEFAULT_PRIMARY_COLOR,
    ...colors[DEFAULT_PRIMARY_COLOR],
  },

  // Language settings
  defaultLang: 'en',
  fallbackLang: 'en',

  // Notification settings
  notification: {
    isExpanded: false,
    position: 'bottom-right',
    visibleToasts: 4,
  },
};
