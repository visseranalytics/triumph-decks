import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t-4 border-wood-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-wood-600 rounded">
                  <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold uppercase tracking-wide">Summit<span className="text-wood-500">Decks</span></span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed">
              Premium outdoor living spaces. 
              Quality materials, expert craftsmanship, and timeless design.
              Licensed, Bonded, & Insured.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-sm hover:bg-wood-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-sm hover:bg-wood-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-sm hover:bg-wood-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-serif uppercase tracking-wider mb-6 text-white">Company</h3>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-wood-500 transition-colors flex items-center"><span className="w-2 h-2 bg-wood-600 mr-2 rounded-full"></span>Home</Link></li>
              <li><Link to="/services" className="hover:text-wood-500 transition-colors flex items-center"><span className="w-2 h-2 bg-wood-600 mr-2 rounded-full"></span>Services</Link></li>
              <li><Link to="/projects" className="hover:text-wood-500 transition-colors flex items-center"><span className="w-2 h-2 bg-wood-600 mr-2 rounded-full"></span>Gallery</Link></li>
              <li><Link to="/about" className="hover:text-wood-500 transition-colors flex items-center"><span className="w-2 h-2 bg-wood-600 mr-2 rounded-full"></span>About Us</Link></li>
              <li><Link to="/contact" className="hover:text-wood-500 transition-colors flex items-center"><span className="w-2 h-2 bg-wood-600 mr-2 rounded-full"></span>Get Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold font-serif uppercase tracking-wider mb-6 text-white">Services</h3>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li>Custom Wood Decks</li>
              <li>Composite & PVC</li>
              <li>Pergolas & Gazebos</li>
              <li>Commercial Projects</li>
              <li>Framing & Structural</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold font-serif uppercase tracking-wider mb-6 text-white">Contact</h3>
            <ul className="space-y-5 text-slate-400">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-wood-500 shrink-0 mt-1" />
                <span className="font-medium">1234 Timberline Ave,<br />Portland, OR 97205</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-wood-500 shrink-0" />
                <span className="font-bold text-white text-lg">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-wood-500 shrink-0" />
                <span className="font-medium">hello@summitdecks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-medium">
          <p className="uppercase tracking-wide">&copy; {new Date().getFullYear()} Summit Decks & Design. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-wood-500">Privacy Policy</a>
            <a href="#" className="hover:text-wood-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;