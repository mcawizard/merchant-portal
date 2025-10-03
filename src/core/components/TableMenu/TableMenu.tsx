import React, { act, memo } from 'react';
import { Menu, MenuItem } from '../Menu';
import { R } from '@core/utils/r';

export interface TableMenuProps {
  vertical?: boolean;
  onDelete?: () => void;
  onRevokeAccess?: () => void;
  onDuplicate?: () => void;
  onEdit?: () => void;
  onActivate?: () => void;
  activeOptions?: { activeTitle?: string; activeIcon?: string; inactiveTitle?: string; inactiveIcon?: string; isActive?: boolean };
  inline?: boolean;
  clickable?: boolean;
  items?: MenuItem[];
}

export const TableMenu = memo((props: TableMenuProps) => {
  const { vertical, onDelete, onRevokeAccess, onEdit, onDuplicate, onActivate, activeOptions, inline, clickable = false, items = [] } = props;
  return (
    <Menu
      trigger={'click'}
      inline={inline}
      items={[
        {
          title: R.get(activeOptions, 'isActive')
            ? R.get(activeOptions, 'inactiveTitle') || 'Inactivate'
            : R.get(activeOptions, 'activeTitle') || 'Activate',
          icon: R.get(activeOptions, 'isActive')
            ? R.get(activeOptions, 'inactiveIcon') || 'fa-duotone fa-solid fa-eye-slash'
            : R.get(activeOptions, 'activeIcon') || 'fa-duotone fa-solid fa-eye',
          onClick: onActivate,
          visible: !!onActivate,
        },
        { title: 'Edit', icon: 'fa-duotone fa-pen-to-square', onClick: onEdit, visible: !!onEdit },
        {
          title: 'Duplicate',
          icon: 'fa-duotone fa-copy',
          onClick: onDuplicate,
          visible: !!onDuplicate,
        },
        ...items,
        { title: '', divider: true, visible: !!onDelete },
        { title: 'Delete', icon: 'fa-duotone fa-trash', danger: true, onClick: onDelete, visible: !!onDelete },
        { title: 'Revoke Access', icon: 'fa-duotone fa-user-slash', onClick: onRevokeAccess, visible: !!onRevokeAccess },
      ]}
    >
      <div style={{ cursor: 'pointer' }} onClick={e => e.stopPropagation()}>
        {!vertical && <i className="fa-sharp-duotone fa-solid fa-ellipsis font-size-18"></i>}
        {vertical && <i className="fa-sharp-duotone fa-solid fa-ellipsis-vertical font-size-18"></i>}
      </div>
    </Menu>
  );
});
