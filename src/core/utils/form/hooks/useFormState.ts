import { useMemo, useRef } from 'react';
import { Control, StateChanges, ControlState, FormControl } from '../form_builder';
import { useSubscribeToFormState } from './utils';

export function useFormControlState<T>(formControl: FormControl<T>, stateChanges?: StateChanges | (keyof StateChanges)[]): ControlState<T | null> {
  return useFormState<T | null>(formControl, stateChanges);
}

export function useFormState<T>(formControl: Control<T>, stateChanges?: StateChanges | (keyof StateChanges)[]): ControlState<T> {
  const initialState = useMemo(() => formControl.state, [formControl.state]);
  const stateRef = useRef(initialState);

  useSubscribeToFormState(formControl, stateChanges, () => {
    stateRef.current = formControl.state;
  });

  return stateRef.current;
}
