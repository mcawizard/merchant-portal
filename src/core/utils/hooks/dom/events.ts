import { useRef, useState, useCallback, useEffect } from 'react';
import { R } from '@core/utils/r';
import { useDidMount } from '../react';

export function useKey(callback: (event: KeyboardEvent) => void, options: { event: 'keydown' | 'keyup' | 'keypress' } = { event: 'keydown' }) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      callbackRef.current(event);
    };

    document.addEventListener(options.event, handler, false);

    return () => document.removeEventListener(options.event, handler, false);
  }, [options.event]);
}

export function useEscapeKey(callback: (event: KeyboardEvent) => void) {
  useKey(
    event => {
      if (event.keyCode === 27) callback(event);
    },
    { event: 'keyup' },
  );
}

export function useWindowScrollCallback(callback: (event: Event) => void, options?: { debounce?: number }) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    let handler = (event: Event) => {
      callbackRef.current(event);
    };

    if (options?.debounce) handler = R.debounce(handler, options.debounce);

    window.addEventListener('scroll', handler, false);

    return () => window.removeEventListener('scroll', handler, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function useWindowScroll() {
  const [offset, setOffset] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  const update = useCallback(() => {
    setOffset({ scrollX: window.scrollX, scrollY: window.scrollY });
  }, []);

  useDidMount(update);
  useWindowScrollCallback(update);

  return offset;
}

export function useWindowResizeCallback(callback: (event: Event) => void, options?: { debounce?: number }) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    let handler = (event: Event) => {
      callbackRef.current(event);
    };

    if (options?.debounce) handler = R.debounce(handler, options.debounce);

    window.addEventListener('resize', handler, false);

    return () => window.removeEventListener('resize', handler, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const update = useCallback(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useDidMount(update);
  useWindowResizeCallback(update);

  return size;
}
