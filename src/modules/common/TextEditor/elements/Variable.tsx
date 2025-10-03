import React, { memo, useMemo } from 'react';

export interface VariableElementProps {
  variable: { name: string; params: string[] };
  attributes: Record<string, any>;
  children: any;
}

export const VariableElement = memo((props: VariableElementProps) => {
  const { variable, attributes } = props;

  const text = useMemo(() => {
    // const text = resolveVariable(variable.name, variable.params, context);
    // if (text) return text;
    return 'No Variable';
    // if (context.editable) return variable.name;
  }, []);

  return (
    <span {...attributes}>
      {text}
      {props.children}
    </span>
  );
});
