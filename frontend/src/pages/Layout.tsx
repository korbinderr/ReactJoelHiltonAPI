import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBanner from '../TopBanner';

const Layout = () => {
  return (
    <>
      <TopBanner title="Joel Hilton's World" />
      <Outlet />
    </>
  );
};

export default Layout;
