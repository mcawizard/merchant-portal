import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { PaginatedController } from '@core/utils/paginated';
import { R } from '@core/utils/r';
import { LoadingState } from '@core/utils/repository/loading_state';
import { forkJoin, BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PageQuery, TableFilters } from '@business/entities/common';
import { CompactUserResponse, UserResponse } from '@business/entities/user';

export class UsersPageBloc extends BaseBloc {
  loading = new LoadingState();

  readonly userBloc = resolve(Blocs.user);

  users$ = this.userBloc.users$;

  public onInit() {}

  fetchFn = (query: PageQuery) => {
    return this.userBloc.browse(query).pipe(this.loading.run());
  };

  readonly paginated = new PaginatedController<UserResponse, PageQuery>(this.fetchFn, {
    initalQuery: {
      page: 1,
      sortBy: 'title',
      sortDirection: 'asc',
    },
    hasFilters: false,
    filtersApi: this.userBloc.filters,
  });

  remove = (id: string) => {
    this.userBloc
      .remove(id)
      .pipe(switchMap(() => this.paginated.reload()))
      .subscribe();
  };
}
