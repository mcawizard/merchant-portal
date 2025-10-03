import React, { memo, useEffect, useMemo } from 'react';
import { FormCheckbox, FormSelect } from '@core/components/form';
import { Row, Col } from 'antd';
import { useNonNilObservable, useObservable } from '@core/utils/hooks/rxjs';
import { useBillingPage } from '../BillingPageContext';
import { ColumnType } from 'antd/es/table';
import { OrgPaymentMethodResponse } from '@business/entities/billing';
import { TableMenu } from '@core/components/TableMenu';
import { Table } from '@modules/common';

export const BillingPaymentMethods = memo(() => {
  const { bloc } = useBillingPage();
  const addresses = useObservable(bloc.addresses$, []);
  const methods = useObservable(bloc.methods$, []);

  const columns: ColumnType<OrgPaymentMethodResponse>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.name}</span>,
      sorter: true,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.type}</span>,
      sorter: true,
    },
    {
      title: 'Last 4 Digits',
      dataIndex: 'last4',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.cardDigits}</span>,
      sorter: true,
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expiry',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.cardExpiry}</span>,
      sorter: true,
    },
    {
      width: 50,
      render: (_, item) => (
        <TableMenu
          key={item.id}
          // onEdit={() => openEditPhoneModal({ phone: item, onDone: () => bloc.onRefresh().subscribe() })}
          // onDelete={() => bloc.remove(item.id)}
        />
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={methods} rowHoverable rowKey={'id'} />
    </div>
  );
});
