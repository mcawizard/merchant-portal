export interface AvailablePhoneNumber {
  phone_number: string;
  friendly_name: string;
  iso_country: string;
  lata: string | null;
  rate_center: string | null;
  latitude: string | null;
  longitude: string | null;
  region: string | null;
  postal_code: string | null;
  locality: string | null;
  address_requirements: string;
  beta: boolean;
  capabilities: {
    voice: boolean;
    sms: boolean;
    mms: boolean;
    fax: boolean;
  };
}

export interface AvailableNumbersSearchOptions {
  country_code?: string;
  area_code?: string;
  contains?: string;
  sms_enabled?: boolean;
  voice_enabled?: boolean;
  mms_enabled?: boolean;
  exclude_all_address_required?: boolean;
  exclude_local_address_required?: boolean;
  exclude_foreign_address_required?: boolean;
  limit?: number;
}

export interface AvailableNumbersResponse {
  success: boolean;
  data: AvailablePhoneNumber[];
  message: string;
}
