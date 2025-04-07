
import React, { useState } from 'react';

const scheduleData = {
  'Day 1 - July 15': [
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Opening Ceremony',
      speaker: 'Elder Drakonir',
      location: 'Main Hall',
      description: 'Welcome address and fire lighting ritual to commence the symposium.'
    },
    {
      time: '11:00 AM - 12:30 PM',
      title: 'The Evolution of Eastern Dragons',
      speaker: 'Mei Ling',
      location: 'Eastern Wing',
      description: 'Historical analysis of dragon mythology across Asian cultures.'
    },
    {
      time: '2:00 PM - 4:00 PM',
      title: 'Flame Control Workshop',
      speaker: 'Blaze Master Ryuji',
      location: 'Fire Pit Arena',
      description: 'Hands-on workshop for advanced fire manipulation techniques.'
    },
    {
      time: '5:00 PM - 7:00 PM',
      title: 'Welcome Reception',
      speaker: 'All Participants',
      location: 'Grand Courtyard',
      description: 'Networking event with refreshments and entertainment.'
    }
  ],
  'Day 2 - July 16': [
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Dragons in Modern Media',
      speaker: 'Prof. Jackson Harper',
      location: 'Media Center',
      description: 'Exploring dragon representations in film, games, and literature.'
    },
    {
      time: '11:00 AM - 1:00 PM',
      title: 'Scale Crafting Competition',
      speaker: 'Judge: Mistress Vyranna',
      location: 'Artisan Hall',
      description: 'Competitive event for dragon-inspired armor and accessories.'
    },
    {
      time: '2:30 PM - 4:00 PM',
      title: 'Flight Dynamics Seminar',
      speaker: 'Aeronautics Expert Drake Wing',
      location: 'Sky Theater',
      description: 'Scientific approach to understanding dragon flight capabilities.'
    },
    {
      time: '5:00 PM - 7:00 PM',
      title: 'Fireside Stories',
      speaker: 'Lorekeeper Grimm',
      location: 'Night Garden',
      description: 'Traditional storytelling session of ancient dragon tales.'
    }
  ],
  'Day 3 - July 17': [
    {
      time: '9:00 AM - 11:00 AM',
      title: 'Dragon Combat Tactics',
      speaker: 'Battle Master Scorch',
      location: 'Training Grounds',
      description: 'Strategic approaches to dragon-based warfare and defense.'
    },
    {
      time: '12:00 PM - 1:30 PM',
      title: 'Culinary Arts: Cooking with Dragon Fire',
      speaker: 'Chef Ignatius',
      location: 'Flame Kitchen',
      description: 'Demonstration of special cooking techniques using controlled flames.'
    },
    {
      time: '2:00 PM - 4:00 PM',
      title: 'Dragon Summoning Ritual',
      speaker: 'Grand Mage Azuria',
      location: 'Ritual Circle',
      description: 'Theoretical and practical approaches to dragon communication.'
    },
    {
      time: '5:00 PM - 8:00 PM',
      title: 'Tournament of Champions',
      speaker: 'Multiple Contestants',
      location: 'Grand Arena',
      description: 'Annual competition showcasing dragon handling and control skills.'
    }
  ],
  'Day 4 - July 18': [
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Future of Dragon Studies',
      speaker: 'Council of Elders',
      location: 'Discussion Hall',
      description: 'Panel discussion on emerging trends and research opportunities.'
    },
    {
      time: '11:00 AM - 1:00 PM',
      title: 'Scale & Talon Expo',
      speaker: 'Various Exhibitors',
      location: 'Exhibition Hall',
      description: 'Showcase of dragon-related innovations, art, and products.'
    },
    {
      time: '2:00 PM - 3:30 PM',
      title: 'Closing Address',
      speaker: 'Elder Drakonir',
      location: 'Main Hall',
      description: 'Reflection on the symposium and future vision.'
    },
    {
      time: '4:00 PM - Late',
      title: 'Farewell Feast & Fire Dance',
      speaker: 'All Participants',
      location: 'Grand Courtyard',
      description: 'Celebration featuring traditional fire dancers and festive dining.'
    }
  ]
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Day 1 - July 15');

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-dragon-navy to-dragon-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Event Schedule</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeDay === day 
                  ? 'bg-dragon-fire text-white shadow-lg shadow-dragon-fire/30' 
                  : 'bg-dragon-navy text-dragon-cream/70 hover:text-dragon-cream border border-dragon-fire/30'
              }`}
            >
              {day.split(' - ')[0]}
            </button>
          ))}
        </div>
        
        <div className="bg-dragon-navy/50 rounded-2xl border border-dragon-fire/20 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-dragon-cream">
            {activeDay}
          </h3>
          
          <div className="space-y-6">
            {scheduleData[activeDay].map((event, index) => (
              <div 
                key={index} 
                className="fire-card p-6 hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
                  <div className="bg-dragon-fire/20 text-dragon-cream rounded-full px-4 py-1 text-sm font-medium inline-block mb-2 md:mb-0">
                    {event.time}
                  </div>
                  <div className="text-dragon-cream/70 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {event.location}
                  </div>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-dragon-fire mb-2">{event.title}</h4>
                
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dragon-cream/60 mr-2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span className="text-dragon-cream/90 font-medium">{event.speaker}</span>
                </div>
                
                <p className="text-dragon-cream/70">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
