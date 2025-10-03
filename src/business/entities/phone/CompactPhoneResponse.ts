import { CompactAgentsResponse } from '../agents';

export interface CompactPhoneResponse {
  id: string;
  number: string;
  agent: CompactAgentsResponse;
  status: string;
  type: string;
  // Optional Twilio fields
  twilio_sid?: string;
  friendly_name?: string;
  voice_enabled?: boolean;
  sms_enabled?: boolean;
  mms_enabled?: boolean;
  fax_enabled?: boolean;
  country_code?: string;
  locality?: string;
  region?: string;
}
