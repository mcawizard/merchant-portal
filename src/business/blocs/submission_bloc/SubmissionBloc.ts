import { BaseBloc } from '@core/utils/bloc';
import { Repository } from '@core/utils/repository';
import { handleMessage, requestMessage } from '@business/messages';
import { SubmissionAPI } from '@business/api/submission_api';
import { PageQuery } from '@business/entities/common';
import { SubmissionResponse } from '@business/entities/submissions/SubmissionResponse';

export class SubmissionBloc extends BaseBloc {
  private readonly submissionRepo = new Repository<SubmissionResponse>({
    getItemId: item => item.id,
  });

  readonly submission$ = this.submissionRepo.items$;
  readonly selectSubmission = this.submissionRepo.selectItem;

  onReset() {
    this.submissionRepo.reset();
  }

  all = () => {
    return SubmissionAPI.all().pipe(this.submissionRepo.ops.reset(), handleMessage({ error: requestMessage('fetch_submission_error') }));
  };

  browse = (query: PageQuery) => {
    return SubmissionAPI.browse(query).pipe(handleMessage({ error: requestMessage('fetch_submission_error') }));
  };

  read = (id: string) => {
    return SubmissionAPI.read(id).pipe(
      this.submissionRepo.ops.upsertOne(item => ({ item })),
      handleMessage({ error: requestMessage('fetch_submission_error') }),
    );
  };
}
