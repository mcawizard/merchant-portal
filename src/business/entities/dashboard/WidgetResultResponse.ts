import { LogResponse } from '@business/entities/log';
export interface StatResultResponse {
  value: number;
  total: number;
  progress: number;
  decimal: number;
  label?: string;
  formula: string;
  dateRange?: string;
}

export interface StatChartResultResponse {
  value: number;
  decimal: number;
  change: number;
  color: string;
  label?: string;
  series: {
    name: string;
    data: number[];
  }[];
  dateRange?: string;
}

export type TimelineResultResponse = LogResponse;

export interface StatExpandedResultResponse {
  value: number;
  decimal: number;
  label?: string;
  items: { [key: string]: number }[];
  dateRange?: string;
}

export type NewSeries = number | null;

export interface LineChartResultResponse {
  value: number;
  decimal: number;
  change: number;
  labels: string[];
  series: {
    meta: string;
    value: string;
  }[][];
  newSeries: NewSeries[][];
  dateRange?: string;
  newValues: any;
}
export interface BarChartResultResponse {
  value: number;
  decimal: number;
  change: number;
  labels: string[];
  series: number[];
  label: string;
  dateRange?: string;
}
export interface PieChartResultResponse {
  value: number;
  decimal: number;
  change: number;
  labels: string[];
  colors: string[];
  series: number[];
  label: string;
  dateRange?: string;
}

export type WidgetResultResponse =
  | StatResultResponse
  | StatChartResultResponse
  | StatExpandedResultResponse
  | LineChartResultResponse
  | BarChartResultResponse;
