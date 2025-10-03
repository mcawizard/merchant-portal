import { useHistory } from '@core/router';
import { Button, ConfigProvider, Modal, theme } from 'antd';
import { Blocker } from 'history';
import React, { memo, useCallback } from 'react';

export interface UnsavedModalProps {
  dirty: boolean;
}

export const UnsavedModal = memo((props: UnsavedModalProps) => {
  const { dirty } = props;
  const history = useHistory();
  const [dismiss, setDismiss] = React.useState(false);

  // let unblock = history.block(tx => {
  //   // Navigation was blocked! Let's show a confirmation dialog
  //   // so the user can decide if they actually want to navigate
  //   // away and discard changes they've made in the current page.
  //   let url = tx.location.pathname;
  //   Modal.confirm({
  //     title: 'Unsaved Changes',
  //     content: 'You have unsaved changes. Are you sure you want to leave?',
  //     onOk: () => {
  //       tx.retry();
  //     },
  //     onCancel: () => {
  //       unblock();
  //       tx.retry();
  //     },
  //   });
  // });

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm, components: { Modal: { padding: 10, paddingLG: 10, zIndexPopupBase: 5000 } } }}>
      <Modal mask={false} style={{ top: 10 }} styles={{ content: { padding: 10 } }} closable={false} open={dirty} footer={null}>
        <div className="d-flex align-items-center">
          <div className="flex-fill font-size-14">
            <i className="fa-duotone fa-solid fa-floppy-disk mr-2" />
            Unsaved Changes
          </div>
          <Button type="primary" className="mr-2">
            Discard
          </Button>
          <Button>Save</Button>
        </div>
      </Modal>
    </ConfigProvider>
  );
});
