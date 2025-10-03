import { useBloc } from '@core/utils/bloc';
import React, { memo, useCallback, useMemo } from 'react';
import { Col, Container } from 'reactstrap';
import { useObservable } from '@core/utils/hooks/rxjs';
import { useHistory, useRouteParam } from '@core/router';
import { PageHeader } from '@modules/common/PageHeader';
import { MenuSettingPageBloc } from './MenuSettingPageBloc';
import { NotImplemented } from '@modules/common';
import { Row, Card } from 'antd';
import { R } from '@core/utils/r';
import { openAddEditMenuModal } from '@modules/menu/AddEditMenuModal';
import { openAddEditMenuItemModal } from '@modules/menu/AddEditMenuItemModal';
import { MenuTree } from '@modules/menu/MenuPage/MenuTree';
import { openAddEditMenuSettingModal } from '.';

export const MenuSettingPage = memo(() => {
  const menuId = useRouteParam(`id`) || '0';
  const bloc = useBloc(MenuSettingPageBloc, menuId);
  const menu = useObservable(bloc.menu$);

  const deleteMenuItem = useCallback(
    (id: string) => {
      return bloc.removeItem(id);
    },
    [bloc],
  );
  const dynamicItems = useMemo(() => {
    if (!menu || !menu.items) return [];
    const itms = menu.items.map(item => ({
      id: item.id,
      parent: item.parentId,
      droppable: true,
      text: item.title,
      menuOrder: item.menuOrder,
      buttons: [
        {
          title: 'Edit',
          onClick: () =>
            openAddEditMenuItemModal({
              menuId: menu?.id || '0',
              menuItemId: item.id,
              onDone: () => {
                bloc.onReload();
              },
            }),
        },
        {
          title: 'Delete',
          onClick: () => {
            deleteMenuItem(item.id);
          },
        },
      ],
    }));
    return R.orderBy(itms, 'menuOrder', 'asc');
  }, [bloc, deleteMenuItem, menu]);

  const onSort = useCallback(
    (items: any[]) => {
      return bloc.sortingItems(menuId, items).subscribe();
    },
    [bloc, menuId],
  );

  return (
    <div className="page-content">
      <PageHeader
        breadcrumbs={[{ title: 'Menu', to: '/menu' }]}
        buttons={[
          {
            title: 'Add Menu Item',
            onClick: () =>
              openAddEditMenuItemModal({
                menuId: menu?.id || '0',
                onDone: () => {
                  bloc.onReload();
                },
              }),
          },
          {
            icon: 'fas fa-cog',
            title: '',
            onClick: () => {
              openAddEditMenuSettingModal({
                menuId: menu?.id || '0',
                onDone: () => {
                  bloc.onReload();
                },
              });
            },
          },
        ]}
      >
        {menu?.title || 'Menu'}
      </PageHeader>
      <Container fluid>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Card title="Menu Items">
              {' '}
              <MenuTree items={dynamicItems} onSort={onSort} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
});
