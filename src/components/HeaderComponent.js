import React, { useState } from 'react';
import Logo from '../images/logo.png';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="CSW-CHAT Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">CSW-CHAT</span>
          </a>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M2 2l13 13M2 15L15 2" : "M1 1h15M1 7h15M1 13h15"}
              />
            </svg>
          </button>
          <div 
                className={`md:flex ${isOpen ? 'block duration-700' : 'hidden duration-700'} absolute right-0 mt-2 w-48 bg-white rounded-lg md:static md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white navbar`}
                id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="/register" className="block py-2 px-3 text-blue-600 rounded md:bg-transparent md:p-0 dark:text-blue-500 text-bold text-xl" aria-current="page">Register</a>
              </li>
              <li>
                <a href="/" className="block py-2 px-3 text-blue-600 rounded md:bg-transparent md:p-0 dark:text-blue-500 text-bold text-xl">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
