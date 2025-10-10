import React, { memo } from 'react';
import { Table } from '@modules/common';
import { ColumnType } from 'antd/es/table';
import { FundedSubmissionResponse } from '@business/entities/submissions/SubmissionResponse';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { Formatter } from '@core/utils/formatter';
import { Card } from 'antd';
import { FundedTableBloc } from './FundedTableBloc';
import { useBloc } from '@core/utils/bloc';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { Button } from '@core/components/Button';

export const FundedTable = memo(() => {
  const bloc = useBloc(FundedTableBloc);
  const submissions = useNonNilObservable(bloc.items$);
  const loading = useLoadingState(bloc.loading);

  const columns: ColumnType<FundedSubmissionResponse>[] = [
    {
      title: 'Submission',
      dataIndex: 'contractMID',
      render: (_, item) => item.contractMID,
    },
    {
      title: 'Funded Date',
      dataIndex: 'fundedDate',
      render: (_, item) => Formatter.formatDateTime(item.fundedDate),
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      render: (_, item) => item.company.companyName,
    },
    {
      title: 'Status',
      dataIndex: 'accountingStatus',
      render: (_, item) => item.accountingStatus,
    },
    {
      title: 'Paid In %',
      dataIndex: 'balance.paidInPercent',
      render: (_, item) => Formatter.formatPercent(item.balance?.paidInPercent),
    },
    {
      title: 'RTR(payback amount)',
      dataIndex: 'deal_total_rtr',
      render: (_, item) => Formatter.formatCurrency(item.deal_total_rtr, 'USD'),
    },
    {
      title: 'Collected Payments',
      dataIndex: 'balance.collectedPayments',
      render: (_, item) => Formatter.formatCurrency(item.balance?.collectedPayments, 'USD'),
    },
    {
      title: 'Outstanding Balance',
      dataIndex: 'balance.outstandingBalance',
      render: (_, item) => Formatter.formatCurrency(item.balance?.outstandingBalance, 'USD'),
    },
    {
      title: 'Actions',
      width: 50,
      render: (_, item) => {
        return (
          <div className="d-flex" style={{ gap: 8 }}>
            <Button size="small" onClick={() => {}}>
              Renewal
            </Button>
            <Button size="small" onClick={() => {}}>
              Payoff
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Card>
      <Table columns={columns} dataSource={submissions} rowHoverable rowKey={'id'} loading={loading.loading} />
    </Card>
  );
});
