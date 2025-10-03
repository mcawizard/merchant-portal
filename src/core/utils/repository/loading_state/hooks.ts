import { useMemo } from 'react';
import { isObservable } from 'rxjs';
import { useObservable } from '@core/utils/hooks/rxjs';
import { LoadingState } from './loading_state';

export function useLoadingState(state: LoadingState | LoadingState['state$']) {
  const state$ = useMemo(() => (isObservable(state) ? state : state.state$), [state]);
  const loading = useObservable(state$)!;

  return loading;
}
