import { Modal, ModalContent } from '@core/components/Modal';
import React, { memo, useMemo } from 'react';
import { tap } from 'rxjs/operators';
import { Styles } from '@core/utils/css';
import { CardTitle } from 'reactstrap';
import { LoadingIndicator } from '@core/components/LoadingIndicator';
import { useDidMount } from '@core/utils/hooks/react';
import { AuthAPI } from '@business/api/auth';
import { Storage } from '@core/utils/storage';
import { TenantConfig } from '@core/utils/config';
export interface AccountSwitchModalProps {
  email: string;
  appId: string;
}

export const AccountSwitchModal = memo((props: AccountSwitchModalProps) => {
  const { email, appId } = props;

  useDidMount(() => {
    AuthAPI.switchAccount(email, appId)
      .pipe(
        tap(user => {
          Storage.set('auth:token', user.token!);
          TenantConfig.set({ appId: appId });
          setTimeout(() => {
            location.href = '/';
          }, 1000);
        }),
      )
      .subscribe();
  });

  return (
    <Modal maxWidth="sm" backdropClose={false}>
      <ModalContent>
        <div className="d-flex mb -2 flex-column align-items-center justify-content-center">
          <img src={Styles.assets('images/logo.png')} alt="" height="44" />
          <CardTitle className="mt-3 mb-3">Switch account...</CardTitle>
          <LoadingIndicator />
        </div>
      </ModalContent>
    </Modal>
  );
});
