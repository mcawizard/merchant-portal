import { ThemeConfig } from '@modules/theme/config/theme';
import { createSafeContext } from '../../createSafeContext';

export const { Provider: ThemeContext, useSafeContext: useThemeContext } = createSafeContext<ThemeConfig>(
  'useThemeContext must be used within ThemeProvider',
);
