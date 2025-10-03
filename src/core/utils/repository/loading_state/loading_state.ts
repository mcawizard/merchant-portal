import { tapError } from '@core/utils/rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';

export interface LoadingStateData<E = any> {
  loading: boolean;
  searching: boolean;
  refreshing: boolean;
  loadingOrRefreshing: boolean;
  loaded: boolean;
  error: E | null;
}

export class LoadingState<E = any> {
  private readonly _state$: BehaviorSubject<LoadingStateData<E>>;
  readonly state$: Observable<LoadingStateData<E>>;

  constructor(defaultState?: Partial<LoadingStateData>) {
    this._state$ = new BehaviorSubject<LoadingStateData<E>>({
      loading: true,
      refreshing: false,
      loadingOrRefreshing: false,
      loaded: false,
      searching: false,
      error: null,
      ...defaultState,
    });

    this.state$ = this._state$.asObservable();
  }

  set(state: Partial<LoadingStateData>) {
    this._state$.next({ ...this._state$.value, ...state });
  }

  run = <T>(options?: { refresh?: boolean; searching?: boolean; state?: Partial<LoadingStateData> }) => {
    return (source: Observable<T>) =>
      of(null).pipe(
        tap(() => {
          const refreshing = (options && options.refresh) || false;
          const searching = options?.searching || (options && options.state && options.state.searching) || false;

          this.set({
            loading: !refreshing,
            refreshing,
            searching,
            loadingOrRefreshing: true,
            error: null,
            ...(options && options.state),
          });
        }),
        switchMap(() => source),
        tap(() => {
          this.set({ loaded: true });
        }),
        tapError(error => {
          this.set({ error });
        }),
        finalize(() => {
          this.set({
            loading: false,
            refreshing: false,
            searching: false,
            loadingOrRefreshing: false,
          });
        }),
      );
  };

  refresh = (state?: Partial<LoadingStateData>) => this.run({ refresh: true, state });
}
