type Constructor<T = any> = new (...args: any[]) => T;

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
