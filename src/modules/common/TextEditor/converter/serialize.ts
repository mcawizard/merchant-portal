import { Node, Text } from 'slate';
import escapeHtml from 'escape-html';
import { R } from '@core/utils/r';
import { TextEditorState } from '../types';
import { transformToVariable, transformToVariableText } from '../variable';
import { ELEMENT_MAPPINGS, FORMAT_MAPPINGS } from './mappings';

export function convertStateToHtml(state: TextEditorState): string {
  return serialize({ children: state });
}

function serialize(node: Node | any): string {
  const variable = transformToVariable(node);

  if (variable) return transformToVariableText(variable.name, variable.params);
  const tag = R.toLower(node.type);

  if (Text.isText(node)) return serializeLeaf(node);

  const children = node.children.map((n: any) => serialize(n)).join('');

  const mapping = ELEMENT_MAPPINGS[tag];
  if (!mapping) return children;

  const attrs: Record<string, string> = {};

  if (mapping.attributes?.length) {
    R.forEach(mapping.attributes, attr => {
      const value = node[attr];
      if (value) attrs[attr] = value;
    });
  }

  return tag === 'fragment' ? children : toHtml(tag, attrs, children);
}

function serializeLeaf(node: Text | any) {
  let content: string = node.text;

  const tags = R.keys(FORMAT_MAPPINGS).filter(key => !R.isNil(node[key]));

  if (tags.length) {
    tags.reverse();

    tags.forEach(tag => {
      const mapping = FORMAT_MAPPINGS[tag];

      const attrs: Record<string, any> = {};
      const value = node[tag];

      if (mapping.attribute && !R.isNil(value)) {
        attrs[mapping.attribute] = value;
      }

      content = toHtml(tag, attrs, content);
    });
  }

  return content;
}

function toHtml(tag: string, attributes: Record<string, string>, children?: string) {
  const attrs = R.compact(R.map(attributes, (value, name) => (value ? `${name}="${escapeHtml(value)}"` : null)));

  let html = attrs.join(' ');

  html = html ? `<${tag} ${html}` : `<${tag}`;

  const inline = ELEMENT_MAPPINGS[tag]?.inline;

  if (!children && !inline) children = ' ';

  return children ? `${html}>${children}</${tag}>` : `${html}/>`;
}
