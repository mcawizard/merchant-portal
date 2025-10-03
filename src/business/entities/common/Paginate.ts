export interface StatResponse {
  title: string;
  value: number;
  percision?: number;
  suffix?: string;
  prefix?: string;
}
export interface PaginateMeta {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  stats: StatResponse[];
  requestId?: number;
}

export interface Paginate<T, A = void> {
  data: T[];
  meta: PaginateMeta;
  additional?: A;
  summary?: A;
  tooltips?: A;
}
