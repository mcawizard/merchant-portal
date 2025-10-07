import { VeryCompactCompanyResponse } from '../company';
import { DealLenderResponse } from '../deal-lender-offer';

export interface SubmissionResponse {
  id: string;
  contractMID: string;
  createdAt: string;
  company: VeryCompactCompanyResponse;
  dealStatus: string;
  dealLenderOffer: DealLenderResponse;
  offer: any;
}

export type CompactSubmissionResponse = Pick<SubmissionResponse, 'id' | 'contractMID' | 'createdAt' | 'company' | 'dealLenderOffer'>;
