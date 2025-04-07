
import React from 'react';
import { Flame, Activity, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dragon-black to-dragon-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dragon-fire/30 to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-title relative inline-block">
          About the Symposium
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-dragon-fire/20 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-lg">
              <p className="text-dragon-cream/90">
                <span className="text-dragon-fire font-bold text-2xl relative">
                  Miralenzan 2K25
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-dragon-orange to-dragon-red"></span>
                </span> is the premier gathering for dragon enthusiasts, scholars, and practitioners from around the world. 
              </p>
              <p className="text-dragon-cream/80">
                Join us for four days of intense workshops, competitive tournaments, expert panels, and networking opportunities with the brightest minds in dragon studies.
              </p>
              <p className="text-dragon-cream/80">
                Whether you're a seasoned dragonologist or a curious newcomer, Miralenzan offers something for everyone - from ancient draconic arts to cutting-edge fire-breathing techniques.
              </p>
              
              <div className="pt-8">
                <div className="flex items-center gap-4 mb-6 group hover-scale">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-dragon-orange to-dragon-red flex items-center justify-center flex-shrink-0 shadow-lg shadow-dragon-fire/20 group-hover:shadow-dragon-fire/40 transition-all duration-300">
                    <Flame className="text-white animate-flame" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dragon-cream">Expert-Led Sessions</h3>
                    <p className="text-dragon-cream/70">Learn from legendary dragon masters</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6 group hover-scale">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-dragon-orange to-dragon-red flex items-center justify-center flex-shrink-0 shadow-lg shadow-dragon-fire/20 group-hover:shadow-dragon-fire/40 transition-all duration-300">
                    <Activity className="text-white animate-flame" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dragon-cream">Competitive Tournaments</h3>
                    <p className="text-dragon-cream/70">Test your skills in epic competitions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover-scale">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-dragon-orange to-dragon-red flex items-center justify-center flex-shrink-0 shadow-lg shadow-dragon-fire/20 group-hover:shadow-dragon-fire/40 transition-all duration-300">
                    <Globe className="text-white animate-flame" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dragon-cream">Global Community</h3>
                    <p className="text-dragon-cream/70">Connect with dragon lovers worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-dragon-orange/20 to-dragon-red/20 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 p-2 transform rotate-6 hover:rotate-3 transition-transform duration-500 hover-scale">
                <div className="bg-dragon-navy border-4 border-dragon-fire rounded-lg overflow-hidden shadow-2xl shadow-dragon-fire/20 hover:shadow-dragon-fire/40 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                    alt="Dragon Artwork" 
                    className="w-full h-auto rounded-lg transform transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 hover-scale">
                <div className="bg-dragon-navy border-4 border-dragon-cream/80 rounded-lg overflow-hidden shadow-xl shadow-dragon-fire/10 hover:shadow-dragon-fire/30 transition-all duration-300 w-40 h-40 md:w-48 md:h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                    alt="Dragon Event" 
                    className="w-full h-full object-cover rounded-lg transform transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
