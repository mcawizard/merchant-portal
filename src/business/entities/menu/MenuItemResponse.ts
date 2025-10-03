export interface MenuItemResponse {
  id: string;
  menuId: string;
  title: string;
  type: string;
  parentId: string;
  link: string;
  menuOrder: string;
  column: string;
  extra: Array<string>;
}
