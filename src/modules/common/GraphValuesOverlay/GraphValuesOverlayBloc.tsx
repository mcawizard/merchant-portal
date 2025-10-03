import { BaseBloc } from '@core/utils/bloc';
import { GraphAPI } from '@business/api/graph_api';
import { GraphValueResponse } from '@business/entities/graph';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { R } from '@core/utils/r';
import { LoadingState } from '@core/utils/repository/loading_state';

export class GraphValuesOverlayBloc extends BaseBloc {
  constructor(private readonly graphId: string) {
    super();
  }

  values$ = new BehaviorSubject<GraphValueResponse[]>([]);

  readonly loading = new LoadingState();

  fetchValues(dateRange: string) {
    return GraphAPI.fetchGraphValues(this.graphId, dateRange).pipe(
      tap(values => this.values$.next(values)),
      this.loading.run({}),
    );
  }

  updateValue = (id: string, forDate: number, value: number) => {
    return GraphAPI.updateGraphValue(id, { forDate, value, graphId: this.graphId }).pipe(
      tap(value => {
        const values = this.values$.value;
        const index = values.findIndex(v => v.id === id);
        values[index] = value;
        this.values$.next([...values]);
      }),
    );
  };

  deleteValue = (id: string) => {
    return GraphAPI.deleteGraphValue(id).pipe(
      tap(() => {
        const values = this.values$.value;
        const index = values.findIndex(v => v.id === id);
        values[index].value = 'NR' as any as number;
        values[index].id = (-1 * R.random(1000000, 9999999)).toString();
        values[index].user = 'System';
        this.values$.next([...values]);
      }),
    );
  };
}
