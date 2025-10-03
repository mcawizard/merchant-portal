import { createSafeContext } from '@modules/theme/createSafeContext';
import { SidebarContextType } from './Provider';

export const { Provider: SidebarContext, useSafeContext: useSidebarContext } = createSafeContext<SidebarContextType>(
  'useSidebarContext must be used within SidebarProvider',
);
