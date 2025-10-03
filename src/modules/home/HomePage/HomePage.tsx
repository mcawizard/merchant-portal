import { useBloc } from '@core/utils/bloc';
import { CustomHeader } from '@modules/common';
import React, { memo } from 'react';
import { Row } from 'reactstrap';
import { HomePageBloc } from './HomePageBloc';
import { useHistory } from '@core/router';
import { PageHeader } from '@modules/common/PageHeader';
import { Page } from '@modules/common/Page';
import { useMainPageConfig } from '@modules/MainPage/context';
import { Card } from 'antd';

export const HomePage = memo(() => {
  const bloc = useBloc(HomePageBloc);
  useMainPageConfig(() => ({ sidebar: false, header: false }));
  const history = useHistory();

  return (
    <Page className="min-w-0 mb-4" noSidebar>
      <CustomHeader hasSidebar={false}>
        <PageHeader
          noClass
          buttons={[
            {
              title: 'Add New',
              icon: 'fa-duotone fa-solid fa-plus',
              onClick: () => {
                history.push('/agents');
              },
            },
          ]}
        >
          Dashboard
        </PageHeader>
      </CustomHeader>
      <Row className="mb-2">
        <Card className="rounded-lg mt-4">This is your dashboard. Use the navigation menu to access different sections of the application.</Card>
      </Row>
    </Page>
  );
});
