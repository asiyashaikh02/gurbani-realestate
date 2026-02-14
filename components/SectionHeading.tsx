import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}) => {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  const titleColor = light ? 'text-midnight' : 'text-white';
  const subtitleColor = light ? 'text-gray-600' : 'text-platinum';

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      <h2 className={`font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest ${titleColor} mb-3`}>
        {title}
      </h2>
      <div className="w-24 h-0.5 bg-gold mb-4"></div>
      {subtitle && (
        <p className={`font-sans text-base md:text-lg max-w-2xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;