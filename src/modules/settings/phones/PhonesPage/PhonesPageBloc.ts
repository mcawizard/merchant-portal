import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { PaginatedController } from '@core/utils/paginated';
import { LoadingState } from '@core/utils/repository/loading_state';
import { switchMap } from 'rxjs/operators';
import { PageQuery } from '@business/entities/common';
import { CompactPhoneResponse } from '@business/entities/phone';

export class PhonesPageBloc extends BaseBloc {
  loading = new LoadingState();

  readonly phonesBloc = resolve(Blocs.phones);

  phones$ = this.phonesBloc.phones$;

  public onInit() {}

  fetchFn = (query: PageQuery) => {
    return this.phonesBloc.browse(query).pipe(this.loading.run());
  };

  readonly paginated = new PaginatedController<CompactPhoneResponse, PageQuery>(this.fetchFn, {
    initalQuery: {
      page: 1,
      sortBy: 'number',
      sortDirection: 'asc',
    },
    hasFilters: false,
    filtersApi: this.phonesBloc.filters,
  });

  remove = (id: string) => {
    this.phonesBloc
      .remove(id)
      .pipe(switchMap(() => this.paginated.reload()))
      .subscribe();
  };

  call = this.phonesBloc.makeCall;

  onRefresh() {
    return this.paginated.reload().pipe(this.loading.run());
  }
}
