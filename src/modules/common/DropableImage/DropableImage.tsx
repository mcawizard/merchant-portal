import React, { memo, useCallback, DragEvent, useState } from 'react';
import './index.scss';

import { classnames } from '@core/utils/css';
import { R } from '@core/utils/r';
export interface DropableImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  onDropImage?: (file: File) => void;
}

export const DropableImage = memo((props: DropableImageProps) => {
  const { onDropImage, className, src, ...rest } = props;
  const [isDragging, setIsDragging] = useState(false);
  const handleDrag = useCallback(
    (e: DragEvent<HTMLImageElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

        if (validImageTypes.includes(file.type)) {
          onDropImage?.(file);
        }
        setIsDragging(false);
      }
    },
    [onDropImage],
  );

  return (
    <img
      onDragEnter={() => setIsDragging(true)}
      onDrag={handleDrag}
      onDrop={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={() => setIsDragging(false)}
      className={classnames(className, { isDragging, DropableImage: true })}
      onError={e => {
        console.log('Image load error', e);
      }}
      {...rest}
      src={R.isEmpty(src) ? 'https://app.grandcentr.al/assets/blank.png' : src}
    />
  );
});
