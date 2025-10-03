import { useRef } from 'react';

export function useValueRef<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}
