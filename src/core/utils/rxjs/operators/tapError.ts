import { Observable, ObservableInput, OperatorFunction, ObservedValueOf, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function tapError<T, O extends ObservableInput<any>>(
  selector: ((err?: any, caught?: Observable<T>) => void | null | undefined) | null | undefined,
  rethrow = false,
): OperatorFunction<T, T | ObservedValueOf<O> | null> {
  return catchError((err, caught) => {
    if (selector) selector(err, caught);
    return rethrow ? throwError(err) : of(null);
  });
}

export function ignoreError<T>(): OperatorFunction<T, T | void> {
  return catchError(() => of(undefined));
}
