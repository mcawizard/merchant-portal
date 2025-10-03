import { useEffect, useState } from 'react';

/**
 * Confirm browser exit.
 *
 * @param defaultEnabled Start as enabled?
 * @param message Custom message (old browsers only).
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
 */
export const useConfirmBrowserExit = (defaultEnabled = true, message = 'Confirm leave page') => {
  const [msg, setMsg] = useState<string>(message);
  const [enabled, setEnabled] = useState<boolean>(defaultEnabled);

  useEffect(() => {
    function listener(e: BeforeUnloadEvent) {
      if (enabled) {
        e.preventDefault();
        e.returnValue = msg;
        return msg;
      }
    }

    window.addEventListener('beforeunload', listener);

    return () => {
      window.removeEventListener('beforeunload', listener);
    };
  }, [msg, enabled]);

  return {
    enable(): void {
      setEnabled(true);
    },
    disable(): void {
      setEnabled(false);
    },
    setMessage(newMessage: string): void {
      setMsg(newMessage);
    },
    getMessage(): string {
      return msg;
    },
    setEnabled(status: boolean): void {
      setEnabled(status);
    },
    getEnabled(): boolean {
      return enabled;
    },
  };
};
