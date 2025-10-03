import React, { lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
const UsersPage = lazy(() => import('@modules/settings/user/UsersPage'));
const MyAccountPage = lazy(() => import('@modules/settings/user/MyAccountPage'));

export const UserRoute = memo(() => {
  return (
    <Routes>
      <Route path={'/users'} element={<UsersPage />} />
      <Route path={'/my-account'} element={<MyAccountPage />} />
    </Routes>
  );
});
