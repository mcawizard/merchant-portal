import { useBloc } from '@core/utils/bloc';
import { Table } from '@modules/common';
import { ColumnType } from 'antd/es/table';
import React, { memo, useCallback, useMemo } from 'react';
import { Container } from 'reactstrap';
import { IndustriesPageBloc } from './IndustriesPageBloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { TableMenu } from '@core/components/TableMenu';
import { formControl } from '@core/utils/form';
import { useHistory } from '@core/router';
import { PageHeader } from '@modules/common/PageHeader';
import { openAddEditIndustryModal } from '../AddEditIndustryModal';
import { CompactIndustryResponse } from '@business/entities/industry';
import { useLoadingState } from '@core/utils/repository/loading_state';

export const IndustriesPage = memo(() => {
  const bloc = useBloc(IndustriesPageBloc);
  const filters = useObservable(bloc.paginated.filters$);
  const loading = useLoadingState(bloc.paginated.loading);
  const history = useHistory();
  const onReload = useCallback(() => bloc.paginated.reload().subscribe(), [bloc.paginated]);

  const columns: ColumnType<CompactIndustryResponse>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => (
        <a className="text-primary" onClick={() => history.push(`/products/product/${item.id}`)} style={{ cursor: 'pointer' }}>
          {item.title}
        </a>
      ),
      sorter: true,
      filters: filters?.title,
      filterSearch: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sortDirections: ['descend', 'ascend'],
      sorter: true,
      filters: filters?.status,
      filterSearch: true,
      filterMode: 'tree',
    },
    {
      width: 50,
      render: (_, item) => (
        <TableMenu key={item.id} onDelete={() => bloc.remove(item.id)} onEdit={() => openAddEditIndustryModal({ id: item.id, onDone: onReload })} />
      ),
    },
  ];

  return (
    <div className="page-content">
      <PageHeader
        breadcrumbs={[{ title: 'Industries', to: '/industries' }]}
        searching={loading.searching}
        onSearch={search => bloc.paginated.patchQuery({ search, page: 1 }).subscribe()}
        buttons={[{ title: 'Add Industry', onClick: () => openAddEditIndustryModal({ onDone: onReload }) }]}
      >
        Industries
      </PageHeader>
      <Container fluid>
        <Table columns={columns} paginated={bloc.paginated} rowHoverable rowKey={'id'} />
      </Container>
    </div>
  );
});
