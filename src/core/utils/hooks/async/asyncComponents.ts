import { ComponentType, ExoticComponent, useMemo } from 'react';
import { useAsync } from './async';

type ReactComponentType<P> = ComponentType<P> | ExoticComponent<P>;

export function useAsyncComponent<P>(loader: () => Promise<ReactComponentType<P> | { default: ReactComponentType<P> }>, shouldLoad: boolean) {
  const result = useAsync(loader, shouldLoad);

  const component = useMemo(() => {
    if (!result) return null;

    const moduleDefault = (result as any).default;
    return (moduleDefault || result) as ReactComponentType<P>;
  }, [result]);

  return component;
}
