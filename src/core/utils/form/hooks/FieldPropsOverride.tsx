import React, { createContext, useContext, memo, useMemo } from 'react';

interface FieldPropsOverrideOptions {
  enabled?: boolean;
  disabled?: boolean;
}

const FieldPropsOverrideContext = createContext<FieldPropsOverrideOptions>({});

export const FieldPropsOverride = memo((props: React.PropsWithChildren<FieldPropsOverrideOptions>) => {
  const context = useMemo(
    (): FieldPropsOverrideOptions => ({
      enabled: props.enabled,
      disabled: props.disabled,
    }),
    [props.disabled, props.enabled],
  );

  return <FieldPropsOverrideContext.Provider value={context}>{props.children}</FieldPropsOverrideContext.Provider>;
});

export function useFieldPropsOverride() {
  return useContext(FieldPropsOverrideContext);
}
