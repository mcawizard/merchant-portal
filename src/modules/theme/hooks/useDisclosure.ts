import { useCallback, useState } from 'react';

export interface UseDisclosureReturn {
  opened: boolean;
  fn: {
    open: () => void;
    close: () => void;
    toggle: () => void;
  };
}

export function useDisclosure(initialState = false, { onOpen, onClose }: any = {}): [boolean, UseDisclosureReturn['fn']] {
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => {
    setOpened(isOpened => {
      if (!isOpened) {
        onOpen?.();
        return true;
      }
      return isOpened;
    });
  }, [onOpen]);

  const close = useCallback(() => {
    setOpened(isOpened => {
      if (isOpened) {
        onClose?.();
        return false;
      }
      return isOpened;
    });
  }, [onClose]);

  const toggle = useCallback(() => {
    opened ? close() : open();
  }, [close, open, opened]);

  return [opened, { open, close, toggle }];
}
