import React from 'react';
// Import Dependencies
import { Tooltip as TTooltip } from 'react-tooltip';

// Local Import
import { injectStyles, insertStylesToHead, makeStyleTag } from './utils';

// ----------------------------------------------------------------------

const css = `
:root {
  --rt-color-white: #fff;
  --rt-color-dark: var(--color-gray-800) !important;
  --rt-color-success: var(--color-success-darker) !important;
  --rt-color-error: var(--color-error-darker) !important;
  --rt-color-warning: var(--color-warning-darker) !important;
  --rt-color-info: var(--color-info-darker) !important;
  --rt-opacity: 1;
  --rt-transition-show-delay: 0.15s;
  --rt-transition-closing-delay: 0.15s;
}

:root.dark {
  --rt-color-white: var(--color-dark-50) !important;
  --rt-color-dark: var(--color-dark-500) !important;
}`;

const sheet = makeStyleTag();

injectStyles(sheet, css);
insertStylesToHead(sheet);

export function Tooltip() {
  return (
    <TTooltip
      anchorSelect="[data-tooltip]"
      opacity={1}
      style={{
        padding: '0.3rem 0.75rem',
        borderRadius: '0.5rem',
        zIndex: 1000,
      }}
    />
  );
}
