import { useEffect, useRef } from 'react';

export function useDidMount(fn: () => void) {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => {
    if (fnRef.current) fnRef.current();
  }, []);
}

export function useWillUnmount(fn: () => void) {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => () => fnRef.current && fnRef.current(), []);
}

export function useDidUpdate(fn: Function, conditions?: any[]) {
  const didMoutRef = useRef(false);

  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => {
    if (!didMoutRef.current) {
      didMoutRef.current = true;
      return;
    }

    return fnRef.current && fnRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, conditions);
}
export function useIsUnmountedRef() {
  const isUnmountedRef = useRef(false);

  useWillUnmount(() => {
    isUnmountedRef.current = true;
  });

  return isUnmountedRef;
}
