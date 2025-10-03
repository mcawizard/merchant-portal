import { IndustryResponse, CompactIndustryResponse } from '@business/entities/industry';
import { Endpoint } from '../endpoint';
import { PageQuery, Paginate, TableFilters } from '@business/entities/common';
import { R } from '@core/utils/r';

export function all() {
  return Endpoint.get<IndustryResponse[]>(`@oohcoders/industries/all`);
}

export function browse(query: PageQuery) {
  return Endpoint.post<Paginate<CompactIndustryResponse>>(`@oohcoders/industries`, { data: R.objectCompact(query) });
}

export function read(id: string) {
  return Endpoint.get<IndustryResponse>(`@oohcoders/industries/${id}`);
}

export function add(industry: Partial<IndustryResponse>) {
  return Endpoint.post<IndustryResponse>(`@oohcoders/industries/add`, { data: industry });
}

export function edit(id: string, industry: Partial<IndustryResponse>) {
  return Endpoint.post<IndustryResponse>(`@oohcoders/industries/${id}/edit`, { data: industry });
}

export function remove(id: string) {
  return Endpoint.post<void>(`@oohcoders/industries/${id}/delete`);
}

export function filters() {
  return Endpoint.get<TableFilters>(`@oohcoders/industries/filters`);
}
