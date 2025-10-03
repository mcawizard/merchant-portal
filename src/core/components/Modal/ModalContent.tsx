import { CssProp, Styles } from '@core/utils/css';
import { ClassNames, css } from '@emotion/react';

import React, { memo, PropsWithChildren, RefObject } from 'react';
import { FormContainer, FormContainerProps } from '../form';
import { DialogContent } from '@mui/material';
import { Skeleton } from 'antd';

const styles = {
  container: css`
    line-height: 1.5;
    position: relative;
    // background-color: var(--color-dark-700);
    color: #fff;

    padding-top: 20px !important;
  `,

  fullHeight: css`
    height: 60vh;
  `,

  noPadding: css`
    padding: 0;
  `,

  tabContentFullHeight: css`
    overflow: hidden;

    > div,
    form {
      ${Styles.absoluteFill};
    }
  `,
  noBackground: css`
    background-color: #f8f8fb;
  `,
};

export interface ModalContentProps {
  customCss?: CssProp;
  fullHeight?: boolean;
  noPadding?: boolean;
  formContainer?: FormContainerProps;
  containerRef?: RefObject<HTMLElement>;
  id?: string;
  loading?: boolean;
  noBackground?: boolean;
}

export const ModalContent = memo((props: PropsWithChildren<ModalContentProps>) => {
  let children = props.children;

  if (props.formContainer) {
    children = <FormContainer {...props.formContainer}>{children}</FormContainer>;
  }

  return (
    <ClassNames>
      {({ css }) => (
        <DialogContent
          ref={props.containerRef}
          id={props.id}
          classes={{
            root: css(
              styles.container,
              props.fullHeight && styles.fullHeight,
              props.noPadding && styles.noPadding,
              props.noBackground && styles.noBackground,
              props.customCss,
            ),
          }}
        >
          {props.loading ? <Skeleton active /> : children}
        </DialogContent>
      )}
    </ClassNames>
  );
});
