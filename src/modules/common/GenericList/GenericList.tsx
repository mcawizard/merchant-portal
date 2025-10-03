import React from 'react';
import { List } from 'antd';

interface GenericListProps<T> {
  data: T[];
  itemLayout?: 'horizontal' | 'vertical';
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export function GenericList<T>({ data, itemLayout = 'horizontal', renderItem, className }: GenericListProps<T>) {
  return <List className={className} itemLayout={itemLayout} dataSource={data} renderItem={renderItem} />;
}
interface GenericListItemProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  extraContent?: React.ReactNode;
}

interface GenericListItemProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  extraContent?: React.ReactNode;
  rightFlexBasis?: string | number; // NEW
}

export const GenericListItem: React.FC<GenericListItemProps> = ({ icon, title, description, extraContent, rightFlexBasis = '300px' }) => {
  return (
    <List.Item style={{ paddingInline: 0 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', gap: 16 }}>
        <div style={{ display: 'flex', flex: '1 1 0', gap: 12 }}>
          {icon && <div style={{ flexShrink: 0, paddingTop: 4 }}>{icon}</div>}
          <div>
            <div style={{ fontWeight: 600 }}>{title}</div>
            {description && <div style={{ fontSize: 12, color: '#aaa', lineHeight: 1.4 }}>{description}</div>}
          </div>
        </div>

        <div style={{ flexBasis: rightFlexBasis, flexShrink: 0 }}>{extraContent}</div>
      </div>
    </List.Item>
  );
};
