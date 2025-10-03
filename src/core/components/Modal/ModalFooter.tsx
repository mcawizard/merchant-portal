import React, { memo, PropsWithChildren } from 'react';
import { css, ClassNames } from '@emotion/react';

import { CssProp, Theme } from '@core/utils/css';
import { DialogActions } from '@mui/material';

const styles = {
  container: css`
    padding: 15px 35px !important;
    // border-top: 2px solid #3b82f620;
    // background-color: var(--color-dark-700);
  `,

  noBorder: css`
    border-top: none;
  `,
};

export interface ModalFooterProps {
  customCss?: CssProp;
  noBorder?: boolean;
}

export const ModalFooter = memo((props: PropsWithChildren<ModalFooterProps>) => {
  return (
    <ClassNames>
      {({ css }) => <DialogActions classes={{ root: css(styles.container, props.noBorder && styles.noBorder) }}>{props.children}</DialogActions>}
    </ClassNames>
  );
});
