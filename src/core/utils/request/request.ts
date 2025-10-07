import { R } from '@core/utils/r';
import { Observable } from 'rxjs';

export type RequestHeaders = Record<string, string>;
export type RequestData = object | any[];
export type RequestResponse = Response;
export type DataTransformer<T = any> = (response: RequestResponse, options: RequestOptions, request: Request) => T;
export type ErrorTransformer<T = any> = (error: any, options: RequestOptions, request: Request) => T;
export interface AuthConfig {
  type: 'header' | 'param' | 'body';
  name: string;
  value: string;
}

export type UrlMappings = Record<string, string>;
export type AuthMappings = Record<string, () => AuthConfig | null>;

export interface RequestConfig {
  baseUrl?: string;
  getUrl?: (url: string) => string;
  getAuth?: (url: string) => AuthConfig | null;
  urlMappings?: UrlMappings | (() => UrlMappings);
  authMappings?: AuthMappings | (() => AuthMappings);
  headers?: RequestHeaders;
  transformResponse?: DataTransformer;
  transformError?: ErrorTransformer;
  onEvent?(event: RequestEvent): void;
}

export interface RequestOptions {
  method: 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  auth?: AuthConfig | null;
  noAuth?: boolean;
  headers?: RequestHeaders;
  hasFiles?: boolean;
  data?: object | any[];
  formData?: FormData;
  params?: object;
  transformResponse?: DataTransformer;
  transformError?: ErrorTransformer;
  plainText?: boolean;
  abort?: AbortSignal;
  extraData?: any;
  debug?: boolean;
  isFile?: boolean;
  filename?: string;
}

export type MethodRequestOptions = Omit<RequestOptions, 'method' | 'url'>;

export interface RequestEvent {
  type: 'start' | 'done' | 'error';
  request: Request;
  options?: RequestOptions;
  response?: RequestResponse;
  transformedResponse?: any;
  error?: any;
  transformedError?: any;
  statusCode?: number | null;
}

export function isRequestResponse(data: any): data is RequestResponse {
  return !!data && R.isNumber(data.status) && R.isString(data.statusText);
}

export class Request {
  private _auth: AuthConfig | null = null;
  private _config: RequestConfig;

  private _appId: string | null = null;

  public constructor(config: RequestConfig) {
    this._config = config || {};
  }

  public setAppId(appId: string | null) {
    this._appId = appId;
  }

  public getAppId() {
    return this._appId;
  }

  public setAppDomain(domain: string | null) {
    if (domain) {
      this._config.baseUrl = `${domain}`;
    } else {
      this._config.baseUrl = undefined;
    }
  }

  public getAppDomain() {
    if (this._config.baseUrl) {
      const match = this._config.baseUrl.match(/^https?:\/\/([^\/]+)/);
      if (match) return match[1];
    }
    return null;
  }

  public setAuth(auth: AuthConfig | null) {
    this._auth = auth;
  }

  public get auth() {
    return this._auth;
  }

  public get dumpHeaders() {
    return this._getHeaders(null, this._getAuth({ method: 'HEAD', url: '@root/' }));
  }

  public dumpUrl(url: string, options: MethodRequestOptions = {}) {
    return this._getUrl(url, options.params, this._getAuth({ method: 'HEAD', url: '' }));
  }

  public head<T>(url: string, options: MethodRequestOptions = {}) {
    return this.request<T>({ method: 'HEAD', url, ...options });
  }

  public get<T>(url: string, options: MethodRequestOptions = {}) {
    return this.request<T>({ method: 'GET', url, ...options });
  }

  public post<T>(url: string, options: MethodRequestOptions = {}) {
    return this.request<T>({ method: 'POST', url, ...options });
  }

  public put<T>(url: string, options: MethodRequestOptions = {}) {
    return this.request<T>({ method: 'PUT', url, ...options });
  }

  public patch<T>(url: string, options: MethodRequestOptions = {}) {
    return this.request<T>({ method: 'PATCH', url, ...options });
  }

  public delete<T>(url: string, options: MethodRequestOptions = {}) {
    return this.request<T>({ method: 'DELETE', url, ...options });
  }

  public request<T>(options: RequestOptions): Observable<T> {
    return new Observable(subscriber => {
      const abortController = new AbortController();

      let canceled = false;

      subscriber.add(() => {
        canceled = true;
        abortController.abort();
      });

      this._request<T>({ ...options, abort: abortController.signal })
        .then(data => {
          if (canceled) return;

          subscriber.next(data);
          subscriber.complete();
        })
        .catch(error => {
          if (canceled) return;

          if (error && (error as any).__aborted === true) {
            // ignore aborted error
          } else {
            subscriber.error(error);
          }
        });
    });
  }

  public async _request<T>(options: RequestOptions): Promise<T> {
    const debug = options.debug;
    const config = this._config;

    if (debug) console.log('[Request.debug] request:', options);

    const auth = this._getAuth(options);

    const url = this._getUrl(options.url, options.params, auth);
    const headers = this._getHeaders(options.headers, auth, options.noAuth);
    const body = this._getData(options);
    if (options.hasFiles) {
      delete headers['Content-Type'];
    }

    try {
      const response = await fetch(url, {
        method: options.method,
        headers,
        body,
        signal: options.abort,
        redirect: 'manual',
      });

      const statusCode = response.status;

      if (statusCode !== null && (statusCode < 200 || statusCode >= 400)) {
        throw response;
      }

      if (options.isFile) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = options.filename || 'job.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        return new Promise(res => (res as any)());
      }
      let transformedResponse: any = response;

      const transformResponse = options.transformResponse || config.transformResponse;

      if (!options.plainText) {
        transformedResponse = transformResponse ? await transformResponse(transformedResponse, options, this) : transformedResponse;
        if (transformedResponse.code !== null && (transformedResponse.code < 200 || transformedResponse.code >= 400)) {
          throw transformedResponse;
        }
        if (!transformedResponse.meta) {
          transformedResponse = transformedResponse.data;
          // transformedResponse = transformedResponse;
        }
      } else {
        transformedResponse = await response.text();
      }

      this._emit({
        type: 'done',
        request: this,
        options,
        response,
        transformedResponse,
      });

      if (debug) console.log('[Request.debug] response:', transformedResponse, options);

      return transformedResponse;
    } catch (error) {
      const response = error as RequestResponse;

      if (response && response.status === 0 && response.statusText === 'abort') {
        const error = new Error('aborted');
        (error as any).__aborted = true;

        throw error;
      }

      const statusCode = R.isNumber(response && response.status) ? response.status : null;

      const transformError = options.transformError || config.transformError;
      let transformedError = error;

      try {
        transformedError = transformError ? await transformError(error, options, this) : error;
      } catch (error) {
        console.log('[Request.transformError] error:', error);
        transformedError = error;
      }

      this._emit({
        type: 'error',
        request: this,
        options,
        error,
        transformedError,
        statusCode,
      });

      throw transformedError;
    }
  }

  private _emit(event: RequestEvent) {
    if (this._config.onEvent) this._config.onEvent(event);
  }

  private _getData(options: RequestOptions) {
    if (options.formData) return options.formData;
    if (options.data) return JSON.stringify(options.data);

    if (options.method === 'POST' || options.method === 'PUT' || options.method === 'PATCH') {
      return JSON.stringify({});
    }

    return undefined;
  }

  private _getAuth(options: RequestOptions) {
    const auth = options.auth || this._auth;

    if (auth) {
      return auth;
    }
    let getAuth = this._config.getAuth;

    if (!getAuth && this._config.authMappings) {
      const authMappings = R.isFunction(this._config.authMappings) ? this._config.authMappings() : this._config.authMappings;

      if (!R.isEmpty(authMappings)) {
        getAuth = (url: string) => this._mapAuth(url, authMappings);
      }
    }

    if (getAuth) {
      return getAuth(options.url);
    }

    return null;
  }

  private _getUrl(url: string, params: object | null | undefined, auth: AuthConfig | null) {
    const config = this._config;

    let getUrl = config.getUrl;

    if (!R.isFunction(getUrl) && config.urlMappings) {
      const urlMappings = R.isFunction(config.urlMappings) ? config.urlMappings() : config.urlMappings;

      if (!R.isEmpty(urlMappings)) {
        getUrl = (url: string) => this._mapUrl(url, urlMappings);
      }
    }

    if (R.isFunction(getUrl)) {
      url = getUrl(url);
    } else if (R.isString(config.baseUrl)) {
      url = config.baseUrl + url;
    }

    params = params || {};

    if (auth && auth.type === 'param') {
      params = { [auth.name]: auth.value, ...params };
    }

    return url + this._getQueryString(params);
  }

  private _getHeaders(headers: RequestHeaders | null | undefined, auth: AuthConfig | null, noAuth?: boolean) {
    const config = this._config;

    headers = headers || {};

    if (noAuth !== true) {
      if (auth && auth.type === 'header') {
        headers = { [auth.name]: auth.value, ...headers };
      }
    }

    if (this._appId) {
      headers = { 'X-Tenant': `${this._appId}`, ...headers };
    }

    if (config.headers) {
      headers = { ...config.headers, ...headers };
    }

    const keyContentType = 'Content-Type';

    if (!headers[keyContentType]) {
      headers[keyContentType] = 'application/json';
    }

    return headers;
  }

  public _getQueryString<T extends object>(params: T) {
    const parts: string[] = [];

    R.forEach(params, (value, key) => {
      if (R.isArray(value)) {
        key += '[]';

        R.forEach(value, item => {
          parts.push(key + '=' + encodeURIComponent(item));
        });
      } else {
        parts.push(key + '=' + encodeURIComponent(value as any));
      }
    });

    const queryString = parts.join('&');

    return queryString ? `?${queryString}` : '';
  }

  private _mapAuth(url: string, mappings: AuthMappings): AuthConfig | null {
    let auth: AuthConfig | null = null;

    R.forEach(mappings, (getAuth, prefix) => {
      if (url.startsWith(prefix)) {
        auth = getAuth();
        return false;
      }
    });

    return auth;
  }

  private _mapUrl(url: string, mappings: UrlMappings) {
    R.forEach(mappings, (baseUrl, prefix) => {
      if (url.startsWith(prefix)) {
        url = url.slice(prefix.length);

        if (url.startsWith('/')) url = url.slice(1);
        if (!baseUrl.endsWith('/')) baseUrl += '/';

        url = baseUrl + url;

        return false;
      }
    });

    return url;
  }
}
