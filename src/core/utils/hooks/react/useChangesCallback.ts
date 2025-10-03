import { useEffect, useRef, useLayoutEffect } from 'react';

export const useChangesCallback = createAdditionalChangesCallbackHook(useEffect);
export const useChangesLayoutCallback = createAdditionalChangesCallbackHook(useLayoutEffect);

function createAdditionalChangesCallbackHook(useHook: typeof useEffect | typeof useLayoutEffect) {
  return (data: any, callback: () => void, ignoredChanges = 1) => {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    const changesCountRef = useRef(0);

    useHook(() => {
      changesCountRef.current += 1;

      if (changesCountRef.current > ignoredChanges) {
        callbackRef.current();
      }
    }, [data, ignoredChanges]);
  };
}
