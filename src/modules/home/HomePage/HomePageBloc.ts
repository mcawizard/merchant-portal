import { HomeAPI } from '@business/api/home';
import { Blocs } from '@business/blocs';
import { HomeStatResponse } from '@business/entities/home';
import { handleMessage, requestMessage } from '@business/messages';
import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { LoadingState } from '@core/utils/repository/loading_state';
import { BehaviorSubject, forkJoin, tap } from 'rxjs';

export class HomePageBloc extends BaseBloc {
  loading = new LoadingState();
}
