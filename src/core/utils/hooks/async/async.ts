import { useRef, useState } from 'react';
import { useIsUnmountedRef } from '@core/utils/hooks/react';

export function useAsync<T>(loader: (() => Promise<T>) | null, shouldLoad: boolean) {
  const loaderRef = useRef(loader);
  const [result, setResult] = useState<T | null>(null);
  const loadedRef = useRef(false);
  const unmountedRef = useIsUnmountedRef();

  loaderRef.current = loader;

  if (shouldLoad && !!loader) {
    if (loadedRef.current) return result;

    loadedRef.current = true;

    loader()
      .then(result => {
        if (!unmountedRef.current) setResult(result);
      })
      .catch(error => {
        console.error('[useAsync] load error:', error);

        if (!unmountedRef.current) setResult(null);
        loadedRef.current = false;
      });
  }

  return result;
}
