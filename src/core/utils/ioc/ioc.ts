import { Container, createResolve } from '@owja/ioc';
import { R } from '@core/utils/r';

const container = new Container();

const resolveDependency = createResolve(container);

export interface TokenData<T = any> {
  type: T;
  key: symbol;
}

export function register<T>(
  token: TokenData<T>,
  options: {
    service?: Constructor<T>;
    factory?: () => T;
    value?: T;
    singleton?: boolean;
  } = {},
) {
  const binding = container.bind<T>(token.key);

  const opts = options.service
    ? binding.to(options.service)
    : options.factory
      ? binding.toFactory(options.factory)
      : !R.isUndefined(options.value)
        ? binding.toValue(options.value)
        : null;

  if (opts && options.singleton) {
    opts.inSingletonScope();
  }
}

export function resolver<T>(token: TokenData<T>) {
  return resolveDependency<T>(token.key);
}

export function resolve<T>(token: TokenData<T>) {
  return resolver<T>(token)();
}

export function createToken<T>(): TokenData<T> {
  return { type: null as any as T, key: Symbol() };
}
