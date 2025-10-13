import { BaseBloc } from '@core/utils/bloc';
import { Repository } from '@core/utils/repository';
import { handleMessage, requestMessage } from '@business/messages';
import { SubmissionAPI } from '@business/api/submission_api';
import { PageQuery } from '@business/entities/common';
import { CompactSubmissionResponse, FundedSubmissionResponse } from '@business/entities/submissions/SubmissionResponse';

export class SubmissionBloc extends BaseBloc {
  private readonly submissionRepo = new Repository<CompactSubmissionResponse>({
    getItemId: item => item.id,
  });

  private readonly submissionFundedRepo = new Repository<FundedSubmissionResponse>({
    getItemId: item => item.id,
  });

  readonly submission$ = this.submissionRepo.items$;
  readonly selectSubmission = this.submissionRepo.selectItem;

  readonly fundedSubmissions$ = this.submissionFundedRepo.items$;
  readonly selectFundedSubmission = this.submissionFundedRepo.selectItem;

  onReset() {
    this.submissionRepo.reset();
    this.submissionFundedRepo.reset();
  }

  all = () => {
    return SubmissionAPI.all().pipe(this.submissionRepo.ops.reset(), handleMessage({ error: requestMessage('fetch_submission_error') }));
  };

  getFunded = () => {
    return SubmissionAPI.getFunded().pipe(this.submissionFundedRepo.ops.reset(), handleMessage({ error: requestMessage('fetch_submission_error') }));
  };

  sendRequest = (id: string, data: { message: string; merchantId: string; type?: string }) => {
    return SubmissionAPI.sendRequest(id, data).pipe(
      handleMessage({ type: requestMessage(data.type == 'payoff' ? 'send_payoff_request' : 'send_renewal_request') }),
    );
  };
}
