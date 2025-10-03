import React, { memo, createContext, PropsWithChildren, useContext, Suspense, useTransition } from 'react';
import { BrowserHistory, History, createBrowserHistory } from 'history';
import { Router as ReactRouter } from 'react-router-dom';
import { Spinner } from '../../boot/Spinner';
import { NProgress } from '@modules/common/NProgress';

export const createHistory = () => createBrowserHistory();

export const HistoryContext = createContext<BrowserHistory | null>(null);

export const HistoryProvider = memo((props: PropsWithChildren<{ history: BrowserHistory }>) => {
  return <HistoryContext.Provider value={props.history}>{props.children}</HistoryContext.Provider>;
});

export function useHistory() {
  const history = useContext(HistoryContext);

  if (!history) throw new Error('[useHistory] no history provided');
  return history;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const Router = memo((props: PropsWithChildren<{}>) => {
  const history = useHistory();

  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  const [isPending, startTransition] = useTransition();

  React.useLayoutEffect(() => {
    return history.listen(update => {
      startTransition(() => {
        setState(update);
      });
    });
  }, [history]);

  return (
    <Suspense fallback={<SpinnerComponent />}>
      <NProgress isAnimating={isPending} />
      <ReactRouter location={state.location} navigator={history} navigationType={state.action}>
        {props.children}
      </ReactRouter>
    </Suspense>
  );
});

const SpinnerComponent = memo(() => {
  Spinner.hide();

  return null;
});
