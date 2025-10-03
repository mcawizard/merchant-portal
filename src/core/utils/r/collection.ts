import { lodash } from './lodash';

const sortWith = <T>(array: T[] | null | undefined, comparator: (v1: T, v2: T) => number, desc = false) => {
  array = lodash.map(array).sort((v1, v2) => {
    const result = comparator(v1, v2);
    return desc ? -result : result;
  });

  return array;
};

const sortWithOperator =
  <T>(comparator: (v1: T, v2: T) => number) =>
  (array: T[] | null | undefined, desc?: boolean): T[] => {
    return sortWith(array, comparator, desc);
  };

export const fns = {
  sortWith,
};

export const ops = {
  sortWith: sortWithOperator,
};
