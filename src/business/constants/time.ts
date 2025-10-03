export const DATE_FORMAT = 'MM/DD/YYYY';
export const DATE_TIME_FORMAT = 'MM/DD/YYYY hh:mma';

export interface DateRangeType<T extends string | number> {
  start: T;
  end: T;
}

export type DateRange<T extends string | number> = DateRangeType<T> | null;
