import React, { memo, useRef, useEffect, createContext, useContext, useMemo, ReactNode, useState, Fragment } from 'react';
import { default as Bar } from 'react-top-loading-bar';
import './index.scss';
import { R } from '@core/utils/r';
import { Session } from '@modules/auth/session';
import { useObservable } from '@core/utils/hooks/rxjs';

export interface LoadingBarInstance {
  show(): void;
  hide(): void;
  loading(loading: boolean): void;
}

const LoadingBarContext = createContext<LoadingBarInstance>({
  show: () => R.noop(),
  hide: () => R.noop(),
  loading: () => R.noop(),
});

export function useLoadingBar() {
  return useContext(LoadingBarContext)!;
}

export enum BarState {
  loading = 'loading',
  completed = 'completd',
  none = 'none',
}

export interface LoadingBarProps {
  children: ReactNode;
}

export const LoadingBar = memo((props: LoadingBarProps) => {
  const ref = useRef(null);
  const [barState, setBarState] = useState<BarState>(BarState.none);

  const bar: LoadingBarInstance = {
    show: () => {
      setBarState(BarState.loading);
    },
    hide: () => {
      setBarState(BarState.completed);
    },
    loading: loading => {
      if (loading) {
        setBarState(BarState.loading);
      }
      if (!loading) {
        setBarState(BarState.completed);
      }
    },
  };

  useEffect(() => {
    if (barState === BarState.loading) {
      (ref.current! as any).continuousStart();
    } else if (barState === BarState.completed) {
      (ref.current! as any).complete();
    }
  }, [barState, ref]);

  return (
    <Fragment>
      <Bar className={Session.isAuthenticated && Session.user ? 'topLoader' : undefined} ref={ref} shadow={false} color={'#AE1E2350'} />
      <LoadingBarContext.Provider value={bar}>{props.children}</LoadingBarContext.Provider>
    </Fragment>
  );
});

export const TopLoadingBar = memo(() => {
  const bar = useLoadingBar();
  useEffect(() => {
    bar.show();
    return bar.hide;
  }, [bar]);

  return <div />;
});
