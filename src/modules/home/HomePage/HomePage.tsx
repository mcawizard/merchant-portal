import React, { memo, useMemo } from 'react';
import { useBloc } from '@core/utils/bloc';
import { CustomHeader } from '@modules/common';
import { HomePageBloc } from './HomePageBloc';
import { useHistory } from '@core/router';
import { PageHeader } from '@modules/common/PageHeader';
import { Page } from '@modules/common/Page';
import { useMainPageConfig } from '@modules/MainPage/context';
import { TabItem, Tabs } from '@core/components/Tabs';
import { SubmissionTable } from './Tabs/SubmissionTable/SubmissionTable';
import { Col, Row } from 'reactstrap';
import { HomePageStat } from './components/HomePageStat';
import { HomeStatResponse } from '@business/entities/home';

export const HomePage = memo(() => {
  const bloc = useBloc(HomePageBloc);
  useMainPageConfig(() => ({ sidebar: false, header: false }));
  const history = useHistory();

  const stats: HomeStatResponse[] = useMemo(
    () => [
      { title: 'Total Amount Funded', value: 120, icon: 'fas fa-dollar-sign', prefix: '$', description: 'Total amount funded to merchants' },
      { title: 'Number of Offer Received', value: 75, icon: 'fas fa-handshake', color: 'success' },
      { title: 'Total Repayments', value: 30, icon: 'fas fa-hand-holding-dollar', color: 'info' },
      { title: 'Total Settled Balance', value: 15, icon: 'fas fa-dollar-sign', color: 'warning' },
    ],
    [],
  );

  const tabs: TabItem[] = useMemo(
    () => [
      {
        title: 'Submissions',
        icon: 'fas fa-table',
        component: SubmissionTable,
        props: { bloc },
      },
      {
        title: 'Funded',
        icon: 'fas fa-check',
        component: SubmissionTable,
        props: { bloc },
      },
    ],
    [],
  );

  return (
    <Page className="min-w-0 mb-4" noSidebar>
      <CustomHeader hasSidebar={false}>
        <PageHeader
          noClass
          // buttons={[
          //   {
          //     title: 'Add New',
          //     icon: 'fa-duotone fa-solid fa-plus',
          //     onClick: () => {
          //       history.push('/agents');
          //     },
          //   },
          // ]}
        >
          Dashboard
        </PageHeader>
      </CustomHeader>
      <Row>
        <Col className="flex overflow-x-auto" style={{ gap: 20 }}>
          {stats.map((stat, index) => (
            <HomePageStat key={index} stat={stat} />
          ))}
        </Col>
      </Row>
      <Tabs tabs={tabs} />
    </Page>
  );
});
