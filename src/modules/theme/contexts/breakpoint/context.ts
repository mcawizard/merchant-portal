import { createSafeContext } from '../../createSafeContext';
import { BreakpointContextType } from './Provider';

export const { Provider: BreakpointsContext, useSafeContext: useBreakpointsContext } = createSafeContext<BreakpointContextType>(
  'useBreakpointsContext must be used within BreakpointsContext',
);
