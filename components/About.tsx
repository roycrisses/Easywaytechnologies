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

export const About: React.FC = () => {
   return (
      <section id="about" className="bg-zinc-950 border-t border-zinc-800">
         <div className="grid lg:grid-cols-2">
            <div className="relative h-[500px] lg:h-auto overflow-hidden">
               <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  alt="Office Architecture"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-zinc-950/20"></div>
            </div>

            <div className="p-12 lg:p-24 flex flex-col justify-center">
               <h2 className="text-5xl font-display font-bold text-white mb-4">
                  MAKING AN IMPACT
               </h2>
               <p className="text-zinc-500 text-sm uppercase tracking-widest mb-8">EST. 2014</p>
               <p className="text-xl text-white font-light mb-8 leading-relaxed">
                  EasyWay Technology is a digital product studio. We bridge the gap between human intuition and machine intelligence.
               </p>
               <p className="text-zinc-400 leading-relaxed mb-12">
                  Our approach is reductive. We strip away the unnecessary to reveal the essential. From complex backend architectures to fluid frontend interfaces, every line of code serves a purpose.
               </p>

               {/* Impact Stats */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  {STATS.map((stat) => (
                     <div key={stat.label}>
                        <span className="block text-3xl font-bold text-white mb-2">{stat.value}</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                     </div>
                  ))}
               </div>

               {/* Trusted By Section */}
               <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest block mb-6">Trusted By</span>
                  <div className="flex flex-wrap gap-4">
                     {CLIENTS.map((client) => (
                        <span
                           key={client}
                           className="text-sm text-zinc-300 px-4 py-2 border border-zinc-800 bg-zinc-900/50"
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