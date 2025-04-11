import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Function to detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'schedule', 'events'];
      
      // Detect scrolling to add background effect
      setScrolled(window.scrollY > 20);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        // If the top of the section is near the top of the viewport, set it as active
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dragon-black/90 backdrop-blur-md shadow-lg shadow-dragon-fire/10 py-1 sm:py-2' 
        : 'bg-transparent py-2 sm:py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/226d236f-9149-4ff6-adcb-6088d5053c46.png" 
            alt="Miralenzan Logo" 
            className="h-10 sm:h-12 md:h-16 rounded-full border-2 border-dragon-fire/40 relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
          <span 
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-dragon-orange to-dragon-red bg-clip-text text-transparent animate-pulse"
          >
            Mirai Enzan
          </span>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8">
          {['Home', 'About', 'Schedule', 'Events'].map((item) => {
            const lowercaseItem = item.toLowerCase();
            const isActive = activeSection === lowercaseItem;
            
            return (
              <a 
                key={item} 
                href={`#${lowercaseItem}`}
                className={`text-base lg:text-lg font-medium transition-all duration-300 relative overflow-hidden ${
                  isActive 
                    ? 'text-dragon-fire scale-105 font-bold' 
                    : 'text-dragon-cream hover:text-dragon-fire'
                }`}
              >
                <span className="relative z-10">{item}</span>
                {isActive && (
                  <>
                    <div className="h-1 w-full bg-gradient-to-r from-dragon-orange to-dragon-red rounded-full mt-1 animate-pulse"></div>
                    <Flame className="absolute -right-6 -bottom-6 text-dragon-fire/20 animate-flame" size={40} />
                  </>
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dragon-cream hover:text-dragon-fire transition-colors duration-300 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gradient-to-b from-dragon-navy to-dragon-black border-t border-dragon-fire/20 transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4 sm:space-y-6">
            {['Home', 'About', 'Schedule', 'Events'].map((item) => {
              const lowercaseItem = item.toLowerCase();
              const isActive = activeSection === lowercaseItem;
              
              return (
                <a 
                  key={item} 
                  href={`#${lowercaseItem}`}
                  className={`text-base sm:text-lg transition-colors duration-300 ${
                    isActive 
                      ? 'text-dragon-fire font-bold' 
                      : 'text-dragon-cream hover:text-dragon-fire'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    {isActive && <Flame className="mr-2 text-dragon-fire animate-flame" size={20} />}
                    {item}
                  </div>
                  {isActive && (
                    <div className="h-1 w-1/4 bg-gradient-to-r from-dragon-orange to-dragon-red rounded-full mt-1"></div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
