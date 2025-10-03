import React, { memo, useEffect, useMemo } from 'react';
import { FormCheckbox, FormSelect } from '@core/components/form';
import { Row, Col } from 'antd';
import { useNonNilObservable, useObservable } from '@core/utils/hooks/rxjs';
import { useBillingPage } from '../BillingPageContext';
import { ColumnType } from 'antd/es/table';
import { OrgAddressResponse } from '@business/entities/billing';
import { TableMenu } from '@core/components/TableMenu';
import { Table } from '@modules/common';
import { LoadingOutlined } from '@ant-design/icons';

export const BillingAddress = memo(() => {
  const { bloc } = useBillingPage();
  const addresses = useObservable(bloc.addresses$, []);

  const columns: ColumnType<OrgAddressResponse>[] = [
    {
      title: 'Address',
      dataIndex: 'Address',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => (
        <span className="font-size-14">
          {item.address}, {item.addressLineTwo}
        </span>
      ),
      sorter: true,
    },
    {
      title: 'City',
      dataIndex: 'city',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.city}</span>,
      sorter: true,
    },
    {
      title: 'State',
      dataIndex: 'state',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.state}</span>,
      sorter: true,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.country}</span>,
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
      <Table columns={columns} dataSource={addresses} rowHoverable rowKey={'id'} />
    </div>
  );
});
