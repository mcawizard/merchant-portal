import { Observable } from 'rxjs';

export function toPromise<T>(obs$: Observable<T>) {
  return new Promise<T>((resolve, reject) => {
    let _value: T;

    obs$.subscribe({
      next: value => (_value = value),
      error: reject,
      complete: () => resolve(_value),
    });
  });
}
