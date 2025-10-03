import { BehaviorSubject } from 'rxjs';
import { Storage } from '../storage';

export const TENANT_CONFIG_KEY = 'config:appId';

export interface Data {
  appId: string | null;
}

const defaultConfig: Data = { appId: null };

export const changed$ = new BehaviorSubject<Data>(defaultConfig);

export const get = () => {
  const config = Storage.get<Data>(TENANT_CONFIG_KEY);
  if (config) {
    changed$.next(config);
  }
  return config || defaultConfig;
};

export const set = (newConfig: Partial<Data>) => {
  const config = Storage.get<Data>(TENANT_CONFIG_KEY);
  const updated: Data = { ...(config ? config : defaultConfig), ...newConfig };
  changed$.next(updated);
  Storage.set(TENANT_CONFIG_KEY, updated);
};

export const clear = () => {
  changed$.next(defaultConfig);
  return Storage.remove(TENANT_CONFIG_KEY);
};

export const current = () => {
  return changed$.value;
};
