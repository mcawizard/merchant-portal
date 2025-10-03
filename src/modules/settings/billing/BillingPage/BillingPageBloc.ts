import { Blocs } from '@business/blocs';
import { LinksResponse } from '@business/entities/billing';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { LoadingState } from '@core/utils/repository/loading_state';
import { BehaviorSubject, forkJoin, tap } from 'rxjs';

export class BillingPageBloc extends BaseBloc {
  loading = new LoadingState();

  readonly billingBloc = resolve(Blocs.billing);

  readonly addresses$ = this.billingBloc.addresses$;
  readonly methods$ = this.billingBloc.methods$;
  readonly subscriptions$ = this.billingBloc.subscriptions$;
  readonly invoices$ = this.billingBloc.invoices$;
  readonly links$ = new BehaviorSubject<LinksResponse | null>(null);

  public onInit() {
    return forkJoin([
      this.billingBloc.getAddresses(),
      this.billingBloc.getMethods(),
      this.billingBloc.getSubscriptions(),
      this.billingBloc.getInvoices(),
      this.fetchLinks(),
    ]).pipe(this.loading.run());
  }

  fetchLinks() {
    return this.billingBloc.getLinks().pipe(tap(links => this.links$.next(links)));
  }
}
