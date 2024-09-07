import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`${process.env.REACT_APP_API_URL}/api/password/email`, { email });
        toast.success('Password reset link has been sent to your email. Please check your email and follow the instructions to reset your password.');
        setTimeout(() => {
            navigate("/");
          }, 5000);
        }
  return (
    <>
        <ToastContainer/>
        <div className='flex justify-center items-center min-h-screen'>
        <div className='w-screen max-w-md p-6 bg-white rounded-lg shadow-lg'>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <label className='block text-center font-bold uppercase text-xl'>email</label>
                <input name='email' placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} className='p-2 border border-gray-300 rounded flex justify-center w-full'/>

                <button type='submit' className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Send</button>
            </form>
        </div>
        </div>
    </>
  )
}

export default ResetPasswordScreen