import React from 'react';
import { Ruler, Hammer, Clock, ShieldCheck } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    { 
      icon: Ruler, 
      title: "Consult & Plan", 
      desc: "Site analysis, measurements, and 3D industrial renderings to visualize the structural design." 
    },
    { 
      icon: Clock, 
      title: "Permit & Prep", 
      desc: "We handle all city engineering, HOA approvals, and site preparation for heavy construction." 
    },
    { 
      icon: Hammer, 
      title: "Construction", 
      desc: "Master carpentry execution using premium grade lumber and composite materials with precision." 
    },
    { 
      icon: ShieldCheck, 
      title: "Warranty", 
      desc: "Final structural inspection and activation of our comprehensive 5-year workmanship guarantee." 
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 max-w-4xl">
          <span className="text-wood-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">How We Build</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 uppercase leading-none">The Summit <br/>Standard</h2>
          <p className="text-slate-600 text-xl font-light border-l-4 border-wood-500 pl-6">
            A transparent, rigorous construction process designed to deliver structural integrity and aesthetic perfection.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-1 bg-slate-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                
                <div className="flex items-center mb-6">
                   <div className="w-20 h-20 bg-slate-900 text-white rounded-sm flex items-center justify-center font-bold text-2xl shadow-xl group-hover:bg-wood-600 transition-colors border-4 border-white relative z-10">
                     <step.icon className="h-9 w-9" strokeWidth={1.5} />
                   </div>
                   <div className="h-1 bg-slate-100 flex-1 lg:hidden ml-4"></div>
                </div>
                
                <div className="pr-4">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 uppercase">{step.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;