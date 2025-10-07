import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { LoadingState } from '@core/utils/repository/loading_state';
import { of } from 'rxjs';

export class AddEditFileModalBloc extends BaseBloc {
  // private readonly folderBloc = resolve(Blocs.folderFileManager);
  // constructor(private readonly id?: string) {
  //   super();
  // }
  loading = new LoadingState();
  // onInit() {
  //   if (this.id) {
  //     return this.folderBloc.read(this.id).pipe(this.loading.run());
  //   }
  //   return of(null).pipe(this.loading.run());
  // }
  // add = this.folderBloc.addFile;
  // edit = this.folderBloc.edit;
}
