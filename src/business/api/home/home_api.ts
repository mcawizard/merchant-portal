import { AgentExecutionLogResponse } from '@business/entities/agent_executions';
import { Endpoint } from '../endpoint';
import { HomeStatResponse } from '@business/entities/home';

export function logs(range: string) {
  return Endpoint.get<AgentExecutionLogResponse[]>('@api/home/logs', { params: { range } });
}

export function stats() {
  return Endpoint.get<HomeStatResponse[]>('@api/home/stats');
}
