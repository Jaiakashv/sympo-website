import React, { useState, useEffect, useRef } from 'react';
import { Flame, Users, Sparkles, Music, Trophy, X } from 'lucide-react';
import EventModal from './EventModal';

const eventsData = {
  technical: [
    {
      name: 'Paper Presentation',
      type: 'Competition',
      image: '/event-images/paper-presentation.jpg',
      description: 'Present your research papers on innovative dragon-tech solutions and emerging technologies in draconic studies.',
      host: 'Abitha vk Lija',
      date: 'May 15, 2025',
      time: '10:00 AM - 4:00 PM',
      venue: 'Main Auditorium, Meenakshi College of Engineering',
      team: '1-2 members',
      contact: 'event.coordinator@mirai-enzan.com',
      rules: [
        "Paper must follow IEEE/APA format.",
        "Content should be original (plagiarism < 20%).",
        "Max 10-12 slides allowed.",
        "Participants must submit papers before the deadline.",
        "Judges' decisions are final."
      ],
      prizes: ['First Prize', 'Second Prize', 'Third Prize']
    },
    {
      name: 'Technical Quiz',
      type: 'Quiz',
      image: '/event-images/tech-quiz.jpg',
      description: 'Test your technical knowledge and problem-solving skills in this fast-paced quiz covering various dragon engineering topics.',
      host: 'Tech Master Ignis',
      rules: [
        "Each question has a time limit.",
        "No use of mobile phones or external help.",
        "Negative marking for wrong answers (if applicable).",
        "Judges' decision is final."
      ],
      prizes: ['Top Tech Gadget', 'Certification Voucher']
    },
    {
      name: 'Hackathon',
      type: 'Competition',
      image: '/event-images/hack.jpg',
      description: 'A 24-hour coding marathon to develop innovative solutions for dragon-related challenges and technological problems.',
      host: 'Dragon Code Foundation',
      rules: [
        "Teams must develop a solution based on the given problem statement.",
        "Allowed languages: Python, Java, C++, etc.",
        "Submission via GitHub link or file upload.",
        "Judges evaluate based on code efficiency, correctness, and innovation.",
        "No plagiarism—only original work is accepted."
      ],
      prizes: ['Top Prize', 'Runner Up']
    },
    {
      name: 'Tackle the Cyber',
      type: 'Competition',
      image: '/event-images/tackle-the-cyber.jpg',
      description: 'Learn cybersecurity techniques to protect dragon data systems from external threats in this hands-on workshop.',
      host: 'Security Expert Draco Shield',
      rules: [
        "Participants must not harm or hack event infrastructure.",
        "No unauthorized tools or pre-written scripts.",
        "Teams must document steps taken to solve challenges.",
        "Any unethical behavior leads to disqualification."
      ],
      prizes: ['Cyber Guardian Trophy', 'Security Tool Subscription']
    },
    {
      name: 'Hardware Resemble',
      type: 'Competition',
      image: '/event-images/hard.jpg',
      description: 'Design and build functional hardware prototypes for dragon management, training, or environmental monitoring.',
      host: 'Master Engineer Ember Tech',
      rules: [
        "Teams must assemble/disassemble hardware components within the time limit.",
        "Participants should identify and explain each part.",
        "Use of reference materials is not allowed.",
        "Teams are judged on speed, accuracy, and explanation of components."
      ],
      prizes: ['Best Hardware Design', 'Component Master Award']
    },
    {
      name: 'UI/UX Design',
      type: 'competition',
      image: '/event-images/ui-ux.jpg',
      description: 'Create intuitive interfaces and experiences for dragon-related applications and management systems.',
      host: 'Design Director Flame Interface',
      rules: [
        "Participants must design a UI/UX prototype for a given problem statement.",
        "Allowed tools: Figma, Adobe XD, Canva, or any other design software.",
        "Judging criteria: Creativity, usability, responsiveness, and innovation.",
        "Submission should include wireframes and final designs."
      ],
      prizes: ['Best Design Award', 'Design Tool Subscription']
    },
    {
      name: 'Coding Challenge',
      type: 'Competition',
      image: '/event-images/debug.jpg',
      description: 'Solve complex coding problems and showcase your programming skills.',
      host: 'John Doe',
      date: 'June 10, 2025',
      time: '9:00 AM - 3:00 PM',
      venue: 'Computer Lab, Meenakshi College of Engineering',
      team: 'Individual',
      contact: 'coding.challenge@mirai-enzan.com',
      rules: [
        "Participants will be given buggy code and must debug it within the time limit.",
        "Allowed languages: C, C++, Java, Python.",
        "No use of AI tools or online compilers.",
        "Scoring based on correctness, efficiency, and time taken."
      ],
      prizes: ['Gold Medal', 'Silver Medal', 'Bronze Medal']
    }
  ],
  nonTechnical: [
    {
      name: 'Cinematic Quiz',
      type: 'Quiz',
      image: '/event-images/cinematic-quiz.jpg',
      description: 'Test your knowledge of movies and cinema in this exciting quiz.',
      host: 'Jane Smith',
      date: 'July 5, 2025',
      time: '11:00 AM - 1:00 PM',
      venue: 'Lecture Hall 1, Meenakshi College of Engineering',
      team: 'Teams of 2',
      contact: 'cinematic.quiz@mirai-enzan.com',
      rules: [
        "Only one answer per team per question.",
        "No use of mobile phones or external help.",
        "Negative marking for wrong answers (if applicable).",
        "Judges' decision is final."
      ],
      prizes: ['Movie Tickets', 'Gift Vouchers']
    },
    {
      name: 'Bridge the Gap',
      type: 'Team Event',
      image: '/event-images/bridge.jpg',
      description: 'A team-building event where participants collaborate to solve problems and bridge communication gaps between dragons and humans.',
      host: 'Mediator Harmony Wing',
      rules: [
        "One member is given a keyword, and they must explain it without saying the word itself.",
        "The other member must guess the correct word.",
        "No hand gestures or spelling out words.",
        "Teams with the highest correct guesses win."
      ],
      prizes: ['Team Synergy Award', 'Best Communicator Prize']
    },
    {
      name: 'Debate',
      type: 'Competition',
      image: '/event-images/debate.jpg',
      description: 'Engage in stimulating debates on contemporary dragon-related topics, showcasing your persuasive skills and critical thinking.',
      host: 'Grand Orator Embertongue',
      rules: [
        "Topics will be given on the spot or 15 minutes prior.",
        "Each participant must present arguments for or against the topic.",
        "Personal attacks or offensive language will lead to disqualification.",
        "Judges evaluate based on clarity, logic, and delivery."
      ],
      prizes: ['Best Debater', 'Most Persuasive Speaker']
    },
    {
      name: 'Portrait Painting',
      type: 'Art Competition',
      image: '/event-images/paint.jpg',
      description: 'Express your artistic talents by painting portraits of legendary dragons and their riders using various media and techniques.',
      host: 'Master Artist Brushfire',
      rules: [
        "Participants must bring their own materials (canvas, paints, brushes).",
        "No digital art or tracing allowed.",
        "Judging criteria: Creativity, detailing, and resemblance.",
        "No external references or printed images allowed."
      ],
      prizes: ['Best Portrait', 'Most Creative Artist']
    },
    {
      name: 'Anime Quiz',
      type: 'Competition',
      image: '/event-images/anime.jpg',
      description: 'Challenge your knowledge of dragon-themed anime, characters, and storytelling traditions from Eastern and Western animation.',
      host: 'Anime Scholar Dragonwing',
      rules: [
        "Only one answer per team per question.",
        "No use of mobile phones or internet help.",
        "Judges' decision is final."
      ],
      prizes: ['Top Anime Fan Trophy', 'Manga Collection']
    },
    {
      name: 'IPL Mock Auction',
      type: 'Simulation',
      image: '/event-images/ipl.jpg',
      description: 'Participate in a simulated dragon rider auction, building the ultimate team while managing your resources and strategy.',
      host: 'Auction Master Gold Hoard',
      rules: [
        "Each team gets a virtual budget to bid for players.",
        "Player values are pre-determined based on real IPL stats.",
        "The team with the most balanced squad based on strategy wins.",
        "No unfair bidding (e.g., blocking other teams intentionally)."
      ],
      prizes: ['Master Strategist Award', 'Best Team Composition']
    },
    {
      name: 'Rangoli/Mehendi',
      type: 'Art Competition',
      image: '/event-images/rangoli.jpg',
      description: 'Create beautiful traditional designs inspired by dragon motifs, using colored powders for Rangoli or henna for Mehendi art.',
      host: 'Art Curator Flame Pattern',
      rules: [
        "Participants must bring their own materials (Mehendi cones, colors, etc.).",
        "Designs must be original (no printed references).",
        "Judging criteria: Creativity, neatness, and complexity.",
        "No external assistance is allowed."
      ],
      prizes: ['Best Traditional Design', 'Artistic Excellence Award']
    }
  ],
  culturals: [
    {
      name: 'Adaptune',
      type: 'Music Competition',
      image: '/event-images/adaptune.jpg',
      description: 'Showcase your musical talent in this exciting competition.',
      host: 'Emily Johnson',
      date: 'August 20, 2025',
      time: '2:00 PM - 5:00 PM',
      venue: 'Auditorium, Meenakshi College of Engineering',
      team: 'Solo or Duet',
      contact: 'adaptune@mirai-enzan.com',
      rules: [
        "Participants must dance to random music played by organizers.",
        "No prior knowledge of the songs.",
        "Dance style should match the rhythm of the song.",
        "Judging criteria: Spontaneity, expressions, and adaptability."
      ],
      prizes: ['Trophy', 'Certificate']
    },
    {
      name: 'Singing',
      type: 'Competition',
      image: '/event-images/sing.jpg',
      description: 'Showcase your vocal talents with dragon-themed songs, ranging from powerful ballads to contemporary pieces.',
      host: 'Vocal Master Harmonia',
      rules: [
        "Participants can sing with or without background music (karaoke allowed).",
        "No auto-tune or pre-recorded vocals.",
        "Lyrics should be appropriate (no offensive words).",
        "Judging criteria: Pitch, tone, stage presence, and overall performance."
      ],
      prizes: ['Golden Voice Award', 'Best Stage Presence']
    },
    {
      name: 'Dance',
      type: 'Performance',
      image: '/event-images/dance.jpg',
      description: 'Express the grace and power of dragons through choreographed dance performances, either solo or in groups.',
      host: 'Dance Director Gracewing',
      rules: [
        "Participants must bring their own music track (submit before the event).",
        "Any dance form is allowed (solo/group).",
        "No explicit lyrics or inappropriate moves.",
        "Props are allowed but must be arranged by participants.",
        "Judging criteria: Choreography, synchronization, expressions, and energy."
      ],
      prizes: ['Best Dance Performance', 'Most Energetic Dancer']
    },
    {
      name: 'Mime',
      type: 'Performance',
      image: '/event-images/mime.jpg',
      description: 'Tell stories of dragon adventures through the art of silent expression, using only gestures and body movements.',
      host: 'Mime Artist Silentflame',
      rules: [
        "No dialogues or vocal sounds (only expressions & gestures).",
        "Use of props is allowed but should not distract from the act.",
        "Performances should be creative, meaningful, and engaging.",
        "Judging criteria: Concept, expressions, coordination, and impact."
      ],
      prizes: ['Best Mime Act', 'Most Expressive Performer']
    },
    {
      name: 'Body Building',
      type: 'Competition',
      image: '/event-images/body-build.jpg',
      description: 'Demonstrate strength and physical discipline in this competition inspired by the powerful physique of dragons.',
      host: 'Strength Coach Ironscale',
      rules: [
        "Participants must wear appropriate attire (shorts/tank tops).",
        "No external assistance (supplements, oils, etc.).",
        "Judging criteria: Muscle definition, symmetry, and strength endurance."
      ],
      prizes: ['Titan Trophy', 'Fitness Gear Sponsorship']
    },
    {
      name: 'Fashion Show',
      type: 'Exhibition',
      image: '/event-images/fashion.jpg',
      description: 'Showcase dragon-inspired fashion designs, from wearable art to costume creations that embody draconic elegance.',
      host: 'Fashion Designer Shimmerscale',
      rules: [
        "Themes will be provided or teams can choose their own.",
        "No inappropriate outfits or offensive gestures.",
        "Participants must maintain professionalism on stage.",
        "Judging criteria: Creativity, confidence, outfit presentation, and team coordination."
      ],
      prizes: ['Best Design', 'Top Model']
    }
  ],
  sports: [
    {
      name: 'Box Cricket (Boys)',
      type: 'Sports',
      image: '/event-images/box-cricket.jpg',
      description: 'Participate in this thrilling box cricket tournament.',
      host: 'Michael Brown',
      date: 'September 15, 2025',
      time: '10:00 AM - 6:00 PM',
      venue: 'Sports Ground, Meenakshi College of Engineering',
      team: 'Teams of 6',
      contact: 'box.cricket@mirai-enzan.com',
      rules: [
        "Only underarm bowling is allowed.",
        "No LBW; direct hit on stumps = out.",
        "If the ball hits the net/wall before a fielder catches it, it's not out.",
        "Standard cricket scoring applies.",
        "Umpire's decision is final."
      ],
      prizes: ['Championship Trophy', 'Medals']
    },
    {
      name: 'Football (Boys)',
      type: 'Tournament',
      image: '/event-images/football.jpg',
      description: 'Battle it out on the field in this exciting football tournament featuring tactical gameplay and team coordination.',
      host: 'Football Captain Swiftfoot',
      rules: [
        "No offside rule.",
        "Rolling substitutions allowed.",
        "Rough tackles, handballs, and misconduct lead to penalties.",
        "Referee's decision is final."
      ],
      prizes: ['Golden Boot Trophy', 'Best Team Award']
    },
    {
      name: 'Badminton (Boys & Girls)',
      type: 'Tournament',
      image: '/event-images/badminton.jpg',
      description: 'Showcase your agility and precision in singles and doubles badminton matches for both boys and girls.',
      host: 'Badminton Pro Quicksmash',
      rules: [
        "Standard badminton rules apply.",
        "Players must bring their own racquets; shuttlecock will be provided.",
        "Umpire's decision is final."
      ],
      prizes: ['Gold Medal (Singles/Doubles)', 'Silver Medal (Singles/Doubles)']
    },
    {
      name: 'Kho-Kho (Girls)',
      type: 'Tournament',
      image: '/event-images/kho-kho.jpg',
      description: 'Participate in this traditional Indian sport that tests speed, strategy, and teamwork in an exciting tag-based format.',
      host: 'Team Leader Swiftchase',
      rules: [
        "Standard Kho-Kho rules apply.",
        "Defenders must avoid getting touched by chasers.",
        "Umpire's decision is final."
      ],
      prizes: ['Kho-Kho Champions Cup', 'Best Chaser Award']
    },
    {
      name: 'Throwball (Girls)',
      type: 'Tournament',
      image: '/event-images/throwball.jpg',
      description: 'Compete in this non-contact ball sport that combines elements of volleyball and handball for female athletes.',
      host: 'Coach Steadyhand',
      rules: [
        "Ball must be caught and thrown (no volleyball-style hits).",
        "Each team gets three touches before returning the ball.",
        "No stepping on the boundary line while serving.",
        "Referee's decision is final."
      ],
      prizes: ['Throwball Champions Trophy', 'Best Thrower Award']
    },
    {
      name: 'Carrom',
      type: 'Competition',
      image: '/event-images/carrom.jpg',
      description: 'Test your precision and strategy in this tabletop game that combines elements of billiards, shuffleboard and checkers.',
      host: 'Carrom Master Strikeperfect',
      rules: [
        "Standard carrom board rules apply.",
        "No external powder allowed.",
        "Referee's decision is final."
      ],
      prizes: ['Carrom Champion', 'Precision Shot Award']
    },
    {
      name: 'Chess',
      type: 'Tournament',
      image: '/event-images/chess.jpg',
      description: 'Challenge your strategic thinking and foresight in this classic battle of minds on the checkered board.',
      host: 'Grandmaster Deepthought',
      rules: [
        "Standard FIDE chess rules apply.",
        "Players must not use external help (e.g., mobile phones).",
        "Arbiter's decision is final."
      ],
      prizes: ['Chess Champion Trophy', 'Mastermind Award']
    },
    {
      name: 'FF-MAX',
      type: 'Esports',
      image: '/event-images/ff-max.jpg',
      description: 'Compete in this popular battle royale mobile game tournament, showcasing your survival and combat skills in a premiere Esports competition.',
      host: 'Gaming Champion Pixelfire',
      isEsports: true,
      rules: [
        "Standard Free Fire tournament rules apply.",
        "Use of hacks or unfair gameplay leads to disqualification.",
        "Players must have their own devices and stable internet."
      ],
      prizes: ['Top Squad Award', 'Gaming Gear']
    },
    {
      name: 'CrossFit',
      type: 'Competition',
      image: '/event-images/crossfit.jpg',
      description: 'Test your strength, endurance and overall fitness in this high-intensity functional training competition.',
      host: 'Fitness Coach Ironmuscle',
      rules: [
        "Participants must complete challenges in the given time.",
        "Judges will assess form, stamina, and completion.",
        "Any misconduct or failure to complete tasks = disqualification."
      ],
      prizes: ['Fittest Athlete Award', 'Endurance Champion']
    },
    {
      name: 'BGMI',
      type: 'Esports',
      image: '/event-images/bgmi.jpg',
      description: 'Battle for victory in this tactical mobile shooter game tournament requiring teamwork and strategic thinking. A flagship Esports event for mobile gamers.',
      host: 'Esports Director Battleking',
      isEsports: true,
      rules: [
        "Standard BGMI tournament rules apply.",
        "No use of third-party software or cheats.",
        "Players must use their own mobile devices.",
        "Admin decision is final."
      ],
      prizes: ['Chicken Dinner Champion', 'Top Fragger Award']
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
                    onClick={() => handleRegisterClick(event)}
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
