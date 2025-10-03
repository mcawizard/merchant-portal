import React, { PureComponent, PropsWithChildren, useContext } from 'react';

export function createContextProvider<P>(Context: React.Context<P | null>) {
  class ContextProvider extends PureComponent<PropsWithChildren<P>> {
    render() {
      return <Context.Provider value={this.props}>{this.props.children}</Context.Provider>;
    }
  }

  return ContextProvider;
}

export function createContext<P>(options?: { name?: string; defaultContext?: P }) {
  const Context = React.createContext<P | null>(options?.defaultContext || null);

  const Provider = createContextProvider(Context);

  const useOptionalContext = () => {
    return useContext(Context) as P | null;
  };

  const useRequiredContext = () => {
    const context = useOptionalContext();

    if (!context) throw new Error(`[Context ${options?.name || 'unknown'}][useRequiredContext] no context provided`);
    return context;
  };

  return [Provider, useRequiredContext, useOptionalContext] as const;
}
