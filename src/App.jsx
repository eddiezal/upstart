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
    <Router>
      {/* Main container with min-h-screen for full height */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Content area that grows to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fridge-finder" element={<FridgeFinder />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;