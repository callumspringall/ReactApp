import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import Showcase from './components/Showcase.js';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
      <Header toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;