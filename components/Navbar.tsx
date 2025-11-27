import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-white shadow-md py-4 border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2.5 rounded-sm transition-colors ${scrolled ? 'bg-wood-600 text-white' : 'bg-wood-600 text-white shadow-lg shadow-black/20'}`}>
              <Hammer className="h-7 w-7" strokeWidth={2.5} />
            </div>
            <span className={`font-serif text-3xl font-bold tracking-tight uppercase ${scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
              Summit<span className={scrolled ? 'text-wood-600' : 'text-wood-500'}>Decks</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-bold uppercase tracking-wide transition-all hover:text-wood-500 ${
                  isActive(link.path) 
                    ? 'text-wood-500 underline decoration-2 underline-offset-4' 
                    : scrolled ? 'text-slate-900' : 'text-white hover:text-wood-400 drop-shadow-md'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className={`px-6 py-3 rounded-sm font-bold text-base uppercase tracking-wider transition-all transform hover:-translate-y-1 ${
                scrolled 
                  ? 'bg-slate-900 text-white hover:bg-wood-600' 
                  : 'bg-wood-600 text-white hover:bg-wood-500 shadow-lg shadow-black/20'
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl border-t border-slate-800">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 rounded-sm text-lg font-bold uppercase tracking-wide border-b border-slate-800 ${
                  isActive(link.path)
                    ? 'text-wood-500 pl-6'
                    : 'text-white hover:text-wood-500 hover:pl-6 transition-all'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 mt-6 text-center rounded-sm text-lg font-bold bg-wood-600 text-white hover:bg-wood-700 uppercase tracking-wide"
              >
                Get Started
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;