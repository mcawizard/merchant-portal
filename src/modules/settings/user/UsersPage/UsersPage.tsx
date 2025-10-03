import { useBloc } from '@core/utils/bloc';
import { Table } from '@modules/common';
import { ColumnType } from 'antd/es/table';
import React, { memo, useCallback, useMemo } from 'react';
import { Container } from 'reactstrap';
import { UsersPageBloc } from './UsersPageBloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { TableMenu } from '@core/components/TableMenu';
import { formControl } from '@core/utils/form';
import { useHistory } from '@core/router';
import { PageHeader } from '@modules/common/PageHeader';
import { openAddEditUserModal } from '../AddEditUserModal';
import { UserResponse } from '@business/entities/user';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { Avatar } from 'antd';
import { UserService } from '@business/services/user_service';
import { Page } from '@modules/common/Page';
import { HasPermissions } from '@modules/common/HasPermissions';
import { AppModule } from '@business/entities/permission';
import { RoleService } from '@business/services';

export const UsersPage = memo(() => {
  const bloc = useBloc(UsersPageBloc);
  const filters = useObservable(bloc.paginated.filters$);
  const loading = useLoadingState(bloc.paginated.loading);
  const history = useHistory();
  const onReload = useCallback(() => bloc.paginated.reload().subscribe(), [bloc.paginated]);

  const columns: ColumnType<UserResponse>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, item) => (
        <div>
          <Avatar className="mr-2" src={item.avatar} size={'default'}>
            {UserService.getInitials(item.name)}
          </Avatar>{' '}
          {item.name}
        </div>
      ),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Role',
      dataIndex: 'role',
      render: (_, item) => RoleService.getRoleName(item.role),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      sortDirections: ['descend', 'ascend'],
    },
    {
      width: 50,
      render: (_, item) => (
        <TableMenu key={item.id} onDelete={() => bloc.remove(item.id)} onEdit={() => openAddEditUserModal({ id: item.id, onDone: onReload })} />
      ),
    },
  ];

  return (
    <HasPermissions module={AppModule.users}>
      <Page>
        <PageHeader
          breadcrumbs={[{ title: 'Users' }]}
          searching={loading.searching}
          onSearch={search => bloc.paginated.patchQuery({ search, page: 1 }).subscribe()}
          buttons={[{ title: 'Add User', onClick: () => openAddEditUserModal({ onDone: onReload }) }]}
        >
          Users
        </PageHeader>
        <Table columns={columns} paginated={bloc.paginated} rowHoverable rowKey={'id'} />
      </Page>
    </HasPermissions>
  );
});
