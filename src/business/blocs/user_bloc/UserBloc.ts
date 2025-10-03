import { switchMap, tap } from 'rxjs/operators';
import { BaseBloc } from '@core/utils/bloc';
import { Repository } from '@core/utils/repository';
import { handleMessage, requestMessage } from '@business/messages';
import { Session } from '@modules/auth/session';
import { R } from '@core/utils/r';
import { UserResponse } from '@business/entities/user';
import { UserAPI } from '@business/api/user_api';
import { showDeleteConfirmation } from '@modules/common/alerts';
import { PageQuery } from '@business/entities/common';
import { ignoreError } from '@core/utils/rxjs/operators';

export class UserBloc extends BaseBloc {
  private readonly usersRepo = new Repository<UserResponse>({
    getItemId: user => user.id,
  });

  readonly users$ = this.usersRepo.items$;
  readonly selectUser = this.usersRepo.selectItem;

  onReset() {
    this.usersRepo.reset();
  }

  all = () => {
    return UserAPI.all().pipe(this.usersRepo.ops.reset(), handleMessage({ error: requestMessage('fetch_user_error') }));
  };

  browse = (query: PageQuery) => {
    return UserAPI.browse(query).pipe(handleMessage({ error: requestMessage('fetch_user_error') }));
  };

  read = (id: string) => {
    return UserAPI.read(id).pipe(
      this.usersRepo.ops.upsertOne(item => ({ item })),
      handleMessage({ error: requestMessage('fetch_user_error') }),
    );
  };

  add = (company: Partial<UserResponse>) => {
    return UserAPI.add(company).pipe(
      this.usersRepo.ops.addOne(item => item),
      handleMessage({
        type: requestMessage('create_user'),
      }),
    );
  };

  edit = (id: string, user: Partial<UserResponse>) => {
    return UserAPI.edit(id, user).pipe(
      this.usersRepo.ops.upsertOne(item => ({ item })),
      tap(user => {
        if (user.id === Session.user?.id) {
          Session.patchUser(user);
        }
      }),
      handleMessage({
        type: requestMessage('update_user'),
      }),
    );
  };

  remove = (id: string) => {
    return showDeleteConfirmation('Delete User', 'Do you really want to remove this user?').pipe(
      switchMap(() => UserAPI.remove(id)),

      this.usersRepo.ops.removeOne(() => id),
      handleMessage({
        type: requestMessage('delete_user'),
      }),
    );
  };

  filters = () => {
    return UserAPI.filters().pipe(ignoreError());
  };

  changePassword = (id: string, password: string) => {
    return UserAPI.changePassword(id, password).pipe(
      this.usersRepo.ops.upsertOne(item => ({ item })),
      handleMessage({
        type: requestMessage('update_user'),
      }),
    );
  };
}
