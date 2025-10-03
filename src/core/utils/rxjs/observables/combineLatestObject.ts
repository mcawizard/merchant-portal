import { Observable, ObservedValueOf, combineLatest } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { R } from '@core/utils/r';

export function combineLatestObject<T extends Record<string, Observable<any>>>(
  sourcesObject: T,
  options?: { debounced?: boolean | number; share?: boolean | number },
): Observable<{ [K in keyof T]: ObservedValueOf<T[K]> }> {
  const keys = R.keys(sourcesObject);

  let obs$ = combineLatest(keys.map(key => sourcesObject[key].pipe(distinctUntilChanged()))).pipe(
    map(results => {
      const resultsObject = results.reduce((resultsObject, result, index) => {
        resultsObject[keys[index]] = result;
        return resultsObject;
      }, {});

      return resultsObject;
    }),
  );

  if (options && options.debounced) {
    obs$ = obs$.pipe(debounceTime(R.isNumber(options.debounced) ? options.debounced : 0));
  }

  if (options && options.share) {
    obs$ = obs$.pipe(shareReplay(R.isNumber(options.share) ? options.share : 1));
  }

  return obs$;
}
