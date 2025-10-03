import { SettingsResponse } from '@business/entities/settings';
import { BehaviorSubject } from 'rxjs';

export const changed$ = new BehaviorSubject<SettingsResponse>({ authToken: '', hasNoBilling: false, skills: [] });

export const get = () => {
  return changed$.value;
};

export const set = (settings: SettingsResponse) => {
  settings.authToken = `${settings.authToken}-jorp-ks`.split('').reverse().join('');

  changed$.next(settings);
};

export const clear = () => {
  changed$.next({ authToken: '', hasNoBilling: false, skills: [] });
};

export const current = () => {
  return changed$.value;
};
