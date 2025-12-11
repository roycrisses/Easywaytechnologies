import React from 'react';
import { Button } from './ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Contact: React.FC = () => {
   return (
      <section id="contact" className="py-32 bg-white dark:bg-zinc-950 relative border-t border-slate-200 dark:border-zinc-800 transition-colors duration-300">
         <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <motion.div
               className="text-center mb-20"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
            >
               <h2 className="text-5xl md:text-7xl font-robot font-bold mb-6 transition-colors">
                  <span className="text-black dark:text-white">Let's</span>{' '}
                  <span className="text-azure italic font-serif">Talk</span>
               </h2>
               <p className="text-xl text-black/70 dark:text-zinc-400 font-light max-w-2xl mx-auto">
                  Ready to start a project? We're ready to listen.
               </p>
            </motion.div>

            <motion.form
               className="space-y-12"
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
            >
               <div className="grid md:grid-cols-2 gap-12">
                  <motion.div variants={fadeInUp} className="group">
                     <label className="block text-xs uppercase tracking-widest text-black/60 dark:text-zinc-500 mb-2 group-focus-within:text-azure transition-colors">Name</label>
                     <input
                        type="text"
                        className="w-full bg-transparent border-b border-black/20 dark:border-zinc-800 py-4 text-xl text-black dark:text-white focus:outline-none focus:border-azure dark:focus:border-white transition-colors"
                        placeholder="John Doe"
                     />
                  </motion.div>
                  <motion.div variants={fadeInUp} className="group">
                     <label className="block text-xs uppercase tracking-widest text-black/60 dark:text-zinc-500 mb-2 group-focus-within:text-azure transition-colors">Email</label>
                     <input
                        type="email"
                        className="w-full bg-transparent border-b border-black/20 dark:border-zinc-800 py-4 text-xl text-black dark:text-white focus:outline-none focus:border-azure dark:focus:border-white transition-colors"
                        placeholder="john@example.com"
                     />
                  </motion.div>
               </div>

               <motion.div variants={fadeInUp} className="group">
                  <label className="block text-xs uppercase tracking-widest text-black/60 dark:text-zinc-500 mb-2 group-focus-within:text-azure transition-colors">Project Details</label>
                  <textarea
                     rows={4}
                     className="w-full bg-transparent border-b border-black/20 dark:border-zinc-800 py-4 text-xl text-black dark:text-white focus:outline-none focus:border-azure dark:focus:border-white transition-colors resize-none"
                     placeholder="Tell us about your vision..."
                  ></textarea>
               </motion.div>

               <motion.div variants={fadeInUp} className="flex justify-center pt-8">
                  <Button variant="primary" size="lg" className="min-w-[200px] bg-black text-white hover:bg-mint dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                     Submit Inquiry
                  </Button>
               </motion.div>
            </motion.form>

            <motion.div
               className="grid md:grid-cols-3 gap-12 mt-32 border-t border-black/10 dark:border-zinc-800 pt-16"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
            >
               <motion.div variants={fadeInUp} className="text-center group">
                  <div className="w-12 h-12 mx-auto bg-slate-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-azure transition-colors">
                     <Mail className="w-5 h-5 text-black dark:text-white group-hover:text-white" />
                  </div>
                  <p className="text-sm font-mono text-black dark:text-zinc-400">hello@easyway.com</p>
               </motion.div>
               <motion.div variants={fadeInUp} className="text-center group">
                  <div className="w-12 h-12 mx-auto bg-slate-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-azure transition-colors">
                     <MapPin className="w-5 h-5 text-black dark:text-white group-hover:text-white" />
                  </div>
                  <p className="text-sm font-mono text-black dark:text-zinc-400">Silicon Valley, CA</p>
               </motion.div>
               <motion.div variants={fadeInUp} className="text-center group">
                  <div className="w-12 h-12 mx-auto bg-slate-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-azure transition-colors">
                     <Phone className="w-5 h-5 text-black dark:text-white group-hover:text-white" />
                  </div>
                  <p className="text-sm font-mono text-black dark:text-zinc-400">+1 (555) 123-4567</p>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
};