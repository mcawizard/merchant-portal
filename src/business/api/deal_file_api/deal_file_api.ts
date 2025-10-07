import { Endpoint } from '../endpoint';
import { CommonService } from '@business/services';
import { FileFormData } from '@modules/home/HomePage/components/AddEditFileModal/AddEditFileModal';

export function create(data: FileFormData) {
  console.log('deal_file_api.create - input data:', data);
  console.log('deal_file_api.create - data.file instanceof File:', data.file instanceof File);
  console.log('deal_file_api.create - data.file:', data.file);
  
  const formData = CommonService.toFormData(data);
  
  console.log('deal_file_api.create - generated FormData:');
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  
  return Endpoint.post<any[]>(`@merchant/deal_files`, { formData, hasFiles: true });
}
