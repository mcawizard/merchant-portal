import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { LoadingState } from '@core/utils/repository/loading_state';
import { of } from 'rxjs';

export class AddEditFileModalBloc extends BaseBloc {
  private readonly fileCategoryBloc = resolve(Blocs.fileCategory);
  private readonly dealFileBloc = resolve(Blocs.dealFile);

  loading = new LoadingState();

  categories$ = this.fileCategoryBloc.items$;

  onInit() {
    return this.fileCategoryBloc.all().pipe(this.loading.run());
  }
  add = this.dealFileBloc.create;
  // edit = this.folderBloc.edit;
}
