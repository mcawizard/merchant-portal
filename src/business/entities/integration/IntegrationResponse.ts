import { ConnectGCFormData } from '@modules/data/components/ExternalDatasources/ConnectGCModal/ConnectGCModal';

export interface IntegrationResponse {
  id: string;
  group: IntegrationGroup;
  type: IntegrationType;
  isEnabled: boolean;
  settings?: ConnectGCFormData;
}

export enum IntegrationGroup {
  internal = 'internal',
}

export enum IntegrationType {
  gc = 'grandcentral',
}
