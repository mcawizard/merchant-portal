import { BaseBloc } from '@core/utils/bloc';
import { LoadingState } from '@core/utils/repository/loading_state';
import { switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { HomeAPI } from '@business/api/home';
import { handleMessage, requestMessage } from '@business/messages';
import { AgentExecutionLogResponse } from '@business/entities/agent_executions';

export class HomePageLogsBloc extends BaseBloc {
  loading = new LoadingState();

  logs$ = new BehaviorSubject<AgentExecutionLogResponse[]>([]);

  constructor(private readonly range: string) {
    super();
  }

  public onInit() {
    return HomeAPI.logs(this.range).pipe(
      tap(logs => this.logs$.next(logs)),
      handleMessage({ error: requestMessage('fetch_general_error') }),
      this.loading.run({}),
    );
  }
}
