import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { LoadingState } from '@core/utils/repository/loading_state';

export class JobProgressBloc extends BaseBloc {
  loading = new LoadingState();

  readonly jobBloc = resolve(Blocs.jobs);

  constructor(private readonly jobId: string) {
    super();
  }

  job$ = this.jobBloc.job$(this.jobId);

  public onInit() {
    return this.jobBloc.fetchJobs();
  }

  cancelJob = this.jobBloc.cancelJob;
  emailJob = this.jobBloc.emailJob;
  download = this.jobBloc.download;
}
