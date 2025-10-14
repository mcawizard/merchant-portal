import { Endpoint } from '../endpoint';
import { ApplicationSubmissionOwnerResponse } from '@business/entities/application-submission';

export function all() {
  return Endpoint.get<ApplicationSubmissionOwnerResponse[]>(`@merchant/application-submissions`);
}
