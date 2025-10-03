import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { forkJoin } from 'rxjs';

export class AddEditPaymentModalBloc extends BaseBloc {
  private readonly billingBloc = resolve(Blocs.billing);

  readonly addresses$ = this.billingBloc.addresses$;

  public onInit() {
    return forkJoin([this.billingBloc.getAddresses()]).pipe();
  }

  add = this.billingBloc.addMethod;
}
