import { UserResponse, CompactUserResponse } from '@business/entities/user';
import { Endpoint } from '../endpoint';
import { PageQuery, Paginate, TableFilters } from '@business/entities/common';
import { R } from '@core/utils/r';
import { ServerValidation } from '@core/utils/form';

export function all() {
  return Endpoint.get<UserResponse[]>(`@oohcoders/users/all`);
}

export function browse(query: PageQuery) {
  return Endpoint.post<Paginate<CompactUserResponse>>(`@oohcoders/users`, { data: R.objectCompact(query) });
}

export function read(id: string) {
  return Endpoint.get<UserResponse>(`@oohcoders/users/${id}`);
}

export function add(user: Partial<UserResponse>) {
  return Endpoint.post<UserResponse>(`@oohcoders/users/add`, { data: user });
}

export function edit(id: string, user: Partial<UserResponse>) {
  return Endpoint.post<UserResponse>(`@oohcoders/users/${id}/edit`, { data: user });
}

export function remove(id: string) {
  return Endpoint.post<void>(`@oohcoders/users/${id}/delete`);
}

export function filters() {
  return Endpoint.get<TableFilters>(`@oohcoders/users/filters`);
}

export function emailCheck(email: string, userId?: string) {
  return Endpoint.post<ServerValidation>(`@oohcoders/users/check-email`, { data: R.objectCompact({ email, userId }) });
}

export function changePassword(userId: string, password: string) {
  return Endpoint.patch<UserResponse>(`@oohcoders/users/${userId}/change-password`, { data: { password } });
}
