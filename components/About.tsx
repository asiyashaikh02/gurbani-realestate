import React from 'react';
import SectionHeading from './SectionHeading';
import { Award, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-midnight relative">
        {/* Subtle patterned background */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C0A04C 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold/30 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <img 
              src="https://picsum.photos/id/1059/600/800" 
              alt="Mohit Gurbani" 
              className="relative w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl"
            />
          </div>

          {/* Content Side */}
          <div>
            <SectionHeading 
              title="About Mohit Gurbani" 
              align="left" 
              subtitle="More than a realtor, your strategic investment partner." 
            />
            
            <div className="space-y-6 font-sans text-platinum leading-relaxed mb-8">
              <p>
                With a commanding presence in Nagpur’s luxury real estate sector, Mohit Gurbani has redefined property acquisition for the elite. 
                Gurbani Properties isn't just about transactions; it's about curating a lifestyle and securing generational wealth.
              </p>
              <p>
                Backed by a community of over 38.9K followers, Mohit combines digital influence with deep market analytics to bring you high-yield investment opportunities and prestigious residential addresses.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-serif text-2xl font-bold text-white">38K+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Community</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-serif text-2xl font-bold text-white">50Cr+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Sold Inventory</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-serif text-2xl font-bold text-white">18%</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Avg. Yield</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;