import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="font-serif text-2xl font-bold text-gold tracking-widest">GURBANI</h2>
            <p className="text-xs text-platinum tracking-[0.4em] uppercase">Properties</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-platinum hover:text-gold hover:border-gold transition-all">
                <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-platinum hover:text-gold hover:border-gold transition-all">
                <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-platinum hover:text-gold hover:border-gold transition-all">
                <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans">
          <p>&copy; {new Date().getFullYear()} Gurbani Properties. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;