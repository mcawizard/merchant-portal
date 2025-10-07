import React, { memo, ReactNode } from 'react';
import { css, ClassNames } from '@emotion/react';
import { CssProp, Theme } from '@core/utils/css';
import { useModalInstance } from '@core/components/ModalStack';
import { R } from '@core/utils/r';
import { DialogTitle, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';

const styles = (dark?: boolean) => ({
  container: css`
    // padding: 0 !important;
    // border-bottom: 2px solid #3b82f620;
    // margin-bottom: 16px;
    height: 65px;
    // background-color: var(--color-dark-700);
    padding: 0px 10px 0px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    letter-spacing: inherit;

    .modal_title {
      flex: 1;
      font-family: 'Poppins', sans-serif;
      color: #495057; // Always use dark text for light theme
      font-size: 16px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: inherit;
      top: auto;
    }
  `,

  noBorder: css`
    border-bottom: none;
  `,

  customContent: css`
    .MuiTypography-root {
      height: auto;
      align-items: flex-start;
      position: relative;
    }
  `,
});

export interface ModalHeaderProps {
  customCss?: CssProp;
  closeButton?: boolean;
  titleCss?: CssProp;
  titleStyle?: React.CSSProperties;
  title?: ReactNode;
  children?: ReactNode;
  noBorder?: boolean;
  onClose?(): void | boolean;
  noClose?: boolean;
  rightContent?: ReactNode;
}

export const ModalHeader = memo((props: ModalHeaderProps) => {
  const modal = useModalInstance();

  const closeButton = props.closeButton !== false && (
    <IconButton
      className="close_button"
      size="medium"
      onClick={() => {
        const result = props.onClose && props.onClose();
        if (R.isBoolean(result) && result === false) {
          return;
        }

        modal.close();
      }}
    >
      <Close className="text-gray-600" />
    </IconButton>
  );

  return (
    <ClassNames>
      {({ css }) => (
        <DialogTitle
          classes={{
            root: css([
              styles(false).container, // Use light theme
              !!props.children && styles(false).customContent,
              props.noBorder && styles(false).noBorder,
              props.customCss,
            ]),
          }}
        >
          <span className="modal_title" css={props.titleCss} style={props.titleStyle}>
            {props.title || props.children}
          </span>

          {!!props.rightContent && <div style={{ fontSize: 'initial', fontWeight: 'initial' }}>{props.rightContent}</div>}
          {!props.noClose && closeButton}
        </DialogTitle>
      )}
    </ClassNames>
  );
});
