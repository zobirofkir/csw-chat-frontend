import React from 'react';
import LoginComponent from '../../components/auth/LoginComponent';

const LoginScreen = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-screen max-w-md p-6 bg-white rounded-lg shadow-lg'>
        <LoginComponent />
      </div>
    </div>
  );
}

export default LoginScreen;
