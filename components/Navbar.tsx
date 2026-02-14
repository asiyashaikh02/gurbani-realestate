import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-midnight/95 shadow-lg py-4 backdrop-blur-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold text-gold tracking-widest leading-none">
              GURBANI
            </span>
            <span className="font-sans text-xs text-platinum tracking-[0.3em] uppercase">
              Properties
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-sm text-platinum hover:text-gold transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="flex items-center space-x-2 border border-gold px-4 py-2 text-gold hover:bg-gold hover:text-midnight transition-all duration-300"
            >
              <Phone size={14} />
              <span className="font-serif text-sm font-bold">Book Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-midnight/95 backdrop-blur-lg border-t border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-lg text-platinum hover:text-gold text-center py-2 border-b border-white/5"
            >
              {item.label}
            </a>
          ))}
           <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-gold text-midnight font-bold py-3 mt-4"
            >
              Book Consultation
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;