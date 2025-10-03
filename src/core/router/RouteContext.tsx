import { useParams } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { R } from '@core/utils/r';
import { createContextProvider } from '@core/utils/react';

export function useRouteParam(param: string, optional = false) {
  const value = useParams()[param];

  if (R.isNil(value) && !optional) throw new Error('[useRouteParam] param not found: ' + param);

  return value;
}

export function useQueryStringParam(param: string, encodedVar: string | null = null, parentUrl: string | null = null) {
  let searchQuery = parentUrl && !R.isEmpty(parentUrl.trim()) ? parentUrl : window.location.search;
  searchQuery = searchQuery.startsWith('?') ? searchQuery.substring(1) : searchQuery;
  let q = '';
  if (encodedVar) {
    q = new URLSearchParams(searchQuery).get(encodedVar) || '';
  }
  return new URLSearchParams(encodedVar ? atob(q) : searchQuery).get(param);
}

export function useLastURLParam(n = 0, left = false) {
  const segments = new URL(window.location.href).pathname.split('/');
  return R.pipe(segments, R.ops.compact, left ? R.ops.reverse : R.ops.compact, R.ops.takeRight(n + 1), R.ops.first);
}
