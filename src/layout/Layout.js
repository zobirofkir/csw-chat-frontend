import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import HeaderDashboardComponent from '../components/auth/HeaderDashboardComponent';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const isHeaderVisible = ![
    "/dashboard",
    "/profile",
    "/settings",
  ].includes(location.pathname);

  const isHeaderDashboard = [
    "/dashboard",
    "/profile",
    "/settings",
  ].includes(location.pathname);

  return (
    <div>
      {isHeaderVisible && <HeaderComponent />}
      {isHeaderDashboard && <HeaderDashboardComponent />}
      <div className='flex justify-center'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
