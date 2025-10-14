import { BaseBloc } from '@core/utils/bloc';
import { Repository } from '@core/utils/repository';
import { handleMessage, requestMessage } from '@business/messages';
import { ApplicationSubmissionOwnerResponse } from '@business/entities/application-submission';
import { AppSubmissionAPI } from '@business/api/application_submission_api';

export class ApplicationSubmissionBloc extends BaseBloc {
  private readonly itemRepo = new Repository<ApplicationSubmissionOwnerResponse>({
    getItemId: item => item.id,
  });

  readonly items$ = this.itemRepo.items$;
  readonly selectItem = this.itemRepo.selectItem;

  all = () => {
    return AppSubmissionAPI.all().pipe(this.itemRepo.ops.reset(), handleMessage({ error: requestMessage('fetch_merchant_notes_error') }));
  };
}
