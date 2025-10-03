import React, { memo, useMemo, useState, RefObject, useCallback, KeyboardEventHandler, useImperativeHandle } from 'react';
import { withHistory } from 'slate-history';
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps, ReactEditor } from 'slate-react';
import { R } from '@core/utils/r';
import { TextEditorToolbar } from './components/TextEditorToolbar';
import { TextEditorElement, TextEditorLeaf } from './elements';
import { ToolbarPreset, TOOLBAR_PRESETS } from './constants';
import { TextEditorState, TextEditorToolbarConfig } from './types';
import { createEditor } from './editor';
import { insertBreak } from './utils';

export interface TextEditorHandles {
  focus(): void;
}

export interface TextEditorProps {
  initialState: TextEditorState;
  toolbar?: ToolbarPreset | TextEditorToolbarConfig | boolean;
  singleLine?: boolean;
  handlesRef?: RefObject<TextEditorHandles>;
  breakTag?: string;
  onChange?(state: TextEditorState): void;
  onFocus?(): void;
  onBlur?(): void;
  onEnter?(): void;
}

export const TextEditor = memo((props: TextEditorProps) => {
  const { onChange, onFocus, onBlur, breakTag } = props;

  const editor = useMemo(() => withReact(withHistory(createEditor())), []);

  const [state, setState] = useState<TextEditorState>(props.initialState);

  const renderElement = useCallback(
    (props: RenderElementProps) => {
      return <TextEditorElement breakTag={breakTag} {...props} />;
    },
    [breakTag],
  );

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <TextEditorLeaf {...props} />;
  }, []);

  const toolbarConfig = useMemo(() => {
    if (R.isNil(props.toolbar)) return TOOLBAR_PRESETS.default;
    if (props.toolbar === false) return false;
    if (R.isString(props.toolbar) && TOOLBAR_PRESETS[props.toolbar]) return TOOLBAR_PRESETS[props.toolbar];
    return props.toolbar as TextEditorToolbarConfig;
  }, [props.toolbar]);

  const handleFocus = useCallback(() => {
    if (onFocus) onFocus();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    if (onChange) onChange(state);
    if (onBlur) onBlur();
  }, [onBlur, onChange, state]);

  const handleKeyDown: KeyboardEventHandler = useCallback(
    event => {
      if (event.keyCode === 13) {
        event.preventDefault();
        props.onEnter && props.onEnter();

        if (props.singleLine || !!event.ctrlKey || !!event.metaKey) {
          ReactEditor.blur(editor);
        } else {
          insertBreak(editor);
        }
      }
    },
    [editor, props],
  );

  useImperativeHandle(props.handlesRef, () => ({
    focus: () => {
      ReactEditor.focus(editor);
    },
  }));

  return (
    <Slate editor={editor} value={state} onChange={setState}>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} onKeyDown={handleKeyDown} onFocus={handleFocus} onBlur={handleBlur} />
      {toolbarConfig !== false && <TextEditorToolbar {...toolbarConfig} />}
    </Slate>
  );
});
