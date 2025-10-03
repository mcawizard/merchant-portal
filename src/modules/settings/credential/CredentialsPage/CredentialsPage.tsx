import { useBloc } from '@core/utils/bloc';
import { Table } from '@modules/common';
import { ColumnType } from 'antd/es/table';
import React, { memo, useCallback } from 'react';
import { CredentialsPageBloc } from './CredentialsPageBloc';
import { TableMenu } from '@core/components/TableMenu';
import { PageHeader } from '@modules/common/PageHeader';
import { openAddEditCredentialModal } from '../AddEditCredentialModal';
import { CompactCredentialResponse } from '@business/entities/credential';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { openCredentialsSelectModal } from '../SelectCredentailTypeModal';
import Avatar from 'antd/es/avatar/Avatar';
import { Formatter } from '@core/utils/formatter';
import { Page } from '@modules/common/Page';

export const CredentialsPage = memo(() => {
  const bloc = useBloc(CredentialsPageBloc);
  const loading = useLoadingState(bloc.paginated.loading);
  const onReload = useCallback(() => bloc.paginated.reload().subscribe(), [bloc.paginated]);

  const columns: ColumnType<CompactCredentialResponse>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => (
        <div className="d-flex">
          <Avatar src={item.credentials?.tool.logo} className="mr-2" />
          <div className="d-flex flex-column">
            <span className="font-weight-medium font-size-14">{item.name}</span>
            <span className="text-muted font-size-12 mt-1">
              {item.credentials?.name} | Last Updated {Formatter.formatTimeRelative(item.updated)} | Created at{' '}
              {Formatter.formatDateTime(item.created)}
            </span>
          </div>
        </div>
      ),
      sorter: false,
    },
    {
      width: 50,
      render: (_, item) => (
        <TableMenu
          key={item.id}
          onDelete={() => bloc.remove(item.id)}
          onEdit={() => openAddEditCredentialModal({ toolId: item.type, id: item.id, onDone: onReload })}
        />
      ),
    },
  ];

  return (
    <Page>
      <PageHeader
        searching={loading.searching}
        onSearch={search => bloc.paginated.patchQuery({ search, page: 1 }).subscribe()}
        buttons={[{ title: 'Connect', onClick: () => openCredentialsSelectModal() }]}
      >
        Credentials
      </PageHeader>
      <Table columns={columns} paginated={bloc.paginated} rowHoverable rowKey={'id'} />
    </Page>
  );
});
