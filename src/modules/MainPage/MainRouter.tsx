import React, { lazy, memo } from 'react';
import { HomeRoute } from '@modules/home/HomeRoute';

export const MainRouter = memo(() => {
  return (
    <React.Fragment>
      <HomeRoute />
    </React.Fragment>
  );
});
