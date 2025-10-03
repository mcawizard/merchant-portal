import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { BehaviorSubject } from 'rxjs';
import { AdminAgentsResponse } from '@business/entities/agents/AdminAgentsResponse';
import { LoadingState } from '@core/utils/repository/loading_state';
import { PhonesAPI } from '@business/api/phones_api';
import { AgentsAPI } from '@business/api/agents_api';
import { tap } from 'rxjs/operators';

export class EditPhoneModalBloc extends BaseBloc {
  private readonly agentsBloc = resolve(Blocs.myAgents);
  private readonly phonesBloc = resolve(Blocs.phones);

  agents$ = this.agentsBloc.agents$;
  loading = new LoadingState();

  onInit() {
    return this.agentsBloc.all().pipe(this.loading.run());
  }

  updatePhoneAgent(phoneId: string, agentId: string) {
    return this.phonesBloc.edit(phoneId, { agent: agentId }).pipe(this.loading.run());
  }
}
