
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dragon-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dragon-black via-dragon-navy/20 to-dragon-black"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-dragon-cream animate-float">
            <span className="text-dragon-fire">MIRALENZAN</span> 2K25
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-dragon-cream/90 max-w-3xl">
            The Ultimate Dragon Symposium | July 15-18, 2025
          </p>
          
          <div className="relative w-full max-w-4xl mx-auto my-10">
            <img 
              src="/lovable-uploads/226d236f-9149-4ff6-adcb-6088d5053c46.png" 
              alt="Dragon Symposium" 
              className="w-full max-w-3xl mx-auto animate-float"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#register" className="fire-btn">
              Register Now
            </a>
            <a href="#schedule" className="px-8 py-3 text-lg font-bold text-dragon-cream border-2 border-dragon-fire/50 rounded-md transition-colors hover:bg-dragon-fire/10">
              View Schedule
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-dragon-cream/70 hover:text-dragon-fire transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
