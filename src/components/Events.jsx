
import React, { useState } from 'react';

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

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-dragon-black to-dragon-navy">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Events</h2>
        
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
              activeCategory === 'technical' 
                ? 'bg-dragon-fire text-white shadow-lg shadow-dragon-fire/30' 
                : 'bg-dragon-navy text-dragon-cream/70 hover:text-dragon-cream border border-dragon-fire/30'
            }`}
          >
            Technical Events
          </button>
          <button
            onClick={() => setActiveCategory('nonTechnical')}
            className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
              activeCategory === 'nonTechnical' 
                ? 'bg-dragon-fire text-white shadow-lg shadow-dragon-fire/30' 
                : 'bg-dragon-navy text-dragon-cream/70 hover:text-dragon-cream border border-dragon-fire/30'
            }`}
          >
            Non-Technical Events
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData[activeCategory].map((event, index) => (
            <div 
              key={index} 
              className="fire-card overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dragon-black to-transparent z-10"></div>
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-dragon-cream">{event.name}</h3>
                  <p className="text-dragon-fire font-medium">{event.type}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-dragon-cream/80 mb-3">{event.description}</p>
                <div className="flex items-center text-dragon-cream/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span className="font-medium">Hosted by: {event.host}</span>
                </div>
                
                <div className="mt-4">
                  <button className="w-full py-2 px-4 bg-dragon-fire/20 hover:bg-dragon-fire/30 text-dragon-cream rounded transition-colors duration-300">
                    Register for Event
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
