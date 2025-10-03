import { InboxOutlined } from '@ant-design/icons';
import { Endpoint } from '@business/api/endpoint';
import { R } from '@core/utils/r';
import { UploadFile } from 'antd';
import Dragger, { DraggerProps } from 'antd/es/upload/Dragger';
import React, { memo } from 'react';

export interface DropzoneProps extends DraggerProps {
  title?: string;
  subtitle?: string;
  uploadPath: string;
  showUploadList?: boolean;
  onUpload?(file: UploadFile): void;
  media?: boolean;
  autoUpload?: boolean;
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
        props.onChange?.(info.fileList.filter(file => file.status !== 'done'));
        if (multiple) {
          setFileList(info.fileList.filter(file => file.status !== 'done'));
        } else {
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
