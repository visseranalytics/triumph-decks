import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, ShieldCheck, Ruler } from 'lucide-react';
import { IMAGES, SERVICES } from '../constants';
import PageHero from '../components/PageHero';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="Our Expertise"
        subtitle="Comprehensive outdoor construction services tailored to your lifestyle and architectural preferences."
        backgroundImage={IMAGES[3].url}
        breadcrumbs={[{ label: 'Services', path: '/services' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
             
             {/* Image Side */}
             <div className="flex-1 w-full">
                <div className="relative group">
                   <div className="absolute top-4 left-4 w-full h-full border-4 border-slate-200 bg-transparent -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                   <div className="relative rounded-sm overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-wood-600/10 mix-blend-overlay"></div>
                   </div>
                </div>
             </div>

             {/* Content Side */}
             <div className="flex-1 space-y-8">
                <div className="inline-flex items-center justify-center p-4 bg-slate-900 text-white shadow-lg mb-2">
                  {index === 0 ? <Hammer size={32} strokeWidth={1.5} /> : index === 1 ? <ShieldCheck size={32} strokeWidth={1.5} /> : <Ruler size={32} strokeWidth={1.5} />}
                </div>
                
                <div>
                  <h3 className="text-4xl font-serif font-bold text-slate-900 uppercase leading-none mb-4">{service.title}</h3>
                  <div className="h-1 w-20 bg-wood-500"></div>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features?.slice(0,4).map((feat, i) => (
                    <li key={i} className="flex items-center text-slate-800 font-bold uppercase text-sm tracking-wide">
                      <div className="w-2 h-2 bg-wood-500 mr-3"></div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link 
                    to={`/services/${service.id}`} 
                    className="inline-flex items-center px-8 py-4 bg-wood-600 hover:bg-wood-700 text-white font-bold uppercase tracking-wider transition-all shadow-lg hover:-translate-y-1"
                  >
                    Details & Pricing <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;