import React, { memo, PropsWithChildren, useMemo } from 'react';
import MPopper, { PopperProps as MPopperProps } from '@mui/material/Popper';
import { R } from '@core/utils/r';
import { CssProp } from '@core/utils/css';
import { PopperAnchor } from './hooks';
import { ClickAwayListener } from '@mui/material';

export interface PopperProps extends Pick<MPopperProps, 'placement' | 'keepMounted' | 'disablePortal' | 'modifiers'> {
  anchor?: PopperAnchor;
  customCss?: CssProp;
  autoClose?: 'auto' | 'outside' | 'none';
  offset?: string;
  aboveModal?: boolean;
}

export const Popper = memo((props: PropsWithChildren<PopperProps>) => {
  const anchor = props.anchor?.anchor;
  const placement = props.placement || 'bottom';

  const autoClose = props.autoClose || 'outside';
  const onClose = props.anchor?.onClose || R.noop;

  const vertical = placement.includes('top') || placement.includes('bottom');

  const modifiers = useMemo(
    () => ({
      flip: {
        enabled: true,
      },
      preventOverflow: {
        enabled: true,
        boundariesElement: 'scrollParent',
      },
    }),
    [],
  );

  const popperOptions = useMemo(() => {
    const offset = props.offset || (vertical ? '5,5' : '5,5');

    const modifiers = {
      offset: { offset },
      preventOverflow: { enabled: true },
      //   arrow: {
      //     enabled: true,
      //     element: arrowRef,
      //   },
    };

    return { modifiers };
  }, [props.offset, vertical]);

  if (!anchor) return null;

  return (
    <MPopper
      open={!!anchor}
      anchorEl={anchor}
      placement={placement}
      // modifiers={modifiers}
      // popperOptions={popperOptions}
      style={props.aboveModal ? { zIndex: 1500, lineHeight: 1.5 } : undefined}
    >
      <ClickAwayListener onClickAway={autoClose === 'auto' || autoClose === 'outside' ? onClose : R.noop}>
        <div css={props.customCss} onClick={autoClose === 'auto' ? onClose : undefined}>
          {props.children}
        </div>
      </ClickAwayListener>
    </MPopper>
  );
});
