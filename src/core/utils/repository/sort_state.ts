import { BehaviorSubject } from 'rxjs';
import { R } from '@core/utils/r';
import { Storage } from '@core/utils/storage';

export interface SortStateField<T = any, F extends string = string> {
  name: F;
  label: string;
  valueExtractor: (item: T) => string | number | null | undefined;
  type?: 'string' | 'number';
}

export interface SortStateConfig<T = any, F extends string = string> {
  fields: SortStateField<T, F>[];
  defaultSort: ActiveSort<F> | ActiveSort<F>[];
  storageKey?: string;
  ignoredFields?: F[];
  allowedFields?: F[];
}

export interface ActiveSort<F extends string = string> {
  field: F;
  direction: 'asc' | 'desc';
}

export class SortState<T = any, F extends string = string> {
  private readonly storageKey: string | null;

  private readonly defaultSort: ActiveSort<F>;
  private readonly filteredFields: SortStateField<T, F>[];

  public readonly activeSort$: BehaviorSubject<ActiveSort<F>>;

  public constructor(options: SortStateConfig<T, F>) {
    this.storageKey = options.storageKey ? `sort:${options.storageKey}` : null;

    const { fields, allowedFields, ignoredFields } = options;
    this.filteredFields = fields;

    if (allowedFields && allowedFields.length) {
      this.filteredFields = fields.filter(field => allowedFields.includes(field.name));
    } else if (ignoredFields && ignoredFields.length) {
      this.filteredFields = fields.filter(field => !ignoredFields.includes(field.name));
    }

    const defaultSorts = R.isArray(options.defaultSort) ? options.defaultSort : [options.defaultSort];

    this.defaultSort = defaultSorts.find(sort => !!this.getField(sort.field)) || defaultSorts[0]!;

    this.activeSort$ = new BehaviorSubject(this.defaultSort);

    this.restore();
  }

  private restore() {
    if (!this.storageKey) return;

    const sort = Storage.get<ActiveSort<F>>(this.storageKey);

    if (sort && sort.field && (sort.direction === 'asc' || sort.direction === 'desc') && this.getField(sort.field)) {
      this.activeSort$.next(sort);
    } else {
      this.reset();
    }
  }

  private save(sort = this.activeSort) {
    if (!this.storageKey || !sort || !sort.field || !sort.direction) return;

    Storage.set(this.storageKey, sort);
  }

  public get fields() {
    return this.filteredFields;
  }

  public get activeSort() {
    return this.activeSort$.value;
  }

  public setActiveSort = (sort: ActiveSort<F>) => {
    this.activeSort$.next(sort);
    this.save(sort);
  };

  public reset = () => {
    this.setActiveSort(this.defaultSort);
  };

  public nextActiveSort = (field: string, activeSort = this.activeSort): ActiveSort => {
    const active = field === activeSort.field;

    const sort: ActiveSort = active ? { field, direction: activeSort.direction === 'asc' ? 'desc' : 'asc' } : { field, direction: 'asc' };

    return sort;
  };

  public isDefaultSort = (sort: ActiveSort) => {
    return R.isEqual(this.defaultSort, sort);
  };

  public sort = (items: T[], activeSort = this.activeSort) => {
    const field = this.getField(activeSort.field);

    if (!field) {
      console.warn('[SortState.sort] invalid active sort:', activeSort, this.filteredFields);
      return items;
    }

    if (field.type === 'number') {
      items = R.orderBy(
        items,
        item => {
          const value = R.toNumber(field.valueExtractor(item));
          return R.isNaN(value) ? Number.MIN_SAFE_INTEGER : value;
        },
        activeSort.direction,
      );
    } else {
      items = R.sortWith(
        items,
        (i1, i2) => {
          return R.localeCompare(R.toString(field.valueExtractor(i1)), R.toString(field.valueExtractor(i2)));
        },
        activeSort.direction === 'desc',
      );
    }

    return items;
  };

  private getField(name: F) {
    return R.find(this.filteredFields, field => field.name === name) || null;
  }
}
