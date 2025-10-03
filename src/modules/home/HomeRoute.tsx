import React, { lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('@modules/home/HomePage'));

export const HomeRoute = memo(() => {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/home'} element={<HomePage />} />
    </Routes>
  );
});
