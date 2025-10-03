import { Config } from '@config';
import { R } from '@core/utils/r';
import { AuthConfig, isRequestResponse, Request, RequestResponse } from '@core/utils/request';
import { Session } from '@modules/auth/session';
import moment from 'moment-timezone';

export const Endpoint = new Request({
  urlMappings: () => ({
    '@api': Config.API_URL,
    '@root': Config.API_URL_NAKED,
  }),
  authMappings: () => ({
    '@root': getClientAuth,
    '@api': getClientAuth,
  }),

  transformResponse(response: RequestResponse) {
    // return response;
    return response.json();
  },

  async transformError(response: RequestResponse) {
    if (!isRequestResponse(response)) return response;

    try {
      return await wrapEndpointError(response);
    } catch (e) {
      return response;
    }
  },

  headers: {
    Accept: 'application/json',
    timezone: moment.tz.guess(),
  },
});

export function getClientAuth(token = Session.token): AuthConfig | null {
  if (!token) return null;
  return {
    type: 'header',
    name: 'Authorization',
    value: `Bearer ${token}`,
  };
}

export async function wrapEndpointError(response: RequestResponse) {
  const data = await response.json();

  let message: string | null = null;

  if (data) {
    if (R.isString(data.message)) {
      message = data.message;
    } else if (R.isString(data.error)) {
      message = data.error;
    }
  }

  const error = {};

  (error as any).__endpoint_error = true;
  (error as any).__response = response;
  (error as any).__message = message;

  return error;
}

export function getEndpointResponseErrorMessage(error: any) {
  if (error && error.error) return error.error;
  if (!error || error.__endpoint_error !== true) return null;
  return error.__message;
}

export function getEndpointResponseStatusCode(error: any) {
  if (!error || error.__endpoint_error !== true) return null;
  return (error.__response as RequestResponse).status;
}
