import React, { memo, useMemo, useRef, MouseEventHandler, useCallback } from 'react';
import { useSlate } from 'slate-react';
import { css } from '@emotion/react';
import { ButtonType, TextEditorToolbarConfig, FormatType } from '../types';
import { isFormatActive, toggleFormat, FORMAT_TYPES } from '../utils';
import { classnames } from '@core/utils/css';

export interface ToolbarButtonProps {
  type: ButtonType;
  headings?: TextEditorToolbarConfig['headings'];
  onDropdown(data: { anchor: HTMLElement; type: ButtonType } | null): void;
}

function getButtonIcon(type: ButtonType) {
  switch (type) {
    case 'bold':
      return 'fas fa-bold';
    case 'italic':
      return 'fas fa-italic';
    case 'underline':
      return 'fas fa-underline';
    case 'heading':
      return 'fas fa-heading';
    case 'color':
      return 'fas fa-palette';
    case 'align-left':
      return 'fas fa-align-left';
    case 'align-center':
      return 'fas fa-align-center';
    case 'align-right':
      return 'fas fa-align-right';
    case 'align-justify':
      return 'fas fa-align-justify';
    case 'list-ol':
      return 'fas fa-list-ol';
    case 'list-ul':
      return 'fas fa-list-ul';
    case 'align-justify':
      return 'fas fa-align-justify';
    case '|':
      return 'separator';
  }
}

export const ToolbarButton = memo((props: ToolbarButtonProps) => {
  const { type, onDropdown } = props;

  const editor = useSlate();

  const icon = useMemo(() => getButtonIcon(type), [type]);

  const formatType = useMemo(() => {
    const formatType = type as FormatType;
    return FORMAT_TYPES.includes(formatType) ? formatType : null;
  }, [type]);

  const active = formatType ? isFormatActive(editor, formatType) : false;

  const btnRef = useRef<HTMLDivElement>(null);

  const hasDropdown = useMemo(() => {
    return type === 'heading';
  }, [type]);

  const onMouseUp: MouseEventHandler = useCallback(() => {
    if (formatType) {
      toggleFormat(editor, formatType);
    }

    if (hasDropdown && btnRef.current) {
      onDropdown({ anchor: btnRef.current, type });
    }
  }, [editor, formatType, hasDropdown, onDropdown, type]);

  if (icon === 'separator') return <div className="inline-editor-toolbar separator" />;
  if (!icon) return null;

  return (
    <div
      ref={btnRef}
      className={classnames('inline-editor-toolbar button', active && 'activeButton', hasDropdown && 'dropdownButton')}
      onMouseDown={event => event.preventDefault()}
      onMouseUp={onMouseUp}
    >
      <i className={icon} />
      {hasDropdown && <i className="fas fa-chevron-down" />}
    </div>
  );
});
