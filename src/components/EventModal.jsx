import React, { useState } from 'react';
import { X, Clock, MapPin, Users, Calendar, Award, Info, ChevronRight } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  if (!event) return null;

  // Example event details that would come from the event object
  const eventDetails = {
    date: "May 15, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium, Meenakshi College of Engineering",
    team: event.type.includes("Team") ? "2-4 members per team" : "Individual participation",
    rules: [
      "Participants must register in advance",
      "College ID is mandatory",
      "Time limits will be strictly enforced",
      "Judges' decision will be final"
    ],
    prizes: [
      "First Prize: ₹10,000",
      "Second Prize: ₹5,000",
      "Third Prize: ₹2,000"
    ],
    contact: "event.coordinator@mirai-enzan.com"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-gradient-to-b from-dragon-navy to-dragon-black rounded-lg overflow-hidden shadow-2xl shadow-dragon-fire/20 animate-scaleIn mt-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-dragon-cream z-20 hover:text-dragon-fire transition-colors bg-dragon-black/50 rounded-full p-1"
        >
          <X size={20} />
        </button>
        
        {/* Event poster header */}
        <div className="relative h-32 md:h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-dragon-black to-transparent z-10"></div>
          <img 
            src={event.detailImage || event.image} 
            alt={event.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <h2 className="text-2xl font-bold text-dragon-cream">{event.name}</h2>
            <p className="text-dragon-fire font-medium flex items-center text-sm">
              {event.type}
              {event.isEsports && (
                <span className="ml-2 bg-gradient-to-r from-dragon-orange to-dragon-red px-2 py-0.5 rounded-full text-white text-xs font-bold animate-pulse">
                  ESPORTS
                </span>
              )}
            </p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-dragon-fire/20">
          <button 
            className={`px-4 py-2 text-sm font-medium flex items-center ${activeTab === 'details' ? 'text-dragon-fire border-b-2 border-dragon-fire' : 'text-dragon-cream/70 hover:text-dragon-cream'}`}
            onClick={() => setActiveTab('details')}
          >
            <Info size={16} className="mr-2" />
            Details
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium flex items-center ${activeTab === 'rules' ? 'text-dragon-fire border-b-2 border-dragon-fire' : 'text-dragon-cream/70 hover:text-dragon-cream'}`}
            onClick={() => setActiveTab('rules')}
          >
            <Award size={16} className="mr-2" />
            Rules & Prizes
          </button>
        </div>
        
        {/* Content area */}
        <div className="p-4">
          {activeTab === 'details' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-base font-semibold text-dragon-cream mb-2">About this Event</h3>
                <p className="text-dragon-cream/80 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar size={16} className="text-dragon-fire mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-dragon-cream font-medium text-sm">Date</p>
                      <p className="text-dragon-cream/70 text-sm">{eventDetails.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={16} className="text-dragon-fire mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-dragon-cream font-medium text-sm">Time</p>
                      <p className="text-dragon-cream/70 text-sm">{eventDetails.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={16} className="text-dragon-fire mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-dragon-cream font-medium text-sm">Venue</p>
                      <p className="text-dragon-cream/70 text-sm">{eventDetails.venue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users size={16} className="text-dragon-fire mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-dragon-cream font-medium text-sm">Team Size</p>
                      <p className="text-dragon-cream/70 text-sm">{eventDetails.team}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="rounded-lg bg-dragon-navy/50 p-3 border border-dragon-fire/10 mb-4">
                  <h3 className="text-base font-semibold text-dragon-cream mb-1">Host</h3>
                  <p className="text-dragon-cream/80 text-sm">{event.host}</p>
                </div>
                
                <div className="rounded-lg bg-dragon-navy/50 p-3 border border-dragon-fire/10">
                  <h3 className="text-base font-semibold text-dragon-cream mb-1">Contact</h3>
                  <p className="text-dragon-cream/80 text-sm">{eventDetails.contact}</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'rules' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-base font-semibold text-dragon-cream mb-2">Rules</h3>
                <ul className="space-y-2">
                  {eventDetails.rules.map((rule, index) => (
                    <li key={index} className="flex">
                      <ChevronRight size={14} className="text-dragon-fire mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-dragon-cream/80 text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-base font-semibold text-dragon-cream mb-2">Prizes</h3>
                <div className="space-y-2">
                  {eventDetails.prizes.map((prize, index) => (
                    <div 
                      key={index} 
                      className={`p-2 rounded-md border ${
                        index === 0 ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-500/30' :
                        index === 1 ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/30' :
                        'bg-gradient-to-r from-amber-700/20 to-amber-800/20 border-amber-700/30'
                      }`}
                    >
                      <p className="text-dragon-cream/90 font-medium text-sm">{prize}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <button 
            className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-dragon-orange to-dragon-red text-white font-bold rounded-md hover:from-dragon-red hover:to-dragon-orange transition-all hover:shadow-lg hover:shadow-dragon-fire/30 focus:ring-2 focus:ring-dragon-fire focus:ring-offset-2 focus:ring-offset-dragon-black text-sm"
            onClick={() => window.open('https://forms.gle/your-registration-form-link', '_blank')}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal; 