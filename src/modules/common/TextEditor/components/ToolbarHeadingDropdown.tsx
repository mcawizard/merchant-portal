import React, { memo, useMemo } from 'react';
import { useSlate } from 'slate-react';
import { jsx, css, ClassNames } from '@emotion/react';

import { R } from '@core/utils/r';
import { isElementActive, setElement } from '../utils';
import { TOOLBAR_PRESETS } from '../constants';
import { TextEditorToolbarConfig } from '../types';
import './index.scss';
import { Card, ListItem } from '@mui/material';

const styles = {
  item: css`
    margin: 0;
    cursor: pointer;
  `,

  active: css`
    background-color: #555 !important;
    color: #fff !important;
  `,
};

export interface ToolbarHeadingDropdownProps {
  headings?: TextEditorToolbarConfig['headings'];
}

export const ToolbarHeadingDropdown = memo((props: ToolbarHeadingDropdownProps) => {
  const editor = useSlate();

  const headings = useMemo(() => {
    const headings = R.isArray(props.headings) ? props.headings : R.isArray(TOOLBAR_PRESETS.default.headings) ? TOOLBAR_PRESETS.default.headings : [];

    return headings.map(heading => {
      return {
        heading,
        active: isElementActive(editor, heading),
        label: R.startCase(heading),
      };
    });
  }, [editor, props.headings]);

  return (
    <ClassNames>
      {({ css }) => (
        <Card>
          {headings.map(item => (
            <ListItem
              key={item.heading}
              onMouseDown={event => event.preventDefault()}
              onMouseUp={() => {
                setElement(editor, item.heading);
              }}
              className={css(item.active && styles.active)}
            >
              {/* <span className="editor-toolbar-item">{item.label}</span> */}
              {jsx(item.heading, { css: styles.item }, item.label)}
            </ListItem>
          ))}
        </Card>
      )}
    </ClassNames>
  );
});
