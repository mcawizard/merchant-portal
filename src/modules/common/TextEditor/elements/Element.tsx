import React, { memo, useMemo } from 'react';
import { RenderElementProps } from 'slate-react';
import { R } from '@core/utils/r';
import { ELEMENT_MAPPINGS } from '../converter/mappings';
import { transformToVariable } from '../variable';
import { VariableElement } from './Variable';

export const TextEditorElement = memo((props: RenderElementProps & { breakTag?: string }) => {
  const { element, attributes, children } = props;

  const elm = useMemo(() => {
    const tag = R.toLower((element as any).type);

    const variable = transformToVariable(element);

    if (variable) {
      return {
        elm: (
          <VariableElement variable={variable} attributes={attributes}>
            {children}
          </VariableElement>
        ),
      };
    }

    if (tag === 'fragment') return { tag: props.breakTag || 'span', props: {} };

    const mapping = ELEMENT_MAPPINGS[tag];
    if (!mapping) return null;

    const elmProps: Record<string, any> = { ...attributes };

    if (mapping.attributes?.length) {
      mapping.attributes.forEach(attr => {
        const value = (element as any)[attr];
        if (value) elmProps[attr] = value;
      });
    }

    return { tag, props: elmProps };
  }, [attributes, children, element, props.breakTag]);

  if (!elm) return null;
  if (elm.elm) return elm.elm;
  if (elm.tag === 'p' && props.breakTag) return React.createElement(props.breakTag, elm.props, children);

  return React.createElement(elm.tag, elm.props, children);
});
