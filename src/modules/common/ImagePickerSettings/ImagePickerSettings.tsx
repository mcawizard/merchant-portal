import React, { memo, useMemo, useCallback } from 'react';
import { formControl, formGroup, Validators, useFormConfig } from '@core/utils/form';
import { FormInput, FormSegmented, FormSelect } from '@core/components/form';

import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { CommonService } from '@business/services';
import { R } from '@core/utils/r';
import { Row, Col, Button } from 'reactstrap';
import Dropzone from 'react-dropzone';
import { classnames } from '@core/utils/css';
import { UploadAPI } from '@business/api/upload';
import { tap } from 'rxjs/operators';
import { FlashMessage } from '@core/components/FlashMessage';
import { openImageFinderModal } from '../ImageFinder';
import { openMediaModal } from '@modules/media/MediaModal';

function defineImageForm() {
  return formGroup({
    search: formControl<string>({
      placeholder: 'Search from image library... (press enter)',
      initialValue: '',
    }),
    type: formControl<string>({
      initialValue: 'upload',
    }),
  });
}

export interface ImagePickerSettingsProps {
  multiple?: boolean;
  path?: string;
  onSelect(imageUrl: string): void;
  currentImageUrl?: string;
}

export const ImagePickerSettings = memo((props: ImagePickerSettingsProps) => {
  const { multiple = false, path = 'proposal/images', onSelect, currentImageUrl } = props;
  const form = useMemo(() => defineImageForm(), []);
  const formValue = useNonNilObservable(form.value$);
  const isUpload = useMemo(() => formValue.type === 'upload', [formValue]);
  const control = useMemo(
    () => formGroup({ item: formControl<string>({ label: 'URL', placeholder: 'Paste URL here...', validators: [Validators.url] }) }),
    [],
  );
  useFormConfig(control, { onSubmit: value => onSelect(value.item) });

  const onDrop = useCallback(
    (files: File[]) => {
      if (!files) return null;
      if (files.length == 0) return null;

      files.forEach(file => {
        UploadAPI.upload(path, file)
          .pipe(tap(res => onSelect(res.fileUrl)))
          .subscribe();
      });
    },
    [onSelect, path],
  );

  return (
    <div className={classnames({ 'mb-4': isUpload })}>
      <Row>
        <Col md="12">
          <FormSegmented
            control={form.controls.type}
            items={['upload', 'unsplash', 'pexels', 'media']}
            onChange={value => {
              if (value == 'media') {
                openMediaModal({
                  single: true,
                  onSelect: m => {
                    onSelect(m[0].url.full);
                  },
                });
              }
            }}
            labelAccessor={u => R.upperFirst(u)}
            valueAccessor={u => u}
          />
        </Col>
        <Col md={12}>
          {!isUpload && (
            <FormInput
              type="search"
              control={form.controls.search}
              onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
                if (event.keyCode === 13) {
                  openImageFinderModal({
                    initialSearch: formValue.search || '',
                    source: formValue.type,
                    onSelect: image => onSelect(image),
                  });
                }
              }}
            />
          )}

          {isUpload && (
            <div>
              <Dropzone onDrop={onDrop} maxFiles={1} accept="image/*">
                {({ getRootProps, getInputProps }) => (
                  <div className="dropzone">
                    <div className="dz-message needsclick" {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="dz-message needsclick">
                        <div className="mb-3">
                          <i className="display-4 text-muted bx bxs-cloud-upload" />
                        </div>
                        <h4>Drop files here</h4>
                      </div>
                    </div>
                  </div>
                )}
              </Dropzone>
              <div className="mt-2">
                <FormInput control={control.controls.item} />
                <Button onClick={() => control.submit()} color="primary">
                  Save
                </Button>
              </div>
            </div>
          )}
        </Col>
      </Row>
      {/* <div className="d-flex align-items-center">
        {!!currentImageUrl && <img style={{ width: 100, height: 100, objectFit: 'contain' }} src={currentImageUrl} alt="" />}
      </div> */}
    </div>
  );
});
