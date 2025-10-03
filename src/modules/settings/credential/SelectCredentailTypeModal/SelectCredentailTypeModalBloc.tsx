import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { LoadingState } from '@core/utils/repository/loading_state';
import { of } from 'rxjs';
export class SelectCredentailTypeModalBloc extends BaseBloc {
  private readonly credentialTypeBloc = resolve(Blocs.credentialTypes);

  types$ = this.credentialTypeBloc.type$;
}
