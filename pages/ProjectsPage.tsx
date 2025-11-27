import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import PageHero from '../components/PageHero';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'deck' | 'patio'>('all');

  const filteredImages = filter === 'all' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === filter);

  return (
    <div>
      <PageHero 
        title="Project Gallery"
        subtitle="Explore our portfolio of custom engineered decks and outdoor living spaces."
        backgroundImage="https://images.unsplash.com/photo-1679797878543-66c1e502d413?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0"
        breadcrumbs={[{ label: 'Projects', path: '/projects' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Bold Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'deck', label: 'Decks & Railings' },
            { id: 'patio', label: 'Patios & Covers' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 ${
                filter === cat.id 
                  ? 'bg-wood-600 text-white border-wood-600 shadow-xl scale-105' 
                  : 'bg-white text-slate-800 border-slate-200 hover:border-wood-600 hover:text-wood-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <Link key={img.id} to={`/projects/${img.id}`} className="group block relative h-[450px] overflow-hidden bg-slate-900 animate-fade-in">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-60"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-1 bg-wood-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-wood-400 font-bold uppercase tracking-[0.2em] text-xs mb-2 block shadow-black drop-shadow-md">{img.category}</span>
                    <h3 className="text-white text-3xl font-serif font-bold uppercase leading-none shadow-black drop-shadow-lg">{img.title}</h3>
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-wood-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-slate-50 border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-bold uppercase">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;