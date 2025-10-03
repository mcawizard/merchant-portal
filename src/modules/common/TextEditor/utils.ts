import { Editor, Text, Transforms } from 'slate';
import { FormatType, ElementType } from './types';

export const FORMAT_TYPES: FormatType[] = ['bold', 'italic', 'underline', 'align-left', 'align-center', 'align-right', 'align-justify'];

export const FORMAT_TAGS: Partial<Record<FormatType, string>> = {
  bold: 'b',
  italic: 'i',
  underline: 'u',
  'align-left': 'left',
  'align-center': 'center',
  'align-right': 'right',
  'align-justify': 'justify',
};

export const ELEMENT_TAGS: Partial<Record<ElementType, string>> = {};

export function toggleFormat(editor: Editor, format: FormatType) {
  const tag = FORMAT_TAGS[format] || format;

  const isActive = isFormatActive(editor, format);
  if (format.includes('align')) {
    Transforms.unwrapNodes(editor, { match: n => (n as any).type === 'fragment', split: true });
    Transforms.setNodes(editor, { align: tag } as any);
    return;
  }

  Transforms.setNodes(editor, { [tag]: isActive ? null : true }, { match: Text.isText, split: true });
}

export function setElement(editor: Editor, type: ElementType) {
  const tag = ELEMENT_TAGS[type] || type;

  Transforms.setNodes(editor, { type: tag } as any, { match: (n: any) => Editor.isBlock(editor, n) });
}

export function insertBreak(editor: Editor) {
  Transforms.setNodes(editor, { type: 'p' } as any, { match: (n: any) => n.type === 'fragment' });
  Editor.insertBreak(editor);
}

export function isFormatActive(editor: Editor, format: FormatType) {
  const tag = FORMAT_TAGS[format] || format;

  const matches = Editor.nodes(editor, {
    match: (n: any) => n[tag] === true,
    mode: 'all',
  });

  return !!Array.from(matches)[0];
}

export function isElementActive(editor: Editor, type: ElementType) {
  const tag = ELEMENT_TAGS[type] || type;

  const matches = Editor.nodes(editor, {
    match: (n: any) => n.type === tag,
  });

  return !!Array.from(matches)[0];
}
