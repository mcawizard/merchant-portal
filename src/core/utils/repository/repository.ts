import { R } from '@core/utils/r';
import { BehaviorSubject, Observable, OperatorFunction, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';

export type IdSelector<T, Id> = (item: T) => Id;

export interface Update<T = any, Id = any> {
  id: Id;
  changes: ((item: T) => Partial<T>) | Partial<T>;
  merge?: boolean;
  replace?: boolean;
}

export interface Upsert<T = any> {
  item: T;
  merge?: boolean;
  replace?: boolean;
}

export interface RepositoryConnectOptions<T, Id> {
  keepalive?: boolean;

  addOne$?: Observable<T>;
  addMany$?: Observable<T[]>;
  updateOne$?: Observable<Update<T, Id>>;
  updateMany$?: Observable<Update<T, Id>[]>;
  upsertOne$?: Observable<Upsert<T>>;
  upsertMany$?: Observable<Upsert<T>[]>;
  removeOne$?: Observable<Id>;
  removeMany$?: Observable<Id[]>;
  reset$?: Observable<T[] | void>;
}

export interface RepositoryConfig<T, Id> {
  getItemId: IdSelector<T, Id>;
  pagenated?: boolean;
  connect?: RepositoryConnectOptions<T, Id>;
  sortBy?: keyof T;
  sortDirection?: 'asc' | 'desc';
}

export class Repository<T, Id extends string | number = string> {
  private _entities = {} as Record<Id, T>;

  private _items$ = new BehaviorSubject<T[]>([]);
  private _subscribers = 0;
  private _connectManually = false;

  private _changesCount = { single: 0, multiple: 0 };

  private _disconnect$: Subject<void> | null = null;

  public constructor(private _config: RepositoryConfig<T, Id>) {
    if (_config.connect && _config.connect.keepalive) {
      this.connect();
    }

    this.ops = this._createOperators();
  }

  public readonly ops = this._createOperators();

  public items$ = this._createItems$();
  public entities$ = this.items$.pipe(map(() => this._entities));

  public get items() {
    return this._items$.value;
  }

  public get isEmpty() {
    return !this.items.length;
  }

  public getItemId = (item: T) => {
    return this._config.getItemId(item);
  };

  public getItem = (itemId: Id) => {
    return this._entities[itemId] || null;
  };

  public hasItem = (itemId: Id) => {
    return !!this.getItem(itemId);
  };

  public selectItem = (itemId: Id): Observable<T | null> => {
    return this.items$.pipe(
      map(() => this.getItem(itemId)),
      distinctUntilChanged(R.isEqual),
    );
  };

  public get hasChanged() {
    return this._changesCount.single > 0 || this._changesCount.multiple > 0;
  }

  public get changesCount() {
    return this._changesCount;
  }

  public connect(options?: RepositoryConnectOptions<T, Id>) {
    if (options) this._config = { ...this._config, connect: options };

    this._connectManually = true;
    this._connect();
  }

  public disconnect() {
    this._connectManually = false;
    this._disconnect();
  }

  private _addOne(item: T, trigger = true) {
    let entities = this._entities;

    const id = this.getItemId(item);

    if (R.has(entities, id)) return;

    entities = R.assign({}, entities, { [id]: item });

    this._nextItems('single', entities, trigger);
  }

  public addOne(item: T) {
    return this._addOne(item);
  }

  public addMany(items: T[]) {
    items.forEach(item => {
      this._addOne(item, false);
    });

    this._nextItems('multiple');
  }

  private _updateOne(update: Update<T, Id>, trigger = true) {
    let entities = this._entities;

    if (!R.has(entities, update.id)) return;

    let item: T = R.get(entities, [update.id as any]);

    const changes: Partial<T> = R.isFunction(update.changes) ? update.changes(item) : update.changes;

    if (update.replace) {
      item = changes as T;
    } else if (update.merge) {
      item = R.merge({}, item, changes);
    } else {
      item = R.assign({}, item, changes);
    }

    entities = R.assign({}, entities, { [update.id]: item });

    this._nextItems('single', entities, trigger);
  }

  public updateOne(update: Update<T, Id>) {
    return this._updateOne(update);
  }

  public updateMany(updates: Update<T, Id>[]) {
    updates.forEach(update => {
      this._updateOne(update, false);
    });

    this._nextItems('multiple');
  }

  private _upsertOne(upsert: Upsert<T>, trigger = true) {
    const entities = this._entities;

    const id = this.getItemId(upsert.item);

    if (R.has(entities, id)) {
      this._updateOne({ id, changes: upsert.item, replace: true, ...upsert }, false);
    } else {
      this._addOne(upsert.item, false);
    }

    if (trigger) this._nextItems('single');
  }

  public upsertOne(upsert: Upsert<T>) {
    return this._upsertOne(upsert);
  }

  public upsertMany(upserts: Upsert<T>[]) {
    upserts.forEach(upsert => {
      this._upsertOne(upsert, false);
    });

    this._nextItems('multiple');
  }

  private _remove(options: { id?: Id; ids?: Id[] }) {
    let entities = this._entities;

    if (!R.isNil(options.id) && !R.has(entities, options.id)) return;

    entities = R.omit(entities, R.isNil(options.id) ? options.ids || [] : [options.id]) as any;

    this._nextItems(R.isNil(options.id) ? 'multiple' : 'single', entities);
  }

  public removeOne(id: Id) {
    return this._remove({ id });
  }

  public removeMany(ids: Id[]) {
    return this._remove({ ids });
  }

  public getAllItems = () => {
    return R.values(this._entities) || [];
  };

  public reset(items?: T[]) {
    this._entities = {} as Record<Id, T>;

    const hasItems = R.isArray(items) && items.length;

    if (hasItems) {
      items!.forEach(item => {
        R.set(this._entities, [this.getItemId(item)], item);
      });
    }

    this._nextItems('multiple');

    this._changesCount = { single: 0, multiple: hasItems ? 1 : 0 };
  }

  private _nextItems(type: 'single' | 'multiple', entities: Record<any, T> = this._entities, trigger = true) {
    this._entities = entities;

    if (trigger) {
      if (type === 'single') this._changesCount.single += 1;
      if (type === 'multiple') this._changesCount.multiple += 1;

      this._items$.next(R.values(entities));
    }
  }

  // connect change sources

  private _createItems$() {
    const items$ = new Observable<T[]>(observer => {
      this._subscribers += 1;

      if (!this._connectManually) this._connect();

      const subscription = this._items$.subscribe(observer);

      observer.add(() => {
        subscription.unsubscribe();

        this._subscribers -= 1;
        if (this._subscribers === 0 && !this._connectManually) this._disconnect();
      });
    });

    if (this._config.sortBy) {
      return items$.pipe(map(items => R.orderBy(items, [this._config.sortBy], [this._config.sortDirection || 'asc']) as T[]));
    }
    return items$;
  }

  private _connect() {
    if (this._disconnect$) return;

    const options = this._config.connect;
    if (!options) return;

    this._disconnect$ = new Subject<void>();

    const subscribe = <T>(obs$: Observable<T> | null | undefined, fn: (data: T) => any) => {
      if (!obs$) return;

      obs$
        .pipe(
          tap(data => fn.call(this, data)),
          takeUntil(this._disconnect$!),
        )
        .subscribe();
    };

    subscribe(options.addOne$, this.addOne);
    subscribe(options.addMany$, this.addMany);
    subscribe(options.updateOne$, this.updateOne);
    subscribe(options.updateMany$, this.updateMany);
    subscribe(options.upsertOne$, this.upsertOne);
    subscribe(options.upsertMany$, this.upsertMany);
    subscribe(options.removeOne$, this.removeOne);
    subscribe(options.removeMany$, this.removeMany);
    subscribe(options.reset$ as Observable<T[]>, this.reset);
  }

  private _disconnect() {
    if (!this._disconnect$) return;

    this._disconnect$.next();
    this._disconnect$.complete();

    this._disconnect$ = null;
  }

  // operators

  private _createOperators() {
    return {
      reset: this._resetOperator,
      addOne: this._addOneOperator,
      addMany: this._addManyOperator,
      updateOne: this._updateOneOperator,
      upsertOne: this._upsertOneOperator,
      upsertMany: this._upsertManyOperator,
      removeOne: this._removeOneOperator,
    };
  }

  private _resetOperator = <I extends T[]>(): OperatorFunction<I, I> => {
    return (obs$: Observable<I>) => {
      return obs$.pipe(tap(items => this.reset(items)));
    };
  };

  private _addOneOperator = <I extends any>(mapper: (value: I) => T): OperatorFunction<I, I> => {
    return (obs$: Observable<I>) => {
      return obs$.pipe(tap(item => this.addOne(mapper(item))));
    };
  };

  private _addManyOperator = <I extends any[]>(mapper: (value: I[0]) => T): OperatorFunction<I, I> => {
    return (obs$: Observable<I>) => {
      return obs$.pipe(tap(items => this.addMany(items.map(item => mapper(item)))));
    };
  };

  private _updateOneOperator = <I extends any>(mapper: (value: I) => Update<T, Id>): OperatorFunction<I, I> => {
    return (obs$: Observable<I>) => {
      return obs$.pipe(tap(item => this.updateOne(mapper(item))));
    };
  };

  private _upsertOneOperator = <I extends any>(mapper: (value: I) => Upsert<T>): OperatorFunction<I, I> => {
    return (obs$: Observable<I>) => {
      return obs$.pipe(tap(item => this.upsertOne(mapper(item))));
    };
  };

  private _upsertManyOperator = <I extends any[]>(mapper: (value: I[0]) => Upsert<T>): OperatorFunction<I, I> => {
    return (obs$: Observable<I>) => {
      return obs$.pipe(tap(items => this.upsertMany(items.map(item => mapper(item)))));
    };
  };

  private _removeOneOperator = <I extends any>(mapper: (value: I) => Id): OperatorFunction<I, I> => {
    return (obs$: Observable<I>) => {
      return obs$.pipe(tap(item => this.removeOne(mapper(item))));
    };
  };
}
