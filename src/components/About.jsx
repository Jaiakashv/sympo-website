import React from 'react';
import { Flame, Activity, Globe, Award, Users, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-dragon-black to-dragon-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dragon-fire/30 to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-44 sm:w-64 h-44 sm:h-64 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-title relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12">
          About the Symposium
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-dragon-fire/20 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
              <p className="text-dragon-cream/90">
                <span className="text-dragon-fire font-bold text-xl sm:text-2xl relative">
                  Mirai enzan 2K25
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-dragon-orange to-dragon-red"></span>
                </span>  is a National Level Technical Symposium proudly organized by the Department of Computer Science and Engineering. The term "Mirai Enzan" – meaning "Future computation" – reflects our vision to build a future driven by innovation, intelligence, and impact. 
              </p>
              <p className="text-dragon-cream/80">
              This grand event serves as a dynamic platform for students, tech enthusiasts, and innovators from across the nation to showcase their talents, exchange ideas, and engage in healthy competition. Through a wide range of events including technical contests, workshops, coding battles, project expos, paper presentations, and fun-filled spot events, we aim to foster creativity, critical thinking, and collaboration among future tech leaders.
              </p>
              <p className="text-dragon-cream/80">
              Whether you're a coder, designer, thinker, or doer – Mirai Enzan offers a space to challenge yourself, learn new skills, and connect with like-minded peers and professionals
              </p>
              
              <div className="pt-6 sm:pt-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 group hover-scale">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-dragon-orange to-dragon-red flex items-center justify-center flex-shrink-0 shadow-lg shadow-dragon-fire/20 group-hover:shadow-dragon-fire/40 transition-all duration-300">
                    <Award className="text-white animate-flame" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-dragon-cream">Technical Excellence</h3>
                    <p className="text-sm sm:text-base text-dragon-cream/70">Showcase your technical skills in various competitions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 group hover-scale">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-dragon-orange to-dragon-red flex items-center justify-center flex-shrink-0 shadow-lg shadow-dragon-fire/20 group-hover:shadow-dragon-fire/40 transition-all duration-300">
                    <Users className="text-white animate-flame" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-dragon-cream">Networking with other Students</h3>
                    <p className="text-sm sm:text-base text-dragon-cream/70">Network with other students & Learn new knowledge from them.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 group hover-scale">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-dragon-orange to-dragon-red flex items-center justify-center flex-shrink-0 shadow-lg shadow-dragon-fire/20 group-hover:shadow-dragon-fire/40 transition-all duration-300">
                    <Trophy className="text-white animate-flame" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-dragon-cream">Prestigious Awards</h3>
                    <p className="text-sm sm:text-base text-dragon-cream/70">Win exciting prizes and recognition for your achievements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-dragon-orange/20 to-dragon-red/20 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 p-2 transform rotate-6 hover:rotate-3 transition-transform duration-500 hover-scale">
                <div className="bg-dragon-navy border-4 border-dragon-fire rounded-lg overflow-hidden shadow-2xl shadow-dragon-fire/20 hover:shadow-dragon-fire/40 transition-all duration-300">
                  <img 
                    src="/event-images/about-1.png" 
                    alt="Dragon Artwork" 
                    className="w-full h-auto rounded-lg transform transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 hover-scale hidden sm:block">
                <div className="bg-dragon-navy border-4 border-dragon-cream/80 rounded-lg overflow-hidden shadow-xl shadow-dragon-fire/10 hover:shadow-dragon-fire/30 transition-all duration-300 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                  <img 
                    src="/event-images/about-2.jpg" 
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
