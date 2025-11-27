import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES[1].url} 
          alt="Beautiful Deck Construction" 
          className="w-full h-full object-cover animate-fade-in"
        />
        {/* Darker, harder overlay for contrast */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="max-w-4xl text-white space-y-6 animate-fade-in-up">
          <div className="flex items-center gap-3">
             <div className="h-1 w-12 bg-wood-500"></div>
             <span className="text-wood-500 text-base md:text-lg font-bold tracking-[0.2em] uppercase">
              Master Deck Builders
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] uppercase tracking-tighter">
            Built to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-500 to-wood-400">Outlast</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-md pt-4">
            Heavy-duty craftsmanship. Premium materials. We engineer outdoor structures that define your property.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-8">
            <Link 
              to="/projects" 
              className="px-10 py-5 bg-wood-600 hover:bg-wood-500 text-white rounded-sm font-bold text-lg uppercase tracking-wider transition-all shadow-xl shadow-wood-900/50 hover:shadow-wood-600/50 flex items-center justify-center group"
            >
              View Projects <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white rounded-sm font-bold text-lg uppercase tracking-wider transition-all flex items-center justify-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;