import { createEditor as createSlateEditor, Range, Editor, Transforms } from 'slate';
import { ELEMENT_MAPPINGS } from './converter/mappings';
import { transformToVariable, isVariableText, transformToElement, parseVariable } from './variable';

export function createEditor() {
  const editor = createSlateEditor();

  const { insertText, isInline, isVoid } = editor;

  editor.insertText = (text: string) => {
    const { selection } = editor;

    if (selection) {
      const [start] = Range.edges(selection);
      const wordBefore = Editor.before(editor, start, { unit: 'word' });
      const before = wordBefore && Editor.before(editor, wordBefore);
      const beforeRange = before && Editor.range(editor, before, start);
      const beforeText = beforeRange && Editor.string(editor, beforeRange);

      const variableText = (beforeText || '') + text;

      if (variableText && isVariableText(variableText)) {
        const variable = parseVariable(variableText);
        const element = transformToElement(variable.name, variable.params);

        Transforms.select(editor, beforeRange!);
        Transforms.insertNodes(editor, element);
        Transforms.move(editor);

        return;
      }
    }

    insertText(text);
  };

  editor.isInline = element => {
    return ELEMENT_MAPPINGS[(element as any).type]?.inline ? true : isInline(element);
  };

  editor.isVoid = element => {
    const variable = transformToVariable(element);
    if (variable) return true;

    return ELEMENT_MAPPINGS[(element as any).type]?.void ? true : isVoid(element);
  };

  return editor;
}
