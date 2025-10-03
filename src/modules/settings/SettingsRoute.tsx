import React, { lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
const UsersPage = lazy(() => import('./user/UsersPage'));
const CredentialsPage = lazy(() => import('./credential/CredentialsPage'));
const MyAccountPage = lazy(() => import('./user/MyAccountPage'));
const DepartmentsPage = lazy(() => import('@modules/departments/DepartmentsPage'));
const PhonesPage = lazy(() => import('./phones/PhonesPage'));
const McpClientsPage = lazy(() => import('@modules/mcp_client/McpClientsPage'));
const BillingPage = lazy(() => import('./billing/BillingPage'));

export const SettingsRoute = memo(() => {
  return (
    <Routes>
      <Route path={'/settings/users'} element={<UsersPage />} />
      <Route path={'/settings/settings'} element={<MyAccountPage />} />
      <Route path={'/settings/my-account'} element={<MyAccountPage />} />

      <Route path={'/settings/credentials'} element={<CredentialsPage />} />
      <Route path={'/settings/departments/:id?'} element={<DepartmentsPage />} />
      <Route path={'/settings/phones'} element={<PhonesPage />} />
      <Route path={'/settings/billing'} element={<BillingPage />} />

      <Route path={'/settings/mcp'} element={<McpClientsPage />} />
    </Routes>
  );
});
