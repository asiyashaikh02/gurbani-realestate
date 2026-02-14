import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { PROPERTIES } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';

const Properties: React.FC = () => {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Collection" 
          subtitle="Hand-picked residences and commercial assets for the discerning investor." 
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROPERTIES.map((property) => (
            <div 
              key={property.id} 
              className="group bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border-b-4 border-gold"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-midnight text-gold font-serif font-bold px-4 py-1 uppercase text-sm tracking-wider">
                  {property.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center text-gray-500 mb-2 text-sm">
                  <MapPin size={14} className="text-gold mr-1" />
                  {property.location}
                </div>
                <h3 className="font-serif text-xl font-bold text-midnight mb-4 group-hover:text-gold transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 uppercase tracking-wide">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="font-serif text-2xl font-bold text-midnight">
                    {property.price}
                  </span>
                  <button className="flex items-center text-gold font-bold text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    Details <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" className="text-midnight border-midnight hover:bg-midnight hover:text-white">
            Request Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;