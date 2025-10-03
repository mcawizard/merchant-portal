import { Node, Text } from 'slate';
import { R } from '@core/utils/r';
import { TextEditorState } from '../types';
import { ELEMENT_MAPPINGS, FORMAT_MAPPINGS } from './mappings';
import { transformVariablesToTags } from '../variable';

export function convertHtmlToState(html: string): TextEditorState {
  html = transformVariablesToTags(html);

  const document = new DOMParser().parseFromString(html, 'text/html');

  const nodes = R.compact(Array.from(document.body.childNodes).map(deserialize));

  const text = nodes.find(node => Text.isText(node));

  return text ? [{ type: 'fragment', children: nodes }] : nodes;
}

function deserialize(node: ChildNode): Node | null {
  if (node.nodeType === 3) return { text: node.textContent || '' };
  if (node.nodeType !== 1) return null;

  const element = node as Element;

  const tag = R.toLower(element.nodeName);

  if (tag === 'br') return { text: '\n' };

  const children = R.compact(Array.from(element.childNodes).map(deserialize));

  const elementMapping = ELEMENT_MAPPINGS[tag];
  const formatMapping = FORMAT_MAPPINGS[tag];

  if (!elementMapping && !formatMapping) return null;

  if (elementMapping) {
    const attrs: Record<string, string> = {
      type: tag,
    };

    if (elementMapping.attributes?.length) {
      R.forEach(elementMapping.attributes, attr => {
        const value = element.getAttribute(attr);
        if (value) attrs[attr] = value;
      });
    }

    return { ...attrs, children: children.length ? children : [{ text: '' }] };
  }

  if (formatMapping) {
    const attrs: Record<string, any> = { text: '' };

    buildLeaftAttributes(element, attrs);

    return attrs as any;
  }

  return null;
}

function buildLeaftAttributes(element: Element, attrs: Record<string, any>) {
  const tag = R.toLower(element.nodeName);
  const mapping = FORMAT_MAPPINGS[tag];

  if (!mapping) return;

  const value = mapping.attribute && element.getAttribute(mapping.attribute);

  attrs[tag] = R.isNil(value) ? true : value;

  const node = element.childNodes[0];

  if (node.nodeType === 1) {
    buildLeaftAttributes(node as Element, attrs);
  } else if (node.nodeType === 3) {
    attrs.text = node.textContent || '';
  }
}
