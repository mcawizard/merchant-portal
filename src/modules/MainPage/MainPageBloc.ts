import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { PaginatedController } from '@core/utils/paginated';
import { R } from '@core/utils/r';
import { LoadingState } from '@core/utils/repository/loading_state';
import { forkJoin, BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LoginTenantResponse, PageQuery, TableFilters } from '@business/entities/common';
import { CompactUserResponse, UserResponse } from '@business/entities/user';
import { AuthAPI } from '@business/api/auth';

export class MainPageBloc extends BaseBloc {
  readonly accounts$ = new BehaviorSubject<LoginTenantResponse[]>([]);

  public onInit() {
    return forkJoin(this.loadAccounts());
  }

  loadAccounts = () => {
    return AuthAPI.accounts().pipe(tap(accounts => this.accounts$.next(accounts)));
  };
}
