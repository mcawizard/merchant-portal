import React, { memo } from 'react';
import { Table } from '@modules/common';
import { ColumnType } from 'antd/es/table';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { Card } from 'antd';
import { HomePageBloc } from './HomePageBloc';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { ApplicationSubmissionOwnerResponse } from '@business/entities/application-submission';
import { Formatter } from '@core/utils/formatter';
import { TableMenu } from '@core/components/TableMenu';

export interface ApplicationSubmissionTableProps {
  bloc: HomePageBloc;
}

export const ApplicationSubmissionTable = memo((props: ApplicationSubmissionTableProps) => {
  const { bloc } = props;
  const submissions = useNonNilObservable(bloc.appSubmissions$);
  const loading = useLoadingState(bloc.loading);

  const columns: ColumnType<ApplicationSubmissionOwnerResponse>[] = [
    {
      title: 'App ID',
      dataIndex: 'id',
      render: (_, item) => item.id,
    },
    {
      title: 'MID',
      dataIndex: 'appSubmission.deal.contractMID',
      render: (_, item) => item.appSubmission.deal.contractMID,
    },
    {
      title: 'Name',
      dataIndex: 'appSubmission.deal.company.companyName',
      render: (_, item) => item.appSubmission.deal.company.companyName,
    },
    {
      title: 'Submitted Date',
      dataIndex: 'Submitted Date',
      render: (_, item) => Formatter.formatDateTime(item.createdAt),
    },
    {
      title: 'Signed Date',
      dataIndex: 'signedAt',
      render: (_, item) => (item.signedAt ? Formatter.formatDateTime(item.signedAt) : 'N/A'),
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      render: (_, item) => item.status,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, item) => (
        <TableMenu
          key={item.id}
          items={[
            {
              title: 'View Application',
              icon: 'fas fa-file-contract',
              onClick: () => window.open(item.appSubmission.url),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <Card>
      <Table
        title={() => (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0 }}>Applications</h3>
          </div>
        )}
        columns={columns}
        dataSource={submissions}
        rowHoverable
        rowKey={'id'}
        loading={loading.loading}
      />
    </Card>
  );
});
