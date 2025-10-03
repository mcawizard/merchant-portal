import { createContext, useContext } from 'react';
import { BillingPageBloc } from './BillingPageBloc';

export interface BillingPageContextValue {
  bloc: BillingPageBloc;
}

export const BillingPageContext = createContext<BillingPageContextValue>({} as BillingPageContextValue);

export function useBillingPage() {
  return useContext(BillingPageContext);
}
