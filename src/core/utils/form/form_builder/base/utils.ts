import { Observable, Subscription } from 'rxjs';
import { R } from '@core/utils/r';
import { Control } from './Control';
import { StateChanges } from './types';
import { finalize } from 'rxjs/operators';

export function getRootControl(control: Control) {
  while (control.parent) {
    control = control.parent;
  }

  return control;
}

export function filterStateChanges(stateChanges: StateChanges) {
  return R.pickBy(stateChanges, value => value);
}

export function checkAllowedStateChanges(stateChanges: StateChanges, allowedStateChanges?: StateChanges | (keyof StateChanges)[]) {
  if (!allowedStateChanges) {
    stateChanges = filterStateChanges(stateChanges);
    return !R.isEmpty(stateChanges);
  }

  let changes: Record<string, any> = {};

  if (R.isArray(allowedStateChanges)) {
    allowedStateChanges.forEach(change => {
      changes[change] = true;
    });
  } else {
    changes = allowedStateChanges as StateChanges;
  }

  let count = 0;

  R.forEach(stateChanges, (value, key) => {
    if (value && changes[key]) count += 1;
  });

  return count > 0;
}

export function singletonTask<T>(fn: () => Observable<T>, callelable = false) {
  let _sub: Subscription | null = null;

  const cb = (callback?: () => void) => {
    _sub = null;
    if (callback) callback();
  };

  return (callback?: () => void): void => {
    if (_sub && !callelable) return;
    if (_sub) _sub.unsubscribe();

    let done = false;

    _sub = fn()
      .pipe(
        finalize(() => {
          cb(callback);
          done = true;
        }),
      )
      .subscribe();

    if (done) cb(callback);
  };
}
