
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Only implement mouse parallax effect on non-mobile devices
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      const el = containerRef.current;
      if (!el) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Subtle parallax effect
      el.style.setProperty('--move-x', `${x * 20}px`);
      el.style.setProperty('--move-y', `${y * 20}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background texture */}
        <div className="absolute inset-0 bg-dragon-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dragon-black via-dragon-navy/20 to-dragon-black"></div>
        
        {/* Floating particles - fewer particles on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {Array(isMobile ? 10 : 20).fill(0).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-dragon-fire/30 animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`, 
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 3}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-12 sm:py-16 md:py-20" ref={containerRef}>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 text-dragon-cream relative inline-block">
            <span className="relative">
              <span className="absolute -top-6 -left-6 text-dragon-fire/20 rotate-12 hidden md:block">
                <Sparkles size={32} className="animate-flame" />
              </span>
              <span className="bg-gradient-to-br from-dragon-fire to-dragon-red bg-clip-text text-transparent">MIRALENZAN</span>
            </span>{" "}
            <span className="relative">
              <span className="absolute -top-6 -right-6 text-dragon-fire/20 -rotate-12 hidden md:block">
                <Sparkles size={32} className="animate-flame" />
              </span>
              2K25
            </span>
            <div className="absolute -z-10 inset-0 blur-xl bg-dragon-fire/10 rounded-full"></div>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-dragon-cream/90 max-w-3xl">
            The Ultimate Dragon Symposium | July 15-18, 2025
          </p>
          
          <div className="relative w-full max-w-4xl mx-auto my-6 sm:my-8 md:my-10 transform transition-all duration-300" 
               style={!isMobile ? { 
                 transform: `perspective(1000px) rotateX(${5}deg) translateY(var(--move-y, 0)) translateX(var(--move-x, 0))`,
               } : {}}>
            <div className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img 
              src="/lovable-uploads/226d236f-9149-4ff6-adcb-6088d5053c46.png" 
              alt="Dragon Symposium" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto relative z-10"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0">
            <a href="#register" className="fire-btn group w-full sm:w-auto">
              <span className="relative z-10">Register Now</span>
              <span className="absolute inset-0 rounded-md overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red opacity-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-dragon-fire to-dragon-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-48 h-full bg-white/20 transform -skew-x-20 translate-x-0 group-hover:translate-x-96 transition-transform duration-1000"></span>
              </span>
            </a>
            <a href="#schedule" className="px-6 sm:px-8 py-3 text-lg font-bold text-dragon-cream border-2 border-dragon-fire/50 rounded-md transition-all hover:bg-dragon-fire/10 hover:border-dragon-fire hover:scale-105 duration-300 relative overflow-hidden group w-full sm:w-auto text-center">
              <span className="relative z-10">View Schedule</span>
              <span className="absolute inset-0 bg-gradient-to-r from-dragon-fire/0 to-dragon-fire/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
          </div>

          <div className="mt-10 sm:mt-16 animate-bounce">
            <a href="#about" className="text-dragon-cream/70 hover:text-dragon-fire transition-colors duration-300 group">
              <ChevronDown size={36} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
