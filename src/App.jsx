import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

import About from './components/About';
import Founder from './components/Founder';
import Services from './components/Services';
import HairFeature from './components/HairFeature';
import SkinFeature from './components/SkinFeature';
import NailsFeature from './components/NailsFeature';
import BridalFeature from './components/BridalFeature';
import SignatureExperience from './components/SignatureExperience';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import WhyUs from './components/WhyUs';

import BookingSection from './components/BookingSection';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <Hero />

        <About />
        <Services />
        <HairFeature />
        <SkinFeature />
        <NailsFeature />
        <BridalFeature />
        <SignatureExperience />
        <Founder />
        <Gallery />
        <Reviews />
        <WhyUs />

        <BookingSection />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
}

export default App;
