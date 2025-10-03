import React, { memo, Fragment, useCallback } from 'react';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { openAccountSwitchModal } from '@modules/common/AccountSwitchModal';
import { useMainPageContext } from './context';
import { LoginTenantResponse } from '@business/entities/common';

export const SwitchAccountMenu = memo(() => {
  const { bloc } = useMainPageContext();
  const accounts = useObservable(bloc.accounts$, []);

  const user = useObservable(Session.user$);

  const onSwitch = useCallback(
    (account: LoginTenantResponse) => {
      openAccountSwitchModal({ email: user!.email, appId: account.appId });
    },
    [user],
  );

  if (accounts.length === 0) return null;
  return (
    <Fragment>
      <div className="dropdown-divider" />
      <span style={{ color: '#909090', marginLeft: 20, fontSize: 12, marginBottom: 0, marginTop: 10, display: 'flex' }}>Switch Account</span>
      {accounts.map(account => (
        <a key={account.appId} className="dropdown-item" onClick={() => onSwitch(account)}>
          <span>{account.title}</span>
        </a>
      ))}
    </Fragment>
  );
});
