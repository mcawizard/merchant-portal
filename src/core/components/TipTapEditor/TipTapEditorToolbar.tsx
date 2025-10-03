import { BubbleMenu, Editor } from '@tiptap/react';
import { Button, Divider, Select } from 'antd';
import React, { memo, useMemo } from 'react';
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from '@ant-design/icons';
import { R } from '@core/utils/r';

export interface TipTapEditorToolbarProps {
  editor: Editor;
}

export const TipTapEditorToolbar = memo((props: TipTapEditorToolbarProps) => {
  const { editor } = props;
  const paragraphValue = useMemo(() => {
    if (editor.isActive('heading', { level: 1 })) {
      return 'heading1';
    }
    if (editor.isActive('heading', { level: 2 })) {
      return 'heading2';
    }
    if (editor.isActive('heading', { level: 3 })) {
      return 'heading3';
    }
    if (editor.isActive('heading', { level: 4 })) {
      return 'heading4';
    }
    if (editor.isActive('heading', { level: 5 })) {
      return 'heading5';
    }
    if (editor.isActive('heading', { level: 6 })) {
      return 'heading6';
    }
    return 'paragraph';
  }, [editor]);

  return (
    <BubbleMenu className="bubble-menu" editor={editor}>
      <div className="p-2 border-b flex flex-wrap gap-2">
        <Select
          value={editor.isActive('heading') ? paragraphValue : 'paragraph'}
          onChange={value => {
            if (value == 'paragraph') {
              editor.chain().focus().setParagraph().run();
            } else {
              editor
                .chain()
                .focus()
                .toggleHeading({ level: R.toNumber(value.replace('heading', '')) as any })
                .run();
            }
          }}
          options={[
            { value: 'paragraph', label: 'Paragraph' },
            { value: 'heading1', label: 'Heading 1' },
            { value: 'heading2', label: 'Heading 2' },
            { value: 'heading3', label: 'Heading 3' },
            { value: 'heading4', label: 'Heading 4' },
            { value: 'heading5', label: 'Heading 5' },
            { value: 'heading6', label: 'Heading 6' },
          ]}
        />
        <Button
          variant={editor.isActive('bold') ? 'solid' : 'outlined'}
          color="default"
          icon={<BoldOutlined />}
          onClick={() => editor.chain().focus().toggleBold().run()}
        />

        <Button
          variant={editor.isActive('italic') ? 'solid' : 'outlined'}
          color="default"
          icon={<ItalicOutlined />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
        <Button
          variant={editor.isActive('underline') ? 'solid' : 'outlined'}
          color="default"
          icon={<UnderlineOutlined />}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        />
        <Button
          variant={editor.isActive('strike') ? 'solid' : 'outlined'}
          color="default"
          icon={<StrikethroughOutlined />}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        />
        <Divider type="vertical" />

        <Button
          variant={editor.isActive('orderedList') ? 'solid' : 'outlined'}
          color="default"
          icon={<OrderedListOutlined />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />

        <Button
          variant={editor.isActive('bulletList') ? 'solid' : 'outlined'}
          color="default"
          icon={<UnorderedListOutlined />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />
        <Divider type="vertical" />
        <Button
          variant={editor.isActive({ textAlign: 'left' }) ? 'solid' : 'outlined'}
          color="default"
          icon={<AlignLeftOutlined />}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
        />
        <Button
          variant={editor.isActive({ textAlign: 'center' }) ? 'solid' : 'outlined'}
          icon={<AlignCenterOutlined />}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
        />
        <Button
          variant={editor.isActive({ textAlign: 'right' }) ? 'solid' : 'outlined'}
          color="default"
          icon={<AlignRightOutlined />}
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
        />
      </div>
    </BubbleMenu>
  );
});
