import React, { memo, useEffect, useState } from 'react';
import { FontResponse } from '@business/entities/google';

const createLink = (font: FontResponse) => {
  const families = font.variants.map(v => `${font.family}:${v}`).join('|');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css?family=${families}`;

  return link;
};

export interface GoogleFontLoaderRegularProps {
  font: FontResponse;
}

export const GoogleFontLoaderRegular = memo((props: GoogleFontLoaderRegularProps) => {
  const { font } = props;
  const [link, setLink] = useState(createLink(font));

  useEffect(() => {
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [link]);

  useEffect(() => {
    setLink(createLink(font));
  }, [font]);

  return null;
});
