
import React from 'react';

const speakersData = [
  {
    name: 'Elder Drakonir',
    role: 'Grand Master of Ceremonies',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    bio: 'With over 40 years of experience in dragon lore, Elder Drakonir is the leading authority on ancient dragon rituals.'
  },
  {
    name: 'Mei Ling',
    role: 'Eastern Dragon Scholar',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    bio: 'Specializing in Asian dragon mythology, Mei Ling has documented dragon traditions across China, Japan, and Korea.'
  },
  {
    name: 'Blaze Master Ryuji',
    role: 'Fire Control Expert',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    bio: 'Renowned for his precise flame manipulation techniques, Master Ryuji has trained champions for over 15 years.'
  },
  {
    name: 'Prof. Jackson Harper',
    role: 'Media Studies Researcher',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    bio: 'Analyzing dragon representations in popular media, Prof. Harper bridges ancient mythology with modern entertainment.'
  },
  {
    name: 'Battle Master Scorch',
    role: 'Combat Tactician',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    bio: 'Former military strategist who has adapted traditional warfare techniques to dragon-based combat scenarios.'
  },
  {
    name: 'Grand Mage Azuria',
    role: 'Summoning Specialist',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    bio: 'A mystical practitioner who has developed revolutionary approaches to dragon-human communication.'
  }
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-dragon-black to-dragon-navy">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Speakers</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakersData.map((speaker, index) => (
            <div 
              key={index} 
              className="fire-card overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dragon-black to-transparent z-10"></div>
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-dragon-cream">{speaker.name}</h3>
                  <p className="text-dragon-fire font-medium">{speaker.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-dragon-cream/80">{speaker.bio}</p>
                
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-dragon-navy border border-dragon-fire/30 flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:border-dragon-fire transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-dragon-navy border border-dragon-fire/30 flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:border-dragon-fire transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-dragon-navy border border-dragon-fire/30 flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:border-dragon-fire transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
