import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { LoadingState } from '@core/utils/repository/loading_state';
import { of } from 'rxjs';
export class AddEditMenuItemModalBloc extends BaseBloc {
  private readonly menuBloc = resolve(Blocs.menu);

  constructor(private readonly menuItemId?: string) {
    super();
  }

  loading = new LoadingState();
  menuItem$ = this.menuBloc.selectMenuItem(this.menuItemId ?? '0');

  onInit() {
    if (this.menuItemId) {
      return this.menuBloc.readItem(this.menuItemId).pipe(this.loading.run());
    } else {
      return of(null).pipe(this.loading.run());
    }
  }

  addItem = this.menuBloc.addItem;
  editItem = this.menuBloc.editItem;
}
