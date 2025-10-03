import { Observable, Subscription } from 'rxjs';

export function switchObservable<T, F extends (...args: any[]) => Observable<T>>(fn: F): (...args: Parameters<F>) => Observable<T> {
  return function (...args: Parameters<F>): Observable<T> {
    const obs$ = fn(...args);
    let lastSubscription: Subscription | null = null;

    return new Observable<T>(observer => {
      if (lastSubscription) lastSubscription.unsubscribe();
      lastSubscription = obs$.subscribe(observer);

      observer.add(() => {
        if (lastSubscription) lastSubscription.unsubscribe();
      });
    });
  };
}
