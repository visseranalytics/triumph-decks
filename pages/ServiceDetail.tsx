import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle, ChevronRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Bold Industrial Header */}
      <div className="h-[50vh] min-h-[400px] relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
           <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
            <nav className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-wood-400 mb-6">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} className="text-slate-500" />
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight size={14} className="text-slate-500" />
                <span className="text-white">{service.title}</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white uppercase tracking-tighter shadow-black drop-shadow-xl">{service.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3 space-y-12">
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 uppercase mb-6">Overview</h2>
                    <p className="text-xl leading-relaxed font-light text-slate-800">{service.fullDescription}</p>
                </div>

                <div className="bg-white p-10 border-2 border-slate-200">
                    <h3 className="text-2xl font-serif font-bold mb-8 uppercase flex items-center gap-3">
                        <div className="h-8 w-1 bg-wood-600"></div>
                        Technical Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features?.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-4 p-4 bg-slate-50 border border-slate-100">
                                <CheckCircle className="text-wood-600 h-6 w-6 shrink-0" />
                                <span className="text-slate-900 font-bold uppercase text-sm tracking-wide">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold uppercase text-slate-900">Why Choose This?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {service.benefits?.map((benefit, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                <div className="w-2 h-2 mt-2 bg-wood-500 shrink-0"></div>
                                <span className="text-lg text-slate-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:w-1/3">
                <div className="bg-slate-900 p-8 text-white sticky top-24 border-t-8 border-wood-600">
                    <h3 className="text-3xl font-serif font-bold uppercase mb-4">Start Building</h3>
                    <p className="text-slate-400 mb-8 text-lg">Ready to transform your property? Get a comprehensive estimate for your {service.title.toLowerCase()}.</p>
                    <Link to="/contact" className="block w-full py-5 bg-wood-600 hover:bg-wood-500 text-white text-center font-bold text-lg uppercase tracking-widest transition-colors shadow-lg">
                        Request Quote
                    </Link>
                    <p className="text-center text-slate-500 text-sm mt-4 font-bold uppercase tracking-wider">No Obligation Estimate</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;