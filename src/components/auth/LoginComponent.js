import axios from 'axios';
import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] =  useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
      localStorage.setItem('token', response.data.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      console.log(response.data.data);
      navigate("/dashboard");
      toast.success('You have successfully logged in. Welcome!');
    }catch(error) 
    {
      console.log(error);
    }
  }

  return (
    <>
    <ToastContainer/>
    
    <form onSubmit={handleLogin} className='space-y-4'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Login</h2>
      <div>
        <label htmlFor='email' className='block text-gray-700'>Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          required
        />
      </div>
      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        Login
      </button>
    </form>
    </>
  );
}

export default LoginForm;
