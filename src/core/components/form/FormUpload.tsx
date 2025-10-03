import { FieldProps, FormControl, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { CSSProperties, useCallback, useMemo, Fragment, useState, useEffect } from 'react';
import { tap } from 'rxjs/operators';
import './form_upload.scss';
import { Label, UncontrolledTooltip } from 'reactstrap';
import { Button, GetProp, Image, Upload, UploadFile, UploadProps } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Request } from '@core/utils/request';
import { Endpoint } from '@business/api/endpoint';
import { UploadResponse } from '@business/entities/common';
import { UploadListType } from 'antd/es/upload/interface';
export interface FormUploadBaseProps<T extends UploadResponse> {
  onChange?(value: T | null): void;
  uploadPath: string;
  listType?: UploadListType;
}

export interface FormUploadProps<T extends UploadResponse> extends FormUploadBaseProps<T>, FieldProps<FormControl<T>> {
  type?: 'multiple' | 'single';
  listType?: UploadListType;
  description?: string;
  disabled?: boolean;
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export function FormUpload<T extends UploadResponse>(props: FormUploadProps<T>) {
  const { formControl, fieldState, fieldConfig } = useFormField(props);
  const { listType = 'picture' } = props;

  const fieldValue = fieldState.value || null;
  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    if (fieldValue && !isUploaded) {
      const value = fieldValue as UploadResponse;
      setFileList([{ uid: 'upload', url: value.fileUrl, name: value.fileName, status: 'done' }]);
    }
  }, [fieldValue, isUploaded]);

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    if (newFileList.length > 0) {
      if (props.type === 'multiple') {
        const responses = newFileList.map(r => r.response) as UploadResponse[];
        for (let i = 0; i < newFileList.length; i++) {
          if (newFileList[i].response) {
            const response = newFileList[i].response as UploadResponse;
            newFileList[i].url = response.fileUrl;
          }
        }
        formControl.setValue(responses as any);
      } else {
        if (newFileList[0].response) {
          const response = newFileList[0].response as UploadResponse;
          newFileList[0].url = response.fileUrl;
          formControl.setValue(response as any);
        }
      }
    }
    setIsUploaded(true);
    console.log(newFileList);
    setFileList(newFileList);
  };

  const uploadButton = <Button icon={<UploadOutlined />}>Click to Upload</Button>;

  return (
    <div className="mb-2 form-uploader">
      <Upload
        listType={listType}
        fileList={fileList}
        maxCount={props.type === 'multiple' ? undefined : 1}
        multiple={props.type == 'multiple'}
        action={Endpoint.dumpUrl(`@oohcoders/../common/upload?path=${encodeURIComponent(props.uploadPath)}`)}
        headers={{ 'X-Tenant': Endpoint.getAppId()! }}
        onChange={handleChange}
        onRemove={() => formControl.setValue(null)}
      >
        {fileList.length == 1 ? null : uploadButton}
      </Upload>
    </div>
  );
}
