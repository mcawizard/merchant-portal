import React from 'react';
import { useSidebarContext } from '@modules/theme/contexts/sidebar/context';
import clsx from 'clsx';
import { useHistory } from '@core/router';
import { R } from '@core/utils/r';

// ----------------------------------------------------------------------

export function PageHeaderBackButton(props: { backButton: boolean | string }) {
  const history = useHistory();

  return (
    <button
      onClick={() => {
        if (R.isString(props.backButton)) {
          history.push(props.backButton);
        } else {
          history.back();
        }
      }}
      className={clsx(
        'active',
        'sidebar-toggle-btn cursor-pointer flex size-7 flex-col justify-center space-y-1.5 text-primary-600 outline-hidden focus:outline-hidden dark:text-primary-400 ltr:ml-0.5 rtl:mr-0.5',
      )}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
