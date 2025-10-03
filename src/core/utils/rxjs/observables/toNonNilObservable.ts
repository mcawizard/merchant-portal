import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { R } from '@core/utils/r';

export function toNonNilObservable<T>(obs$: Observable<T | null>) {
  return obs$.pipe(filter(value => !R.isNil(value))) as Observable<T>;
}
