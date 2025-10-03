import React, { memo, useMemo, ReactNode } from 'react';
import { RenderLeafProps } from 'slate-react';
import { R } from '@core/utils/r';
import { FORMAT_MAPPINGS } from '../converter/mappings';

export const TextEditorLeaf = memo(({ leaf, attributes, children }: RenderLeafProps) => {
  const content = useMemo(() => {
    const tags = R.keys(FORMAT_MAPPINGS).filter(key => !R.isNil((leaf as any)[key]));

    let content: ReactNode = children;

    if (tags.length) {
      tags.reverse();

      tags.forEach(tag => {
        const mapping = FORMAT_MAPPINGS[tag];

        const props: Record<string, any> = {};
        const value = (leaf as any)[tag];

        if (mapping.attribute && !R.isNil(value)) {
          props[mapping.attribute] = value;
        }

        content = React.createElement(tag, props, content);
      });
    }

    return content;
  }, [children, leaf]);

  return <span {...attributes}>{content}</span>;
});
