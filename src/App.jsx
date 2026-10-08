import React from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Aviation from './components/Aviation';
import Journey from './components/Journey';
import Personality from './components/Personality';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Precision Micro-interactions */}
      <CustomCursor />
      <ScrollProgress />

      {/* Main Luxury Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Aviation />
        <Journey />
        <Personality />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
