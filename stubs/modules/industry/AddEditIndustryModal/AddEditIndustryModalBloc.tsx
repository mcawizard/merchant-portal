import { BaseBloc } from '@core/utils/bloc';
import { resolve } from '@core/utils/ioc';
import { Blocs } from '@business/blocs';
import { LoadingState } from '@core/utils/repository/loading_state';
import { of } from 'rxjs';
export class AddEditIndustryModalBloc extends BaseBloc {
  private readonly industryBloc = resolve(Blocs.industry);

  constructor(private readonly id?: string) {
    super();
  }

  loading = new LoadingState();
  industry$ = this.id ? this.industryBloc.selectIndustry(this.id) : undefined;

  onInit() {
    if (this.id) {
      return this.industryBloc.read(this.id).pipe(this.loading.run());
    }
    return of(null).pipe(this.loading.run());
  }

  add = this.industryBloc.add;
  edit = this.industryBloc.edit;
}
