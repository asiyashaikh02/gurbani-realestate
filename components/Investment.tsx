import React from 'react';
import Button from './Button';
import { TrendingUp, PieChart } from 'lucide-react';

const Investment: React.FC = () => {
  return (
    <section className="py-24 bg-[#050510] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="lg:w-1/2">
                <div className="inline-flex items-center space-x-2 text-gold font-sans font-bold uppercase tracking-widest text-xs mb-4 border border-gold/30 px-3 py-1 rounded-full">
                    <TrendingUp size={12} />
                    <span>Wealth Creation</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    High-Yield <span className="text-gold">Investment</span> Advisory
                </h2>
                <p className="font-sans text-platinum text-lg mb-8 leading-relaxed">
                    Nagpur is one of India's fastest-growing logistics and IT hubs. We identify pre-launch opportunities and commercial plots designed to deliver <strong>15-20% annual appreciation</strong>.
                </p>
                
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                        <div className="bg-gold/20 p-1 rounded mr-3 mt-1"><PieChart size={16} className="text-gold"/></div>
                        <div>
                            <h4 className="text-white font-bold font-serif">Portfolio Diversification</h4>
                            <p className="text-sm text-gray-400">Balance your risk with tangible asset backing.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-gold/20 p-1 rounded mr-3 mt-1"><TrendingUp size={16} className="text-gold"/></div>
                        <div>
                            <h4 className="text-white font-bold font-serif">Rental Yield Optimization</h4>
                            <p className="text-sm text-gray-400">Strategies to maximize monthly cash flow from commercial units.</p>
                        </div>
                    </li>
                </ul>

                <Button>
                    Get Investment Report
                </Button>
            </div>

            <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gold blur-[100px] opacity-10"></div>
                <div className="grid grid-cols-2 gap-4">
                    <img 
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop" 
                        alt="Luxury Modern Villa Facade" 
                        className="w-full h-64 object-cover border border-white/10 hover:scale-[1.02] transition-transform duration-500" 
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" 
                        alt="Premium Interior Design" 
                        className="w-full h-64 object-cover border border-white/10 mt-8 hover:scale-[1.02] transition-transform duration-500" 
                    />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Investment;