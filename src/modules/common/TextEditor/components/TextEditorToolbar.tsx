import React, { memo, useMemo, useEffect, useRef, RefObject, useImperativeHandle, Fragment } from 'react';
import { Editor, Range } from 'slate';
import { useSlate, ReactEditor } from 'slate-react';
import { css } from '@emotion/react';
import { R } from '@core/utils/r';
import { useWindowScroll } from '@core/utils/hooks/dom';

import { ToolbarButton } from './ToolbarButton';
import { TextEditorToolbarConfig } from '../types';
import { TOOLBAR_PRESETS } from '../constants';
import { ToolbarHeadingDropdown } from './ToolbarHeadingDropdown';
import { Popper, usePopperAnchor } from '@core/components/Popper';

export interface TextEditorToolbarHandles {
  isVisible: boolean;
}

export interface TextEditorToolbarProps extends TextEditorToolbarConfig {
  handlesRef?: RefObject<TextEditorToolbarHandles>;
}

export const TextEditorToolbar = memo((props: TextEditorToolbarProps) => {
  const editor = useSlate();

  const buttons = useMemo(() => {
    if (props.buttons) return props.buttons;

    const buttons = R.filter(TOOLBAR_PRESETS.default.buttons, button => {
      if (button === 'heading' && props.headings === false) return false;
      if (button === 'color' && props.color === false) return false;

      return true;
    });

    while (R.first(buttons) === '|') buttons.shift();
    while (R.last(buttons) === '|') buttons.pop();

    return buttons;
  }, [props.buttons, props.color, props.headings]);

  const anchor = usePopperAnchor();
  const dropdownAnchor = usePopperAnchor();

  const rectRef = useRef<DOMRect | null>(null);

  useWindowScroll();

  useEffect(() => {
    const { selection } = editor;

    if (!selection || !ReactEditor.isFocused(editor as any) || Range.isCollapsed(selection) || Editor.string(editor, selection) === '') {
      if (rectRef.current) {
        rectRef.current = null;
        anchor.setRect(null);
        dropdownAnchor.setAnchor(null);
      }
      return;
    }

    const domSelection = window.getSelection();
    if (!domSelection) return;
    if (domSelection.rangeCount == 0) return;

    const domRange = domSelection.getRangeAt(0);
    const newRect = domRange.getBoundingClientRect();

    const fields = ['x', 'y', 'width', 'height'];

    if (!R.isEqual(R.pick(rectRef.current, fields), R.pick(newRect, fields))) {
      rectRef.current = newRect;
      anchor.setRect(newRect);
    }
  });

  useImperativeHandle(props.handlesRef, () => ({
    isVisible: anchor.visible,
  }));

  return (
    <Fragment>
      <Popper placement="top" anchor={anchor} autoClose="none" aboveModal>
        <div className={'inline-editor-toolbar'}>
          {buttons.map((type, index) => (
            <ToolbarButton
              key={type === '|' ? 'separator-' + index : type}
              type={type}
              headings={props.headings}
              onDropdown={data => dropdownAnchor.setAnchor(data ? data.anchor : null)}
            />
          ))}
        </div>
      </Popper>
      <Popper anchor={dropdownAnchor} autoClose="auto">
        <ToolbarHeadingDropdown headings={props.headings} />
      </Popper>
    </Fragment>
  );
});
