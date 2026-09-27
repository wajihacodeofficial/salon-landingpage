import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import QuickDiscovery from './components/QuickDiscovery';

import About from './components/About';
import Founder from './components/Founder';
import Services from './components/Services';

import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import WhyUs from './components/WhyUs';

import BookingSection from './components/BookingSection';

import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <Hero />
        <QuickDiscovery />

        <About />
        <Services />

        <Founder />
        <Gallery />
        <Reviews />
        <WhyUs />

        <BookingSection />

      </main>
      <Footer />
    </div>
  );
}

export default App;
