import React from 'react';
import SectionHeading from './SectionHeading';
import { Train, Globe, Building2, ArrowRight, TrendingUp } from 'lucide-react';

const NagpurAdvantage: React.FC = () => {
  return (
    <section className="py-24 bg-midnight relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#000033]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#02023a] transform skew-x-12 opacity-50"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#C0A04C 0.5px, transparent 0.5px), linear-gradient(90deg, #C0A04C 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="The Nagpur Advantage" 
          subtitle="Strategic insights into India's emerging logistics and IT capital." 
        />

        {/* Key Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-y border-gold/20 py-8 bg-midnight/80 backdrop-blur-md">
            <div className="text-center border-r border-gold/10 last:border-0">
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">14%</div>
                <div className="text-xs text-gold uppercase tracking-widest">Avg. Capital Appreciation</div>
            </div>
            <div className="text-center border-r border-gold/10 last:border-0">
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">Top 5</div>
                <div className="text-xs text-gold uppercase tracking-widest">Fastest Growing Cities</div>
            </div>
            <div className="text-center border-r border-gold/10 last:border-0">
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">₹67Bn</div>
                <div className="text-xs text-gold uppercase tracking-widest">Metro Phase II Budget</div>
            </div>
            <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">0 Mile</div>
                <div className="text-xs text-gold uppercase tracking-widest">Logistics Connectivity</div>
            </div>
        </div>

        {/* Visual Chart Section */}
        <div className="mb-24 bg-midnight-light/50 border border-gold/10 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
               <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="text-gold" size={20} />
                  <span className="text-gold font-bold uppercase text-xs tracking-widest">Market Growth</span>
               </div>
               <h3 className="text-2xl font-serif font-bold text-white mb-4">Property Valuation Trends (2019-2024)</h3>
               <p className="text-platinum text-sm leading-relaxed mb-6">
                 Property prices in prime Nagpur zones (Civil Lines, Dharampeth) have consistently outperformed the national average, driven by infrastructure delivery and IT sector expansion.
               </p>
               <div className="flex gap-4">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gold rounded-full"></div>
                    <span className="text-xs text-gray-400">Nagpur Prime</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <span className="text-xs text-gray-400">Tier-2 Avg</span>
                 </div>
               </div>
            </div>

            <div className="md:w-2/3 w-full h-64 relative">
              {/* Custom SVG Chart */}
              <svg viewBox="0 0 600 200" className="w-full h-full overflow-visible">
                {/* Grid Lines */}
                <line x1="0" y1="180" x2="600" y2="180" stroke="#333" strokeWidth="1" />
                <line x1="0" y1="120" x2="600" y2="120" stroke="#333" strokeDasharray="4" strokeWidth="1" />
                <line x1="0" y1="60" x2="600" y2="60" stroke="#333" strokeDasharray="4" strokeWidth="1" />

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="goldGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C0A04C" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#C0A04C" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Data Area (Nagpur) - Points: 0,160 -> 120,150 -> 240,130 -> 360,100 -> 480,60 -> 600,20 */}
                <path 
                  d="M0,160 L120,150 L240,130 L360,100 L480,60 L600,20 V180 H0 Z" 
                  fill="url(#goldGradient)" 
                />
                <polyline 
                  points="0,160 120,150 240,130 360,100 480,60 600,20" 
                  fill="none" 
                  stroke="#C0A04C" 
                  strokeWidth="3" 
                />
                
                {/* Data Points (Nagpur) */}
                <circle cx="0" cy="160" r="4" fill="#C0A04C" />
                <circle cx="120" cy="150" r="4" fill="#C0A04C" />
                <circle cx="240" cy="130" r="4" fill="#C0A04C" />
                <circle cx="360" cy="100" r="4" fill="#C0A04C" />
                <circle cx="480" cy="60" r="4" fill="#C0A04C" />
                <circle cx="600" cy="20" r="4" fill="#C0A04C" />

                {/* Data Area (Tier 2 Avg) - Lower growth */}
                <polyline 
                  points="0,170 120,165 240,160 360,150 480,140 600,130" 
                  fill="none" 
                  stroke="#4B5563" 
                  strokeWidth="2" 
                  strokeDasharray="5"
                />

                {/* Labels */}
                <text x="0" y="200" fill="#AAA" fontSize="12" textAnchor="start">2019</text>
                <text x="120" y="200" fill="#AAA" fontSize="12" textAnchor="middle">2020</text>
                <text x="240" y="200" fill="#AAA" fontSize="12" textAnchor="middle">2021</text>
                <text x="360" y="200" fill="#AAA" fontSize="12" textAnchor="middle">2022</text>
                <text x="480" y="200" fill="#AAA" fontSize="12" textAnchor="middle">2023</text>
                <text x="600" y="200" fill="#AAA" fontSize="12" textAnchor="end">2024</text>
                
                {/* Floating Value */}
                <g transform="translate(480, 40)">
                   <rect x="-20" y="-20" width="55" height="24" rx="4" fill="#C0A04C" />
                   <text x="8" y="-4" fill="#000033" fontSize="12" fontWeight="bold" textAnchor="middle">+40%</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Feature Block 1: Infrastructure */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-2 bg-gold/20 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                <img 
                    src="https://images.unsplash.com/photo-1555617778-02518510b9fa?q=80&w=800&auto=format&fit=crop"
                    alt="Nagpur Metro & Infrastructure" 
                    className="relative w-full h-[400px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 bg-midnight p-4 flex items-center space-x-2 border-t border-r border-gold/50">
                    <Train className="text-gold" size={20} />
                    <span className="text-white font-serif text-sm">Samruddhi Mahamarg & Metro</span>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="flex items-center space-x-2 mb-4">
                    <span className="w-8 h-px bg-gold"></span>
                    <span className="text-gold uppercase tracking-widest text-xs font-bold">Infrastructure Boom</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">Connecting You to the Future</h3>
                <p className="text-platinum font-sans leading-relaxed mb-6">
                    Nagpur's transformation is driven by massive infrastructure spending. The <strong>Samruddhi Mahamarg</strong> has reduced travel time to Mumbai to just 8 hours, while the expanding <strong>Metro network</strong> connects key residential zones to commercial hubs, drastically increasing land valuation along these corridors.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start text-platinum text-sm">
                        <ArrowRight className="text-gold w-4 h-4 mr-2 mt-1 shrink-0" />
                        Direct connectivity to 4 major metros via rail and road.
                    </li>
                    <li className="flex items-start text-platinum text-sm">
                        <ArrowRight className="text-gold w-4 h-4 mr-2 mt-1 shrink-0" />
                        Proposed international airport expansion.
                    </li>
                </ul>
            </div>
        </div>

        {/* Feature Block 2: Economic Drivers */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 relative group">
                 <div className="absolute -inset-2 bg-gold/20 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" 
                    alt="MIHAN SEZ and IT Park" 
                    className="relative w-full h-[400px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
                 <div className="absolute bottom-0 right-0 bg-midnight p-4 flex items-center space-x-2 border-t border-l border-gold/50">
                    <Globe className="text-gold" size={20} />
                    <span className="text-white font-serif text-sm">MIHAN & IT Sector</span>
                </div>
            </div>
            <div className="lg:w-1/2 text-right lg:text-left">
                <div className="flex items-center justify-end lg:justify-start space-x-2 mb-4">
                    <span className="w-8 h-px bg-gold lg:order-1"></span>
                    <span className="text-gold uppercase tracking-widest text-xs font-bold lg:order-2">Economic Powerhouse</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">The MIHAN Effect</h3>
                <p className="text-platinum font-sans leading-relaxed mb-6">
                    Home to the Multi-modal International Cargo Hub and Airport at Nagpur (MIHAN), the city is a magnet for global investment. With giants like <strong>TCS, Infosys, and Dassault Reliance</strong> establishing bases, the demand for luxury residential real estate for top-tier executives is at an all-time high.
                </p>
                <div className="flex justify-end lg:justify-start gap-4">
                     <div className="bg-white/5 p-4 border border-white/10 text-center w-32">
                        <Building2 className="text-gold mx-auto mb-2" size={24}/>
                        <div className="text-white font-bold text-lg">50+</div>
                        <div className="text-[10px] text-gray-400 uppercase">MNCs Present</div>
                     </div>
                     <div className="bg-white/5 p-4 border border-white/10 text-center w-32">
                        <TrendingUp className="text-gold mx-auto mb-2" size={24}/>
                        <div className="text-white font-bold text-lg">20k+</div>
                        <div className="text-[10px] text-gray-400 uppercase">New Jobs</div>
                     </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default NagpurAdvantage;