import React from 'react';
import RegisterComponent from '../../components/auth/RegisterComponent';

const RegisterScreen = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-screen max-w-md p-6 bg-white rounded-lg shadow-lg'>
        <RegisterComponent />
      </div>
    </div>
  );
}

export default RegisterScreen;
