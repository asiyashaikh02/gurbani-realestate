import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center bg-midnight overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C0A04C 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-full">
          
          {/* Text Content - Left Side */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0 order-2 md:order-1">
            <div className="flex items-center space-x-4 mb-6 animate-fade-in-up">
               <span className="h-px w-12 bg-gold"></span>
               <h2 className="text-gold font-sans uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
                  Luxury Real Estate Authority
               </h2>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
              Curating <br/>
              Nagpur’s <span className="text-gold italic">Finest</span>
            </h1>

            <p className="font-sans text-platinum text-base md:text-lg max-w-lg mb-10 font-light leading-relaxed">
              Unlock exclusive access to premium properties and high-yield investment opportunities with Mohit Gurbani.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <Button onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}>
                View Exclusive Portfolio
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8 w-full justify-center md:justify-start">
               <div>
                  <div className="font-serif text-2xl text-white font-bold">38.9K+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Followers</div>
               </div>
               <div className="w-px h-8 bg-white/10"></div>
               <div>
                  <div className="font-serif text-2xl text-white font-bold">₹50Cr+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Assets Managed</div>
               </div>
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="md:w-1/2 relative h-[50vh] md:h-screen w-full flex items-end justify-center md:justify-end order-1 md:order-2">
            
            {/* Main Image with Gradient Mask */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-midnight/20 to-midnight md:bg-gradient-to-r md:from-midnight md:via-transparent md:to-transparent z-10"></div>
            
            {/* Image removed as requested */}

            {/* Decorative Frame/Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 hidden md:flex flex-col items-center gap-4 z-20">
        <div className="text-gold text-[10px] uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll Down</div>
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;