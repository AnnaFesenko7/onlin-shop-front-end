import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/Header/Header';
import { PreHeader } from 'components/Preheader/PreHeader';

export const Layout = () => {
  return (
    <>
      <PreHeader />
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
