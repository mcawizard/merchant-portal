import { Endpoint } from '../endpoint';
import { FontResponse } from '@business/entities/google';

export function fonts() {
  return Endpoint.get<FontResponse[]>('@root/google-fonts');
}
