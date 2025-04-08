import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Events from '../components/Events';
import Footer from '../components/Footer';

const Index = () => {
  // Add a page load animation effect
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    
    sections.forEach(section => {
      section.style.opacity = "0";
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-dragon-black">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-[-1]"></div>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Schedule />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
