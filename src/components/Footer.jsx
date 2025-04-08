import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dragon-black">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img 
              src="/lovable-uploads/226d236f-9149-4ff6-adcb-6088d5053c46.png" 
              alt="Miralenzan Logo" 
              className="h-16 sm:h-20 mb-3 sm:mb-4"
            />
            <p className="text-dragon-cream/70 mb-3 sm:mb-4 text-sm sm:text-base">
              The premier gathering for dragon enthusiasts, scholars, and practitioners from around the world.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-dragon-navy border border-dragon-fire/30 flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:border-dragon-fire transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-dragon-navy border border-dragon-fire/30 flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:border-dragon-fire transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-dragon-navy border border-dragon-fire/30 flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:border-dragon-fire transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-dragon-navy border border-dragon-fire/30 flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:border-dragon-fire transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold text-dragon-cream mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['Home', 'About', 'Schedule', 'Events'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-dragon-cream/70 hover:text-dragon-fire transition-colors text-sm sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold text-dragon-cream mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['FAQs', 'Travel Info', 'Accommodations', 'Past Events', 'Gallery'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-dragon-cream/70 hover:text-dragon-fire transition-colors text-sm sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold text-dragon-cream mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dragon-fire mr-2 sm:mr-3 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-dragon-cream/70 text-sm sm:text-base">+1 (888) DRAGONS</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dragon-fire mr-2 sm:mr-3 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="m22 6-10 7L2 6"/>
                </svg>
                <span className="text-dragon-cream/70 text-sm sm:text-base">info@miralenzan2k25.com</span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dragon-fire mr-2 sm:mr-3 flex-shrink-0">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-dragon-cream/70 text-sm sm:text-base">Dragon's Peak Convention Center, Firemont</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-dragon-fire/10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-dragon-cream/50 text-xs sm:text-sm">
              &copy; 2025 Miralenzan Symposium. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-0">
              <a href="#" className="text-dragon-cream/50 hover:text-dragon-fire text-xs sm:text-sm">Privacy Policy</a>
              <a href="#" className="text-dragon-cream/50 hover:text-dragon-fire text-xs sm:text-sm">Terms of Service</a>
              <a href="#" className="text-dragon-cream/50 hover:text-dragon-fire text-xs sm:text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
