import { useBloc } from '@core/utils/bloc';
import { Table } from '@modules/common';
import { ColumnType } from 'antd/es/table';
import React, { memo, useCallback, useMemo } from 'react';
import { Container } from 'reactstrap';
import { MenusPageBloc } from './MenusPageBloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { TableMenu } from '@core/components/TableMenu';
import { formControl } from '@core/utils/form';
import { useHistory } from '@core/router';
import { PageHeader } from '@modules/common/PageHeader';
import { openAddEditMenuModal } from '../AddEditMenuModal';
import { CompactMenuResponse } from '@business/entities/menu';
import { useLoadingState } from '@core/utils/repository/loading_state';

export const MenusPage = memo(() => {
  const bloc = useBloc(MenusPageBloc);
  const filters = useObservable(bloc.paginated.filters$);
  const loading = useLoadingState(bloc.paginated.loading);
  const history = useHistory();
  const onReload = useCallback(() => bloc.paginated.reload().subscribe(), [bloc.paginated]);

  const columns: ColumnType<CompactMenuResponse>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
      sortDirections: ['descend', 'ascend'],
      render: (_, item) => (
        <a className="text-primary" onClick={() => history.push(`/menu/settings/${item.id}`)} style={{ cursor: 'pointer' }}>
          {item.title}
        </a>
      ),
      sorter: true,
      filters: filters?.title,
      filterSearch: true,
    },
    {
      width: 50,
      render: (_, item) => (
        <TableMenu
          key={item.id}
          onDelete={item.id == '1' || item.id == '2' ? undefined : () => bloc.remove(item.id)}
          onEdit={() => openAddEditMenuModal({ id: item.id, onDone: onReload })}
        />
      ),
    },
  ];

  return (
    <div className="page-content">
      <PageHeader
        breadcrumbs={[{ title: 'Menu', to: '/menus' }]}
        searching={loading.searching}
        onSearch={search => bloc.paginated.patchQuery({ search, page: 1 }).subscribe()}
        buttons={[{ title: 'Add Menu', onClick: () => openAddEditMenuModal({ onDone: onReload }) }]}
      >
        Menus
      </PageHeader>
      <Container fluid>
        <Table columns={columns} paginated={bloc.paginated} rowHoverable rowKey={'id'} />
      </Container>
    </div>
  );
});
