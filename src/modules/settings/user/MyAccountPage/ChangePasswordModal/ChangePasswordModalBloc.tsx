import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';

export class ChangePasswordModalBloc extends BaseBloc {
  private readonly userBloc = resolve(Blocs.user);

  changePassword = this.userBloc.changePassword;
}
