import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { LoadingState } from '@core/utils/repository/loading_state';
import { forkJoin } from 'rxjs';

export class FundedTableBloc extends BaseBloc {
  private readonly submissionBloc = resolve(Blocs.submission);

  loading = new LoadingState();

  items$ = this.submissionBloc.fundedSubmissions$;

  onInit() {
    return forkJoin([this.submissionBloc.getFunded()]).pipe(this.loading.run());
  }
}
