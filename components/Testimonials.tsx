import React from 'react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-midnight relative">
       {/* Background texture */}
       <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'linear-gradient(30deg, #0A0A45 12%, transparent 12.5%, transparent 87%, #0A0A45 87.5%, #0A0A45), linear-gradient(150deg, #0A0A45 12%, transparent 12.5%, transparent 87%, #0A0A45 87.5%, #0A0A45), linear-gradient(30deg, #0A0A45 12%, transparent 12.5%, transparent 87%, #0A0A45 87.5%, #0A0A45), linear-gradient(150deg, #0A0A45 12%, transparent 12.5%, transparent 87%, #0A0A45 87.5%, #0A0A45), linear-gradient(60deg, #111155 25%, transparent 25.5%, transparent 75%, #111155 75%, #111155), linear-gradient(60deg, #111155 25%, transparent 25.5%, transparent 75%, #111155 75%, #111155)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px' 
        }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Client Stories" 
          subtitle="Trusted by Nagpur's most influential families and business leaders." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#050520]/80 backdrop-blur-md p-10 border border-gold/20 relative">
              <Quote className="absolute top-6 left-6 text-gold/20 w-12 h-12" />
              <p className="font-sans text-platinum italic mb-6 relative z-10">"{t.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-0.5 bg-gold mr-4"></div>
                <div>
                    <h4 className="font-serif font-bold text-white uppercase">{t.name}</h4>
                    <p className="text-xs text-gold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;