import { createContext, useContext, useMemo } from 'react';
import { isObservable } from 'rxjs';
import { useObservable } from '@core/utils/hooks/rxjs';
import { SubmittingState } from './submitting_state';

const Context = createContext<SubmittingState | null>(null);

export const SubmittingStateContext = Context.Provider;

export function useSubmittingStateContext() {
  return useContext(Context);
}

export function useSubmittingState(state: SubmittingState | SubmittingState['state$']) {
  const state$ = useMemo(() => (isObservable(state) ? state : state.state$), [state]);
  const submitting = useObservable(state$)!;

  return submitting;
}
