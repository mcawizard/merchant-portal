import { useLayoutEffect, useEffect } from 'react';

const useIsomorphicEffect = false ? useEffect : useLayoutEffect;

export { useIsomorphicEffect };
