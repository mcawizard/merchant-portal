import React, { memo, useEffect, useMemo } from 'react';
import { FormCheckbox, FormSelect } from '@core/components/form';
import { Row, Col } from 'antd';
import { useNonNilObservable, useObservable } from '@core/utils/hooks/rxjs';
import { useBillingPage } from '../BillingPageContext';
import { OrgSubscriptionResponse } from '@business/entities/billing';
import { ColumnType } from 'antd/es/table';
import { Formatter } from '@core/utils/formatter';
import { TableMenu } from '@core/components/TableMenu';
import { Table } from '@modules/common';

export const BillingSubscriptions = memo(() => {
  const { bloc } = useBillingPage();
  const methods = useObservable(bloc.subscriptions$, []);

  const columns: ColumnType<OrgSubscriptionResponse>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.title}</span>,
      sorter: true,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => (
        <span className="font-size-14">
          ${item.amount}/{item.cycle}
        </span>
      ),
      sorter: true,
    },
    {
      title: 'Next Billing',
      dataIndex: 'nextDate',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{Formatter.formatTime(item.nextDate)}</span>,
      sorter: true,
    },

    // {
    //   width: 50,
    //   render: (_, item) => (
    //     <TableMenu
    //       key={item.id}
    //       // onEdit={() => openEditPhoneModal({ phone: item, onDone: () => bloc.onRefresh().subscribe() })}
    //       // onDelete={() => bloc.remove(item.id)}
    //     />
    //   ),
    // },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={methods} rowHoverable rowKey={'id'} />
    </div>
  );
});
