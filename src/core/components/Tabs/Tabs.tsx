import React, { ComponentType, ExoticComponent, MemoExoticComponent, memo, useCallback, useMemo } from 'react';
import { Tabs as AntTabs } from 'antd';
import type { TabsProps as AntTabsProps } from 'antd';
import { Button } from 'reactstrap';
import { R } from '@core/utils/r';
import { useHistory, useRouteParam } from '@core/router';

export interface TabItem<C = any> {
  title: string;
  component: C;
  props?: C extends MemoExoticComponent<infer T> ? (T extends ComponentType<infer P> ? P : never) : never;
  icon?: string;
  disabled?: boolean;
  forceRender?: boolean;
  route?: string;
  visible?: boolean;
}

export interface TabsProps extends Omit<AntTabsProps, 'onChange'> {
  tabs: TabItem<any>[];
  left?: React.ReactNode;
  right?: React.ReactNode;
  route?(tab: string): string;
  routeParam?: string;
  initialIndex?: number;
  onChange?: (index: number) => void;
}
export type TabExtraPositionType = 'left' | 'right';

export const Tabs = memo((props: TabsProps) => {
  const { left, right, tabs, route, routeParam, onChange: onChangeProps, initialIndex: propsInitialIndex, ...rest } = props;
  let routeTabParam = '';
  if (props.routeParam) {
    routeTabParam = useRouteParam(props.routeParam || 'randomRouteParam', true)!;
  }

  const initialIndex = useMemo(() => {
    if (propsInitialIndex) {
      return propsInitialIndex;
    } else if (props.routeParam && routeTabParam) {
      return tabs.findIndex(t => t.route === routeTabParam) || 0;
    }
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsInitialIndex]);
  const history = useHistory();

  const items: TabsProps['items'] = useMemo(() => {
    return tabs
      .filter(t => t.visible !== false)
      .map((tab, index) => {
        return {
          key: String(index),
          label: tab.title,

          disabled: tab.disabled,
          icon: tab.icon ? <i className={tab.icon} /> : undefined,
          forceRender: tab.forceRender,
          children: <tab.component {...(tab.props || {})} />,
        };
      });
  }, [tabs]);

  const extraContent: Record<TabExtraPositionType, React.ReactNode> = {
    left,
    right,
  };

  const onChange = useCallback(
    (key: string) => {
      const index = R.toNumber(key);
      onChangeProps && onChangeProps(index);
      const tab = tabs[index];
      if (props.route && tab && tab.route && props.routeParam) {
        const url = props.route(tab.route);

        history.replace(url);
      }
    },
    [tabs, props, history, onChangeProps],
  );

  return <AntTabs defaultActiveKey={R.toString(initialIndex)} tabBarExtraContent={extraContent} items={items} onChange={onChange} {...rest} />;
});
