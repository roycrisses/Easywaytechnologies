import React from 'react';

const CLIENTS = [
   'LG Health Care Pvt. Ltd.',
   'Dirghayu Clinic',
   'Simsar Villa',
   'SOSPN',
   'UPA',
   'TJLC',
];

const STATS = [
   { value: '500+', label: 'Happy Customers' },
   { value: '20+', label: 'Team Members' },
   { value: '50+', label: 'Projects Completed' },
   { value: '5+', label: 'Businesses' },
];

const FOUNDERS = [
   { name: 'Pankaj Joshi', role: 'Manager & Co-Founder', initial: 'PJ', image: null },
   { name: 'Krishna Karki', role: 'Senior Developer & Co-Founder', initial: 'KK', image: '/images/krishna-karki.png' },
];

export const About: React.FC = () => {
   return (
      <section id="about" className="bg-slate-50 dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 transition-colors duration-300">
         <div className="grid lg:grid-cols-2">
            <div className="relative h-[500px] lg:h-auto overflow-hidden">
               <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  alt="Office Architecture"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-slate-900/20 dark:bg-zinc-950/20"></div>
            </div>

            <div className="p-12 lg:p-24 flex flex-col justify-center">
               <h2 className="text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-colors">
                  MAKING AN IMPACT
               </h2>
               <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-8">EST. 2025</p>
               <p className="text-xl text-slate-800 dark:text-white font-light mb-8 leading-relaxed transition-colors">
                  EasyWay Technology is a digital product studio. We bridge the gap between human intuition and machine intelligence.
               </p>
               <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-12 transition-colors">
                  Our approach is reductive. We strip away the unnecessary to reveal the essential. From complex backend architectures to fluid frontend interfaces, every line of code serves a purpose.
               </p>

               {/* Impact Stats */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  {STATS.map((stat) => (
                     <div key={stat.label}>
                        <span className="block text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{stat.value}</span>
                        <span className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</span>
                     </div>
                  ))}
               </div>

               {/* Founders Section */}
               <div className="mb-12">
                  <span className="text-xs text-slate-500 uppercase tracking-widest block mb-6">Our Founders</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {FOUNDERS.map((founder) => (
                        <div key={founder.name} className="group">
                           <div
                              className="relative h-72 overflow-hidden border border-slate-200 dark:border-zinc-800 transition-all duration-300 hover:border-amber-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none"
                              style={founder.image ? {
                                 backgroundImage: `url(${founder.image})`,
                                 backgroundSize: 'cover',
                                 backgroundPosition: 'top center'
                              } : {}}
                           >
                              {/* Gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent dark:from-zinc-900/80 dark:via-zinc-900/40"></div>

                              {/* Fallback for no image */}
                              {!founder.image && (
                                 <div className="absolute inset-0 bg-white dark:bg-zinc-900 flex items-center justify-center transition-colors">
                                    <span className="text-6xl font-bold text-slate-300 dark:text-zinc-700">{founder.initial}</span>
                                 </div>
                              )}

                              {/* Text content */}
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                 <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-amber-400 transition-colors">{founder.name}</h4>
                                 <p className="text-xs text-slate-300 uppercase tracking-wider group-hover:text-sky-400 transition-colors">{founder.role}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Trusted By Section */}
               <div>
                  <span className="text-xs text-slate-500 uppercase tracking-widest block mb-6">Trusted By</span>
                  <div className="flex flex-wrap gap-4">
                     {CLIENTS.map((client) => (
                        <span
                           key={client}
                           className="text-sm text-slate-600 dark:text-zinc-300 px-4 py-2 border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-colors shadow-sm dark:shadow-none"
                        >
                           {client}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};