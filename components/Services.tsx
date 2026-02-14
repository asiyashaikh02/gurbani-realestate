import React from 'react';
import SectionHeading from './SectionHeading';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-midnight-light border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Expertise" 
          subtitle="Comprehensive real estate solutions tailored for high-net-worth individuals." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;
            
            return (
              <div 
                key={service.id} 
                className="bg-midnight p-8 border border-white/5 hover:border-gold transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-midnight-light border border-gold flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <IconComponent className="text-gold group-hover:text-midnight transition-colors duration-300" size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-platinum leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;