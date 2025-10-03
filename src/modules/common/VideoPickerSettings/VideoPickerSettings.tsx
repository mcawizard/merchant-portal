import React, { memo, useMemo } from 'react';
import { formControl, formGroup, Validators, useFormConfig } from '@core/utils/form';
import { FormInput, FormSelect } from '@core/components/form';
import { Row, Col, Button } from 'reactstrap';
import { UploadAPI } from '@business/api/upload';
import { tap } from 'rxjs/operators';
import { R } from '@core/utils/r';

export interface VideoPickerSettingsProps {
  onSelect(src: string, iframe: string, autoplay: boolean): void;
  src?: string;
  autoplay?: boolean;
}

export const VideoPickerSettings = memo(({ onSelect, src, autoplay }: VideoPickerSettingsProps) => {
  const control = useMemo(
    () =>
      formGroup({
        item: formControl<string>({
          label: 'Video URL',
          placeholder: 'Paste YouTube/Vimeo or direct video URL...',
          validators: [Validators.url],
          initialValue: src,
        }),
        isAutoPlay: formControl<string>({ label: 'Style', initialValue: !autoplay ? 'Image with play button' : 'Background video' }),
        isLoopVideo: formControl<boolean>({ label: 'Loop video', initialValue: false }),
      }),
    [],
  );

  useFormConfig(control, {
    onSubmit: (value: any) => {
      const videoUrl = value.item.trim();
      UploadAPI.video(videoUrl, { autoplay: value.isAutoPlay === 'Background video' })
        .pipe(tap(res => onSelect(videoUrl, res.embed, value.isAutoPlay === 'Background video')))
        .subscribe();
    },
  });

  return (
    <div className="mb-4">
      <Row>
        <Col md="12">
          <FormInput control={control.controls.item} />
          <FormSelect
            control={control.controls.isAutoPlay}
            items={['Image with play button', 'Background video']}
            labelAccessor={i => R.upperFirst(i)}
            valueAccessor={i => i}
          />
          {/* <FormCheckbox control={control.controls.isLoopVideo} /> */}
          <Button onClick={() => control.submit()} color="primary">
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
});
