import { InboxOutlined } from '@ant-design/icons';
import { Endpoint } from '@business/api/endpoint';
import { R } from '@core/utils/r';
import { UploadFile } from 'antd';
import Dragger, { DraggerProps } from 'antd/es/upload/Dragger';
import React, { memo } from 'react';

export interface DropzoneProps extends Omit<DraggerProps, 'onChange' | 'multiple'> {
  title?: string;
  subtitle?: string;
  uploadPath: string;
  showUploadList?: boolean;
  onUpload?(file: UploadFile): void;
  media?: boolean;
  autoUpload?: boolean;
  multiple?: boolean;
  onChange?(files: any): void;
}

export const Dropzone = memo((props: DropzoneProps) => {
  const {
    title = 'Click or drag file to this area to upload',
    subtitle = 'Drag and drop pdf, docx or xlsx files',
    multiple = true,
    uploadPath,
    accept = '.pdf,.docx,.xlsx',
    media = true,
    showUploadList = false,
    autoUpload = true,
  } = props;

  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  return (
    <Dragger
      showUploadList={showUploadList}
      listType="picture"
      multiple={multiple}
      fileList={fileList}
      beforeUpload={file => (!autoUpload ? false : undefined)}
      onChange={info => {
        if (info.file.status === 'done') {
          props.onUpload?.(info.file);
        }

        const filteredFiles = info.fileList.filter(file => file.status !== 'done');

        // Handle onChange callback based on multiple flag
        if (multiple) {
          // Return array of files when multiple is true
          props.onChange?.(filteredFiles);
          setFileList(filteredFiles);
        } else {
          // Return single file (or null) when multiple is false
          const singleFile = filteredFiles.length > 0 ? filteredFiles[0] : null;

          // Extract the actual File object from the UploadFile wrapper
          let fileToReturn = null;
          if (singleFile) {
            if (singleFile.originFileObj && singleFile.originFileObj instanceof File) {
              fileToReturn = singleFile.originFileObj;
            } else if (singleFile.file && singleFile.file instanceof File) {
              fileToReturn = singleFile.file;
            } else if (singleFile instanceof File) {
              fileToReturn = singleFile;
            } else {
              // Fallback to the wrapped object
              fileToReturn = singleFile;
            }
          }

          props.onChange?.(fileToReturn);
          setFileList([info.file]);
        }
      }}
      action={autoUpload ? Endpoint.dumpUrl(`@oohcoders/../common/upload?media=${media}&path=${encodeURIComponent(uploadPath)}`) : undefined}
      headers={R.omit(Endpoint.dumpHeaders, 'Content-Type')}
      accept={accept}
    >
      <p className="ant-upload-drag-icon">
        <i className="fa-duotone fa-solid fa-image text-primary" style={{ fontSize: 46 }}></i>
      </p>
      <p className="ant-upload-text">{title}</p>
      <p className="ant-upload-hint">{subtitle}</p>
    </Dragger>
  );
});
