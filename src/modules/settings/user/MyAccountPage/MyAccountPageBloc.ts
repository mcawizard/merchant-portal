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

export class MyAccountPageBloc extends BaseBloc {
  loading = new LoadingState();

  readonly userBloc = resolve(Blocs.user);

  constructor(private readonly userId: string) {
    super();
  }

  user$ = this.userBloc.selectUser(this.userId);

  public onInit() {
    return this.userBloc.read(this.userId);
  }

  edit = this.userBloc.edit;
}
