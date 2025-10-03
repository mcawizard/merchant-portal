import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { PaginatedController } from '@core/utils/paginated';
import { R } from '@core/utils/r';
import { LoadingState } from '@core/utils/repository/loading_state';
import { forkJoin, BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PageQuery, TableFilters } from '@business/entities/common';
import { CompactCredentialResponse } from '@business/entities/credential';

export class CredentialsPageBloc extends BaseBloc {
  loading = new LoadingState();

  readonly credentialBloc = resolve(Blocs.credential);

  credentials$ = this.credentialBloc.credentials$;

  public onInit() {}

  fetchFn = (query: PageQuery) => {
    return this.credentialBloc.browse(query).pipe(this.loading.run());
  };

  readonly paginated = new PaginatedController<CompactCredentialResponse, PageQuery>(this.fetchFn, {
    initalQuery: {
      page: 1,
      sortBy: 'title',
      sortDirection: 'asc',
    },
    hasFilters: false,
    filtersApi: this.credentialBloc.filters,
  });

  remove = (id: string) => {
    this.credentialBloc
      .remove(id)
      .pipe(switchMap(() => this.paginated.reload()))
      .subscribe();
  };
}
