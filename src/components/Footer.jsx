import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, X, Facebook, Linkedin, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-dragon-navy to-dragon-black text-dragon-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dragon-fire/30 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-dragon-fire/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-dragon-cream font-bold text-lg sm:text-xl">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <User className="text-dragon-fire mt-1 flex-shrink-0" size={18} />
                <span className="text-dragon-cream/80 text-sm sm:text-base">President: Harish , Abinaya</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-dragon-fire mt-1 flex-shrink-0" size={18} />
                <span className="text-dragon-cream/80 text-sm sm:text-base">+91 70109 48116 & +91 89253 01438 </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-dragon-fire mt-1 flex-shrink-0" size={18} />
                <span className="text-dragon-cream/80 text-sm sm:text-base">
                  Meenakshi College of Engineering,<br />
                  Chennai, Tamil Nadu
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-dragon-fire mt-1 flex-shrink-0" size={18} />
                <span className="text-dragon-cream/80 text-sm sm:text-base">9:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-dragon-cream font-bold text-lg sm:text-xl">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Events', 'Schedule'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-dragon-cream/70 hover:text-dragon-fire transition-colors text-sm sm:text-base flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-dragon-fire rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-dragon-cream font-bold text-lg sm:text-xl">Location</h3>
            <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-dragon-fire/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.90534158897!2d80.18611207454757!3d13.041696913338697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266cd13687e19%3A0xcde1489bf2db3882!2sMeenakshi%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1744245730046!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-dragon-cream font-bold text-lg sm:text-xl">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mirai_enzan_2k25?igsh=cGs4cG5hZXk1cXJ3&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dragon-navy flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:bg-dragon-navy/80 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.instagram.com/mirai_enzan_2k25?igsh=cGs4cG5hZXk1cXJ3&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dragon-navy flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:bg-dragon-navy/80 transition-all duration-300"
              >
                <X size={20} />
              </a>
              <a 
                href="https://www.instagram.com/mirai_enzan_2k25?igsh=cGs4cG5hZXk1cXJ3&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dragon-navy flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:bg-dragon-navy/80 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/mirai_enzan_2k25?igsh=cGs4cG5hZXk1cXJ3&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dragon-navy flex items-center justify-center text-dragon-cream/70 hover:text-dragon-fire hover:bg-dragon-navy/80 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dragon-fire/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dragon-cream/50 text-sm sm:text-base">
            © 2025 Mirai Enzan. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <p className="text-dragon-cream/50 text-sm sm:text-base animate-pulse hover:animate-none hover:text-dragon-fire transition-all duration-900 relative group">
              Designed & Developed by Jaiakash
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dragon-fire group-hover:w-full transition-all duration-300"></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
