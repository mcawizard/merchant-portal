import { Modal, ModalContent, ModalHeader } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import { css } from '@emotion/react';
import React, { memo, useMemo } from 'react';
import { useBloc } from '@core/utils/bloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { FileViewerModalBloc } from './FileViewerModalBloc';
import './index.scss';
import { FileViewer } from '@modules/common/FileViewer';
import { FileResponse } from '@business/entities/library';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { tap } from 'rxjs/operators';

const styles = {
  content: css`
    padding: 25px !important;
  `,
};

export interface FileViewerModalProps {
  name?: string;
  filePath?: string;
  id?: string;
}

export const FileViewerModal = memo((props: FileViewerModalProps) => {
  const { name, filePath, id } = props;
  const modal = useModalInstance();
  const bloc = useBloc(FileViewerModalBloc, 'file', id);
  const item = useObservable(bloc.item$) as FileResponse;
  const title = useMemo(() => (item ? item.name : name), [item, name]);
  const url = useMemo(() => (item ? item.url : filePath), [filePath, item]);
  //   const iframUrl = useMemo(() => `https://docs.google.com/viewer?embedded=true&url=` + encodeURI(decodeURI(filePath)), [filePath]);

  const [downloading, setDownloading] = React.useState(false);

  const handleDownload = () => {
    if (!id || !name || filePath) {
      // For direct URL, open in new tab
      window.open(url, '_blank');
      return;
    }

    setDownloading(true);
    bloc
      .fileDownload(id, name)
      .pipe(tap(() => setDownloading(false)))
      .subscribe({
        error: () => setDownloading(false),
      });
  };

  return (
    <div className="libraryFileViewerModal">
      <Modal maxWidth="lg">
        <ModalHeader
          title={title}
          rightContent={
            <Button type="primary" icon={<DownloadOutlined />} loading={downloading} onClick={handleDownload} disabled={!url}>
              Download
            </Button>
          }
        />
        <ModalContent customCss={styles.content}>{url && <FileViewer filePath={url} autoExtractType />}</ModalContent>
      </Modal>
    </div>
  );
});
