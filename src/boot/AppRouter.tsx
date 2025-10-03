import React, { lazy, memo } from 'react';
import { Router } from '@core/router';
import { Session } from '@modules/auth/session';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('@modules/MainPage'));
const LoginPage = lazy(() => import('@modules/auth/LoginPage'));
const ResetPasswordPage = lazy(() => import('@modules/auth/ResetPasswordPage'));
const CreatePasswordPage = lazy(() => import('@modules/auth/CreatePasswordPage'));
const ActivateAccountPage = lazy(() => import('@modules/auth/ActivateAccountPage'));
const ControlAccountPage = lazy(() => import('@modules/auth/ControlAccount'));

function RequireAuth({ children }: { children: JSX.Element }) {
  if (!Session.isAuthenticated) {
    const redirect = 'redirectUrl=' + encodeURIComponent(window.location.href.replace(window.location.protocol + '//' + window.location.host, ''));
    return <Navigate to={`/login?${redirect}`} state={{ from: location }} />;
  }
  return children;
}

export const AppRouter = memo(() => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/create-password" element={<CreatePasswordPage />} />
        <Route path="/activate/:token" element={<ActivateAccountPage />} />
        <Route path="/control-account/:appId" element={<ControlAccountPage />} />

        <Route
          path="*"
          index={false}
          element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
});
