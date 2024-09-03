import React from 'react';

const RegisterForm = () => {

  return (
    <form className='space-y-4'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Register</h2>
      <div>
        <label htmlFor='name' className='block text-gray-700'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          required
        />
      </div>
      <div>
        <label htmlFor='email' className='block text-gray-700'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          required
        />
      </div>
      <div>
        <label htmlFor='password' className='block text-gray-700'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          required
        />
      </div>
      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
