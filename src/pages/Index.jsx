
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Events from '../components/Events';
import Register from '../components/Register';
import Footer from '../components/Footer';
import Speakers from '../components/Speakers';

const Index = () => {
  // Add a page load animation effect
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Stagger child animations for better performance on mobile
          const children = entry.target.querySelectorAll('.animate-on-reveal');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fade-in');
            }, index * 100); // 100ms stagger
          });
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px' // Trigger a bit earlier for smoother transitions
    });
    
    sections.forEach(section => {
      section.style.opacity = "0";
      observer.observe(section);
      
      // Pre-hide elements that will be animated on reveal
      const children = section.querySelectorAll('.animate-on-reveal');
      children.forEach(child => {
        child.style.opacity = "0";
      });
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
      <div id="events">
        <Speakers />
      </div>
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
