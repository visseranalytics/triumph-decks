import React from 'react';
import { TEAM_IMAGES } from '../constants';
import PageHero from '../components/PageHero';
import { CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="Who We Are"
        subtitle="Licensed, bonded, and insured master carpenters serving the Pacific Northwest."
        backgroundImage={TEAM_IMAGES[1].image}
        breadcrumbs={[{ label: 'About', path: '/about' }]}
      />

      {/* Story Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative pl-4 pb-4">
             {/* Industrial Frame Effect */}
            <div className="absolute top-0 left-0 w-full h-full border-l-8 border-b-8 border-wood-600 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1679797842442-96a0aabe152b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0" 
              alt="Team working" 
              className="w-full h-[600px] object-cover filter contrast-125"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-wood-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our History</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[0.9] uppercase mb-6">
                Building Trust, <br/>One Board at a Time
              </h2>
            </div>
            
            <p className="text-slate-800 text-xl leading-relaxed font-light border-l-4 border-slate-200 pl-6">
              Founded in 2010, Summit Decks began with a simple pickup truck and a passion for structural carpentry. 
              Today, we are the region's premier outdoor living contractor.
            </p>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              We believe your backyard should be an extension of your home—a place to relax, entertain, and make memories.
              Our team of master carpenters brings over 50 years of combined experience to every job site. We don't cut corners; we engineer longevity.
            </p>
            
            <div className="space-y-4 pt-4">
                 {['Licensed, Bonded, & Insured (CCB# 123456)', 'TrexPro Platinum Installers', '5-Year Structural Warranty'].map((item, i) => (
                     <div key={i} className="flex items-center space-x-3">
                         <CheckCircle className="text-wood-600 h-6 w-6 shrink-0" />
                         <span className="font-bold text-slate-900 uppercase tracking-wide">{item}</span>
                     </div>
                 ))}
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t-2 border-slate-100">
              <div>
                <span className="block text-5xl font-serif font-bold text-wood-600 mb-1">15+</span>
                <span className="text-slate-900 text-sm font-bold uppercase tracking-widest">Years Experience</span>
              </div>
              <div>
                <span className="block text-5xl font-serif font-bold text-wood-600 mb-1">500+</span>
                <span className="text-slate-900 text-sm font-bold uppercase tracking-widest">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-900 py-24 px-4 text-white relative overflow-hidden">
        {/* Background Texture */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <span className="text-wood-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The Crew</span>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase">Meet The Builders</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_IMAGES.map((member) => (
              <div key={member.id} className="bg-slate-800 border-2 border-slate-700 group hover:border-wood-600 transition-colors duration-300">
                <div className="h-80 overflow-hidden relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-white text-xl uppercase mb-1 font-serif tracking-wide">{member.name}</h3>
                  <p className="text-wood-500 text-xs font-bold uppercase tracking-[0.2em]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;