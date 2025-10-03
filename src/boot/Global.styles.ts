import 'normalize.css';

import { css } from '@emotion/react';
import { Theme } from '@core/utils/css';

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    background-color: transparent;
  }

  a {
    font-weight: 600;
    color: #2873ac;
    text-decoration: none;
  }

  html,
  body {
    font-size: 16px;
    font-family: ${Theme.fontFamily};
    color: ${Theme.lightColor};
    letter-spacing: -0.025em;

    background-color: ${Theme.lightColor};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
