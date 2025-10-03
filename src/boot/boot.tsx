import { initBlocs } from '@business/blocs';
import { registerBlocs } from '@business/blocs/register';
import { R } from '@core/utils/r';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { finalize, tap, switchMap } from 'rxjs/operators';
import App from './App';
import { Session } from '@modules/auth/session';
import { ignoreError } from '@core/utils/rxjs/operators';
import { TenantConfig } from '@core/utils/config';
import { Endpoint } from '@business/api/endpoint';
export function boot() {
  initTenantConfig();
  registerBlocs();
  initBlocs();

  restoreSession();
}

function renderApp() {
  const root = createRoot(document.getElementById('root')!);
  root.render(<App />);
}

function restoreSession() {
  Session.restore().pipe(tap(initBlocs), ignoreError(), finalize(renderApp)).subscribe();
}

function initTenantConfig() {
  const config = TenantConfig.get();
  if (!R.isEmpty(config.appId)) {
    Endpoint.setAppId(config.appId);
  }
}
