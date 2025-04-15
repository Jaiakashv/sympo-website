import React, { useState } from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

const scheduleData = {
  'Day 1 - April 25': [
    {
      time: '10:00 Am - 12:00 PM',
      title: 'UI/UX',
      location: 'CSE LAB (5TH Floor)'
    },
    {
      time: '10:00 Am - 1:00 PM',
      title: 'Workshops',
      location: 'CSE Lab (5TH Floor)'
    },
    {
      time: '9:00 AM - 12:30 PM',
      title: 'Sparkathon',
      location: 'CSE Lab (5TH Floor)'
    },
    {
      time: '9:00 AM - 1:00 PM',
      title: 'Debugging',
      location: '5th floor-511'
    },
    {
      time: '9:00 AM - 11:00 AM',
      title: 'Technical Quiz',
      location: '5th floor-510'
    },
    {
      time: '9:00 AM - 12:00 PM',
      title: 'Paper Presentation',
      location: 'CSE Lab (5TH Floor)'
    },
    {
      time: '8:00 AM - 2:00 PM',
      title: 'sports',
      location: 'Turf & Ground'
    },
    {
      time: '9:00 AM - 12:00 PM',
      title: 'FF-MAX & BGMI',
      location: '5th floor ( 514,515)'
    },
    {
      time: '9:00 AM - 12:00 PM',
      title: 'Chess , Carrom , Cross fit',
      location: '5th floor-512,513,516'
    },
    
    
    
  ],
  'Day 2 - April 26': [
    {
      time: 'Starts at 9:00 AM',
      title: 'ALL Cultural Events',
      location: 'Stage'
    },
    {
      time: '10:00 AM - 11:00 AM',
      title: 'Cinematic Quiz',
      location: '5th Floor -510'
    },
    {
      time: '10:00 AM - 12:00 PM',
      title: 'Anime Quiz',
      location: '5th Floor -510'
    },
    {
      time: '11:00 AM - 12:00 PM',
      title: 'Debate',
      location: 'TBD'
    },
    
    
    {
      time: '9:30 AM - 12:00 PM',
      title: 'IPL Mock Auction',
      location: '5th Floor -514'
    },
    {
      time: '11:00 AM - 12:00 PM',
      title: 'Mehandi',
      location: '5th Floor -512'
    },
    {
      time: '11:00 AM - 12:30 PM',
      title: 'Portrait Painting',
      location: '5th Floor -511'
    },
    {
      time: '10:00 AM - 11:30 PM',
      title: 'Bridge the gap',
      location: '5th Floor -514'
    }, 
  ]
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Day 1 - April 25');

  return (
    <section id="schedule" className="py-8 sm:py-12 bg-gradient-to-b from-dragon-navy to-dragon-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 -left-12 w-32 h-32 bg-dragon-fire/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-dragon-fire/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dragon-cream mb-6">Event Schedule</h2>
        
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeDay === day 
                  ? 'bg-dragon-fire text-white' 
                  : 'bg-dragon-navy text-dragon-cream/80 hover:text-dragon-cream border border-dragon-fire/30'
              }`}
            >
              {day.split(' - ')[0]}
            </button>
          ))}
        </div>
        
        <div className="bg-dragon-navy/70 rounded-lg border border-dragon-fire/20 p-4 sm:p-6">
          <div className="text-center mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-dragon-fire">
              {activeDay.split(' - ')[0]}
              <span className="text-dragon-cream/70 text-base sm:text-lg ml-2">
                ({activeDay.split(' - ')[1]})
              </span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {scheduleData[activeDay].map((event, index) => (
              <div 
                key={index} 
                className="bg-dragon-black/40 rounded-lg p-3 border border-dragon-fire/10 hover:border-dragon-fire/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-2">
                  <Clock className="text-dragon-fire mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-white font-medium text-sm">
                    {event.time}
                  </span>
                </div>
                
                <h4 className="text-dragon-fire font-bold text-lg mb-2 line-clamp-2">
                  {event.title}
                </h4>
                
                <div className="flex items-center text-dragon-cream/70">
                  <MapPin className="text-dragon-fire mr-2 flex-shrink-0" size={16} />
                  <span className="text-sm">
                    {event.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
