import { forkJoin } from 'rxjs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';

export class AddEditAddressModalBloc extends BaseBloc {
  private readonly billingBloc = resolve(Blocs.billing);

  addAddress = this.billingBloc.addAddress;
}
