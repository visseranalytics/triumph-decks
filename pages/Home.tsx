import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import { IMAGES } from '../constants';
import Hero from '../components/home/Hero';
import Process from '../components/home/Process';
import Testimonials from '../components/home/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* About Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 relative">
                    <div className="absolute top-6 left-6 w-full h-full bg-wood-500 rounded-sm -z-10"></div>
                    <img 
                        src="https://media.istockphoto.com/id/521726025/photo/two-men-building-a-deck.webp?a=1&b=1&s=612x612&w=0&k=20&c=CkGnqCo66RIPD5ErL4oK34w0KUBFf9yOCfy-Ax7vNJQ=" 
                        alt="Team Construction" 
                        className="rounded-sm shadow-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                </div>
                <div className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 uppercase leading-none">
                        More Than Just <br/><span className="text-wood-600">Lumber</span>
                    </h2>
                    <p className="text-slate-600 text-xl leading-relaxed font-light">
                        At Summit Decks, we believe your outdoor space is an investment in your property's value and your lifestyle. 
                        With over 15 years of structural expertise, our licensed crews build functional, heavy-duty works of art.
                    </p>
                    <Link to="/about" className="inline-flex items-center px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all">
                        Read Our Story <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      <Process />

      {/* Video Highlight Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        {/* Gritty Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group cursor-pointer rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.3)] border-4 border-slate-800">
              <img 
                src={IMAGES[2].url} 
                alt="Video Thumbnail" 
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-24 h-24 bg-wood-600/90 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                   <Play fill="white" className="text-white ml-2 h-10 w-10" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase leading-tight">
                  Engineered to <br/><span className="text-wood-500">Endure</span>
                </h2>
                <div className="h-2 w-32 bg-wood-500"></div>
              </div>
              <p className="text-slate-400 text-xl leading-relaxed">
                We don't just build decks; we construct extensions of your home. 
                Using reinforced framing, premium composite, and hidden fastener systems, we ensure your project stands strong against the elements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                {[
                  "Licensed Master Carpenters",
                  "3D Structural Design",
                  "Premium Materials Only",
                  "5-Year Workmanship Warranty"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-white font-bold text-lg">
                    <CheckCircle className="text-wood-500 h-6 w-6 shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b-2 border-slate-200 pb-8">
            <div>
              <span className="text-wood-600 font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 uppercase">Recent Projects</h2>
            </div>
            <Link to="/projects" className="group flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-wood-600 transition-colors rounded-sm">
              <span>View Full Gallery</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {IMAGES.slice(0, 3).map((img, idx) => (
              <Link key={img.id} to={`/projects/${img.id}`} className="group relative overflow-hidden rounded-sm shadow-xl h-[500px] block">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-wood-500 text-sm font-bold uppercase tracking-[0.2em] mb-2">{img.category}</p>
                    <h3 className="text-white text-3xl font-serif font-bold uppercase leading-none">{img.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;