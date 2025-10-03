import React, { memo, useEffect, useMemo } from 'react';
import { FormCheckbox, FormSelect } from '@core/components/form';
import { Row, Col } from 'antd';
import { useNonNilObservable, useObservable } from '@core/utils/hooks/rxjs';
import { useBillingPage } from '../BillingPageContext';
import { OrgInvoiceResponse } from '@business/entities/billing';
import { ColumnType } from 'antd/es/table';
import { TableMenu } from '@core/components/TableMenu';
import { Table } from '@modules/common';
import { Formatter } from '@core/utils/formatter';

export const BillingTransactions = memo(() => {
  const { bloc } = useBillingPage();
  const methods = useObservable(bloc.invoices$, []);

  const columns: ColumnType<OrgInvoiceResponse>[] = [
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
      render: (_, item) => <span className="font-size-14">${item.amount}</span>,
      sorter: true,
    },
    {
      title: 'Invoice Date',
      dataIndex: 'nextDate',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{Formatter.formatTime(item.invoiceDate)}</span>,
      sorter: true,
    },
    {
      title: 'Due Date',
      dataIndex: 'nextDate',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{Formatter.formatTime(item.dueDate)}</span>,
      sorter: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.invoiceStatus}</span>,
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
