import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { GraphAPI } from '@business/api/graph_api';
import { BehaviorSubject } from 'rxjs';
import { ReportBuilderAPI } from '@business/api/reportBuilder';
import { tap } from 'rxjs/operators';
import { ReportDataSource } from '@business/entities/dynamicReprots';

export class GraphSourceSelectorBloc extends BaseBloc {
  sources$ = new BehaviorSubject<ReportDataSource[]>([]);

  onInit() {
    return ReportBuilderAPI.fetchSources().pipe(tap(sources => this.sources$.next(sources)));
  }

  reload = () => {
    return ReportBuilderAPI.fetchSources().pipe(tap(sources => this.sources$.next(sources)));
  };
}
