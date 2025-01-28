import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [ctaText, setCtaText] = useState('Join Us');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/fridge-finder':
        setCtaText('Find Fridges');
        break;
      case '/about':
        setCtaText('Learn More');
        break;
      default:
        setCtaText('Join Us');
    }
  }, [location.pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSwipe = (e) => {
    if (e.type === 'swipeleft') {
      setIsMenuOpen(false);
    } else if (e.type === 'swiperight') {
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      setTouchStartX(touch.clientX);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      setTouchEndX(touch.clientX);
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        handleSwipe({ type: 'swipeleft' });
      } else if (touchEndX - touchStartX > 50) {
        handleSwipe({ type: 'swiperight' });
      }
    };

    let touchStartX = 0;
    let touchEndX = 0;

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-white shadow-md z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-800 hover:text-golden-apricot drop-shadow">
          Home
        </Link>
        <Link to="/fridge-finder" className="text-gray-800 hover:text-golden-apricot drop-shadow">
          Fridge Finder
        </Link>
        <Link to="/about" className="text-gray-800 hover:text-golden-apricot drop-shadow">
          About Us
        </Link>
        <Link to="/contact" className="text-gray-800 hover:text-golden-apricot drop-shadow">
          Contact
        </Link>
      </div>
      <Button className="hidden md:block">{ctaText}</Button>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[rgba(255, 255, 255, 0.9)] backdrop-blur-lg z-20">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link to="/" className="text-gray-800 hover:text-golden-apricot drop-shadow" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/fridge-finder" className="text-gray-800 hover:text-golden-apricot drop-shadow" onClick={toggleMenu}>
              Fridge Finder
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-golden-apricot drop-shadow" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-golden-apricot drop-shadow" onClick={toggleMenu}>
              Contact
            </Link>
            <Button onClick={toggleMenu}>{ctaText}</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
