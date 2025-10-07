import { FileCategoryResponse } from '@business/entities/file-category';
import { Endpoint } from '../endpoint';

export function all() {
  return Endpoint.get<FileCategoryResponse[]>(`@merchant/file_categories`);
}
