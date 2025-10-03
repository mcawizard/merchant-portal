import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { R } from '@core/utils/r';
import { FlashMessage } from '@core/components/FlashMessage';
import { REQUEST_MESSAGES } from './i18n/request_messages';

type RequestMessages = typeof REQUEST_MESSAGES;
type RequestMessageType = keyof RequestMessages;

type GetMessage<T, R> = R | ((data: T) => R | (() => R));

export interface RequestMessageOptions<T> {
  type?: boolean | GetMessage<{ data?: T; error?: any }, { success: string; error: string }>;
  success?: boolean | GetMessage<T, string>;
  error?: boolean | string | GetMessage<any, string>;
  showResponseError?: boolean | GetMessage<any, boolean>;
  onSuccess?(data: T): void;
  onError?(error: any): void;
}

export function handleMessage<T>(options: RequestMessageOptions<T>): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>) =>
    source.pipe(
      tap((data: T) => {
        const message = getSuccessMessage(options, data);
        if (message) FlashMessage.success(message);
        if (options.onSuccess) options.onSuccess(data);
      }),
      catchError(error => {
        const message = getErrorMessage(options, error);
        const showResponseError = R.isFunction(options.showResponseError) ? options.showResponseError(error) : options.showResponseError;

        if (message) FlashMessage.error(showResponseError === false ? null : error, message);
        if (options.onError) options.onError(error);

        return throwError(error);
      }),
    );
}

export function requestMessage<K extends RequestMessageType>(key: K): RequestMessages[K] {
  return REQUEST_MESSAGES[key];
}

function getSuccessMessage<T>(options: RequestMessageOptions<T>, data: T) {
  if (options.success === false) return null;
  if (R.isFunction(options.success)) return getValue(options.success(data));
  if (R.isString(options.success)) return options.success;
  if (R.isFunction(options.type)) return getValue(options.type({ data })).success;
  if (options.type && !R.isBoolean(options.type)) return options.type.success;
}

function getErrorMessage<T>(options: RequestMessageOptions<T>, error: any) {
  console.log(options, error);
  if (options.success === false) return null;
  if (R.isFunction(options.error)) return getValue(options.error(error));
  if (R.isString(options.error)) return options.error;
  if (R.isFunction(options.type)) return getValue(options.type({ error })).error;
  if (options.type && !R.isBoolean(options.type)) return options.type.error;
}

function getValue<T>(value: T | (() => T)) {
  return R.isFunction(value) ? value() : value;
}
