import { OperatorFunction } from 'rxjs';

const noop = <T>(source: T) => source;

export function pipeIf<T>(fn: OperatorFunction<T, T> | null | undefined | false) {
  return fn || noop;
}
