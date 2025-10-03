import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { LoadingState } from '@core/utils/repository/loading_state';
import { forkJoin, of } from 'rxjs';

export class AddEditUserModalBloc extends BaseBloc {
  private readonly userBloc = resolve(Blocs.user);

  constructor(private readonly id?: string) {
    super();
  }

  loading = new LoadingState();
  user$ = this.id ? this.userBloc.selectUser(this.id) : undefined;

  onInit() {
    if (this.id) {
      return this.userBloc.read(this.id).pipe(this.loading.run());
    }
    return of(null).pipe(this.loading.run());
  }

  add = this.userBloc.add;
  edit = this.userBloc.edit;
}
