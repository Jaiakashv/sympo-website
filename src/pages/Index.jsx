
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Speakers from '../components/Speakers';
import Register from '../components/Register';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dragon-black">
      <Header />
      <Hero />
      <About />
      <Schedule />
      <Speakers />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
