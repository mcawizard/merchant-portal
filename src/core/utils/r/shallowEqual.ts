import { lodash } from './lodash';

export function shallowEqual<T extends object>(objA: T, objB: T, ignoreFields?: (keyof T)[]): boolean {
  let keysA = Object.keys(objA) as (keyof T)[];
  let keysB = Object.keys(objB) as (keyof T)[];

  if (ignoreFields && ignoreFields.length) {
    keysA = keysA.filter(key => !ignoreFields.includes(key));
    keysB = keysB.filter(key => !ignoreFields.includes(key));
  }

  if (keysA.length !== keysB.length) return true;

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (objA[key] !== objB[key]) return true;

    lodash.pull(keysB, key);
  }

  for (let i = 0; i < keysB.length; i++) {
    const key = keysB[i];
    if (objA[key] !== objB[key]) return true;
  }

  return false;
}
