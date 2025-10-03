import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';

export class SelectUserModalBloc extends BaseBloc {
  private readonly userBloc = resolve(Blocs.user);

  users$ = this.userBloc.users$;

  onInit() {
    return this.userBloc.all();
  }
}
