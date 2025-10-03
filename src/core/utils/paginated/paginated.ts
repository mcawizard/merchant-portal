import { PageQuery, Paginate, PaginateMeta, TableFilters } from '@business/entities/common';
import { handleMessage, requestMessage } from '@business/messages';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { R } from '../r';
import { ignoreError } from '../rxjs/operators';
import { LoadingState } from './../repository/loading_state/loading_state';
import { FilterValue } from 'antd/es/table/interface';

export type PaginatedCallback<T, Q extends PageQuery> = (pageQuery: Q, requestId: () => number) => Observable<Paginate<T>>;
export interface PaginatedControllerOptions<Q> {
  initalQuery: Q | (() => Q);
  hasFilters?: boolean;
  filtersApi?: () => Observable<any>;
  extraFilters?: Record<string, FilterValue>;
  preserveRecords?: boolean;
}
export class PaginatedController<T, Q extends PageQuery, EF = void, A = void> {
  public readonly items$ = new BehaviorSubject<T[]>([]);
  public readonly loading = new LoadingState();
  public readonly filters$ = new BehaviorSubject<TableFilters>({});
  public readonly pageMeta$ = new BehaviorSubject<PaginateMeta>({
    current_page: 0,
    from: 0,
    last_page: 0,
    per_page: 0,
    to: 0,
    total: 0,
    stats: [],
  });

  public readonly additional$ = new BehaviorSubject<A | null>(null);
  public readonly summary$ = new BehaviorSubject<A | null>(null);
  public readonly tooltips$ = new BehaviorSubject<A | null>(null);

  options: PaginatedControllerOptions<Q>;

  public readonly pageQuery$: BehaviorSubject<Q>;

  private fetchFn: PaginatedCallback<T, Q>;

  private _extraFilters: Record<string, FilterValue> = {};

  public onQuery?(query: Q): void;
  private requestId = 0;
  private filtersLoaded = false;

  constructor(fetchFn: PaginatedCallback<T, Q>, options: PaginatedControllerOptions<Q>) {
    this.fetchFn = fetchFn;
    this.options = options;

    this.pageQuery$ = new BehaviorSubject<Q>(R.isFunction(options.initalQuery) ? options.initalQuery() : options.initalQuery);
  }

  fetch(refresh = false, resetItems = true) {
    this.requestId += 1;
    !this.filtersLoaded && this.loadFilters();
    const searching = (this.pageQuery$.value.search && this.pageQuery$.value.search !== '') || false;

    return this.fetchFn({ ...this.pageQuery$.value, requestId: this.requestId }, () => this.requestId).pipe(
      tap(result => {
        if (!result) return;
        if (result.meta && result.meta.requestId && result.meta.requestId < this.requestId) {
          return;
        }
        if (this.options.preserveRecords && !refresh && !resetItems) {
          this.items$.next([...this.items$.value, ...result.data]);
        } else {
          this.items$.next(result.data);
        }
        this.pageMeta$.next(result.meta);
        this.additional$.next(result.additional || null);
        this.summary$.next(result.summary || null);
        this.tooltips$.next(result.tooltips || null);
      }),
      handleMessage({ error: requestMessage('fetch_error') }),
      ignoreError(),
      this.loading.run({ refresh, state: { searching } }),
    );
  }

  loadFilters(force = false) {
    if (this.filtersLoaded && !force) return true;
    this.filtersLoaded = true;
    if (this.options.hasFilters && this.options.filtersApi) {
      return this.options
        .filtersApi()
        .pipe(
          tap(filters => filters && this.filters$.next(filters)),
          ignoreError(),
        )
        .subscribe();
    }
  }

  onNextPage() {
    this.patchQuery({ page: this.pageMeta$.value.current_page + 1 } as any);
    return this.fetch(false, false);
  }

  reload() {
    this.loadFilters(true);
    return this.fetch(true);
  }

  public patchQuery(query: Partial<Q>, force = false) {
    const oldQuery = this.pageQuery$.value;
    const newQuery = { ...this.pageQuery$.value, ...query };
    if (newQuery.filters) {
      newQuery.filters = { ...R.objectCompact(newQuery.filters), ...this._extraFilters };
    } else {
      newQuery.filters = this._extraFilters;
    }
    this.pageQuery$.next(newQuery);
    this.onQuery && this.onQuery(newQuery);
    if (JSON.stringify(oldQuery) === JSON.stringify(newQuery) && force === false) {
      return of(null);
    }
    return this.fetch();
  }

  public extraFilters(filters: Record<string, FilterValue>) {
    R.keys(filters).forEach(key => {
      this._extraFilters[key] = filters[key];
    });
    this._extraFilters = R.objectCompact(this._extraFilters);
    return this.patchQuery({ page: 1 } as any);
  }

  public patchQueryWithoutFetch(query: Partial<Q>, force = false) {
    const oldQuery = this.pageQuery$.value;
    const newQuery = { ...this.pageQuery$.value, ...query };
    this.pageQuery$.next(newQuery);
    this.onQuery && this.onQuery(newQuery);
  }

  public updateItems(items: T[]) {
    this.items$.next(items);
  }

  public updateItem(item: T, key: keyof T) {
    const newItems = this.items$.value.map(i => {
      if (i[key] === item[key]) {
        return item;
      }
      return i;
    });
    this.items$.next(newItems);
  }
}
