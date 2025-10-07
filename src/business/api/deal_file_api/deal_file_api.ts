import { Endpoint } from '../endpoint';
import { CommonService } from '@business/services';
import { FileFormData } from '@modules/home/HomePage/components/AddEditFileModal/AddEditFileModal';

export function create(data: FileFormData) {
  const formData = CommonService.toFormData(data);
  debugger;
  return Endpoint.post<any[]>(`@merchant/deal_files`, { data: formData, hasFiles: true });
}
