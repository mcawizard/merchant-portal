import { BehaviorSubject, Subject, of, Observable, isObservable } from 'rxjs';
import { Storage, SessionStorage } from '@core/utils/storage';
import { R } from '@core/utils/r';
import { StorageManager } from '../storage/storage';
import { tap } from 'rxjs/operators';

export interface PersistentStateConfig {
  getStorageNamespace(): string | null;
}

const _config: Partial<PersistentStateConfig> = {};

export function configurePersistentState(config: PersistentStateConfig) {
  R.assign(_config, config);
}

export interface PersistentStateOptions<T> {
  key: string;
  defaultValue: T;
  persistent?: boolean;
  debounce?: number;
  global?: boolean;
  overwriteValues?: Partial<T> | null;
  ignoreFields?: (keyof T)[];
}

export class PersistentState<T> {
  private readonly key: string;
  private readonly ready = { value: false, obs$: new Subject<T>() };

  private readonly _state$: BehaviorSubject<T>;

  readonly state$: Observable<T>;

  constructor(private options: PersistentStateOptions<T>) {
    this.key = this.getStorageKey(options.key, options.global);

    this._state$ = new BehaviorSubject(options.defaultValue);
    this.state$ = this._state$.asObservable();

    const debounce = R.isNumber(options.debounce) ? options.debounce : 1000;

    this.storage = R.debounce(this.storage, debounce);

    this.init();
  }

  set = (value: T) => {
    this._state$.next(value);
    this.storage(value);
  };

  patch = (value: Partial<T>) => {
    this.set({ ...this._state$.value, ...value });
  };

  reset = (value?: Partial<T>) => {
    this.set({ ...this.options.defaultValue, ...value });
  };

  waitForReady = () => {
    if (this.ready.value) return of(this._state$.value);
    return this.ready.obs$;
  };

  private getStorage() {
    return this.options.persistent === false ? SessionStorage : Storage;
  }

  private init() {
    if (!R.isEmpty(this.options.overwriteValues)) {
      this.set({ ...this.options.defaultValue, ...this.options.overwriteValues });
      this.triggerReady();
    } else {
      let value = (this.getStorage() as StorageManager).get<T>(this.key);
      if (R.isPlainObject(value)) {
        value = R.assign({}, this._state$.value, this.options.ignoreFields ? R.omit(value as any, this.options.ignoreFields) : value);
      }

      if (value !== null) this._state$.next(value);

      this.triggerReady();
    }
  }

  private storage(value: T) {
    let data: Record<string, unknown> = value as any;

    if (R.isPlainObject(data) && this.options.ignoreFields) {
      data = R.omit(data, this.options.ignoreFields);
    }

    this.getStorage().set(this.key, data);
  }

  private triggerReady() {
    this.ready.value = true;
    this.ready.obs$.next(this._state$.value);
    this.ready.obs$.complete();
  }

  private getStorageKey(key: string, global?: boolean) {
    const namespace = _config.getStorageNamespace ? _config.getStorageNamespace() : '';

    if (!global && namespace) {
      key = `${key}:${namespace}`;
    }

    return 'PersistentState:' + key;
  }
}
