import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm, PopconfirmProps } from 'antd';
import React, { memo } from 'react';
import { Observable } from 'rxjs';

export interface ConfirmPopupProps extends Omit<PopconfirmProps, 'onConfirm'> {
  onConfirm: () => Observable<any> | void;
}

export const ConfirmPopup = memo((props: React.PropsWithChildren<ConfirmPopupProps>) => {
  const { onConfirm, title = 'Delete', description = 'Are you sure to delete this item?', ...rest } = props;
  return (
    <Popconfirm
      title={title}
      description={description}
      {...rest}
      onConfirm={() => {
        const result = onConfirm();
        if (result instanceof Observable) {
          return result.toPromise();
        }
      }}
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
    >
      {props.children}
    </Popconfirm>
  );
});
