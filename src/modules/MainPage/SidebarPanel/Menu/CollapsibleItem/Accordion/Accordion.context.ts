import { createSafeContext } from '@modules/theme/createSafeContext';
import { AccordionContextValue } from './AccordionProvider';

export const { Provider: AccordionContextProvider, useSafeContext: useAccordionContext } = createSafeContext<AccordionContextValue>(
  'useAccordionContext must be used within AccordionProvider',
);
