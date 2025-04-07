
import React, { useState, useEffect, useRef } from 'react';
import { Flame, Users, Sparkles } from 'lucide-react';

const eventsData = {
  technical: [
    {
      name: 'Flame Control Workshop',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      description: 'Learn advanced techniques for controlling and manipulating dragon fire with precise movements and mental focus.',
      host: 'Blaze Master Ryuji'
    },
    {
      name: 'Wing Aerodynamics Seminar',
      type: 'Seminar',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      description: 'Scientific analysis of dragon wing structures and flight patterns, with practical applications for riders.',
      host: 'Prof. Jackson Harper'
    },
    {
      name: 'Scale Crafting Competition',
      type: 'Competition',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      description: 'Create armor and accessories from dragon scales. Materials provided, bring your own tools.',
      host: 'Mistress Vyranna'
    },
  ],
  nonTechnical: [
    {
      name: 'Dragon Lore Storytelling',
      type: 'Cultural Event',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      description: 'Traditional stories passed down through generations of dragon keepers, told around an enchanted flame.',
      host: 'Elder Drakonir'
    },
    {
      name: 'Fire Dance Performance',
      type: 'Performance',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      description: 'Spectacular choreographed performance combining human dancers and trained dragons in a dazzling display.',
      host: 'The Ember Troupe'
    },
    {
      name: 'Dragon Communication Workshop',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      description: 'Learn the basics of telepathic and non-verbal communication with friendly dragons.',
      host: 'Grand Mage Azuria'
    },
  ]
};

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardsRef = useRef([]);

  // Animation when switching categories
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        
        setTimeout(() => {
          card.style.transition = "all 0.5s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 100 * index);
      }
    });
  }, [activeCategory]);

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-dragon-black to-dragon-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dragon-fire/30 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(10).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-dragon-fire/20 animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`, 
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-title relative inline-block">
          Featured Events
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-dragon-fire/20 rounded-full"></div>
        </h2>
        
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-500 relative overflow-hidden group ${
              activeCategory === 'technical' 
                ? 'bg-gradient-to-r from-dragon-orange to-dragon-red text-white shadow-lg shadow-dragon-fire/30' 
                : 'bg-dragon-navy text-dragon-cream/70 hover:text-dragon-cream border border-dragon-fire/30'
            }`}
          >
            <span className="relative z-10 flex items-center">
              {activeCategory === 'technical' && <Flame className="mr-2 animate-flame" size={20} />}
              Technical Events
            </span>
            {activeCategory !== 'technical' && (
              <span className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            )}
          </button>
          <button
            onClick={() => setActiveCategory('nonTechnical')}
            className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-500 relative overflow-hidden group ${
              activeCategory === 'nonTechnical' 
                ? 'bg-gradient-to-r from-dragon-orange to-dragon-red text-white shadow-lg shadow-dragon-fire/30' 
                : 'bg-dragon-navy text-dragon-cream/70 hover:text-dragon-cream border border-dragon-fire/30'
            }`}
          >
            <span className="relative z-10 flex items-center">
              {activeCategory === 'nonTechnical' && <Flame className="mr-2 animate-flame" size={20} />}
              Non-Technical Events
            </span>
            {activeCategory !== 'nonTechnical' && (
              <span className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData[activeCategory].map((event, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="fire-card overflow-hidden group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dragon-black via-dragon-black/70 to-transparent z-10"></div>
                <div className={`absolute inset-0 bg-dragon-fire/30 mix-blend-overlay transition-opacity duration-500 ${hoveredCard === index ? 'opacity-40' : 'opacity-0'}`}></div>
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-dragon-cream group-hover:text-dragon-fire transition-colors duration-300">{event.name}</h3>
                  <p className="text-dragon-fire font-medium flex items-center">
                    {hoveredCard === index && <Sparkles size={16} className="mr-1 animate-flame" />}
                    {event.type}
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-dragon-navy/80 to-dragon-black">
                <p className="text-dragon-cream/80 mb-3">{event.description}</p>
                <div className="flex items-center text-dragon-cream/70">
                  <Users className="mr-2" size={18} />
                  <span className="font-medium">Hosted by: {event.host}</span>
                </div>
                
                <div className="mt-4">
                  <button className="w-full py-2 px-4 bg-gradient-to-r from-dragon-fire/10 to-dragon-fire/20 hover:from-dragon-fire/20 hover:to-dragon-fire/30 text-dragon-cream rounded transition-all duration-300 group flex items-center justify-center">
                    <span>Register for Event</span>
                    <Flame size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
