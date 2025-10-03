import { useEffect, useRef, useMemo } from 'react';
import { Subscription, isObservable } from 'rxjs';
import { Config } from '@config';
import { useWillUnmount } from '@core/utils/hooks/react';
import { BaseBloc } from './BaseBloc';

export function useBloc<BC extends Constructor<BaseBloc>, B = BC extends new (...args: any[]) => infer B ? B : any>(
  Bloc: BC,
  ...params: ConstructorParameters<BC>
): B {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const bloc = useMemo(() => new Bloc(...params), [Bloc, ...params]);

  const lastBlocRef = useRef<BaseBloc>();
  const blocRef = useRef<BaseBloc>();
  const subRef = useRef<Subscription>();

  const errorRef = useRef(Config.IS_DEV ? new Error('[useBloc] stacktrace') : null);

  blocRef.current = bloc;

  useEffect(() => {
    if (subRef.current) {
      subRef.current.unsubscribe();
      subRef.current = undefined;
    }

    if (lastBlocRef.current) lastBlocRef.current.onDestroy();
    lastBlocRef.current = bloc;

    const result = bloc.onInit();

    if (isObservable(result)) {
      subRef.current = result.subscribe({
        error: error => {
          console.log('[useBloc] unhandled error:', { error, stacktrace: errorRef.current });
        },
      });
    }
  }, [bloc]);

  useWillUnmount(() => {
    if (blocRef.current) blocRef.current.onDestroy();
    if (subRef.current) subRef.current.unsubscribe();

    blocRef.current = undefined;
    subRef.current = undefined;
  });

  return bloc as any as B;
}
