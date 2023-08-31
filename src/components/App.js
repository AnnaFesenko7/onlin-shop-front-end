import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';

import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const AdminPage = lazy(() => import('pages/AdminPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
        <Route path="*" element={<p>There is nothing here: 404!</p>} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
