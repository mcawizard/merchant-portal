import React from 'react';
import { CardImg } from 'reactstrap';
import { CommonService, FileService } from '@business/services';

interface FileViewerProps {
  filePath: string;
  fileType?: string;
  autoExtractType?: boolean;
}

export const FileViewer = (props: FileViewerProps) => {
  const { filePath, fileType, autoExtractType = false } = props;

  function getFileExtension(filename: string) {
    return filename.split('.').pop();
  }
  const type = autoExtractType ? getFileExtension(filePath) : fileType || '';

  if (type === 'pdf' || FileService.isPdf(filePath)) {
    return <object data={filePath} max-width="100%" min-height="400px" style={{ width: '100%', minHeight: '600px' }} />;
  }

  if (CommonService.isValidImage(filePath)) {
    return <CardImg src={filePath} style={{ objectFit: 'contain' }}></CardImg>;
  }

  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <h2 style={{ marginTop: 20 }}>No Preview Available</h2>
    </div>
  );
};
