import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
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
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background texture */}
        <div className="absolute inset-0 bg-dragon-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dragon-black via-dragon-navy/20 to-dragon-black"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array(20).fill(0).map((_, i) => (
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
      
      <div className="container mx-auto px-4 sm:px-6 z-10 py-4 sm:py-16 md:py-20" ref={containerRef}>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
            <img 
              src="/public/lovable-uploads/mce-logo.png" 
              alt="Meenakshi College of Engineering Logo" 
              className="w-23 h-23 sm:w-15 sm:h-15"
            />
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-l sm:text-2xl md:text-3xl font-bold text-dragon-cream">
                MEENAKSHI COLLEGE OF ENGINEERING
              </h2>
              <p className="text-xs sm:text-sm text-dragon-cream">
                #12,Vembuliamman Kovil Street,West K.K.Nagar Chennai-600078
              </p>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mt-8 sm:mt-0 mb-4 text-dragon-cream relative inline-block">
            <span className="relative">
              <span className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 text-dragon-fire/20 rotate-12 hidden sm:block">
                <Sparkles size={32} className="animate-flame" />
              </span>
              <span className="bg-gradient-to-br from-dragon-fire to-dragon-red bg-clip-text text-transparent">MIRAI ENZAN</span>
            </span>{" "}
            <span className="relative">
              <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 text-dragon-fire/20 -rotate-12 hidden sm:block">
                <Sparkles size={32} className="animate-flame" />
              </span>
              2K25
            </span>
            <div className="absolute -z-10 inset-0 blur-xl bg-dragon-fire/10 rounded-full"></div>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 sm:mb-8 text-dragon-cream/90 max-w-3xl px-4">
            DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
          </p>
          
          <div className="relative w-full max-w-4xl mx-auto my-6 sm:my-10 transform transition-all duration-300" 
               style={{ 
                 transform: `perspective(1000px) rotateX(${5}deg) translateY(var(--move-y, 0)) translateX(var(--move-x, 0))`,
               }}>
            <div className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img 
              src="/lovable-uploads/226d236f-9149-4ff6-adcb-6088d5053c46.png" 
              alt="Dragon Symposium" 
              className="w-full max-w-2xl sm:max-w-3xl mx-auto relative z-10"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 px-4">
            <a href="#schedule" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold text-dragon-cream border-2 border-dragon-fire/50 rounded-md transition-all hover:bg-dragon-fire/10 hover:border-dragon-fire hover:scale-105 duration-300 relative overflow-hidden group">
              <span className="relative z-10">View Schedule</span>
              <span className="absolute inset-0 bg-gradient-to-r from-dragon-fire/0 to-dragon-fire/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
          </div>

          <div className="mt-12 sm:mt-16 animate-bounce">
            <a href="#about" className="text-dragon-cream/70 hover:text-dragon-fire transition-colors duration-300 group">
              <ChevronDown size={32} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
