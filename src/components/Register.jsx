
import React, { useState } from 'react';
import { Check, Sparkles, Flame } from 'lucide-react';

const packages = [
  {
    name: 'Dragon Initiate',
    price: '$299',
    features: [
      'Access to all basic sessions',
      'Welcome kit with symposium materials',
      'Entry to opening ceremony',
      'Digital certificate of attendance'
    ],
    recommended: false,
    buttonText: 'Register as Initiate'
  },
  {
    name: 'Flame Master',
    price: '$599',
    features: [
      'All Initiate benefits',
      'Priority seating at all events',
      'Access to exclusive workshops',
      'Commemorative dragon scale medallion',
      '1-year subscription to Dragon Quarterly'
    ],
    recommended: true,
    buttonText: 'Register as Master'
  },
  {
    name: 'Elder Wyrm',
    price: '$999',
    features: [
      'All Flame Master benefits',
      'VIP reception with speakers',
      'Private dragon wisdom session',
      'Limited edition fire-forged art piece',
      'Lifetime membership to Miralenzan Guild'
    ],
    recommended: false,
    buttonText: 'Register as Elder'
  }
];

const Register = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);
  const [activePackage, setActivePackage] = useState(1);

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-dragon-navy to-dragon-black relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dragon-fire/30 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      
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
          Register Now
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-dragon-fire/20 rounded-full"></div>
        </h2>
        
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-xl text-dragon-cream/80">
            Secure your place at the world's premier dragon symposium. Early registration ensures access to limited capacity workshops and exclusive benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                hoveredPackage === index ? 'transform scale-[1.02]' : ''
              } ${
                pkg.recommended 
                  ? 'border-2 border-dragon-fire transform md:scale-105 shadow-xl shadow-dragon-fire/20' 
                  : 'border border-dragon-fire/30'
              }`}
              onMouseEnter={() => setHoveredPackage(index)}
              onMouseLeave={() => setHoveredPackage(null)}
              onClick={() => setActivePackage(index)}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-dragon-orange to-dragon-red text-white px-4 py-1 text-sm font-bold z-10 flex items-center shadow-md">
                  <Sparkles size={14} className="mr-1 animate-flame" />
                  RECOMMENDED
                </div>
              )}
              
              <div className={`bg-gradient-to-b from-dragon-navy/80 to-dragon-black p-8 relative overflow-hidden ${
                activePackage === index ? 'ring-2 ring-dragon-fire/50' : ''
              }`}>
                {/* Background effects */}
                <div className={`absolute inset-0 bg-dragon-fire/5 opacity-0 transition-opacity duration-500 ${
                  hoveredPackage === index || activePackage === index ? 'opacity-100' : ''
                }`}></div>
                
                <h3 className="text-2xl font-bold text-dragon-cream mb-2 relative">
                  {pkg.name}
                  {hoveredPackage === index && (
                    <span className="absolute -right-4 -top-4">
                      <Flame size={20} className="text-dragon-fire/40 animate-flame" />
                    </span>
                  )}
                </h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-dragon-orange to-dragon-red bg-clip-text text-transparent mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-dragon-cream/80 group">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                        hoveredPackage === index || activePackage === index 
                          ? 'bg-gradient-to-r from-dragon-orange to-dragon-red'
                          : 'bg-dragon-fire/30'
                      } transition-all duration-300`}>
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="group-hover:text-dragon-cream transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-md font-bold transition-all duration-500 relative overflow-hidden group ${
                    pkg.recommended || hoveredPackage === index || activePackage === index
                      ? 'bg-gradient-to-r from-dragon-orange to-dragon-red text-white shadow-lg hover:shadow-dragon-fire/40'
                      : 'bg-dragon-navy border border-dragon-fire/50 text-dragon-cream hover:bg-dragon-fire/10'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {pkg.buttonText}
                    {(pkg.recommended || hoveredPackage === index || activePackage === index) && 
                      <Flame size={16} className="ml-2 animate-flame" />
                    }
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-dragon-orange to-dragon-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute top-0 left-0 w-48 h-full bg-white/20 transform -skew-x-20 translate-x-0 group-hover:translate-x-96 transition-transform duration-1000"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-xl mx-auto">
          <div className="bg-gradient-to-b from-dragon-navy/50 to-dragon-black/50 rounded-xl border border-dragon-fire/20 p-6 shadow-lg shadow-dragon-fire/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-dragon-cream mb-4">Need more information?</h3>
            <p className="text-dragon-cream/70 mb-4">
              Contact our dragon handlers for custom packages, group registrations, or scholarship opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 bg-dragon-black/50 border border-dragon-fire/30 rounded-md text-dragon-cream placeholder:text-dragon-cream/40 focus:outline-none focus:ring-2 focus:ring-dragon-fire/50 focus:border-dragon-fire transition-all duration-300"
              />
              <button className="fire-btn group whitespace-nowrap">
                <span className="relative z-10 flex items-center">
                  Contact Us
                  <Flame size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-dragon-orange to-dragon-red"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-dragon-fire to-dragon-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform skew-x-20 translate-x-0 group-hover:translate-x-96 transition-transform duration-1000"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
