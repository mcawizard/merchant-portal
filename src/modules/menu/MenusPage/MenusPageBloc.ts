import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { PaginatedController } from '@core/utils/paginated';
import { R } from '@core/utils/r';
import { LoadingState } from '@core/utils/repository/loading_state';
import { forkJoin, BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PageQuery, TableFilters } from '@business/entities/common';
import { CompactMenuResponse } from '@business/entities/menu';

export class MenusPageBloc extends BaseBloc {
  loading = new LoadingState();

  readonly menuBloc = resolve(Blocs.menu);

  menus$ = this.menuBloc.menus$;

  public onInit() {}

  fetchFn = (query: PageQuery) => {
    return this.menuBloc.browse(query).pipe(this.loading.run());
  };

  readonly paginated = new PaginatedController<CompactMenuResponse, PageQuery>(this.fetchFn, {
    initalQuery: {
      page: 1,
      sortBy: 'title',
      sortDirection: 'asc',
    },
    hasFilters: false,
    filtersApi: this.menuBloc.filters,
  });

  remove = (id: string) => {
    this.menuBloc
      .remove(id)
      .pipe(switchMap(() => this.paginated.reload()))
      .subscribe();
  };
}
