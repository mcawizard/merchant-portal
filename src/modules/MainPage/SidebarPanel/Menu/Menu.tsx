import React, { memo } from 'react';
import { useMemo, useState } from 'react';
import SimpleBar from 'simplebar-react';

// Local Imports
import { CollapsibleItem } from './CollapsibleItem/CollapsibleItem';
import { MenuItem } from './MenuItem';
import { Divider } from './Divider';
import { useDataScrollOverflow } from '@modules/theme/hooks/useDataScrollOverflow';
import { useDidUpdate } from '@core/utils/hooks/react';
import { useIsomorphicEffect } from '@modules/theme/hooks';
import { LeftPanelNavigationItem } from '@modules/theme/navigation/menu';
import { Accordion } from './CollapsibleItem/Accordion';

export interface MenuProps {
  items: LeftPanelNavigationItem[];
  pathname: string;
}
export const Menu = memo((props: MenuProps) => {
  const { items, pathname } = props;
  const initialActivePath = null;
  const { ref, recalculate } = useDataScrollOverflow();
  const [expanded, setExpanded] = useState(initialActivePath || '');

  useDidUpdate(recalculate, [items]);

  useDidUpdate(() => {
    const activePath = '';

    if (activePath && expanded !== activePath) {
      setExpanded(activePath);
    }
  }, [items, pathname]);

  useIsomorphicEffect(() => {
    const activeItem = ref?.current.querySelector('[data-menu-active=true]');
    activeItem?.scrollIntoView({ block: 'center' });
  }, []);

  return (
    <Accordion value={expanded} onChange={setExpanded} className="flex flex-col overflow-hidden">
      <SimpleBar scrollableNodeProps={{ ref }} className="h-full overflow-x-hidden pb-6" style={{ '--scroll-shadow-size': '32px' } as any}>
        <div className="flex h-full flex-1 flex-col px-4">
          {items.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0;
            if (item.divider) {
              return <Divider key={index} />;
            } else if (hasChildren) {
              return <CollapsibleItem key={item.path} data={item} />;
            } else {
              return <MenuItem key={item.path} data={item} />;
            }
          })}
        </div>
      </SimpleBar>
    </Accordion>
  );
});
