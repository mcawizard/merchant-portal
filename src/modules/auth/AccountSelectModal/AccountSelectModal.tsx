import { Modal, ModalContent, ModalHeader } from '@core/components/Modal';
import { useModalInstance } from '@core/components/ModalStack';
import React, { memo } from 'react';
import './index.scss';
import { R } from '@core/utils/r';
import { LoginTenantResponse } from '@business/entities/common';
import { Card } from 'antd';

interface AccountItemProps {
  account: LoginTenantResponse;
  onClick(): void;
  last?: boolean;
}
const AccountItem = memo((props: AccountItemProps) => {
  const { account, last } = props;
  return (
    <Card className="accountItem-container" style={{ marginBottom: 12, padding: 0 }}>
      <div className="accountItem" onClick={props.onClick}>
        <span className="accountItem-label text-gradient">{account.title}</span>
      </div>
    </Card>
  );
});
export interface AccountSelectModalProps {
  accounts: LoginTenantResponse[];
  onSelect(appId: string): void;
  onCancel(): void;
}

export const AccountSelectModal = memo((props: AccountSelectModalProps) => {
  const { accounts } = props;
  const modal = useModalInstance();

  return (
    <Modal maxWidth="sm" disableBackdropClick>
      <ModalHeader title={'Select Account'} onClose={props.onCancel} />
      <ModalContent>
        <div className="d-flex flex-column">
          {accounts.map((account, index) => (
            <AccountItem
              last={accounts.length - 1 === index}
              key={account.appId}
              account={account}
              onClick={() => {
                props.onSelect(account.appId);
                modal.close();
              }}
            />
          ))}
        </div>
      </ModalContent>
    </Modal>
  );
});
