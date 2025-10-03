import { MenuItemResponse } from './MenuItemResponse';

export interface MenuResponse {
  id: string;
  title: string;
  extra: any;
  items: MenuItemResponse[];
}
