export interface UploadResponse {
  fileName: string;
  extension: string;
  filePath: string;
  fileUrl: string;
  size: number;
  mime: string;
  width?: number;
  height?: number;
}
export interface RTEUploadResponse {
  baseurl: string;
  files: string[];
  names: string[];
  code: number;
  isImages: boolean[];
}
