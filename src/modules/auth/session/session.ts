import { AuthAPI } from '@business/api/auth';
import { Endpoint } from '@business/api/endpoint';
import { UserResponse } from '@business/entities/user';
import { R } from '@core/utils/r';
import { tapError } from '@core/utils/rxjs/operators';
import { Storage } from '@core/utils/storage';
import { BehaviorSubject, of, Subject, throwError } from 'rxjs';
import { finalize, switchMap, tap, catchError } from 'rxjs/operators';
import { openAccountSelectModal } from '../AccountSelectModal';
import { TenantConfig } from '@core/utils/config';
import { TENANT_CONFIG_KEY } from '@core/utils/config/config';

export const KEY_TOKEN = 'auth:token';

class SessionManager {
  private readonly _token$ = new BehaviorSubject<string | null>(null);
  private readonly _user$ = new BehaviorSubject<UserResponse | null>(null);

  private readonly _sessionStart$ = new Subject<void | string>();
  private readonly _sessionEnd$ = new Subject<void>();
  private readonly _loggingOut$ = new Subject<boolean>();

  readonly sessionStart$ = this._sessionStart$.asObservable();
  readonly sessionEnd$ = this._sessionEnd$.asObservable();
  readonly loggingOut$ = this._loggingOut$.asObservable();

  readonly user$ = this._user$.asObservable();

  get token() {
    return this._token$.value;
  }

  set token(token: string | null) {
    this._token$.next(token);
  }

  get user() {
    return this._user$.value;
  }

  get isAuthenticated() {
    return !!this._token$.value;
  }

  patchUser(user: UserResponse) {
    this._user$.next(user);
  }

  loginWithAccounts(data: { username: string; password: string }, remember: boolean, redirectUrl?: string | null) {
    return AuthAPI.loginForAccounts(data.username, data.password).pipe(
      switchMap(result => {
        if (result.length > 1) {
          return openAccountSelectModal({ accounts: result }).pipe(
            switchMap(appId => {
              if (R.isEmpty(appId)) return of(null);
              Endpoint.setAppId(appId);
              TenantConfig.set({ appId });
              return this.login(data, remember, redirectUrl);
            }),
          );
        } else {
          const onlyAccount = R.first(result)!;
          Endpoint.setAppId(onlyAccount.appId);
          Endpoint.setAppDomain(onlyAccount.tenantDomain);
          TenantConfig.set({ appId: onlyAccount.appId });
          return this.login(data, remember, redirectUrl);
        }
      }),
    );
  }

  login(data: { username: string; password: string }, remember: boolean, redirectUrl?: string | null) {
    return AuthAPI.login(data.username, data.password).pipe(
      switchMap(result => {
        const token = result.access_token;
        if (!token) throw new Error('Invalid token');

        return this.restoreByToken(token, remember, redirectUrl);
      }),
    );
  }

  logout(redirect = true) {
    return of(null).pipe(
      switchMap(() => {
        if (redirect) {
          this._loggingOut$.next(true);
        }

        return this._endSession(redirect);
      }),
      finalize(() => {
        if (redirect) {
          this._loggingOut$.next(false);
        }
      }),
    );
  }

  restore() {
    return of(null).pipe(
      switchMap(() => {
        const token = Storage.get<string>(KEY_TOKEN);
        if (!token) return throwError(new Error('No token'));

        return this.restoreByToken(token, true);
      }),
    );
  }

  reloadUser() {
    return of(null).pipe(
      switchMap(() => {
        const token = Storage.get<string>(KEY_TOKEN);
        if (!token) return throwError(new Error('No token'));

        return AuthAPI.check(token);
      }),
      tap(({ user }) => {
        this._user$.next(user);
      }),
    );
  }

  restoreByToken(token: string, remember: boolean, redirectUrl?: string | null) {
    return AuthAPI.check(token).pipe(
      switchMap(({ user }) => {
        if (remember) {
          Storage.set(KEY_TOKEN, token);
        }

        return this._startSession(token, user, redirectUrl);
      }),
      tapError(error => {
        console.log('[Session.restoreByToken] error:', error);
      }),
    );
  }

  private _startSession(token: string, user: UserResponse, redirectUrl?: string | null) {
    return of(null).pipe(
      tap(() => {
        this._token$.next(token);
        this._user$.next(user);

        if (redirectUrl) {
          this._sessionStart$.next(redirectUrl);
        } else {
          this._sessionStart$.next();
        }
      }),
    );
  }

  private _endSession(redirect = true) {
    return of(null).pipe(
      tap(() => {
        this._token$.next(null);
        this._user$.next(null);

        Storage.remove(KEY_TOKEN);
        Storage.remove(TENANT_CONFIG_KEY);
        TenantConfig.set({ appId: null });
        Endpoint.setAppId(null);

        if (redirect) {
          this._sessionEnd$.next();
        }
      }),
    );
  }
}

export const Session = new SessionManager();
