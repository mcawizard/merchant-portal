import Parser, { HTMLReactParserOptions } from 'html-react-parser';
import { R } from '@core/utils/r';

export function toReact(html: string, options?: HTMLReactParserOptions['replace']) {
  const defaultOptions: HTMLReactParserOptions['replace'] = function (node) {
    if (R.get(node, 'name') === 'a' && R.get(node, 'type') === 'tag') {
      (node as any).attribs['target'] = '_blank';
    }
    return node;
  };

  return Parser(html, { replace: options || defaultOptions });
}

export function strip(html: string) {
  return html.replace(/(<([^>]+)>)/gi, '');
}
