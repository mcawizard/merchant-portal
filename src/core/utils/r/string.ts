import { R } from '.';
import { lodash } from './lodash';
import { v4 as uuidv4 } from 'uuid';
import { default as rmd5 } from 'md5';
// eslint-disable-next-line @typescript-eslint/no-var-requires

export function addDot(text: string | null | undefined) {
  text = lodash.trim(text || '');

  if (!text) return text;

  return !text.endsWith('.') && !text.endsWith('?') && !text.endsWith('!') ? `${text}.` : text;
}

export function capitalizeWords(text: string) {
  return lodash.trim(text).split(/\s+/).map(lodash.capitalize).join(' ');
}

export function startCaseHyphen(text: string) {
  if (!text) return '';

  let parts = (text + '').split(/\s*-\s*/);

  parts = parts.map((part, index) => {
    const firstChart = part[0] || '';
    part = lodash.startCase(part);

    if (index === 0) return part;

    return firstChart + part.slice(1);
  });

  return parts.join(' - ').trim();
}

export function localeCompare(a: string, b: string, locales?: string | string[], options?: Intl.CollatorOptions) {
  return lodash.toString(a).localeCompare(lodash.toString(b), locales, { numeric: true, sensitivity: 'base', ...options });
}

export function slug(text: string) {
  if (!text) return text;
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export function plural(count: number, text: string, pluralText: string, includeNumber = false) {
  if (includeNumber) {
    return count > 1 || count == 0 ? `${count} ${pluralText}` : `${count} ${text}`;
  }
  return count > 1 || count == 0 ? pluralText : text;
}

export function replaceAll(text: string, search: string, replacement: string) {
  return text.split(search).join(replacement);
}

export function replaceString(str: string, match: string, fn: any) {
  let curCharStart = 0;
  let curCharLen = 0;

  if (str === '') {
    return str;
  } else if (!str || !lodash.isString(str)) {
    throw new TypeError('First argument to react-string-replace#replaceString must be a string');
  }

  let re: string | RegExp = match;

  if (!lodash.isRegExp(re)) {
    re = new RegExp('(' + lodash.escapeRegExp(re) + ')', 'gi');
  }

  const result = str.split(re);

  // Apply fn to all odd elements
  for (let i = 1, length = result.length; i < length; i += 2) {
    curCharLen = result[i].length;
    curCharStart += result[i - 1].length;
    result[i] = fn(result[i], i, curCharStart);
    curCharStart += curCharLen;
  }

  return result;
}

export function occurrences(input: string, subString: string, allowOverlapping = false) {
  if (subString.length <= 0) return input.length + 1;

  let n = 0,
    pos = 0;
  const step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = input.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
}

export function isJson(item: any) {
  let value = typeof item !== 'string' ? JSON.stringify(item) : item;
  try {
    value = JSON.parse(value);
  } catch (e) {
    return false;
  }

  return typeof value === 'object' && value !== null;
}

export function isValidUrl(str: string) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
}

export function stripTags(html: string) {
  return html.replace(/(<([^>]+)>)/gi, '');
}

export function readMore(value: string, limit = 20) {
  return R.isString(value) && value.length > limit ? stripTags(value).substring(0, limit) + '...' : value;
}

export function uuid() {
  return uuidv4();
}

export function md5(value: string) {
  return rmd5(value);
}

export function encodeBase64(value: string) {
  return btoa(value);
}

export function decodeBase64(value: string) {
  return atob(value);
}
