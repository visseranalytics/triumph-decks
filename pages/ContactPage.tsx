import React from 'react';
import { Quote, ArrowRight, MapPin, Phone, Mail, Clock, HelpCircle, Hammer } from 'lucide-react';
import PageHero from '../components/PageHero';

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="Start Your Build"
        subtitle="Contact us for a free site evaluation and estimate."
        backgroundImage="https://media.istockphoto.com/id/1456906845/photo/construction-worker-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=xRyM2imrWzMj4lMPsGY1J1h_HLt67gQIaGVZT40gU7o="
        breadcrumbs={[{ label: 'Contact', path: '/contact' }]}
      />
      
      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
         <div className="flex flex-col lg:flex-row gap-0 shadow-2xl">
           
           {/* Info Side */}
           <div className="lg:w-5/12 bg-slate-900 text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 p-4">
                <Hammer size={120} className="text-white/5 -rotate-12" />
             </div>
             
             <div className="relative z-10 space-y-12">
               <div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 uppercase leading-none">Let's Discuss <br/><span className="text-wood-500">The Project</span></h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Fill out the form, and our lead estimator will be in touch within 24 hours to schedule your site visit.
                  </p>
               </div>
               
               <div className="space-y-8">
                 <div className="flex items-start space-x-6">
                    <MapPin className="text-wood-500 h-8 w-8 mt-1 shrink-0" />
                    <div>
                        <p className="font-bold uppercase tracking-wider text-sm text-slate-400 mb-1">Headquarters</p>
                        <p className="text-xl font-serif font-bold">1234 Timberline Ave<br/>Portland, OR 97205</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-6">
                    <Phone className="text-wood-500 h-8 w-8 mt-1 shrink-0" />
                    <div>
                        <p className="font-bold uppercase tracking-wider text-sm text-slate-400 mb-1">Phone</p>
                        <p className="text-xl font-serif font-bold">(555) 123-4567</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-6">
                    <Mail className="text-wood-500 h-8 w-8 mt-1 shrink-0" />
                    <div>
                        <p className="font-bold uppercase tracking-wider text-sm text-slate-400 mb-1">Email</p>
                        <p className="text-xl font-serif font-bold">hello@summitdecks.com</p>
                    </div>
                 </div>
               </div>
             </div>

             <div className="mt-16 pt-8 border-t border-slate-800 relative z-10">
               <div className="flex items-center space-x-2 text-wood-500 mb-4">
                 <Quote size={32} />
               </div>
               <p className="italic text-slate-300 text-lg font-light leading-relaxed mb-6">
                 "Professional, clean, and top-notch craftsmanship."
               </p>
               <div className="flex items-center">
                 <div className="w-10 h-10 bg-wood-600 flex items-center justify-center text-sm font-bold mr-3 text-white">SM</div>
                 <p className="font-bold text-white uppercase tracking-wide text-sm">Sarah & Mike T.</p>
               </div>
             </div>
           </div>

           {/* Form Side */}
           <div className="lg:w-7/12 p-8 md:p-16 bg-white border-t-4 lg:border-t-0 lg:border-r-4 border-wood-600">
             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">First Name</label>
                   <input type="text" className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-wood-600 focus:ring-0 outline-none transition-colors font-bold text-slate-900" placeholder="JOHN" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Last Name</label>
                   <input type="text" className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-wood-600 focus:ring-0 outline-none transition-colors font-bold text-slate-900" placeholder="DOE" />
                 </div>
               </div>

               <div>
                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                 <input type="email" className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-wood-600 focus:ring-0 outline-none transition-colors font-bold text-slate-900" placeholder="JOHN@EXAMPLE.COM" />
               </div>

               <div>
                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Type</label>
                 <div className="relative">
                   <select className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-wood-600 focus:ring-0 outline-none transition-colors appearance-none font-bold text-slate-900">
                     <option>New Deck Construction</option>
                     <option>Deck Replacement</option>
                     <option>Patio / Pergola</option>
                     <option>Repair / Maintenance</option>
                   </select>
                   <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400">
                     ▼
                   </div>
                 </div>
               </div>

               <div>
                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Details</label>
                 <textarea rows={4} className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-wood-600 focus:ring-0 outline-none transition-colors font-medium text-slate-900" placeholder="Tell us about the size, location, and vision..."></textarea>
               </div>

               <button className="w-full py-5 bg-wood-600 hover:bg-wood-700 text-white font-bold text-lg uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3">
                 <span>Send Request</span>
                 <ArrowRight size={20} strokeWidth={3} />
               </button>
             </form>
           </div>
         </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-96 bg-slate-200 border-y-4 border-slate-900 filter grayscale contrast-125">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357597.5913982436!2d-122.99036737276707!3d45.542289196155985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1709923456789!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-100 py-24">
          <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-serif font-bold text-slate-900 uppercase mb-4">Common Questions</h2>
                  <div className="h-1 w-20 bg-wood-500 mx-auto"></div>
              </div>

              <div className="grid gap-6">
                  {[
                      { q: "How long does a typical deck build take?", a: "Most standard projects take 1-2 weeks once construction begins. Larger, more complex projects with covers or hardscapes may take 3-4 weeks." },
                      { q: "Do I need a permit?", a: "In most cases, yes. Any deck over 30 inches off the ground requires a permit. We handle all city engineering, permitting and inspections for you." },
                      { q: "What is the difference between wood and composite?", a: "Wood offers natural beauty but requires annual maintenance. Composite is made from recycled fibers, resists rot/insects, and requires only soap and water cleaning, but has a higher upfront cost." },
                      { q: "Do you offer financing?", a: "Yes, we partner with several lending institutions to offer flexible financing plans for your outdoor project." }
                  ].map((faq, i) => (
                      <div key={i} className="bg-white border-l-4 border-wood-600 p-8 shadow-sm">
                          <h3 className="font-bold text-slate-900 flex items-start gap-4 text-xl mb-3 font-serif uppercase">
                              <HelpCircle className="text-wood-600 h-6 w-6 shrink-0 mt-1" />
                              {faq.q}
                          </h3>
                          <p className="text-slate-600 pl-10 text-lg leading-relaxed">{faq.a}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

export default ContactPage;