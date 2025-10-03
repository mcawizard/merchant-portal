import { TextEditorState } from '../TextEditor';

export interface TextState {
  html: string;
  state?: TextEditorState;
}

export type OnChangeTextState = (state: TextState) => void;
