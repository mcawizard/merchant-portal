import { Observable, Subscriber } from 'rxjs';
// import { R } from 'core/r';

// const callbacks = new Map<any, Subscriber<any>[]>();

export function singleton<T>(key: any) {
  return (obs$: Observable<T>): Observable<T> => {
    return obs$;

    // TODO: singletion is not working correctly. needs to be fixed.

    //   return new Observable<T>(observer => {
    //     if (!callbacks.has(key)) {
    //       callbacks.set(key, []);
    //     }

    //     callbacks.get(key)!.push(observer);

    //     observer.add(() => {
    //       const observers = callbacks.get(key);
    //       if (observers) R.pull(observers, observer);

    //       if (observers && !observers.length) {
    //         callbacks.delete(key);
    //       }
    //     });

    //     const interateObservers = (fn: (observer: Subscriber<any>) => void) => {
    //       const subscribers = callbacks.get(key);
    //       if (subscribers && subscribers.length) {
    //         subscribers.forEach(observer => {
    //           fn(observer);
    //         });
    //       }
    //     };

    //     const sub = obs$.subscribe({
    //       next: value => {
    //         interateObservers(observer => observer.next(value));
    //       },
    //       complete: () => {
    //         interateObservers(observer => observer.complete());
    //       },
    //       error: error => {
    //         interateObservers(observer => observer.error(error));
    //       },
    //     });

    //     observer.add(sub);
    //   });
  };
}
