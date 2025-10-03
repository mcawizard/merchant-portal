// Import Dependencies
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { MenuItem } from './MenuItem';
import { LeftPanelNavigationItem } from '@modules/theme/navigation/menu';
import { AccordionButton, AccordionItem, AccordionPanel } from './Accordion';

export interface CollapsibleItemProps {
  data: LeftPanelNavigationItem;
}

export const CollapsibleItem = memo((props: CollapsibleItemProps) => {
  const { data } = props;

  return (
    <AccordionItem value={data.path}>
      {({ open }) => (
        <>
          <AccordionButton
            className={clsx(
              'text-xs-plus flex w-full min-w-0 cursor-pointer items-center justify-between gap-1 py-2 text-start tracking-wide outline-hidden transition-[color,padding-left,padding-right] duration-300 ease-in-out',
              open
                ? 'dark:text-dark-50 font-semibold text-gray-800'
                : 'dark:text-dark-200 dark:hover:text-dark-50 dark:focus:text-dark-50 text-gray-600 hover:text-gray-800 focus:text-gray-800',
            )}
          >
            <span className="truncate">{data.title}</span>
            <i
              className={clsx(
                'fa-duotone fa-solid fa-chevron-right dark:text-dark-200 size-4 text-gray-400 transition-transform ease-in-out',
                open && ['rotate-90'],
              )}
            />
          </AccordionButton>
          <AccordionPanel>
            {(data.children || []).map(i => (
              <MenuItem key={i.path} data={i} />
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
});
