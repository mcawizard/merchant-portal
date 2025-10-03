import { useRef, useMemo } from 'react';
import { Observable, Subscription, isObservable } from 'rxjs';
import { useWillUnmount } from '../react/lifecycle';

export function useObservableCallback<F extends (...args: any[]) => void | Observable<any>>(fn: F, ...args: Parameters<F>) {
  const subRef = useRef<Subscription>();

  const callback = useMemo(() => {
    if (subRef.current) {
      subRef.current.unsubscribe();
      subRef.current = undefined;
    }

    return () => {
      const result = fn(...args);
      if (isObservable(result)) {
        subRef.current = result.subscribe();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn, ...args]);

  useWillUnmount(() => {
    if (subRef.current) {
      subRef.current.unsubscribe();
      subRef.current = undefined;
    }
  });

  return callback;
}
