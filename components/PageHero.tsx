import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs?: { label: string; path: string }[];
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage, breadcrumbs }) => {
  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt={title} 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40"></div>
        {/* Gritty Texture Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {breadcrumbs && (
            <nav className="flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-widest text-wood-400 mb-4 animate-fade-in-up">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                {breadcrumbs.map((crumb, idx) => (
                    <React.Fragment key={idx}>
                        <ChevronRight size={14} className="text-slate-500" />
                        <Link to={crumb.path} className="hover:text-white transition-colors last:text-white last:cursor-default">
                            {crumb.label}
                        </Link>
                    </React.Fragment>
                ))}
            </nav>
        )}
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white uppercase tracking-tighter mb-6 animate-fade-in-up delay-100 drop-shadow-xl">
          {title}
        </h1>
        
        {subtitle && (
          <div className="flex flex-col items-center animate-fade-in-up delay-200">
             <div className="h-1 w-24 bg-wood-500 mb-6"></div>
             <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
               {subtitle}
             </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHero;