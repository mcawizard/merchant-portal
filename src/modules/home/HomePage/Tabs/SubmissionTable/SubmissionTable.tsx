import React, { memo } from 'react';
import { openGenericInputModal, Table } from '@modules/common';
import { ColumnType } from 'antd/es/table';
import { TableMenu } from '@core/components/TableMenu';
import { CompactSubmissionResponse } from '@business/entities/submissions/SubmissionResponse';
import { useNonNilObservable, useObservable } from '@core/utils/hooks/rxjs';
import { Formatter } from '@core/utils/formatter';
import { CommonService } from '@business/services';
import { openAddEditFileModal } from '../../components/AddEditFileModal';
import { SubmissionTableBloc } from './SubmissionTableBloc';
import { useBloc } from '@core/utils/bloc';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { Session } from '@modules/auth/session';

export const SubmissionTable = memo(() => {
  const bloc = useBloc(SubmissionTableBloc);
  const submissions = useNonNilObservable(bloc.submission$);
  const loading = useLoadingState(bloc.loading);
  const user = useObservable(Session.user$);
  const merchantId = user?.merchant?.id ?? '0';

  const columns: ColumnType<CompactSubmissionResponse>[] = [
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
      dataIndex: 'company.companyName',
      render: (_, item) => item.company.companyName,
    },
    {
      title: 'Address',
      dataIndex: 'company.mainAddress',
      render: (_, item) => CommonService.getAddress(item.company.mainAddress),
    },
    {
      title: 'Status',
      dataIndex: 'dealStatus',
      render: (_, item) => item.dealStatus,
    },
    {
      title: 'Offer Amount',
      dataIndex: 'dealLenderOffer.lender_offer_amount',
      render: (_, item) => Formatter.formatCurrency(item.dealLenderOffer.lender_offer_amount, 'USD'),
    },
    {
      title: 'Term/Frequency',
      dataIndex: 'dealLenderOffer.lender_term',
      render: (_, item) => item.dealLenderOffer.lender_term + '/' + item.dealLenderOffer.lender_payment_type,
    },
    {
      title: 'Payment Amount',
      dataIndex: 'dealLenderOffer.lender_payment',
      render: (_, item) => Formatter.formatCurrency(item.dealLenderOffer.lender_payment, 'USD'),
    },
    {
      title: 'Hellosign Contract Sent',
      dataIndex: 'contractSentDate',
      render: (_, item) => Formatter.formatDateTime(item.contractSentDate),
    },
    {
      title: 'Actions',
      width: 20,
      render: (_, item) => (
        <TableMenu
          key={item.id}
          items={[
            {
              title: 'View Hellosign Contract',
              icon: 'fas fa-file-contract',
              onClick: () => window.open(item.contractUrl ?? '', '_blank'),
              disabled: !item.contractUrl,
            },
            {
              title: 'Send Payoff Request',
              icon: 'fas fa-paper-plane',
              onClick: () => {
                openGenericInputModal({
                  multiline: true,
                  button: 'Send',
                  title: 'Payoff Request Message',
                  onSubmit: message => bloc.sendRequest(item.id, { message, merchantId, type: 'payoff' }),
                });
              },
            },
            {
              title: 'Send Renewal Request',
              icon: 'fas fa-paper-plane',
              onClick: () => {
                openGenericInputModal({
                  multiline: true,
                  button: 'Send',
                  title: 'Renewal Request Message',
                  onSubmit: message => bloc.sendRequest(item.id, { message, merchantId, type: 'renewal' }),
                });
              },
            },
          ]}
          onUpload={() =>
            openAddEditFileModal({
              deal_id: item.id,
            })
          }
        />
      ),
    },
  ];

  return <Table columns={columns} dataSource={submissions} rowHoverable rowKey={'id'} loading={loading.loading} />;
});
