import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      <div className='flex justify-center'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
