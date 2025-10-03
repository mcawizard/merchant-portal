import { R } from '@core/utils/r';
import { useState, useRef, useEffect } from 'react';
import { useSubscribe } from '@core/utils/hooks/rxjs';
import { Control, StateChanges } from '../form_builder';
import { checkAllowedStateChanges } from '../form_builder/base/utils';
import { DynamicValue } from './types';

export function getDynamicValue<C extends Control, R, T = C extends Control<infer T> ? T : any>(
  control: C,
  config: DynamicValue<T, R> | null | undefined,
) {
  const value = R.isFunction(config) ? config(control) : config;
  return R.isUndefined(value) ? null : value;
}

export function getInitialValue<T>(initialValue: T | (() => T) | null | undefined) {
  const value: T | null | undefined = R.isFunction(initialValue) ? initialValue() : initialValue;
  return R.isUndefined(value) ? null : value;
}

export function useSubscribeToFormState(control: Control, stateChanges: (StateChanges | (keyof StateChanges)[]) | undefined, fn: () => void) {
  const [, triggerChanges] = useState<number>(0);

  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  useSubscribe(control.stateChanges$, formStateChanges => {
    if (!checkAllowedStateChanges(formStateChanges, stateChanges)) return;

    if (R.isFunction(fnRef.current)) fnRef.current();

    triggerChanges(Date.now());
  });

  useEffect(() => {
    if (R.isFunction(fnRef.current)) fnRef.current();

    triggerChanges(Date.now());
  }, [control.stateChanges$]);
}
