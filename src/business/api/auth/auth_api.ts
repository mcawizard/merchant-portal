import { map } from 'rxjs/operators';
import { Endpoint, getClientAuth } from '../endpoint';
import { R } from '@core/utils/r';
import { UserResponse } from '@business/entities/user';
import { LoginTenantResponse } from '@business/entities/common';

export function login(username: string, password: string) {
  const data = { username, password, client_id: 2, client_secret: 'IUfqlYgUGsfGgFT2We3cluyZG2API014BIAtejv2', grant_type: 'password', scope: '' };

  return Endpoint.post<{ access_token: string }>('@root/oauth/token', { data, noAuth: true });
}

export function loginForAccounts(username: string, password: string) {
  const data = { username, password };

  return Endpoint.post<LoginTenantResponse[]>('@api/non-tenant/g-login', { data, noAuth: true });
}

export function accounts() {
  return Endpoint.get<LoginTenantResponse[]>('@root/auth/user-accounts');
}

export function check(token: string) {
  return Endpoint.post<UserResponse>('@api/me', { auth: getClientAuth(token) }).pipe(map(user => ({ user })));
  // return Endpoint.get<UserResponse>('@root/auth/check', { auth: getClientAuth(token) }).pipe(map(user => ({ user })));
}

export function reset(email: string) {
  const data = { email };

  return Endpoint.post<void>('@api/non-tenant/auth/reset', { data, noAuth: true });
}

export function setPassword(email: string, password: string, password_confirmation: string, token: string) {
  const data = { email, password, password_confirmation, token };

  return Endpoint.post<void>('@api/non-tenant/auth/set-password', { data, noAuth: true });
}

export function activate(password: string, password_confirmation: string, token: string) {
  const data = { password, password_confirmation, token };

  return Endpoint.post<void>('@root/non-tenant/auth/activate', { data, noAuth: true });
}

export function switchAccount(email: string, appId: string) {
  const data = { email, appId };

  return Endpoint.post<{ token: string }>('@root/auth/switch', { data });
}

export function controlAccount(appId: string) {
  const data = { appId };

  return Endpoint.post<{ token: string }>('@root/non-tenant/auth/control-account', { data, noAuth: true });
}
