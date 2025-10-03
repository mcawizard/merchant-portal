import { R } from '@core/utils/r';
import { VARIABLES_MAPPINGS } from './variables';

export function transformVariablesToTags(html: string) {
  return transformVariables(html, transformToTag);
}

export function transformToTag(name: string, params: string[]) {
  return `<span data-variable="${name}" data-params=${JSON.stringify(params)}></span>`;
}

export function transformToElement(name: string, params: string[]) {
  return {
    type: 'span',
    'data-variable': name,
    'data-params': JSON.stringify(params),
    children: [{ text: '' }],
  };
}

export function transformToVariable(element: Record<string, any>) {
  const tag = element['type'];
  const name = element['data-variable'] || '';
  const params = element['data-params'];

  if (tag !== 'span' || !name) return null;

  try {
    return { name, params: JSON.parse(params) };
  } catch (error) {
    return null;
  }
}

export function transformToVariableText(name: string, params: string[]) {
  const text = [name, ...params].join(':');
  return `*|${text}|*`;
}

export function isVariableText(text: string) {
  return !!text.match(/^\*\|.+?\|\*$/);
}

export function parseVariable(text: string) {
  text = text.replace('*|', '').replace('|*', '');

  const [name, ...params] = text.split(':').map(part => part.trim());

  return { name: R.toLower(name), params };
}

function transformVariables(html: string, fn: (name: string, params: string[]) => string) {
  if (!html.includes('*|') || !html.includes('|*')) return html;

  return html.replace(/\*\|.+?\|\*/g, text => {
    const { name, params } = parseVariable(text);

    if (!name) return '';

    return fn(name, params);
  });
}
