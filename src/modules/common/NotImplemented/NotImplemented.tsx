import { Result } from 'antd';
import React, { memo } from 'react';

export const NotImplemented = memo(() => {
  return <Result status="500" title="Not Implemented" subTitle="Sorry, this page is not implemented." />;
});
