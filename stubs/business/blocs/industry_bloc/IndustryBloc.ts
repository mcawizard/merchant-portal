import { switchMap, tap } from 'rxjs/operators';
import { BaseBloc } from '@core/utils/bloc';
import { Repository } from '@core/utils/repository';
import { handleMessage, requestMessage } from '@business/messages';
import { Session } from '@modules/auth/session';
import { R } from '@core/utils/r';
import { IndustryResponse } from '@business/entities/industry';
import { IndustryAPI } from '@business/api/industry_api';
import { showDeleteConfirmation } from '@modules/common/alerts';
import { PageQuery } from '@business/entities/common';
import { ignoreError } from '@core/utils/rxjs/operators';

export class IndustryBloc extends BaseBloc {
  private readonly industriesRepo = new Repository<IndustryResponse>({
    getItemId: industry => industry.id,
  });

  readonly industries$ = this.industriesRepo.items$;
  readonly selectIndustry = this.industriesRepo.selectItem;

  onReset() {
    this.industriesRepo.reset();
  }

  all = () => {
    return IndustryAPI.all().pipe(this.industriesRepo.ops.reset(), handleMessage({ error: requestMessage('fetch_industry_error') }));
  };

  browse = (query: PageQuery) => {
    return IndustryAPI.browse(query).pipe(handleMessage({ error: requestMessage('fetch_industry_error') }));
  };

  read = (id: string) => {
    return IndustryAPI.read(id).pipe(
      this.industriesRepo.ops.upsertOne(item => ({ item })),
      handleMessage({ error: requestMessage('fetch_industry_error') }),
    );
  };

  add = (company: Partial<IndustryResponse>) => {
    return IndustryAPI.add(company).pipe(
      this.industriesRepo.ops.addOne(item => item),
      handleMessage({
        type: requestMessage('create_industry'),
      }),
    );
  };

  edit = (id: string, industry: Partial<IndustryResponse>) => {
    return IndustryAPI.edit(id, industry).pipe(
      this.industriesRepo.ops.upsertOne(item => ({ item })),
      handleMessage({
        type: requestMessage('update_industry'),
      }),
    );
  };

  remove = (id: string) => {
    return showDeleteConfirmation('Delete Industry', 'Do you really want to remove this industry?').pipe(
      switchMap(() => IndustryAPI.remove(id)),

      this.industriesRepo.ops.removeOne(() => id),
      handleMessage({
        type: requestMessage('delete_industry'),
      }),
    );
  };

  filters = () => {
    return IndustryAPI.filters().pipe(ignoreError());
  };
}
