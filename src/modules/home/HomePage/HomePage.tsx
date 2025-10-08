import React, { memo, useMemo } from 'react';
import { useBloc } from '@core/utils/bloc';
import { CustomHeader } from '@modules/common';
import { HomePageBloc } from './HomePageBloc';
import { PageHeader } from '@modules/common/PageHeader';
import { Page } from '@modules/common/Page';
import { useMainPageConfig } from '@modules/MainPage/context';
import { TabItem, Tabs } from '@core/components/Tabs';
import { SubmissionTable } from './Tabs/SubmissionTable/SubmissionTable';
import { Col, Row } from 'reactstrap';
import { HomePageStat } from './components/HomePageStat';
import { useObservable } from '@core/utils/hooks/rxjs';
import { useLoadingState } from '@core/utils/repository/loading_state';
import FundedTable from './Tabs/FundedTable';

export const HomePage = memo(() => {
  useMainPageConfig(() => ({ sidebar: false, header: false }));

  const bloc = useBloc(HomePageBloc);
  const stats = useObservable(bloc.stats$, []);
  const loading = useLoadingState(bloc.loading);

  const tabs: TabItem[] = useMemo(
    () => [
      {
        title: 'Submissions',
        icon: 'fas fa-table',
        component: SubmissionTable,
      },
      {
        title: 'Funded',
        icon: 'fas fa-check',
        component: FundedTable,
      },
    ],
    [],
  );

  return (
    <Page className="min-w-0 mb-4" noSidebar>
      <CustomHeader hasSidebar={false}>
        <PageHeader noClass>Dashboard</PageHeader>
      </CustomHeader>
      <Row>
        <Col className="flex overflow-x-auto" style={{ gap: 20 }}>
          {stats.map((stat, index) => (
            <HomePageStat key={index} stat={stat} loading={loading.loading} />
          ))}
        </Col>
      </Row>
      <Tabs tabs={tabs} />
    </Page>
  );
});
