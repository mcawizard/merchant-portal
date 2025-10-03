import { resolve } from '@core/utils/ioc';
import { BaseBloc } from '@core/utils/bloc';
import { BLOCS } from './bindings';

export { Blocs } from './tokens';

export function initBlocs() {
  iterateBlocs(bloc => bloc.onInit());
}

export function resetBlocs() {
  iterateBlocs(bloc => bloc.onReset());
}

function iterateBlocs(fn: (bloc: BaseBloc) => void) {
  BLOCS.forEach(binding => {
    fn(resolve(binding[0]));
  });
}
