import React, { useState, useEffect } from 'react';
import { X, Clock, MapPin, Users, Calendar, Award, Info, Phone, ArrowRight } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-dragon-navy to-dragon-black text-dragon-cream rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mt-16 sm:mt-20">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-dragon-cream hover:text-dragon-fire transition-all duration-300 bg-dragon-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-dragon-black/70 hover:scale-110"
          >
            <X size={20} />
          </button>
          
          <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-dragon-black via-dragon-black/70 to-transparent z-10"></div>
            <img 
              src={event.detailImage || event.image} 
              alt={event.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-dragon-cream drop-shadow-lg">{event.name}</h2>
              <p className="text-dragon-fire font-medium text-base sm:text-lg flex items-center">
                {event.type}
                {event.isEsports && (
                  <span className="ml-3 bg-gradient-to-r from-dragon-orange to-dragon-red px-3 py-1 rounded-full text-white text-xs font-bold animate-pulse">
                    ESPORTS
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex space-x-3 mb-5">
              <button
                onClick={() => setActiveTab('details')}
                className={`px-4 py-2 text-sm sm:text-base rounded-full transition-all duration-300 ${
                  activeTab === 'details'
                    ? 'bg-gradient-to-r from-dragon-fire to-dragon-orange text-dragon-cream shadow-lg shadow-dragon-fire/20'
                    : 'bg-dragon-navy text-dragon-cream/70 hover:bg-dragon-navy/80'
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('rules')}
                className={`px-4 py-2 text-sm sm:text-base rounded-full transition-all duration-300 ${
                  activeTab === 'rules'
                    ? 'bg-gradient-to-r from-dragon-fire to-dragon-orange text-dragon-cream shadow-lg shadow-dragon-fire/20'
                    : 'bg-dragon-navy text-dragon-cream/70 hover:bg-dragon-navy/80'
                }`}
              >
                Rules & Prizes
              </button>
            </div>

            {activeTab === 'details' && (
              <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex items-center text-dragon-cream/80 bg-dragon-navy/50 p-3 rounded-lg">
                    <Calendar className="mr-3 text-dragon-fire" size={18} />
                    <span className="text-sm sm:text-base">{event.date}</span>
                  </div>
                  <div className="flex items-center text-dragon-cream/80 bg-dragon-navy/50 p-3 rounded-lg">
                    <Clock className="mr-3 text-dragon-fire" size={18} />
                    <span className="text-sm sm:text-base">{event.time}</span>
                  </div>
                  <div className="flex items-center text-dragon-cream/80 bg-dragon-navy/50 p-3 rounded-lg">
                    <MapPin className="mr-3 text-dragon-fire" size={18} />
                    <span className="text-sm sm:text-base">{event.venue}</span>
                  </div>
                  <div className="flex items-center text-dragon-cream/80 bg-dragon-navy/50 p-3 rounded-lg">
                    <Users className="mr-3 text-dragon-fire" size={18} />
                    <span className="text-sm sm:text-base">{event.team}</span>
                  </div>
                </div>
                <div className="flex items-center text-dragon-cream/80 bg-dragon-navy/50 p-3 rounded-lg">
                  <Phone className="mr-3 text-dragon-fire" size={18} />
                  <span className="text-sm sm:text-base">{event.contact}</span>
                </div>
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center text-dragon-cream/80">
                    <Info className="mr-3 text-dragon-fire" size={18} />
                    <h3 className="font-bold text-lg sm:text-xl">Rules & Guidelines</h3>
                  </div>
                  <ul className="space-y-3 pl-4">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="text-dragon-cream/80 flex items-start text-sm sm:text-base bg-dragon-navy/30 p-3 rounded-lg">
                        <span className="text-dragon-fire mr-2">•</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-dragon-cream/80">
                    <Award className="mr-3 text-dragon-fire" size={18} />
                    <h3 className="font-bold text-lg sm:text-xl">Prizes</h3>
                  </div>
                  <ul className="space-y-3 pl-4">
                    {event.prizes.map((prize, index) => (
                      <li key={index} className="text-dragon-cream/80 flex items-start text-sm sm:text-base bg-dragon-navy/30 p-3 rounded-lg">
                        <span className="text-dragon-fire mr-2">•</span>
                        {prize}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-6">
              <a
                href="https://forms.gle/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-dragon-fire to-dragon-orange text-dragon-cream rounded-lg hover:from-dragon-orange hover:to-dragon-fire transition-all duration-300 text-base font-medium shadow-lg shadow-dragon-fire/20 hover:shadow-xl hover:shadow-dragon-fire/30 transform hover:scale-[1.02]"
              >
                Register Now
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal; 