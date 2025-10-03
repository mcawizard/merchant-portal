import chroma from 'chroma-js';

export const Color = {
  builder: chroma,

  alpha,
  darken,
  lighten,
  luminance,
  isDark,
  isLight,
  invert,
};

function alpha(color: string, alpha: number) {
  return chroma(color).alpha(alpha).css();
}

function lighten(color: string, brighten: number) {
  return chroma(color).brighten(brighten).css();
}

function darken(color: string, darken: number) {
  return chroma(color).darken(darken).css();
}

function luminance(color: string) {
  return chroma(color).get('lab.l');
}

function isLight(color: string) {
  return luminance(color) > 65;
}

function isDark(color: string) {
  return !isLight(color);
}

function invert(color: string, bw = true) {
  let hex = chroma(color).hex();

  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  if (bw) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }

  // invert color components
  const r2 = (255 - r).toString(16);
  const g2 = (255 - g).toString(16);
  const b2 = (255 - b).toString(16);

  // pad each with zeros and return
  return '#' + padZero(r2) + padZero(g2) + padZero(b2);
}

function padZero(str: string, len?: number) {
  len = len || 2;

  const zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}
