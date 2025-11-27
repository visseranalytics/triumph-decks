import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-wood-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Client Stories</h2>
          <div className="h-1 w-20 bg-white/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex space-x-1 mb-6 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <Quote className="h-8 w-8 text-white/30 mb-4" />
              <p className="text-lg leading-relaxed italic mb-6 text-wood-50">"{t.text}"</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-wood-200">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;