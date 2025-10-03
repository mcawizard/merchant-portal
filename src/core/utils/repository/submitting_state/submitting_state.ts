import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, switchMap, finalize } from 'rxjs/operators';

export class SubmittingState {
  private readonly _state$: BehaviorSubject<boolean>;
  readonly state$: Observable<boolean>;

  constructor(options?: { defaultValue?: boolean }) {
    this._state$ = new BehaviorSubject((options && options.defaultValue) || false);
    this.state$ = this._state$.asObservable();
  }

  public run = <T>() => {
    return (source: Observable<T>) =>
      of(null).pipe(
        tap(() => {
          this._state$.next(true);
        }),
        switchMap(() => source),
        finalize(() => {
          this._state$.next(false);
        }),
      );
  };
}

export class MultipleSubmittingState<V> {
  private readonly _state$: BehaviorSubject<NonNullable<V> | null>;
  readonly state$: Observable<V | null>;

  constructor(options?: { defaultValue?: V }) {
    this._state$ = new BehaviorSubject((options && options.defaultValue) || null);
    this.state$ = this._state$.asObservable();
  }

  public run = <T>(value: NonNullable<V>) => {
    return (source: Observable<T>) =>
      of(null).pipe(
        tap(() => {
          this._state$.next(value);
        }),
        switchMap(() => source),
        finalize(() => {
          this._state$.next(null);
        }),
      );
  };
}
