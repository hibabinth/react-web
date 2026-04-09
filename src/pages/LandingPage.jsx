import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Works from '../components/Works';
import Manifesto from '../components/Manifesto';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Manifesto />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
