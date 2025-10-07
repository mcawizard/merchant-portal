import { CompanyAddressResponse } from './CompanyAddressResponse';

export interface CompanyResponse {
  id: string;
  companyName: string;
  companyDBA: string;
  mainAddress: CompanyAddressResponse;
}

export type VeryCompactCompanyResponse = Pick<CompanyResponse, 'id' | 'companyName' | 'companyDBA' | 'mainAddress'>;
