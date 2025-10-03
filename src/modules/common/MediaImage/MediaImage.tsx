import { MediaResponse } from '@business/entities/media';
import { Styles } from '@core/utils/css';
import { Image, ImageProps } from 'antd';
import React, { memo } from 'react';

export interface MediaImageProps extends ImageProps {
  media?: MediaResponse;
  canHover?: boolean;
}

export const MediaImage = memo((props: MediaImageProps) => {
  const { media, canHover = true, ...rest } = props;
  const [previewMedia, setPreviewMedia] = React.useState<MediaResponse | null>(null);
  return (
    <>
      <Image
        width={100}
        height={100}
        onClick={() => media && canHover && setPreviewMedia(media)}
        className={'product-listing-media'}
        preview={false}
        src={media?.url.xs}
        fallback={Styles.assets('/images/no-product.png')}
        {...rest}
      />
      {!!previewMedia && (
        <Image
          width={1}
          style={{ display: 'none' }}
          src={previewMedia?.url.sm || ''}
          preview={{
            visible: !!previewMedia,
            src: previewMedia?.url.lg || '',
            onVisibleChange: value => {
              setPreviewMedia(null);
            },
          }}
        />
      )}
    </>
  );
});
