import { DownOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps as AntMenuProps, DropDownProps, Menu as AntMenu, ConfigProvider } from 'antd';
import React, { Fragment, memo, useMemo } from 'react';
import styled from 'styled-components';
export const AntMenuStyled = styled(AntMenu)`
  .ant-menu-item-selected {
    border-bottom: none !important;
  }

  & .ant-menu-item:hover {
    border-bottom: none !important;
  }

  .ant-menu-item-selected::after {
    content: none;
    border-bottom: none !important;
  }

  & .ant-menu-item:hover::after {
    content: none;
    border-bottom: none !important;
  }
`;

export interface MenuItem {
  title: string;
  icon?: string;
  onClick?: () => void;
  loading?: boolean;
  danger?: boolean;
  visible?: boolean;
  disabled?: boolean;
  divider?: boolean;
  children?: MenuItem[];
}

export interface MenuProps extends Omit<DropDownProps, 'menu' | 'trigger'> {
  children: React.ReactNode;
  items: MenuItem[];
  inline?: boolean;
  trigger?: 'click' | 'hover';
}

export const Menu = memo((props: MenuProps) => {
  const { items: rawItems, inline = false, trigger = 'click', ...rest } = props;
  const filteredItems = useMemo(() => rawItems.filter(item => item.visible !== false), [rawItems]);
  const items: AntMenuProps['items'] = useMemo(
    () =>
      filteredItems.map((item, index) => {
        if (item.divider) return { key: index, type: 'divider' };
        return {
          key: index,
          label: inline ? undefined : item.title,
          onClick: e => {
            e.domEvent.stopPropagation();
            item.onClick?.();
          },
          disabled: item.disabled,
          loading: item.loading,
          danger: item.danger,
          icon: item.icon ? <i className={item.icon} /> : undefined,
          children: item.children
            ? item.children.map((child, childIndex) => ({
                key: childIndex,
                label: child.title,
                onClick: child.onClick,
                icon: item.icon ? <i className={child.icon} /> : undefined,
              }))
            : undefined,
        };
      }),
    [filteredItems],
  );

  if (inline) {
    return (
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: 'transparent',
              itemPaddingInline: 2,
              itemHoverBg: 'green',
              // activeBarBorderWidth: 0,
              // itemMarginBlock: 0,
              // horizontalLineHeight: 0,
            },
          },
        }}
      >
        <AntMenuStyled mode="horizontal" items={items} style={{ borderBottom: 0, justifyContent: 'flex-end' }} />
      </ConfigProvider>
    );
  }

  return (
    <Dropdown menu={{ items }} trigger={[trigger]} arrow {...rest}>
      {props.children}
    </Dropdown>
  );
});
