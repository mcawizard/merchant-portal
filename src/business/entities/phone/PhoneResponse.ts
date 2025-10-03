import { CompactAgentsResponse } from '../agents';

export interface PhoneResponse {
  id: string;
  number: string;
  agent: CompactAgentsResponse;
  status: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  agentId: string;
}
