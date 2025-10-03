import { useState, useMemo, useCallback, MouseEventHandler } from 'react';
// import { ReferenceObject } from 'popper.js';

export type AnchorElement<E extends Element = HTMLElement> = E | any;

export interface PopperAnchor<E extends Element = HTMLElement> {
  anchor: AnchorElement<E> | null;
  visible: boolean;
  setRect(rect: DOMRect | null): void;
  setPosition(data: { left: number; top: number; width: number; height: number } | null): void;
  setAnchor(anchor: AnchorElement<E> | null): void;
  onClick: MouseEventHandler<E>;
  onClose(): void;
}

export function usePopperAnchor<E extends Element = HTMLElement>() {
  const [anchor, setAnchor] = useState<AnchorElement<E> | null>(null);

  const onClick: MouseEventHandler<E> = useCallback(event => {
    setAnchor(event.currentTarget);
  }, []);

  const setRect: PopperAnchor['setRect'] = useCallback(rect => {
    if (!rect) {
      setAnchor(null);
      return;
    }

    setAnchor({
      clientWidth: rect.width,
      clientHeight: rect.height,
      getBoundingClientRect: () => rect,
    });
  }, []);

  const setPosition: PopperAnchor['setPosition'] = useCallback(data => {
    if (!data) {
      setAnchor(null);
      return;
    }

    setAnchor({
      clientWidth: data.width,
      clientHeight: data.height,
      getBoundingClientRect: () => ({
        left: data.left,
        right: data.left + data.width,
        top: data.top,
        bottom: data.top + data.height,
        width: data.width,
        height: data.height,
      }),
    });
  }, []);

  const onClose = useCallback(() => {
    setAnchor(null);
  }, []);

  const controller = useMemo(
    (): PopperAnchor<E> => ({
      anchor,
      visible: !!anchor,
      setAnchor,
      setRect,
      setPosition,
      onClick,
      onClose,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [anchor, setRect, setPosition, onClick, onClose],
  );

  return controller;
}
