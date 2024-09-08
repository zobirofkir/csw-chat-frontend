import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderDashboardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));;
  const name = user && user.name;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center m-5 rounded-md'>
      <h1 className='md:text-2xl text-md font-bold p-4 text-black uppercase hidden md:block'>
          <a href='/dashboard'>{name}</a>  
      </h1>

      <div className='flex '>
        <h1 className='md:text-2xl text-md font-bold p-4 text-black uppercase md:hidden'>
          <a href='/dashboard'>{name}</a>  
        </h1>

        <div className='relative'>
          <button
            onClick={toggleMenu}
            className='text-black focus:outline-none p-4'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className='absolute right-0 top-full mt-2 bg-gray-200 rounded-md shadow-lg w-48'>
              <li className='p-2 hover:bg-gray-800 hover:text-white cursor-pointer'>
                <a href='/dashboard'>{name}</a>
              </li>
              <li className='p-2 hover:bg-gray-800 hover:text-white cursor-pointer'>
                <a href='/profile'>Profile</a>
              </li>
              <li className='p-2 hover:bg-gray-800 hover:text-white cursor-pointer'>
                <a href='/settings'>Settings</a>
              </li>
              <li className='p-2 hover:bg-gray-800 hover:text-white cursor-pointer' onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboardComponent;
