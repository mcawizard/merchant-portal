import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { LoadingState } from '@core/utils/repository/loading_state';
import { of } from 'rxjs';
export class AddEditCredentialModalBloc extends BaseBloc {
  private readonly credentialBloc = resolve(Blocs.credential);
  private readonly credentialTypeBloc = resolve(Blocs.credentialTypes);

  constructor(
    private readonly toolId: string,
    private readonly id?: string,
  ) {
    super();
  }

  loading = new LoadingState();
  credential$ = this.id ? this.credentialBloc.selectCredential(this.id) : undefined;
  credentialType$ = this.credentialTypeBloc.selectCredential(this.toolId);

  onInit() {
    if (this.id) {
      return this.credentialBloc.read(this.id).pipe(this.loading.run());
    }
    return of(null).pipe(this.loading.run());
  }

  add = this.credentialBloc.add;
  edit = this.credentialBloc.edit;

  oauthUrl = this.credentialBloc.oauthUrl;
}
