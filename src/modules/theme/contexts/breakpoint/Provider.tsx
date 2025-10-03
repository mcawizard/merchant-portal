import React, { useEffect, useRef, useState } from 'react';
import { BreakpointsContext } from './context';
import { breakpoints } from '@modules/theme/config/breakpoints';

export interface BreakpointContextType {
  name: string;
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2xl: boolean;
  smAndDown: boolean;
  smAndUp: boolean;
  mdAndDown: boolean;
  mdAndUp: boolean;
  lgAndDown: boolean;
  lgAndUp: boolean;
  xlAndDown: boolean;
  xlAndUp: boolean;

  SM: number;
  MD: number;
  LG: number;
  XL: number;
  '2XL': number;
}

const initialState: BreakpointContextType = { ...getBreakpoint() };

export function BreakpointProvider({ children }) {
  const [breakpointState, setBreakpointState] = useState(initialState);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    // Function to update breakpoint based on current width
    const updateBreakpoint = () => {
      const current = getBreakpoint();
      if (current.name !== breakpointState.name) {
        setBreakpointState({ ...current });
      }
    };

    // Initialize ResizeObserver on the document's root element
    resizeObserverRef.current = new ResizeObserver(updateBreakpoint);
    resizeObserverRef.current.observe(document.documentElement);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [breakpointState.name]);

  if (!children) {
    return null;
  }

  return <BreakpointsContext value={breakpointState}>{children}</BreakpointsContext>;
}

function getBreakpoint(): BreakpointContextType {
  const width = window.innerWidth;

  let name = '';

  const xs = width < breakpoints.SM;
  const sm = width < breakpoints.MD && !xs;
  const md = width < breakpoints.LG && !(sm || xs);
  const lg = width < breakpoints.XL && !(md || sm || xs);
  const xl = width < breakpoints['2XL'] && !(lg || md || sm || xs);
  const the2xl = width >= breakpoints['2XL'];

  if (xs) name = 'xs';
  if (sm) name = 'sm';
  if (md) name = 'md';
  if (lg) name = 'lg';
  if (xl) name = 'xl';
  if (the2xl) name = '2xl';

  return {
    name,

    isXs: xs,
    isSm: sm,
    isMd: md,
    isLg: lg,
    isXl: xl,
    is2xl: the2xl,

    smAndDown: (xs || sm) && !(md || lg || xl || the2xl),
    smAndUp: !xs && (sm || md || lg || xl || the2xl),
    mdAndDown: (xs || sm || md) && !(lg || xl || the2xl),
    mdAndUp: !(xs || sm) && (md || lg || xl || the2xl),
    lgAndDown: (xs || sm || md || lg) && !(xl || the2xl),
    lgAndUp: !(xs || sm || md) && (lg || xl || the2xl),
    xlAndDown: (xs || sm || md || lg || xl) && !the2xl,
    xlAndUp: !(xs || sm || md || lg) && (xl || the2xl),

    ...breakpoints,
  };
}
