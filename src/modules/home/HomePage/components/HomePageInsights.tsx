import { FormSegmented } from '@core/components/form';
import { formControl } from '@core/utils/form';
import { R } from '@core/utils/r';
import { Card, Divider, List } from 'antd';
import React, { memo, useMemo } from 'react';
import { ComingSoon } from './ComingSoon';

export interface AIInsightItemProps {
  a?: never;
}

export const AIInsightItem = memo((props: AIInsightItemProps) => {
  return (
    <Card>
      <div className="flex items-start">
        <div className="flex flex-row items-center mr-2">
          <i className="fa-duotone fa-solid fa-timer mr-2 p-2 rounded" style={{ background: '#FFFFFF10' }}></i>
        </div>
        <div>
          <div className="mb-2">Agent Beta idle for 3 days — consider reassignment.</div>
          <div className="text-muted">Suggested target: Customer Success queue. </div>
        </div>
      </div>
    </Card>
  );
});

export interface HomePageInsightsProps {
  a?: never;
}

export const HomePageInsights = memo((props: HomePageInsightsProps) => {
  return (
    <Card className="relative bg-home-gradient-border">
      <ComingSoon>AI Insights & Recommendations</ComingSoon>
      <h1 className="text-xl font-medium mb-4">AI Insights & Recommendations</h1>
      <AIInsightItem />
      <AIInsightItem />
      <AIInsightItem />
    </Card>
  );
});
