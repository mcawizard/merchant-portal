import { R } from '@core/utils/r';
import { Variable } from './types';

const Definitions: Variable[] = [
  {
    name: 'year',
    resolve: () => {
      //   return Time.now().format('YYYY');
      return '2023';
    },
  },
];

export const VARIABLES_MAPPINGS = R.keyBy(Definitions, variable => variable.name);
