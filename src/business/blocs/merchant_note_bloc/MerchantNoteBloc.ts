import { BaseBloc } from '@core/utils/bloc';
import { Repository } from '@core/utils/repository';
import { handleMessage, requestMessage } from '@business/messages';
import { CreateMerchantNoteRequest, MerchantNoteResponse } from '@business/entities/merchant-notes';
import { MerchantNoteAPI } from '@business/api/merchant_note_api';
import { PageQuery } from '@business/entities/common';

export class MerchantNoteBloc extends BaseBloc {
  private readonly itemRepo = new Repository<MerchantNoteResponse>({
    getItemId: item => item.id,
  });

  readonly items$ = this.itemRepo.items$;
  readonly selectItem = this.itemRepo.selectItem;

  all = (merchantId: string) => {
    return MerchantNoteAPI.all(merchantId).pipe(this.itemRepo.ops.reset(), handleMessage({ error: requestMessage('fetch_merchant_notes_error') }));
  };

  browse = (query: PageQuery) => {
    return MerchantNoteAPI.browse(query).pipe(handleMessage({ error: requestMessage('fetch_merchant_notes_error') }));
  };

  create = (data: CreateMerchantNoteRequest) => {
    return MerchantNoteAPI.create(data).pipe(
      handleMessage({
        type: requestMessage('create_note'),
      }),
    );
  };
}
