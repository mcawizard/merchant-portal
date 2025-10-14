import { SubmissionResponse } from '../submissions/SubmissionResponse';

export interface ApplicationSubmissionOwnerResponse {
  id: string;
  ip: string;
  status: string;
  signedAt: number;
  signature: string;
  signatureType: string;
  printName: string;
  ownerTitle: string;
  createdAt: number;
  appSubmission: ApplicationSubmissionResponse;
}

export interface ApplicationSubmissionResponse {
  id: string;
  name: string;
  deal: AppSubmissionCompactDealResponse;
  email: string;
  body: string;
  submitByName: string;
  status: string;
  url: string;
  createdAt: number;
  updatedAt: number;
}

export type AppSubmissionCompactDealResponse = Pick<SubmissionResponse, 'id' | 'contractMID' | 'company' | 'dealStatus' | 'dealLenderOffer'>;
