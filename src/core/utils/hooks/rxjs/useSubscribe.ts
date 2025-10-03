import { useEffect, useRef, useMemo } from 'react';
import { Observable, Subscription, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

/**
 * only "observable$" is added to dependencies list
 */
export function useSubscribe<T>(observable: Observable<T> | null | undefined, onTap?: (value: T) => void, onError?: (error: any) => void) {
  const onTapRef = useRef(onTap);
  const onErrorRef = useRef(onError);

  onTapRef.current = onTap;
  onErrorRef.current = onError;

  const obs$ = useMemo(
    () =>
      observable &&
      observable.pipe(
        tap(value => {
          if (onTapRef.current) onTapRef.current(value);
        }),
        catchError(error => {
          if (onErrorRef.current) onErrorRef.current(error);
          return of(null);
        }),
      ),
    [observable],
  );

  const subRef = useRef<Subscription | null | undefined>(null);

  useEffect(() => {
    if (subRef.current) subRef.current.unsubscribe();

    subRef.current = obs$ && obs$.subscribe();

    return () => {
      if (subRef.current) subRef.current.unsubscribe();
    };
  }, [obs$]);
}
