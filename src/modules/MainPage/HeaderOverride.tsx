import { useBloc } from '@core/utils/bloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import React, { memo, useEffect } from 'react';
import { headerOverride$ } from './HeaderOverrdeBloc';

export interface HeaderOverrideProps {
  children?: any;
}

export const HeaderOverride = memo((props: HeaderOverrideProps) => {
  const { children } = props;

  useEffect(() => {
    headerOverride$.next(children);
    return () => {
      headerOverride$.next(null);
    };
  }, [children]);

  return null;
});
