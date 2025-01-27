// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import Home from './pages/Home';
import FridgeFinder from './pages/FridgeFinder';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import React from 'react';


function App() {
  return (
    <div className="bg-cream min-h-screen p-8">
      <nav className="text-forest-green text-lg font-poppins font-semibold">
        Navbar Content
      </nav>
      <main className="mt-10 text-center">
        <h1 className="text-h1 font-playfair text-forest-green">
          Tailwind CSS is working!
        </h1>
        <p className="text-bodyLarge font-roboto text-warm-sand mt-4">
          This is a test of the color palette and typography hierarchy.
        </p>
        <button className="mt-6 px-6 py-3 rounded-xl bg-mint-green text-forest-green text-bodyRegular font-poppins font-bold shadow-lg hover:bg-golden-apricot hover:text-cream transition">
          Click Me
        </button>
      </main>
    </div>
  );
}

export default App;
