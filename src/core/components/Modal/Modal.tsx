import { useModalInstance } from '@core/components/ModalStack';
import { Theme } from '@core/utils/css';
import { R } from '@core/utils/r';
import { ClassNames, css, Global } from '@emotion/react';
import { createTheme, Fade, Slide, ThemeProvider, Zoom } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import classNames from 'classnames';
import React, { CSSProperties, Fragment, memo, PropsWithChildren, useMemo } from 'react';

const styles = {
  global: css`
    .MuiPopover-root {
      .MuiMenuItem-root {
        font-size: 15px;
        font-family: ${Theme.fontFamily};
      }
    }
  `,

  container: css`
    &,
    .MuiButton-label,
    .MuiTab-wrapper {
      font-family: ${Theme.fontFamily};
    }
  `,
};

export interface ModalProps {
  backdropClose?: boolean;
  fullWidth?: DialogProps['fullWidth'];
  maxWidth?: DialogProps['maxWidth'] | number | (string & {});
  scroll?: DialogProps['scroll'];
  borderRadius?: number;
  className?: string;
  hideBackdrop?: boolean;
  disableBackdropClick?: boolean;
  disableEnforceFocus?: boolean;
  disableScrollLock?: boolean;
  paperStyle?: CSSProperties;
  onClose?(): void | boolean;
  fullScreen?: DialogProps['fullScreen'];
  dark?: boolean;
  transition?: 'left' | 'right' | 'up' | 'down' | 'fade' | 'zoom';
}

export const Modal = memo((props: PropsWithChildren<ModalProps>) => {
  const modal = useModalInstance();
  const { transition } = props;

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

  const theme = useMemo(() => {
    if (props.dark) {
      return createTheme({
        palette: {
          mode: 'dark',
        },
        zIndex: {
          modal: 1010,
        },
      });
    }
    return createTheme({
      zIndex: {
        modal: 1010,
      },
    });
  }, [props.dark]);

  const Transition = useMemo(
    () =>
      React.forwardRef(function Transition(props: TransitionProps & { children: React.ReactElement<any, any> }, ref: React.Ref<unknown>) {
        if (transition == 'left' || transition == 'down' || transition == 'right' || transition == 'up') {
          return <Slide direction={transition} ref={ref} {...props} />;
        } else if (transition == 'fade') {
          return <Fade timeout={2500} ref={ref} {...props} />;
        } else if (transition == 'zoom') {
          return <Zoom ref={ref} {...props} />;
        } else {
          return undefined;
        }
      }),
    [transition],
  );

  return (
    <Fragment>
      <Global styles={styles.global} />

      <ClassNames>
        {({ css }) => (
          <ThemeProvider theme={theme}>
            <Dialog
              componentsProps={{ backdrop: { className: 'dark:bg-black/40' } }}
              open
              TransitionComponent={transition && Transition}
              //onClose={props.backdropClose === false ? undefined : modal.close}
              onClose={
                props.backdropClose === false
                  ? undefined
                  : () => {
                      const result = props.onClose && props.onClose();
                      if (R.isBoolean(result) && result === false) {
                        return;
                      }

                      modal.close();
                    }
              }
              fullWidth={props.fullWidth !== false}
              maxWidth={maxWidth ? false : (props.maxWidth as any)}
              scroll={props.scroll}
              classes={{
                container: css(styles.container),
                paper: css({
                  maxWidth: `${maxWidth} !important`,
                  // borderRadius: props.borderRadius && `${props.borderRadius}px !important`,
                  borderRadius: `0.5rem !important`,
                  background: 'linear-gradient(90deg, #041024, #1A031D)',
                  borderWidth: '1px',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  ...(props.dark && {
                    background: '#000',
                    color: '#fff',
                  }),

                  ...(props.paperStyle || ({} as any)),
                }),
              }}
              className={classNames(props.className, 'backdrop-blur')}
              hideBackdrop={props.hideBackdrop}
              // disablePortal
              disableAutoFocus
              disableRestoreFocus
              // disableBackdropClick={props.disableBackdropClick}
              disableEnforceFocus
              disableScrollLock={props.disableScrollLock}
              fullScreen={props.fullScreen}
              sx={
                props.dark
                  ? {
                      background: '#000',
                      '& .MuiPaper-root': {
                        background: '#000',
                      },
                      '& .MuiBackdrop-root': {
                        backgroundColor: 'transparent', // Try to remove this to see the result
                      },
                    }
                  : {}
              }
            >
              {props.children}
            </Dialog>
          </ThemeProvider>
        )}
      </ClassNames>
    </Fragment>
  );
});
