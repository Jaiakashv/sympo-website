
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Function to detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'schedule', 'events', 'register'];
      
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
    <header className="sticky top-0 z-50 bg-dragon-black/80 backdrop-blur-md border-b border-dragon-fire/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/226d236f-9149-4ff6-adcb-6088d5053c46.png" 
            alt="Miralenzan Logo" 
            className="h-12 md:h-16 rounded-full border-2 border-dragon-fire/40"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Schedule', 'Events', 'Register'].map((item) => {
            const lowercaseItem = item.toLowerCase();
            const isActive = activeSection === lowercaseItem;
            
            return (
              <a 
                key={item} 
                href={`#${lowercaseItem}`}
                className={`text-lg font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-dragon-fire scale-105 font-bold' 
                    : 'text-dragon-cream hover:text-dragon-fire'
                }`}
              >
                {item}
                {isActive && (
                  <div className="h-1 w-full bg-dragon-fire rounded-full mt-1 animate-pulse"></div>
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dragon-cream hover:text-dragon-fire"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dragon-navy border-t border-dragon-fire/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Schedule', 'Events', 'Register'].map((item) => {
                const lowercaseItem = item.toLowerCase();
                const isActive = activeSection === lowercaseItem;
                
                return (
                  <a 
                    key={item} 
                    href={`#${lowercaseItem}`}
                    className={`text-lg transition-colors duration-200 ${
                      isActive 
                        ? 'text-dragon-fire font-bold' 
                        : 'text-dragon-cream hover:text-dragon-fire'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                    {isActive && (
                      <div className="h-1 w-1/4 bg-dragon-fire rounded-full mt-1"></div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
