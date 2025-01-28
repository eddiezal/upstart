import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Upstart</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  