import { Node } from 'slate';

// export type TextEditorState = Node[];
export type TextEditorState = any[];

// export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingType = 'h1' | 'h2' | 'h3' | 'p';

export type FormatType = 'bold' | 'italic' | 'underline' | 'align-left' | 'align-center' | 'align-right' | 'align-justify' | 'list-ol' | 'list-ul';

export type ElementType = HeadingType;

export type ButtonType = FormatType | 'heading' | 'color' | '|';

export interface TextEditorToolbarConfig {
  buttons?: ButtonType[];
  headings?: boolean | HeadingType[];
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: boolean;
}
