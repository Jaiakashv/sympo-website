
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dragon-black to-dragon-navy">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About the Symposium</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-lg">
              <p className="text-dragon-cream/90">
                <span className="text-dragon-fire font-bold text-2xl">Miralenzan 2K25</span> is the premier gathering for dragon enthusiasts, scholars, and practitioners from around the world. 
              </p>
              <p className="text-dragon-cream/80">
                Join us for four days of intense workshops, competitive tournaments, expert panels, and networking opportunities with the brightest minds in dragon studies.
              </p>
              <p className="text-dragon-cream/80">
                Whether you're a seasoned dragonologist or a curious newcomer, Miralenzan offers something for everyone - from ancient draconic arts to cutting-edge fire-breathing techniques.
              </p>
              
              <div className="pt-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-dragon-fire flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dragon-cream">Expert-Led Sessions</h3>
                    <p className="text-dragon-cream/70">Learn from legendary dragon masters</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-dragon-fire flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 15c2.21 0 4-1.79 4-4 0-4-4-9-4-9s-4 5-4 9c0 2.21 1.79 4 4 4Z"/>
                      <path d="M12 15v3m0 4v.01M10 7v.01M14 7v.01M8 9v.01M16 9v.01"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dragon-cream">Competitive Tournaments</h3>
                    <p className="text-dragon-cream/70">Test your skills in epic competitions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-dragon-fire flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                      <path d="M2 12h20"/>
                    </svg>
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
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-dragon-fire/20 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 p-2 transform rotate-6">
                <div className="bg-dragon-navy border-4 border-dragon-fire rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                    alt="Dragon Artwork" 
                    className="w-full h-auto rounded-lg transform transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 z-20 transform -rotate-3">
                <div className="bg-dragon-navy border-4 border-dragon-cream/80 rounded-lg overflow-hidden shadow-xl w-40 h-40 md:w-48 md:h-48">
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
