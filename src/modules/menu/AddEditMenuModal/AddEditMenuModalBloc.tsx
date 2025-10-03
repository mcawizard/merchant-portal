import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { LoadingState } from '@core/utils/repository/loading_state';
import { of } from 'rxjs';
export class AddEditMenuModalBloc extends BaseBloc {
  private readonly menuBloc = resolve(Blocs.menu);

  constructor(private readonly id?: string) {
    super();
  }

  loading = new LoadingState();
  menu$ = this.id ? this.menuBloc.selectMenu(this.id) : undefined;

  onInit() {
    if (this.id) {
      return this.menuBloc.read(this.id).pipe(this.loading.run());
    }
    return of(null).pipe(this.loading.run());
  }

  add = this.menuBloc.add;
  edit = this.menuBloc.edit;
}
