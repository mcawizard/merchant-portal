import React, { memo, useState, useCallback, useMemo, MouseEventHandler, useRef } from 'react';
import { R } from '@core/utils/r';
import { classnames } from '@core/utils/css';
import { TextProps } from './Text';
import { TextState } from './types';
import { TextEditorState, TextEditorHandles, convertHtmlToState, TextEditor, convertStateToHtml } from '../TextEditor';
import { useValueRef } from '@core/utils/react';

export interface EditableTextProps extends Omit<TextProps, 'settingsField' | 'state'> {
  state: TextState;
  onFocus?(): void;
  onBlur?(): void;
  onEnter?(): void;
  breakTag?: string;
}

const EditableText = memo((props: EditableTextProps) => {
  const { state } = props;

  const singleLine = R.isBoolean(props.multipleLines) ? !props.multipleLines : R.isBoolean(props.singleLine) ? props.singleLine : props.simple;

  const plainText = R.isBoolean(props.plainText) ? props.plainText : props.simple;

  const initialState = useMemo(() => {
    return state.state ? state.state : convertHtmlToState(state.html);
  }, [state.html, state.state]);

  const key = useMemo(() => JSON.stringify(initialState), [initialState]);

  const [focused, setFocused] = useState(false);

  const editorRef = useRef<TextEditorHandles>(null);

  const onFocus = useCallback(() => {
    setFocused(true);
    props.onFocus && props.onFocus();
  }, [props]);

  const onBlur = useCallback(() => {
    setFocused(false);
    props.onBlur && props.onBlur();
  }, [props]);

  const onChangeRef = useValueRef(props.onChange);
  const initialStateRef = useValueRef(initialState);

  const handleChange = useCallback(
    (editorState: TextEditorState) => {
      if (R.isEqual(initialStateRef.current, editorState)) return;

      if (onChangeRef.current) {
        onChangeRef.current({ html: convertStateToHtml(editorState), state: editorState });
      }
    },
    [onChangeRef, initialStateRef],
  );

  const focusEditor: MouseEventHandler = useCallback(() => {
    editorRef.current?.focus();
  }, []);

  return (
    <div onClick={event => event.stopPropagation()} style={{ flex: 1 }}>
      <TextEditor
        key={key}
        handlesRef={editorRef}
        initialState={initialState}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        toolbar={plainText ? false : props.toolbar}
        singleLine={singleLine}
        onEnter={props.onEnter}
        breakTag={props.breakTag}
      />
    </div>
  );
});

export default EditableText;
