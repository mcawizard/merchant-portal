import React, { memo, useMemo } from 'react';
import { Menu, MenuItem, MenuProps } from '../Menu';

export interface MoreMenuProps extends Omit<MenuProps, 'children'> {
  vertical?: boolean;
}

export const MoreMenu = memo((props: MoreMenuProps) => {
  const { vertical = true, ...rest } = props;

  return (
    <Menu trigger={'click'} {...rest}>
      <div style={{ cursor: 'pointer' }} onClick={e => e.stopPropagation()}>
        {!vertical && <i className="fa-sharp-duotone fa-solid fa-ellipsis font-size-18"></i>}
        {vertical && <i className="fa-sharp-duotone fa-solid fa-ellipsis-vertical font-size-18"></i>}
      </div>
    </Menu>
  );
});
