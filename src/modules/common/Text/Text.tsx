import React, { memo, useMemo } from 'react';
import { css } from '@emotion/react';
import { R } from '@core/utils/r';
import { classnames } from '@core/utils/css';
import { useAsyncComponent } from '@core/utils/hooks/async';
import { TextState } from './types';
import { CommonService, HTMLService } from '@business/services';
import { TextEditorProps, HeadingType } from '../TextEditor';

export interface TextProps {
  className?: string;
  state?: TextState;
  defaultState?: TextState;
  onChange?(state: TextState): void;
  singleLine?: boolean;
  multipleLines?: boolean;
  plainText?: boolean;
  simple?: boolean;
  toolbar?: TextEditorProps['toolbar'];
  editable?: boolean;
  clone?: boolean;
  onFocus?(): void;
  onBlur?(): void;
  onEnter?(): void;
  breakTag?: string;
  glossify?: boolean;
}

export const Text = memo((props: TextProps) => {
  const { ...rest } = props;

  const state = useMemo(() => {
    const state = rest.state || props.defaultState || createTextState('<h1>Here is your title</h1>');

    return props.clone ? R.cloneDeep(state) : state;
  }, [props.clone, props.defaultState, rest.state]);

  const editable = props.editable !== false;

  const EditableText = useAsyncComponent(() => import('./EditableText'), editable);

  const plainText = R.isBoolean(props.plainText) ? props.plainText : props.simple;

  const transformedHtml = useMemo(() => {
    return state.html;
  }, [state.html]);

  if (!editable || !EditableText) {
    return <div>{HTMLService.toReact(transformedHtml)}</div>;
  }

  return <EditableText {...rest} state={state} />;
});

export function createTextState(html: string, tag?: HeadingType | 'p'): TextState {
  // NOTE: try to trim spaces in html
  // as we use `white-space: pre-wrap` for editable text content

  html = R.trim(html)
    .replace(/\n/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\>\s+/g, '>')
    .replace(/\s+\<(p|h[1-6])/g, '<');

  if (tag) {
    html = `<${tag}>${html}</${tag}>`;
  }

  return { html };
}
