import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Upstart Market</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200 ease-in-out">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200 ease-in-out">About</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200 ease-in-out">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200 ease-in-out">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200 ease-in-out">About</a>
          <a href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200 ease-in-out">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
