import { WidgetType } from '@modules/dashboards/Widgets';
import { ReportBuilderFormData } from '@modules/dynamicReports/ReportForms';
import { WidgetResultResponse } from './WidgetResultResponse';

export enum DashboardInterval {
  daily,
  weekly,
  monthly,
  yearly,
  custom,
  sameAsDashboard,
}

export type DashboardWidgetId = string;

export interface DashboardWidgetResponse {
  id: DashboardWidgetId;
  title: string;
  type: WidgetType;
  settings: ReportBuilderFormData;
  result?: WidgetResultResponse;
  hasError: boolean;
}

export type DashboardId = string;

export interface DashboardFilters {
  interval: DashboardInterval;
  dateRange: string;
}
export interface CompactDashboardResponse {
  id: DashboardId;
  title: string;
  slug: string;
  isDefault: boolean;
  interval: DashboardInterval;
}

export interface DashboardResponse {
  id: DashboardId;
  title: string;
  slug: string;
  startDate?: number;
  isDefault: boolean;
  widgets: DashboardWidgetResponse[];
  printUrl: string;
  logo: string;
  interval: DashboardInterval;
  requestId: number;
}

export type VeryCompactDashboardResponse = Pick<DashboardResponse, 'id' | 'title'>;

export interface DashboardLink {
  id: string;
  height: number;
  title: string;
}

export type DashboardEmailId = string;

export enum EmailFrequency {
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
  yearly = 'yearly',
}

export enum EmailDateRange {
  daily = 'daily',
  currentWeek = 'currentWeek',
  currentMonth = 'currentMonth',
  currentYear = 'currentYear',
}

export const emailFrequencies = [EmailFrequency.daily, EmailFrequency.weekly, EmailFrequency.monthly, EmailFrequency.yearly];
export const dateRangeFrequencies = [EmailDateRange.daily, EmailDateRange.currentWeek, EmailDateRange.currentMonth, EmailDateRange.currentYear];

export interface DashboardEmailResponse {
  id: DashboardEmailId;
  frequency: EmailFrequency;
  emails: string[];
}

export interface DashboardTemplateResponse {
  id: string;
  name: string;
  startDate: number;
  image: string;
  folder: {
    id: string;
    name: string;
    breadcrumbs: any[];
  };
}
