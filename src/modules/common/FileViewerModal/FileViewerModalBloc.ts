import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { LoadingState } from '@core/utils/repository/loading_state';

export class FileViewerModalBloc extends BaseBloc {
  private readonly libraryItemBloc = resolve(Blocs.folderFileManager);

  constructor(
    private type: string,
    private id?: string,
  ) {
    super();
  }
  loading = new LoadingState();
  readonly item$ = this.id ? this.libraryItemBloc.selectFolderFile(this.type + '-' + this.id) : null;

  onInit() {
    if (this.id) {
      return this.libraryItemBloc.readFile(this.id).pipe(this.loading.run());
    }
  }

  fileDownload = this.libraryItemBloc.download;
}
