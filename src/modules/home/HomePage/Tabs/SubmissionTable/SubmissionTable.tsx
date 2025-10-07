import React, { memo } from 'react';
import { Table } from '@modules/common';
import { ColumnType } from 'antd/es/table';
import { TableMenu } from '@core/components/TableMenu';
import { SubmissionResponse } from '@business/entities/submissions/SubmissionResponse';
import { HomePageBloc } from '../../HomePageBloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Formatter } from '@core/utils/formatter';
import { CommonService } from '@business/services';
import { Card } from 'antd';
import { openAddEditFileModal } from '../../components/AddEditFileModal';

export interface SubmissionTableProps {
  bloc: HomePageBloc;
}

export const SubmissionTable = memo((props: SubmissionTableProps) => {
  const { bloc } = props;
  const submissions = useObservable(bloc.submission$, []);

  const columns: ColumnType<SubmissionResponse>[] = [
    {
      title: 'Submission',
      dataIndex: 'contractMID',
      render: (_, item) => item.contractMID,
    },
    {
      title: 'Submitted Date',
      dataIndex: 'createdAt',
      render: (_, item) => Formatter.formatDateTime(item.createdAt),
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      render: (_, item) => item.company.companyName,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: (_, item) => CommonService.getAddress(item.company.mainAddress),
    },
    {
      title: 'Status',
      dataIndex: 'dealStatus',
      render: (_, item) => item.dealStatus,
    },
    {
      title: 'Offer Amount',
      dataIndex: 'dealStatus',
      render: (_, item) => Formatter.formatCurrency(item.dealLenderOffer.lender_offer_amount, 'USD'),
    },
    {
      title: 'Term/Frequency',
      dataIndex: 'dealStatus',
      render: (_, item) => item.dealLenderOffer.lender_term + '/' + item.dealLenderOffer.lender_payment_type,
    },
    {
      title: 'Payment Amount',
      dataIndex: 'dealStatus',
      render: (_, item) => Formatter.formatCurrency(item.dealLenderOffer.lender_payment, 'USD'),
    },
    {
      width: 50,
      render: (_, item) => (
        <TableMenu
          key={item.id}
          onUpload={() =>
            openAddEditFileModal({
              deal_id: item.id,
            })
          }
        />
      ),
    },
  ];

  return (
    <Card>
      <Table columns={columns} dataSource={submissions} rowHoverable rowKey={'id'} />
    </Card>
  );
});
