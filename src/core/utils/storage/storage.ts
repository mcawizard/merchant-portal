
export class StorageManager {
  constructor(private storage: Storage) {}

  get<T>(key: string): T | null;
  get<T>(key: string, defaultValue: null): T | null;
  get<T>(key: string, defaultValue: T): T;
  get(key: string, defaultValue: any = null): any {
    const text = this.storage.getItem(key);
    if (text === null) return defaultValue;

    try {
      return JSON.parse(text);
    } catch (error) {
      return defaultValue;
    }
  }

  set<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  has(key: string) {
    return this.get(key) !== null;
  }

  remove<T>(key: string): void {
    this.storage.removeItem(key);
  }
}
