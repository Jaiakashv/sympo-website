
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dragon-black/80 backdrop-blur-md border-b border-dragon-fire/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/226d236f-9149-4ff6-adcb-6088d5053c46.png" 
            alt="Miralenzan Logo" 
            className="h-12 md:h-16"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Schedule', 'Speakers', 'Register'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-dragon-cream hover:text-dragon-fire font-medium text-lg transition-colors duration-200"
            >
              {item}
            </a>
          ))}
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
              {['Home', 'About', 'Schedule', 'Speakers', 'Register'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-dragon-cream hover:text-dragon-fire font-medium text-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
