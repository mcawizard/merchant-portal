import { R } from '@core/utils/r';
import { css } from '@emotion/react';
import { Color } from './color';

export const Breakpoints = {
  xxs: 325,
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,

  lower: (bp: number) => bp - 1,
  upper: (bp: number) => bp,
};

export const Styles = {
  fixedFill: css`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  `,

  absoluteFill: css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  `,

  svg,

  backgroundImage,

  assets,
  agent,

  solidButton,
  opacityButton,
};

function svg(options: { fill?: string; size?: number }) {
  const size = R.isNumber(options?.size) ? `${options.size}px` : options.size;

  return [
    options.fill &&
      css`
        path,
        circle {
          fill: ${options.fill};
        }
      `,
    size &&
      css`
        svg {
          width: ${size};
          height: ${size};
        }
      `,
  ];
}

function backgroundImage(url: string) {
  return `url("${url}")`;
}

function assets(url: string) {
  return `/assets/${url}`;
}
function agent() {
  return `/assets/images/agent.png`;
}

function solidButton(bgColor: string, options?: { textColor?: string; invert?: boolean }) {
  const textColor = options?.textColor || Color.invert(bgColor);

  return css`
    transition: all 0.15s;
    cursor: pointer;
    user-select: none;

    color: ${textColor};
    background-color: ${bgColor};

    path {
      fill: ${textColor};
    }

    ${options?.invert
      ? css`
          &:hover {
            color: ${bgColor};
            background-color: ${textColor};

            path {
              fill: ${bgColor};
            }
          }

          &:active {
            color: ${textColor};
            background-color: ${bgColor};

            path {
              fill: ${textColor};
            }
          }
        `
      : css`
          &:hover {
            background-color: ${Color.lighten(bgColor, 0.5)};
          }

          &:active {
            background-color: ${Color.darken(bgColor, 0.25)};
          }
        `}

    &:hover, &:active {
      opacity: 1;
    }

    &:disabled {
      background-color: ${Color.lighten(bgColor, 0.5)};
    }
  `;
}

function opacityButton(options?: { opacity?: number; hoverOpacity?: number; activeOpacity?: number; disabledOpacity?: number }) {
  return css`
    transition: all 0.15s;
    cursor: pointer;
    user-select: none;

    opacity: ${options?.opacity || 1};

    &:hover {
      opacity: ${options?.hoverOpacity || 0.75};
    }

    &:active {
      opacity: ${options?.activeOpacity || 1};
    }

    &:disabled {
      opacity: ${options?.disabledOpacity || 0.5} !important;
    }
  `;
}
