import { FieldProps, FormControl, useFormField } from '@core/utils/form';
import { R } from '@core/utils/r';
import React, { CSSProperties, useCallback, useMemo, Fragment, useState, useEffect } from 'react';
import { tap } from 'rxjs/operators';
import './form_upload.scss';
import { Label, UncontrolledTooltip } from 'reactstrap';
import { GetProp, Image, Upload, UploadFile, UploadProps } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Request } from '@core/utils/request';
import { Endpoint } from '@business/api/endpoint';
import { UploadResponse } from '@business/entities/common';
import { UploadListType } from 'antd/es/upload/interface';
export interface FormUploadImageBaseProps<T extends string> {
  onChange?(value: T | null): void;
  uploadPath: string;
  listType?: UploadListType;
}

export interface FormUploadImageProps<T extends string> extends FormUploadImageBaseProps<T>, FieldProps<FormControl<T>> {
  type?: 'multiple';
  listType?: UploadListType;
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

export function FormUploadImage<T extends string>(props: FormUploadImageProps<T>) {
  const { formControl, fieldState, fieldConfig } = useFormField(props);
  const { listType = 'picture-card' } = props;

  const fieldValue = fieldState.value || null;
  const fieldTouched = (fieldState && fieldState.touched) || formControl.inheritedSubmitted || false;
  const fieldError = (fieldTouched && fieldState.errorMessage) || null;

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    if (fieldValue && !isUploaded) {
      setFileList([{ uid: 'upload', url: fieldValue, name: 'test.png' }]);
    }
  }, [fieldValue]);

  const fieldReadonly = fieldConfig.readonly || null;
  const fieldDisabled = fieldConfig.disabled || null;

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    if (newFileList.length > 0) {
      if (newFileList[0].response) {
        const response = newFileList[0].response as UploadResponse;
        formControl.setValue(response.filePath as any);
      }
    }
    setIsUploaded(true);
    setFileList(newFileList);
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <React.Fragment>
      <Upload
        listType={listType}
        accept=".jpg,.jpeg,.png"
        fileList={fileList}
        maxCount={1}
        action={Endpoint.dumpUrl(`@oohcoders/../common/upload?path=${encodeURIComponent(props.uploadPath)}`)}
        headers={{ 'X-Tenant': Endpoint.getAppId()! }}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={() => formControl.setValue(null)}
      >
        {fileList.length == 1 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          style={{ objectFit: 'cover' }}
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: visible => setPreviewOpen(visible),
            afterOpenChange: visible => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </React.Fragment>
  );
}
