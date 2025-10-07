import { Endpoint } from '../endpoint';
import { PageQuery, Paginate, TableFilters } from '@business/entities/common';
import { R } from '@core/utils/r';
import { SubmissionResponse } from '@business/entities/submissions/SubmissionResponse';

export function all() {
  return Endpoint.get<SubmissionResponse[]>(`@merchant/submissions`);
}

export function browse(query: PageQuery) {
  return Endpoint.post<Paginate<SubmissionResponse>>(`@merchant/submissions`, { data: R.objectCompact(query) });
}

export function read(id: string) {
  return Endpoint.get<SubmissionResponse>(`@merchant/submissions/${id}`);
}
