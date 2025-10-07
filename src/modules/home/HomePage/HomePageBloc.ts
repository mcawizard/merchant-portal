import { Blocs } from '@business/blocs';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { LoadingState } from '@core/utils/repository/loading_state';
import { forkJoin } from 'rxjs';

export class HomePageBloc extends BaseBloc {
  private readonly submissionBloc = resolve(Blocs.submission);

  loading = new LoadingState();

  submission$ = this.submissionBloc.submission$;

  onInit() {
    return forkJoin([this.submissionBloc.all()]).pipe(this.loading.run());
  }
}
