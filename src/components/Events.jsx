import React, { useState, useEffect, useRef } from 'react';
import { Flame, Users, Sparkles, Music, Trophy } from 'lucide-react';
import EventModal from './EventModal';

const eventsData = {
  technical: [
    {
      name: 'Paper Presentation',
      type: 'Competition',
      image: '/event-images/paper-presentation.jpg',
      detailImage: '/event-images/paper-presentation-detail.jpg',
      description: 'Present your research papers on innovative dragon-tech solutions and emerging technologies in draconic studies.',
      host: 'Abitha vk Lija',
      date: 'May 15, 2025',
      time: '10:00 AM - 4:00 PM',
      venue: 'Main Auditorium, Meenakshi College of Engineering',
      team: '1-2 members',
      contact: 'event.coordinator@mirai-enzan.com',
      rules: [
       "Paper must follow IEEE/APA format. " ,
       "Content should be original (plagiarism < 20%). " ,
       "Max 10-12 slides allowed. " ,
       "Par cipants must submit papers before the deadline. " ,
       "Judges' decisions are final. " ,
      ],
      prizes: ['First Prize', 'Second Prize']
    },
    {
      name: 'Technical Quiz',
      type: 'Competition',
      image: '/event-images/tech-quiz.jpg',
      description: 'Test your knowledge on dragon sciences, technologies, and innovations in this fast-paced quiz competition.',
      host: 'Quiz Master Ignitus'
    },
    {
      name: 'Hackathon',
      type: 'Competition',
      image: '/event-images/hack.jpg',
      description: 'A 24-hour coding marathon to develop innovative solutions for dragon-related challenges and technological problems.',
      host: 'Dragon Code Foundation'
    },
    {
      name: 'Tackle the Cyber',
      type: 'Competition',
      image: '/event-images/tackle-the-cyber.jpg',
      description: 'Learn cybersecurity techniques to protect dragon data systems from external threats in this hands-on workshop.',
      host: 'Security Expert Draco Shield'
    },
    {
      name: 'Hardware Resemble',
      type: 'Competition',
      image: '/event-images/hard.jpg',
      description: 'Design and build functional hardware prototypes for dragon management, training, or environmental monitoring.',
      host: 'Master Engineer Ember Tech'
    },
    {
      name: 'UI/UX Design',
      type: 'competition',
      image: '/event-images/ui-ux.jpg',
      description: 'Create intuitive interfaces and experiences for dragon-related applications and management systems.',
      host: 'Design Director Flame Interface'
    },
  ],
  nonTechnical: [
    {
      name: 'Cinematic Quiz',
      type: 'Competition',
      image: '/event-images/cine.jpg',
      detailImage: '/event-images/cine-detail.jpg',
      description: 'Test your knowledge of dragon movies, TV shows, and cinematic lore in this exciting film-themed quiz competition.',
      host: 'Cinema Master Flamescale'
    },
    {
      name: 'Bridge the Gap',
      type: 'Team Event',
      image: '/event-images/bridge.jpg',
      description: 'A team-building event where participants collaborate to solve problems and bridge communication gaps between dragons and humans.',
      host: 'Mediator Harmony Wing'
    },
    {
      name: 'Debate',
      type: 'Competition',
      image: '/event-images/debate.jpg',
      description: 'Engage in stimulating debates on contemporary dragon-related topics, showcasing your persuasive skills and critical thinking.',
      host: 'Grand Orator Embertongue'
    },
    {
      name: 'Portrait Painting',
      type: 'Art Competition',
      image: '/event-images/paint.jpg',
      description: 'Express your artistic talents by painting portraits of legendary dragons and their riders using various media and techniques.',
      host: 'Master Artist Brushfire'
    },
    {
      name: 'Anime Quiz',
      type: 'Competition',
      image: '/event-images/anime.jpg',
      description: 'Challenge your knowledge of dragon-themed anime, characters, and storytelling traditions from Eastern and Western animation.',
      host: 'Anime Scholar Dragonwing'
    },
    {
      name: 'IPL Mock Auction',
      type: 'Simulation',
      image: '/event-images/ipl.jpg',
      description: 'Participate in a simulated dragon rider auction, building the ultimate team while managing your resources and strategy.',
      host: 'Auction Master Gold Hoard'
    },
    {
      name: 'Rangoli/Mehendi',
      type: 'Art Competition',
      image: '/event-images/rangoli.jpg',
      description: 'Create beautiful traditional designs inspired by dragon motifs, using colored powders for Rangoli or henna for Mehendi art.',
      host: 'Art Curator Flame Pattern'
    }
  ],
  culturals: [
    {
      name: 'Adaptune',
      type: 'Performance',
      image: '/event-images/adapt.jpg',
      detailImage: '/event-images/adapt-detail.jpg',
      description: 'Create and perform your own musical adaptation of famous dragon legends, incorporating traditional and modern elements.',
      host: 'Maestro Melodyscale'
    },
    {
      name: 'Singing',
      type: 'Competition',
      image: '/event-images/sing.jpg',
      description: 'Showcase your vocal talents with dragon-themed songs, ranging from powerful ballads to contemporary pieces.',
      host: 'Vocal Master Harmonia'
    },
    {
      name: 'Dance',
      type: 'Performance',
      image: '/event-images/dance.jpg',
      description: 'Express the grace and power of dragons through choreographed dance performances, either solo or in groups.',
      host: 'Dance Director Gracewing'
    },
    {
      name: 'Mime',
      type: 'Performance',
      image: '/event-images/mime.jpg',
      description: 'Tell stories of dragon adventures through the art of silent expression, using only gestures and body movements.',
      host: 'Mime Artist Silentflame'
    },
    {
      name: 'Body Building',
      type: 'Competition',
      image: '/event-images/body-build.jpg',
      description: 'Demonstrate strength and physical discipline in this competition inspired by the powerful physique of dragons.',
      host: 'Strength Coach Ironscale'
    },
    {
      name: 'Fashion Show',
      type: 'Exhibition',
      image: '/event-images/fashion.jpg',
      description: 'Showcase dragon-inspired fashion designs, from wearable art to costume creations that embody draconic elegance.',
      host: 'Fashion Designer Shimmerscale'
    }
  ],
  sports: [
    {
      name: 'Box Cricket (Boys)',
      type: 'Tournament',
      image: '/event-images/box-cricket.jpg',
      detailImage: '/event-images/box-cricket-detail.jpg',
      description: 'Compete in this fast-paced modified version of cricket designed for limited spaces, showcasing batting and bowling skills.',
      host: 'Cricket Coach Fastbowl'
    },
    {
      name: 'Football (Boys)',
      type: 'Tournament',
      image: '/event-images/football.jpg',
      description: 'Battle it out on the field in this exciting football tournament featuring tactical gameplay and team coordination.',
      host: 'Football Captain Swiftfoot'
    },
    {
      name: 'Badminton (Boys & Girls)',
      type: 'Tournament',
      image: '/event-images/badminton.jpg',
      description: 'Showcase your agility and precision in singles and doubles badminton matches for both boys and girls.',
      host: 'Badminton Pro Quicksmash'
    },
    {
      name: 'Kho-Kho (Girls)',
      type: 'Tournament',
      image: '/event-images/kho-kho.jpg',
      description: 'Participate in this traditional Indian sport that tests speed, strategy, and teamwork in an exciting tag-based format.',
      host: 'Team Leader Swiftchase'
    },
    {
      name: 'Throwball (Girls)',
      type: 'Tournament',
      image: '/event-images/throwball.jpg',
      description: 'Compete in this non-contact ball sport that combines elements of volleyball and handball for female athletes.',
      host: 'Coach Steadyhand'
    },
    {
      name: 'Carrom',
      type: 'Competition',
      image: '/event-images/carrom.jpg',
      description: 'Test your precision and strategy in this tabletop game that combines elements of billiards, shuffleboard and checkers.',
      host: 'Carrom Master Strikeperfect'
    },
    {
      name: 'Chess',
      type: 'Tournament',
      image: '/event-images/chess.jpg',
      description: 'Challenge your strategic thinking and foresight in this classic battle of minds on the checkered board.',
      host: 'Grandmaster Deepthought'
    },
    {
      name: 'FF-MAX',
      type: 'Esports',
      image: '/event-images/ff-max.jpg',
      description: 'Compete in this popular battle royale mobile game tournament, showcasing your survival and combat skills in a premiere Esports competition.',
      host: 'Gaming Champion Pixelfire',
      isEsports: true
    },
    {
      name: 'CrossFit',
      type: 'Competition',
      image: '/event-images/crossfit.jpg',
      description: 'Test your strength, endurance and overall fitness in this high-intensity functional training competition.',
      host: 'Fitness Coach Ironmuscle'
    },
    {
      name: 'BGMI',
      type: 'Esports',
      image: '/event-images/bgmi.jpg',
      description: 'Battle for victory in this tactical mobile shooter game tournament requiring teamwork and strategic thinking. A flagship Esports event for mobile gamers.',
      host: 'Esports Director Battleking',
      isEsports: true
    }
  ]
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('technical');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  
  // Animation when switching categories
  useEffect(() => {
    setIsLoaded(false);
    // Small delay to trigger animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, [activeTab]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedEvent]);
  
  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedEvent) {
        setSelectedEvent(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedEvent]);

  // Fallback image for missing event images
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/800x600?text=Event+Image';
  };

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
  };

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
        
        <div className="flex flex-wrap justify-center gap-2 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-500 relative overflow-hidden group ${
              activeTab === 'technical' 
                ? 'bg-gradient-to-r from-dragon-orange to-dragon-red text-white shadow-lg shadow-dragon-fire/30' 
                : 'bg-dragon-navy text-dragon-cream/70 hover:text-dragon-cream border border-dragon-fire/30'
            }`}
          >
            <span className="relative z-10 flex items-center">
              {activeTab === 'technical' && <Flame className="mr-1.5 animate-flame" size={16} />}
              Technical
            </span>
            {activeTab !== 'technical' && (
              <span className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('nonTechnical')}
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-500 relative overflow-hidden group ${
              activeTab === 'nonTechnical' 
                ? 'bg-gradient-to-r from-dragon-orange to-dragon-red text-white shadow-lg shadow-dragon-fire/30' 
                : 'bg-dragon-navy text-dragon-cream/70 hover:text-dragon-cream border border-dragon-fire/30'
            }`}
          >
            <span className="relative z-10 flex items-center">
              {activeTab === 'nonTechnical' && <Flame className="mr-1.5 animate-flame" size={16} />}
              Non-Technical
            </span>
            {activeTab !== 'nonTechnical' && (
              <span className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('culturals')}
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-500 relative overflow-hidden group ${
              activeTab === 'culturals' 
                ? 'bg-gradient-to-r from-dragon-orange to-dragon-red text-white shadow-lg shadow-dragon-fire/30' 
                : 'bg-dragon-navy text-dragon-cream/70 hover:text-dragon-cream border border-dragon-fire/30'
            }`}
          >
            <span className="relative z-10 flex items-center">
              {activeTab === 'culturals' && <Music className="mr-1.5 animate-flame" size={16} />}
              Culturals
            </span>
            {activeTab !== 'culturals' && (
              <span className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('sports')}
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-500 relative overflow-hidden group ${
              activeTab === 'sports' 
                ? 'bg-gradient-to-r from-dragon-orange to-dragon-red text-white shadow-lg shadow-dragon-fire/30' 
                : 'bg-dragon-navy text-dragon-cream/70 hover:text-dragon-cream border border-dragon-fire/30'
            }`}
          >
            <span className="relative z-10 flex items-center">
              {activeTab === 'sports' && <Trophy className="mr-1.5 animate-flame" size={16} />}
              Sports
            </span>
            {activeTab !== 'sports' && (
              <span className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {eventsData[activeTab].map((event, index) => (
            <div 
              key={`${activeTab}-${index}`}
              className={`fire-card overflow-hidden group transition-all duration-500 ${
                isLoaded 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dragon-black via-dragon-black/70 to-transparent z-10"></div>
                <div className={`absolute inset-0 bg-dragon-fire/30 mix-blend-overlay transition-opacity duration-500 ${hoveredCard === index ? 'opacity-40' : 'opacity-0'}`}></div>
                <img 
                  src={event.image} 
                  alt={event.name} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-lg sm:text-xl font-bold text-dragon-cream group-hover:text-dragon-fire transition-colors duration-300">{event.name}</h3>
                  <p className="text-dragon-fire font-medium flex items-center text-sm sm:text-base">
                    {hoveredCard === index && <Sparkles size={14} className="mr-1 animate-flame" />}
                    {event.type}
                    {event.isEsports && (
                      <span className="ml-2 bg-gradient-to-r from-dragon-orange to-dragon-red px-2 py-0.5 rounded-full text-white text-xs font-bold animate-pulse">
                        ESPORTS
                      </span>
                    )}
                  </p>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-b from-dragon-navy/80 to-dragon-black">
                <p className={`text-dragon-cream/80 mb-3 text-sm sm:text-base line-clamp-3 ${event.isEsports ? 'font-medium' : ''}`}>{event.description}</p>
                <div className="flex items-center text-dragon-cream/70 text-xs sm:text-sm">
                  <Users className="mr-2 flex-shrink-0" size={16} />
                  <span className="font-medium">Hosted by: {event.host}</span>
                </div>
                
                <div className="mt-3 sm:mt-4">
                  <button 
                    className={`w-full py-1.5 sm:py-2 px-4 ${event.isEsports ? 'bg-gradient-to-r from-dragon-orange/20 to-dragon-red/20 hover:from-dragon-orange/30 hover:to-dragon-red/30' : 'bg-gradient-to-r from-dragon-fire/10 to-dragon-fire/20 hover:from-dragon-fire/20 hover:to-dragon-fire/30'} text-dragon-cream rounded transition-all duration-300 group flex items-center justify-center text-sm sm:text-base`}>
                    <span>{event.isEsports ? 'Register for Esports Event' : 'Register for Event'}</span>
                    <Flame size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </section>
  );
};

export default Events;
