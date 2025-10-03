import { Config } from '@config';
import Pusher from 'pusher-js';
import { default as OEcho } from 'laravel-echo';
import { Endpoint } from '@business/api/endpoint';
import { TenantConfig } from '../config';
export class Echo {
  private _echo: OEcho;
  private _appId: string;
  constructor() {
    const headers = Endpoint.dumpHeaders;
    delete headers['Content-Type'];
    this._appId = TenantConfig.get().appId || '';
    this._echo = new OEcho({
      broadcaster: 'pusher',
      client: new Pusher(Config.PUSHER_KEY, {
        cluster: 'mt1',
        authEndpoint: Endpoint.dumpUrl('@root/broadcasting/auth'),
        auth: {
          headers,
        },
      }),
    });
  }

  subscribe<T = any>(channel: string, event: string | undefined, callback: (data: T) => void) {
    console.log(`Subscribing to ${this._appId}.${channel}`);
    if (!event) {
      this._echo.private(`${this._appId}.${channel}`).notification(callback);
    } else {
      console.log(`on Event ${event}`);
      this._echo.private(`${this._appId}.${channel}`).listen(`.${event}`, callback);
    }
  }

  disconnect() {
    this._echo.disconnect();
  }

  leave(channel: string) {
    console.log(`Unsubsribing to ${this._appId}.${channel}`);
    this._echo.leave(`${this._appId}.${channel}`);
  }
}
