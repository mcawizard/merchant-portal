import React, { memo, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import './index.scss';
import { TipTapEditorToolbar } from './TipTapEditorToolbar';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';

export interface TipTapEditorProps {
  value?: string;
  toolbar?: boolean;
  html?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const TipTapEditor = memo((props: TipTapEditorProps) => {
  const { value, onChange, onBlur, onFocus, toolbar = true, html = true } = props;
  const editor = useEditor({
    extensions: !html
      ? [
          Document.extend({
            content: 'text*', // Only plain text is allowed
          }),
          Text,
        ]
      : [StarterKit, Underline, TextAlign.configure({ types: ['heading', 'paragraph'] }), Link.configure({ openOnClick: false })],
    content: value,
    onUpdate({ editor }) {
      if (html) {
        onChange?.(editor.getHTML());
      } else {
        onChange?.(editor.getText());
      }
    },
    editorProps: {
      handleKeyDown(view, event) {
        if (html) return true;
        if (event.key === 'Enter') {
          event.preventDefault();
          if (editor && onChange) {
            onChange(editor.getText());
            editor.commands.blur();
          }
          return true;
        }
        return false;
      },
    },
    onFocus,
    onBlur,
  });

  useEffect(() => {
    if (editor && editor.getText() !== value) {
      editor.commands.setContent(value!);
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      {!!editor && toolbar && <TipTapEditorToolbar editor={editor} />}
      <EditorContent editor={editor} />
    </>
  );
});
