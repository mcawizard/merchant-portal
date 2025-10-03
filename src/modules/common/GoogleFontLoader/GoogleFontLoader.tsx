import React, { memo, useEffect, useMemo, useState } from 'react';
import { FontResponse } from '@business/entities/google';

const createLink = (font: FontResponse) => {
  const families = font.variants.map(v => `${font.family}:${v}`).join('|');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css?family=${families}`;

  return link;
};

export interface GoogleFontLoaderProps {
  fonts: FontResponse[];
}

export const GoogleFontLoader = memo((props: GoogleFontLoaderProps) => {
  const { fonts } = props;

  useEffect(() => {
    const fontsAdded = document.querySelector("meta[name='fonts-added']")!.getAttribute('content')!.split(',');
    fonts
      .filter(font => !fontsAdded.includes(font.family))
      .forEach(font => {
        fontsAdded.push(font.family);
        const link = createLink(font);
        document.head.appendChild(link);
      });

    document.querySelector("meta[name='fonts-added']")!.setAttribute('content', fontsAdded.join(','));
  }, [fonts]);

  return null;
});
