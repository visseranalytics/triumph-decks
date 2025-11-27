import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { IMAGES } from '../constants';
import { ChevronRight, MapPin, Calendar, Hammer, AlertTriangle, CheckCircle } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = IMAGES.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="h-[60vh] w-full relative bg-slate-900">
        <img src={project.url} alt={project.title} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-wood-400 mb-6">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} className="text-slate-500" />
                <Link to="/projects" className="hover:text-white transition-colors">Portfolio</Link>
                <ChevronRight size={14} className="text-slate-500" />
                <span className="text-white truncate max-w-[200px]">{project.title}</span>
            </nav>
            <div className="flex flex-col gap-2">
                <span className="text-wood-500 font-bold uppercase tracking-[0.2em] text-sm bg-slate-900/50 w-fit px-2 py-1 backdrop-blur-sm border border-wood-500/30">{project.category} Build</span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white uppercase tracking-tighter leading-none">{project.title}</h1>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
                <div>
                    <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900 uppercase">Project Brief</h2>
                    <p className="text-slate-700 text-xl leading-relaxed font-light border-l-4 border-slate-200 pl-6">
                        {project.description || "A beautiful custom project tailored to the client's needs."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.challenge && (
                        <div className="bg-red-50/50 p-8 border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500 h-6 w-6" />
                                <h3 className="font-bold text-slate-900 text-lg uppercase tracking-wider">The Challenge</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">{project.challenge}</p>
                        </div>
                    )}

                    {project.solution && (
                        <div className="bg-green-50/50 p-8 border-l-4 border-green-600">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="text-green-600 h-6 w-6" />
                                <h3 className="font-bold text-slate-900 text-lg uppercase tracking-wider">The Solution</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">{project.solution}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Sidebar Stats */}
            <div className="lg:col-span-1">
                <div className="bg-slate-50 border-2 border-slate-200 p-8 space-y-8 sticky top-24">
                    <h3 className="font-serif font-bold text-2xl text-slate-900 uppercase border-b-2 border-slate-200 pb-4">Specs</h3>
                    
                    {project.location && (
                        <div className="group">
                            <div className="flex items-center gap-3 mb-1">
                                <MapPin className="text-wood-600 h-5 w-5" />
                                <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">Location</span>
                            </div>
                            <span className="text-slate-900 font-bold text-lg pl-8 block">{project.location}</span>
                        </div>
                    )}
                    
                    {project.completionDate && (
                        <div className="group">
                            <div className="flex items-center gap-3 mb-1">
                                <Calendar className="text-wood-600 h-5 w-5" />
                                <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">Completed</span>
                            </div>
                            <span className="text-slate-900 font-bold text-lg pl-8 block">{project.completionDate}</span>
                        </div>
                    )}

                    {project.materials && (
                        <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                                <Hammer className="text-wood-600 h-5 w-5" />
                                <span className="text-xs uppercase text-slate-400 font-bold tracking-widest">Materials Used</span>
                            </div>
                            <ul className="space-y-2 pl-8">
                                {project.materials.map((m, i) => (
                                    <li key={i} className="text-slate-900 font-bold text-sm uppercase tracking-wide border-b border-slate-200 pb-1 last:border-0">{m}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="pt-4">
                         <Link to="/contact" className="block w-full py-4 bg-slate-900 hover:bg-wood-600 text-white text-center font-bold uppercase tracking-widest transition-colors shadow-lg">
                            Get This Look
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;