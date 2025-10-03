import { FormSegmented } from '@core/components/form';
import { useBloc } from '@core/utils/bloc';
import { formControl } from '@core/utils/form';
import { Card, Divider, List, Tooltip } from 'antd';
import React, { memo, useMemo } from 'react';
import { HomePageLogsBloc } from './HomePageLogsBloc';
import { useLoadingState } from '@core/utils/repository/loading_state';
import { useNonNilObservable, useObservable } from '@core/utils/hooks/rxjs';
import { AgentExecutionLogResponse } from '@business/entities/agent_executions';
import { Formatter } from '@core/utils/formatter';
import { toMoment } from '@core/utils/time';

export interface LogListItemProps {
  log: AgentExecutionLogResponse;
}

export const LogListItem = memo((props: LogListItemProps) => {
  const { log } = props;

  const getActivityIcon = (type: 'info' | 'success' | 'warning' | 'error' | 'debug') => {
    switch (type) {
      case 'success':
        return <i className="fa-duotone fa-solid fa-check-circle text-green-500 text-xl rounded-full mr-2" />;
      case 'error':
        return <i className="fa-duotone fa-solid fa-times-circle text-red-500 text-xl rounded-full mr-2" />;
      case 'warning':
        return <i className="fa-duotone fa-solid fa-exclamation-triangle text-yellow-500 text-xl rounded-full mr-2" />;
      default:
        return <i className="fa-duotone fa-solid fa-info-circle text-blue-500 text-xl rounded-full mr-2" />;
    }
  };

  const isDebugLog = log.level === 'debug' || !log.level;
  const logIcon = isDebugLog ? <i className="fa-duotone fa-solid fa-bug text-cyan-600 text-xl rounded-full mr-2" /> : getActivityIcon(log.level);

  return (
    <div className="flex items-start">
      <div className="flex flex-row items-center min-w-[90px]">
        {logIcon}
        <Tooltip title={toMoment(log.createdAt).format('LLLL')}>
          <span className="text-muted mr-2">{Formatter.formatTimeRelative(log.createdAt)}</span>
        </Tooltip>
      </div>
      <span className="line-clamp-2">{log.message}</span>
    </div>
  );
});

export const HomePageLogs = memo(() => {
  const control = useMemo(() => formControl<string>({ initialValue: 'today' }), []);
  const controlValue = useNonNilObservable(control.value$);
  const bloc = useBloc(HomePageLogsBloc, controlValue || 'today');
  const loading = useLoadingState(bloc.loading);
  const logs = useObservable(bloc.logs$, []);

  return (
    <Card className="bg-home-card-dim bg-home-gradient-border">
      <span className="text-xl font-medium mb-4">Agent Logs</span>
      <FormSegmented
        block
        control={control}
        items={['today', 'last7', 'last30']}
        labelAccessor={(u, i) => ['Today', 'Last 7 Days', 'Last 30 Days'][i]}
        valueAccessor={u => u}
      />
      <Divider orientation="left">
        {['Today', 'Last 7 Days', 'Last 30 Days'][controlValue ? ['today', 'last7', 'last30'].indexOf(controlValue) : 0]}
      </Divider>
      <List
        loading={loading.loading}
        className="max-h-[400px] no-scrollbars overflow-y-auto"
        itemLayout="horizontal"
        dataSource={logs}
        renderItem={item => (
          <List.Item>
            <LogListItem log={item} />
          </List.Item>
        )}
      />
    </Card>
  );
});
