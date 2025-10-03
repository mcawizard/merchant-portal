import React, { lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

const AgentsPage = lazy(() => import('@modules/agents/AgentsPage'));

export const AgentRoutes = memo(() => {
  return (
    <Routes>
      <Route path={'/agents'} element={<AgentsPage />} />
    </Routes>
  );
});
