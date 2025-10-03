import { SettingsResponse } from '@business/entities/settings';
import { SettingsConfig } from '@core/utils/config';
import * as React from 'react';
import { useSubscribe } from '../rxjs';

export function useSettings(options: { onChange?: (info: SettingsResponse | null) => void } = {}) {
  const currentValue = SettingsConfig.changed$.value;
  const [setting, setSettings] = React.useState<SettingsResponse | null>(currentValue);

  const callback = options.onChange;

  const callbackRef = React.useRef(callback);

  callbackRef.current = callback;

  useSubscribe(SettingsConfig.changed$, newSettings => {
    setSettings(newSettings);
    if (callbackRef.current) callbackRef.current(newSettings);
  });

  return setting;
}
