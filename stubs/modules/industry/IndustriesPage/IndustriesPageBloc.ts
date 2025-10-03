import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { PaginatedController } from '@core/utils/paginated';
import { R } from '@core/utils/r';
import { LoadingState } from '@core/utils/repository/loading_state';
import { forkJoin, BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PageQuery, TableFilters } from '@business/entities/common';
import { CompactIndustryResponse } from '@business/entities/industry';

export class IndustriesPageBloc extends BaseBloc {
  loading = new LoadingState();

  readonly industryBloc = resolve(Blocs.industry);

  industries$ = this.industryBloc.industries$;

  public onInit() {}

  fetchFn = (query: PageQuery) => {
    return this.industryBloc.browse(query).pipe(this.loading.run());
  };

  readonly paginated = new PaginatedController<CompactIndustryResponse, PageQuery>(this.fetchFn, {
    initalQuery: {
      page: 1,
      sortBy: 'title',
      sortDirection: 'asc',
    },
    hasFilters: false,
    filtersApi: this.industryBloc.filters,
  });

  remove = (id: string) => {
    this.industryBloc
      .remove(id)
      .pipe(switchMap(() => this.paginated.reload()))
      .subscribe();
  };
}
