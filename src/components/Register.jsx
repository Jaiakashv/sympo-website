
import React from 'react';

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
  return (
    <section id="register" className="py-20 bg-gradient-to-b from-dragon-navy to-dragon-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Register Now</h2>
        
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-xl text-dragon-cream/80">
            Secure your place at the world's premier dragon symposium. Early registration ensures access to limited capacity workshops and exclusive benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden ${
                pkg.recommended 
                  ? 'border-2 border-dragon-fire transform scale-105 shadow-xl shadow-dragon-fire/20' 
                  : 'border border-dragon-fire/30'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-dragon-fire text-white px-4 py-1 text-sm font-bold">
                  RECOMMENDED
                </div>
              )}
              
              <div className="bg-gradient-to-b from-dragon-navy/80 to-dragon-black p-8">
                <h3 className="text-2xl font-bold text-dragon-cream mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-dragon-fire mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-dragon-cream/80">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dragon-fire mr-3">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-md font-bold transition-all duration-300 ${
                    pkg.recommended 
                      ? 'bg-gradient-to-r from-dragon-orange to-dragon-red text-white shadow-lg hover:shadow-dragon-fire/40'
                      : 'bg-dragon-navy border border-dragon-fire/50 text-dragon-cream hover:bg-dragon-fire/10'
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-xl mx-auto">
          <div className="bg-dragon-navy/50 rounded-xl border border-dragon-fire/20 p-6">
            <h3 className="text-xl font-bold text-dragon-cream mb-4">Need more information?</h3>
            <p className="text-dragon-cream/70 mb-4">
              Contact our dragon handlers for custom packages, group registrations, or scholarship opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 bg-dragon-black/50 border border-dragon-fire/30 rounded-md text-dragon-cream placeholder:text-dragon-cream/40 focus:outline-none focus:border-dragon-fire"
              />
              <button className="fire-btn whitespace-nowrap">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
