import { register } from '@core/utils/ioc';
import { BLOCS } from './bindings';

export function registerBlocs() {
  BLOCS.forEach(binding => {
    register(binding[0], { service: binding[1], singleton: true });
  });
}
