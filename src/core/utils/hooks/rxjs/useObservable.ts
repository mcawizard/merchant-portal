import { Config } from '@config';
import { R } from '@core/utils/r';
import { useMemo, useRef, useState } from 'react';
import { Observable } from 'rxjs';
import { useSubscribe } from './useSubscribe';

export function useObservable<T>(observable$: Observable<T> | null | undefined): T | null;
export function useObservable<T>(observable$: Observable<T> | null | undefined, defaultValue: T): T;
export function useObservable<T>(observable$: Observable<T> | null | undefined, defaultValue: undefined, nonNil: true): T;

export function useObservable<T>(observable$: Observable<T> | null | undefined, defaultValue?: T, nonNil?: boolean): T | null {
  const skipRef = useRef(false);

  const errorRef = useRef(Config.IS_DEV ? new Error('[useObservable] stacktrace') : null);

  const initialData: T = useMemo(() => {
    let data: any;

    const sub =
      observable$ &&
      observable$.subscribe(value => {
        data = value;
        skipRef.current = true;
      });

    if (sub) sub.unsubscribe();

    if (observable$ && R.isUndefined(data)) {
      if (Config.IS_DEV && R.isUndefined(defaultValue) && nonNil) {
        console.warn('[useObservable] no initial value', observable$, errorRef.current);
      }

      return R.isUndefined(defaultValue) ? null : defaultValue;
    }

    return data;
  }, [observable$, defaultValue, nonNil]);

  const [data, setData] = useState<T>(initialData);

  useSubscribe(
    observable$,
    value => {
      if (skipRef.current) {
        skipRef.current = false;
        return;
      }

      setData(value);
    },
    error => {
      if (Config.IS_DEV) console.warn('[useObservable] unhandled error:', error);
    },
  );

  skipRef.current = false;

  return data;
}

export function useNonNilObservable<T>(observable$: Observable<T>) {
  return useObservable(observable$, undefined, true);
}
