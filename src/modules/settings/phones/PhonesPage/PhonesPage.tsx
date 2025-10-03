import { useBloc } from '@core/utils/bloc';
import { Table } from '@modules/common';
import { ColumnType } from 'antd/es/table';
import React, { memo, useCallback, useMemo } from 'react';
import { PhonesPageBloc } from './PhonesPageBloc';
import { TableMenu } from '@core/components/TableMenu';
import { PageHeader } from '@modules/common/PageHeader';
import { Page } from '@modules/common/Page';
import { CompactPhoneResponse } from '@business/entities/phone';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { openAvailableNumbersModal } from '../AvailableNumbersModal';
import { openEditPhoneModal } from '../EditPhoneModal';
import { Tag, Space } from 'antd';
import { HasPermissions } from '@modules/common/HasPermissions';
import { AppModule } from '@business/entities/permission';

export const PhonesPage = memo(() => {
  const bloc = useBloc(PhonesPageBloc);
  const loading = useLoadingState(bloc.paginated.loading);
  const onReload = useCallback(() => bloc.paginated.reload().subscribe(), [bloc.paginated]);

  const columns: ColumnType<CompactPhoneResponse>[] = [
    {
      title: 'Phone Number',
      dataIndex: 'number',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => (
        <div className="d-flex flex-column">
          <span className="font-weight-medium font-size-14">{item.number}</span>
          <span className="text-muted font-size-12 mt-1">
            {item.friendly_name || item.number} | {item.type} | {item.status}
          </span>
          {item.locality && (
            <span className="text-muted font-size-12">
              <i className="fas fa-map-marker-alt mr-1"></i>
              {item.locality}, {item.region}
            </span>
          )}
        </div>
      ),
      sorter: true,
    },
    {
      title: 'Capabilities',
      dataIndex: 'capabilities',
      render: (_, item) => (
        <Space>
          {item.voice_enabled && <Tag color="blue">Voice</Tag>}
          {item.sms_enabled && <Tag color="green">SMS</Tag>}
          {item.mms_enabled && <Tag color="orange">MMS</Tag>}
          {item.fax_enabled && <Tag color="purple">Fax</Tag>}
          {!item.voice_enabled && !item.sms_enabled && !item.mms_enabled && !item.fax_enabled && (
            <span className="text-muted font-size-12">No capabilities</span>
          )}
        </Space>
      ),
    },
    {
      title: 'Agent',
      dataIndex: 'agent',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => <span className="font-size-14">{item.agent ? item.agent.name : 'No Agent Assigned'}</span>,
      sorter: true,
    },
    {
      width: 50,
      render: (_, item) => (
        <TableMenu
          key={item.id}
          onEdit={() => openEditPhoneModal({ phone: item, onDone: () => bloc.onRefresh().subscribe() })}
          onDelete={() => bloc.remove(item.id)}
        />
      ),
    },
  ];

  return (
    <HasPermissions module={AppModule.phones}>
      <Page>
        <PageHeader
          searching={loading.searching}
          onSearch={search => bloc.paginated.patchQuery({ search, page: 1 }).subscribe()}
          buttons={[{ title: 'Buy Phone Number', onClick: () => openAvailableNumbersModal({ onDone: onReload }) }]}
        >
          Phones
        </PageHeader>
        <Table columns={columns} paginated={bloc.paginated} rowHoverable rowKey={'id'} />
      </Page>
    </HasPermissions>
  );
});
