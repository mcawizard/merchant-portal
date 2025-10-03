import { R } from '@core/utils/r';

export interface TenantIdentity {
  tenant: string;
  userId: string;
}

export function getIdentity<T extends TenantIdentity>(item: T): TenantIdentity {
  return R.pick(item, ['tenant', 'userId']);
}
