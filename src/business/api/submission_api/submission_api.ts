import { Endpoint } from '../endpoint';
import { CompactSubmissionResponse, FundedSubmissionResponse } from '@business/entities/submissions/SubmissionResponse';
import { HomeStatResponse } from '@business/entities/home';

export function all() {
  return Endpoint.get<CompactSubmissionResponse[]>(`@merchant/submissions`);
}

export function getFunded() {
  return Endpoint.get<FundedSubmissionResponse[]>(`@merchant/funded-submissions`);
}

export function stats() {
  return Endpoint.get<HomeStatResponse[]>(`@merchant/submissions/stats`);
}

export function sendRequest(id: string, data: { message: string; merchantId: string; type?: string }) {
  return Endpoint.post<void>(`@merchant/submissions/${id}/send-request`, { data });
}
