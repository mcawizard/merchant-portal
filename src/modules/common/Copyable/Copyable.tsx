import { CommonService } from '@business/services';
import { FlashMessage } from '@core/components/FlashMessage';
import { Alert, Button, ConfigProvider, Space } from 'antd';
import React, { memo, useCallback } from 'react';

export interface CopyableProps {
  content: string;
  children?: React.ReactNode;
}

export const Copyable = memo((props: CopyableProps) => {
  const { content, children } = props;
  const onCopy = useCallback(() => {
    CommonService.copyToClipboard(content);
  }, [content]);

  return (
    <ConfigProvider theme={{ components: { Alert: { withDescriptionPadding: '10px 12px' } } }}>
      <Alert
        description={children || content}
        type="success"
        action={<Button onClick={onCopy} type="dashed" shape="circle" icon={<i className="fa-duotone fa-solid fa-copy" />}></Button>}
      />
    </ConfigProvider>
  );
});
