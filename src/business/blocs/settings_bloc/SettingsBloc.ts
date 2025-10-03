import { tap } from 'rxjs/operators';
import { BaseBloc } from '@core/utils/bloc';
import { handleMessage, requestMessage } from '@business/messages';
import { Session } from '@modules/auth/session';
import { SettingsConfig } from '@core/utils/config';

export class SettingsBloc extends BaseBloc {
  onInit() {
    if (Session.isAuthenticated) {
      // this.fetchSettings().subscribe();
    }
  }

  // fetchSettings = () => {
  //   return SettingsAPI.get().pipe(
  //     tap(settings => SettingsConfig.set(settings)),
  //     handleMessage({ error: requestMessage('fetch_settings_error') }),
  //   );
  // };
}
