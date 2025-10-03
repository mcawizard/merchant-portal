import { ElementMapping, FormatMapping } from './types';

export const ELEMENT_MAPPINGS: Record<string, ElementMapping> = {
  // html

  p: {},
  li: {
    inline: true,
  },

  a: {
    attributes: ['href', 'target'],
    inline: true,
  },

  span: {
    attributes: ['data-variable', 'data-params'],
    inline: true,
  },

  h1: {},

  h2: {},

  h3: {},

  h4: {},

  h5: {},

  h6: {},
};

export const FORMAT_MAPPINGS: Record<string, FormatMapping> = {
  b: {},

  i: {},

  u: {},
};
