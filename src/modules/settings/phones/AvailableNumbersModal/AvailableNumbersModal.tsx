import React, { memo, useCallback } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from '@core/components/Modal';
import { List, Button, Tag, Space } from 'antd';
import { useModalInstance } from '@core/components/ModalStack';
import { AvailablePhoneNumber } from '@business/entities/phone';
import { useObservable } from '@core/utils/hooks/rxjs';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { useBloc } from '@core/utils/bloc';
import { AvailableNumbersModalBloc } from './AvailableNumbersModalBloc';
import { showConfirmation } from '@modules/common/alerts';
import { switchMap } from 'rxjs/operators';

interface AvailableNumbersModalProps {
  onDone?: () => void;
}
export const AvailableNumbersModal = memo(({ onDone }: AvailableNumbersModalProps) => {
  const modal = useModalInstance();
  const bloc = useBloc(AvailableNumbersModalBloc);
  const numbers = useObservable(bloc.availableNumbers$, []);
  const loading = useLoadingState(bloc.loading);

  const handleBuyNumber = useCallback(
    (phoneNumber: string, friendlyName: string) => {
      showConfirmation(
        'Buy Phone Number',
        `Are you sure you want to purchase <strong>${phoneNumber}</strong> (${friendlyName})?<br/><br/>This action cannot be undone and charges may apply.`,
      )
        .pipe(switchMap(() => bloc.buyPhoneNumber(phoneNumber)))
        .subscribe({
          next: () => {
            console.log('✅ Phone number purchased successfully:', phoneNumber);
            modal.close(); // Close the modal
            onDone?.(); // Refresh the phones table
          },
          error: error => {
            console.error('❌ Failed to buy phone number:', error);
          },
        });
    },
    [bloc, onDone, modal],
  );

  const renderCapabilities = (capabilities: AvailablePhoneNumber['capabilities']) => (
    <Space>
      {capabilities.voice && <Tag color="blue">Voice</Tag>}
      {capabilities.sms && <Tag color="green">SMS</Tag>}
      {capabilities.mms && <Tag color="orange">MMS</Tag>}
      {capabilities.fax && <Tag color="purple">Fax</Tag>}
    </Space>
  );

  return (
    <>
      <style>{`
        .phone-numbers-list .ant-list-item {
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: background-color 0.2s ease;
        }
        .phone-numbers-list .ant-list-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .phone-number-item .ant-list-item-meta-title {
          margin-bottom: 8px;
        }
        .phone-number-details {
          opacity: 0.8;
        }
        .location-info {
          opacity: 0.7;
        }
        .buy-number-btn {
          border-radius: 6px;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
        }
        .phone-numbers-list .ant-pagination {
          margin-top: 24px;
          text-align: center;
        }
      `}</style>
      <Modal maxWidth="lg">
        <ModalHeader title={'Available Phone Numbers'} />
        <ModalContent>
          <div className="mb-4">
            <p className="text-muted mb-0">Select a phone number to purchase for your account. All numbers support basic calling and texting.</p>
          </div>
          <List
            loading={loading.searching}
            dataSource={numbers}
            rowKey="phone_number"
            className="phone-numbers-list"
            pagination={{
              pageSize: 6,
              showSizeChanger: false,
              showQuickJumper: false,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} numbers`,
            }}
            renderItem={item => (
              <List.Item
                className="phone-number-item"
                actions={[
                  <Button
                    type="primary"
                    size="large"
                    className="buy-number-btn"
                    loading={loading.searching}
                    onClick={() => handleBuyNumber(item.phone_number, item.friendly_name)}
                  >
                    <i className="fas fa-shopping-cart mr-2"></i>
                    Buy Number
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="font-weight-bold font-size-16 mr-2 text-primary">{item.phone_number}</span>
                        {item.beta && <Tag color="orange">Beta</Tag>}
                      </div>
                    </div>
                  }
                  description={
                    <div className="phone-number-details">
                      <div className="mb-2">
                        <span className="text-muted font-size-14">{item.friendly_name}</span>
                      </div>
                      <div className="mb-3">{renderCapabilities(item.capabilities)}</div>
                      <div className="d-flex text-muted font-size-12 location-info">
                        {item.locality && (
                          <span className="mr-3">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {item.locality}
                          </span>
                        )}
                        {item.region && (
                          <span className="mr-3">
                            <i className="fas fa-building mr-1"></i>
                            {item.region}
                          </span>
                        )}
                        {item.postal_code && (
                          <span>
                            <i className="fas fa-mail-bulk mr-1"></i>
                            {item.postal_code}
                          </span>
                        )}
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </ModalContent>
        <ModalFooter>
          <Button onClick={modal.close}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
});
