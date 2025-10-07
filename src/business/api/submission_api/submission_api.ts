import { Endpoint } from '../endpoint';
import { SubmissionResponse } from '@business/entities/submissions/SubmissionResponse';
import { HomeStatResponse } from '@business/entities/home';

export function all() {
  return Endpoint.get<SubmissionResponse[]>(`@merchant/submissions`);
}

export function stats() {
  return Endpoint.get<HomeStatResponse[]>(`@merchant/submissions/stats`);
}
