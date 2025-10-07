import { SubmissionAPI } from '@business/api/submission_api';
import { Blocs } from '@business/blocs';
import { HomeStatResponse } from '@business/entities/home';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { LoadingState } from '@core/utils/repository/loading_state';
import { forkJoin, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export class HomePageBloc extends BaseBloc {
  private readonly submissionBloc = resolve(Blocs.submission);

  loading = new LoadingState();

  submission$ = this.submissionBloc.submission$;
  stats$ = new BehaviorSubject<HomeStatResponse[]>([
    { title: 'Total Amount Funded', value: 0, icon: 'fas fa-dollar-sign', prefix: '$', description: 'Total amount funded to merchants' },
    { title: 'Number of Offer Received', value: 0, icon: 'fas fa-handshake', description: 'Total offers received from merchants' },
    { title: 'Total Repayments', value: 0, icon: 'fas fa-hand-holding-dollar', prefix: '$', description: 'Total repayments made by merchants' },
    { title: 'Total Settled Balance', value: 0, icon: 'fas fa-dollar-sign', prefix: '$', description: 'Total settled balance from merchants' },
  ]);

  onInit() {
    return forkJoin([SubmissionAPI.stats().pipe(tap(stats => this.stats$.next(stats))), this.submissionBloc.all()]).pipe(this.loading.run());
  }
}
