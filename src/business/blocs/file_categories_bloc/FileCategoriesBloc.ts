import { BaseBloc } from '@core/utils/bloc';
import { Repository } from '@core/utils/repository';
import { handleMessage, requestMessage } from '@business/messages';
import { FileCategoryResponse } from '@business/entities/file-category';
import { FileCategoryAPI } from '@business/api/file_category_api';

export class FileCategoriesBloc extends BaseBloc {
  private readonly categoryRepo = new Repository<FileCategoryResponse>({
    getItemId: item => item.id,
  });

  readonly items$ = this.categoryRepo.items$;
  readonly selectItem = this.categoryRepo.selectItem;

  onReset() {
    this.categoryRepo.reset();
  }

  all = () => {
    return FileCategoryAPI.all().pipe(this.categoryRepo.ops.reset(), handleMessage({ error: requestMessage('fetch_category_error') }));
  };
}
