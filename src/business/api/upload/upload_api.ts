import { CommonService } from '@business/services';
import { Endpoint } from '../endpoint';
import { UploadResponse } from '@business/entities/common';

export function upload(path: string, file: File) {
  const formData = CommonService.toFormData({ file, path });
  return Endpoint.post<UploadResponse>(`@oohcoders/upload`, { formData, hasFiles: true });
}

export function video(url: string, options?: { autoplay: boolean }) {
  return Endpoint.post<{ embed: string; image: string }>(`@oohcoders/upload/video`, { data: { url, ...options } });
}
export function aiHTMl(path: string, file: File) {
  const formData = CommonService.toFormData({ file, path });
  return Endpoint.post<{ html: string }>(`@oohcoders/generate-html`, { formData, hasFiles: true });
}
