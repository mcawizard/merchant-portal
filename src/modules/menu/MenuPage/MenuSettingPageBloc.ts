import { MenuItem } from '@core/components/Menu';
import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { LoadingState } from '@core/utils/repository/loading_state';
import { PageQuery } from '@business/entities/common';
import { PaginatedController } from '@core/utils/paginated';
import { CompactMenuResponse } from '@business/entities/menu';
import { forkJoin, switchMap } from 'rxjs';

export class MenuSettingPageBloc extends BaseBloc {
  loading = new LoadingState();

  private readonly rolesBloc = resolve(Blocs.customerRoles);
  readonly menusBloc = resolve(Blocs.menu);
  constructor(private readonly menuId: string) {
    super();
  }

  menu$ = this.menusBloc.selectMenu(this.menuId);
  roles$ = this.rolesBloc.customerRoles$;

  public onInit() {
    return forkJoin(this.menusBloc.read(this.menuId), this.rolesBloc.all()).pipe(this.loading.run());
  }

  // public onInit() {
  //   return this.menusBloc.read(this.menuId).pipe(this.loading.run());
  // }
  onReload = () => {
    return this.menusBloc.read(this.menuId);
  };
  removeItem = (id: string) => {
    this.menusBloc
      .removeItem(id)
      .pipe(switchMap(() => this.onReload()))
      .subscribe();
  };

  addSetting = (menuId: string, data: any) => {
    return this.menusBloc.addSetting(menuId, data);
  };

  sortingItems = (menuId: string, data: any) => {
    return this.menusBloc.sortingItems(menuId, data);
  };
}
