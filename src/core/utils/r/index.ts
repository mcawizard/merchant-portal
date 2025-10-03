import { lodash, lfp } from './lodash';
import { pipe } from './pipe';
import { shallowEqual } from './shallowEqual';
import * as collection from './collection';
import * as misc from './misc';
import * as string from './string';
import * as object from './object';

export const R = {
  pipe,

  ...lodash,
  ...collection.fns,

  ops: {
    ...lfp,
    ...collection.ops,
  },

  shallowEqual,
  ...misc,
  ...string,
  ...object,
};
