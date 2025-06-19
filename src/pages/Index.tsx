
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Profile from '../components/Profile';
import Testimonials from '../components/Testimonials';
import Coverage from '../components/Coverage';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import './Index.css';

const Index = () => {
  return (
    <div className="index-container">
      <Hero />
      <Services />
      <Gallery />
      <Profile />
      <Testimonials />
      <Coverage />
      <Contact />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
