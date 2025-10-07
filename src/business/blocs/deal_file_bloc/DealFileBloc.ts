import { DealFileAPI } from '@business/api/deal_file_api';
import { handleMessage, requestMessage } from '@business/messages';
import { BaseBloc } from '@core/utils/bloc';
import { Repository } from '@core/utils/repository';
import { FileFormData } from '@modules/home/HomePage/components/AddEditFileModal/AddEditFileModal';

export class DealFileBloc extends BaseBloc {
  private readonly itemRepo = new Repository<any>({
    getItemId: item => item.id,
  });

  readonly items$ = this.itemRepo.items$;
  readonly selectItem = this.itemRepo.selectItem;

  onReset() {
    this.itemRepo.reset();
  }

  create = (data: FileFormData) => {
    return DealFileAPI.create(data).pipe(
      this.itemRepo.ops.addOne(item => item),
      handleMessage({
        type: requestMessage('file_uploaded'),
      }),
    );
  };
}
