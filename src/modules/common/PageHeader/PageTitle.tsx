import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
export interface PageTitleProps {
  children: string;
}

export const PageTitle = memo((props: PageTitleProps) => {
  const { children } = props;

  useEffect(() => {
    () => {
      document.title = 'Lendwizely';
    };
  });

  return (
    <Helmet>
      <title>Lendwizely - {children}</title>
    </Helmet>
  );
});
