import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Download, Users, Briefcase, Award } from 'lucide-react';
import { CLIENTS, FOUNDERS } from '../constants';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeIn } from '../utils/animations';

export const About: React.FC = () => {
   return (
      <section id="about" className="bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 transition-colors duration-300">
         <div className="grid lg:grid-cols-2">
            <motion.div
               className="relative h-[500px] lg:h-auto overflow-hidden"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
            >
               <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
               <div className="absolute bottom-0 left-0 p-12">
                  <span className="text-6xl font-display font-bold text-white opacity-20">EST 2025</span>
               </div>
            </motion.div>

            <div className="p-12 lg:p-24 flex flex-col justify-center">
               <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
               >
                  <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bungee font-bold mb-8 leading-tight text-black dark:text-white transition-colors">
                     BUILT FOR <br />
                     <span className="text-azure">IMPACT</span>
                  </motion.h2>

                  <motion.p variants={fadeInUp} className="text-xl text-black dark:text-zinc-400 mb-12 leading-relaxed font-light transition-colors">
                     Easyway Technology was founded on a simple premise: digital tools should amplify human potential. We bridge the gap between complex technology and intuitive experience.
                  </motion.p>

                  <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-8 mb-12 border-y border-slate-300 dark:border-zinc-800 py-8 transition-colors">
                     <div>
                        <span className="block text-3xl font-bold font-mono text-black dark:text-white mb-2 transition-colors">50+</span>
                        <span className="text-xs uppercase tracking-wider text-black dark:text-zinc-500 transition-colors">Projects</span>
                     </div>
                     <div>
                        <span className="block text-3xl font-bold font-mono text-black dark:text-white mb-2 transition-colors">3</span>
                        <span className="text-xs uppercase tracking-wider text-black dark:text-zinc-500 transition-colors">Founders</span>
                     </div>
                     <div>
                        <span className="block text-3xl font-bold font-mono text-black dark:text-white mb-2 transition-colors">24/7</span>
                        <span className="text-xs uppercase tracking-wider text-black dark:text-zinc-500 transition-colors">Support</span>
                     </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                     <h3 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-6 transition-colors">Leadership</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {FOUNDERS.map((founder) => (
                           <div key={founder.name} className="group">
                              <div
                                 className="relative h-72 overflow-hidden border border-slate-300 dark:border-zinc-800 transition-all duration-300 hover:border-azure dark:hover:border-zinc-600 bg-slate-100 dark:bg-zinc-900 shadow-sm dark:shadow-none"
                                 style={founder.image ? {
                                    backgroundImage: `url(${founder.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                 } : {}}
                              >
                                 {/* Fallback for no image */}
                                 {!founder.image && (
                                    <div className="absolute inset-0 bg-slate-100 dark:bg-zinc-900 flex items-center justify-center transition-colors">
                                       <span className="text-6xl font-bold text-black/30 dark:text-zinc-700">{founder.initial}</span>
                                    </div>
                                 )}

                                 <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-bold text-sm">{founder.name}</p>
                                    <p className="text-zinc-300 text-xs">{founder.role}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                     <h3 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-6 transition-colors">Trusted By (Clients are happy)</h3>
                     <div className="flex flex-wrap gap-4">
                        {CLIENTS.map((client) => (
                           <span
                              key={client}
                              className="text-sm text-black dark:text-zinc-300 px-4 py-2 border border-slate-300 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900/50 transition-colors shadow-sm dark:shadow-none"
                           >
                              {client}
                           </span>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};