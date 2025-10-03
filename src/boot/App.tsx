import React, { Fragment, useMemo } from 'react';
import { ModalStack } from '@core/components/ModalStack';
import { initBlocs, resetBlocs } from '@business/blocs';
import { notification } from 'antd';
import { AppRouter } from './AppRouter';
import '@styles/index.css';
import './index.scss';
import '@styles/bootstrap.scss';
import { useSubscribe } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { createHistory, HistoryProvider } from '@core/router';
import { LoadingBar } from '@core/components/LoadingBar';
import { TenantConfig } from '@core/utils/config';
import { Endpoint } from '@business/api/endpoint';
import { BreakpointProvider } from '@modules/theme/contexts/breakpoint/Provider';
import { SidebarProvider } from '@modules/theme/contexts/sidebar/Provider';
import { AntDProvider } from '@modules/theme/antd/AntDProvider';
import { ThemeProvider } from '@modules/theme/contexts/theme/Provider';
import { Tooltip } from '@modules/common/Tooltip';
import Toaster from './Toaster';
export default function App() {
  const history = useMemo(() => createHistory(), []);

  useSubscribe(Session.sessionStart$, url => {
    initBlocs();
    if (url) {
      history.replace(url);
    } else {
      history.replace('/home');
    }
  });

  useSubscribe(Session.sessionEnd$, () => {
    history.replace('/login?redirectUrl=' + history.location.pathname);
    resetBlocs();
  });

  useSubscribe(TenantConfig.changed$, config => {
    Endpoint.setAppId(config.appId);
  });

  TenantConfig.get();

  notification.config({
    placement: 'bottomRight',
    bottom: 10,
    duration: 5,
    showProgress: false,
    closable: false,
  });

  return (
    <Fragment>
      <HistoryProvider history={history}>
        <AntDProvider>
          <ThemeProvider>
            <BreakpointProvider>
              <SidebarProvider>
                <LoadingBar>
                  <Tooltip />
                  <AppRouter />
                  <Toaster />
                  <ModalStack />
                </LoadingBar>
              </SidebarProvider>
            </BreakpointProvider>
          </ThemeProvider>
        </AntDProvider>
      </HistoryProvider>
    </Fragment>
  );
}
