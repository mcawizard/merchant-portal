import { CreateMerchantNoteRequest, MerchantNoteResponse } from '@business/entities/merchant-notes';
import { PageQuery, Paginate } from '@business/entities/common';
import { Endpoint } from '../endpoint';
import { R } from '@core/utils/r';

export function all(merchantId: string) {
  return Endpoint.get<MerchantNoteResponse[]>(`@merchant/merchant-notes/${merchantId}`);
}

export function browse(query: PageQuery) {
  return Endpoint.get<Paginate<MerchantNoteResponse>>(`@merchant/merchant-notes/${query.merchantId}`, { params: R.objectCompact(query) });
}

export function create(data: CreateMerchantNoteRequest) {
  return Endpoint.post<MerchantNoteResponse>(`@merchant/merchant-notes`, { data });
}
