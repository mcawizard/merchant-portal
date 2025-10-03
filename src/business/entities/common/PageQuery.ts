import { ColumnFilterItem, FilterValue } from 'antd/es/table/interface';

export interface PageQuery {
  page?: number;
  perPage?: number;
  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  requestId?: number;
  filters?: Record<string, FilterValue>;
  [key: string]: any;
}
export interface ColumnFilterItemString {
  text: string;
  value: string;
  children?: ColumnFilterItem[];
}

export type TableFilters = Record<string, ColumnFilterItemString[]>;
