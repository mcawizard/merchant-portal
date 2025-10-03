import { createSafeContext } from '@modules/theme/createSafeContext';

export const { Provider: AccordionItemContextProvider, useSafeContext: useAccordionItemContext } = createSafeContext<{ value: string }>(
  'useAccordionItemContext must be used within AccordionItemProvider',
);
