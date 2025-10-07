import { useModalInstance } from '@core/components/ModalStack';
import { Theme } from '@core/utils/css';
import { R } from '@core/utils/r';
import { ClassNames, css, Global } from '@emotion/react';
import { Slide } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import React, { Fragment, memo, PropsWithChildren, useMemo } from 'react';

const styles = {
  global: css`
    .MuiPopover-root {
      .MuiMenuItem-root {
        font-size: 15px;
      }
    }
  `,

  container: css`
    &,
    .MuiButton-label,
    .MuiTab-wrapper {
    }
  `,
};

export interface ModalProps {
  backdropClose?: boolean;
  fullWidth?: DialogProps['fullWidth'];
  // eslint-disable-next-line @typescript-eslint/ban-types
  maxWidth?: DialogProps['maxWidth'] | number | (string & {});
  scroll?: DialogProps['scroll'];
  borderRadius?: number;
  onClose?(): void | boolean;
}

export const ModalDrawer = memo((props: PropsWithChildren<ModalProps>) => {
  const modal = useModalInstance();

  const maxWidth = useMemo(() => {
    let maxWidth: string | undefined = undefined;

    if (!props.maxWidth) {
      maxWidth = '790px';
    } else if (R.isNumber(props.maxWidth)) {
      maxWidth = props.maxWidth + 'px';
    } else if (R.isString(props.maxWidth) && (props.maxWidth.endsWith('px') || props.maxWidth.endsWith('%'))) {
      maxWidth = props.maxWidth;
    }

    return maxWidth;
  }, [props.maxWidth]);

  const Transition = useMemo(
    () =>
      React.forwardRef(function Transition(props: TransitionProps & { children: React.ReactElement<any, any> }, ref: React.Ref<unknown>) {
        return <Slide direction="left" ref={ref} {...props} />;
      }),
    [],
  );
  return (
    <Fragment>
      <Global styles={styles.global} />

      <ClassNames>
        {({ css }) => (
          <Dialog
            componentsProps={{ backdrop: { className: '' } }}
            className="drawer-modal_root backdrop-blur"
            open
            disablePortal
            disableAutoFocus
            disableEnforceFocus
            disableRestoreFocus
            TransitionComponent={Transition}
            onClose={
              props.backdropClose === false
                ? undefined
                : () => {
                    modal.close();
                    props.onClose && props.onClose();
                  }
            }
            fullWidth={props.fullWidth !== false}
            maxWidth={maxWidth ? false : (props.maxWidth as any)}
            scroll={props.scroll}
            classes={{
              container: css(styles.container),
              paper: css({
                maxWidth: `${maxWidth} !important`,

                borderWidth: '1px',
                // borderColor: 'rgba(0, 0, 0, 0.1)', // Light theme border
                // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: props.borderRadius && `${props.borderRadius}px !important`,
              }),
            }}
          >
            {props.children}
          </Dialog>
        )}
      </ClassNames>
    </Fragment>
  );
});
