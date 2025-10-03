import React, { useEffect } from 'react';
import { useDisclosure, useDidUpdate } from '../../hooks';
import { SidebarContext } from './context';
import { useBreakpointsContext } from '../breakpoint/context';

export interface SidebarContextType {
  isExpanded: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}
const initialState = {
  isExpanded: true,
  setIsExpanded: () => {},
};

export function SidebarProvider({ children }) {
  const { xlAndUp, lgAndDown, name } = useBreakpointsContext();

  const [isExpanded, { open, close, toggle }] = useDisclosure(initialState.isExpanded && xlAndUp);

  // Close Sidebar when Breakpoint changed
  useDidUpdate(() => {
    lgAndDown && close();
  }, [name]);

  useEffect(() => {
    const documentBody = document?.body;
    if (documentBody) {
      isExpanded ? documentBody.classList.add('is-sidebar-open') : documentBody.classList.remove('is-sidebar-open');
    }
  }, [isExpanded]);

  if (!children) {
    return;
  }

  return (
    <SidebarContext
      value={{
        isExpanded,
        toggle,
        open,
        close,
      }}
    >
      {children}
    </SidebarContext>
  );
}
