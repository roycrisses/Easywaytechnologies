import React from 'react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
   return (
      <section id="contact" className="py-32 bg-eblue dark:bg-zinc-950 relative border-t border-egold dark:border-zinc-800 transition-colors duration-300">
         <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <div className="text-center mb-20">
               <h2 className="text-5xl md:text-7xl font-robot font-bold mb-6 transition-colors">
                  <span className="text-egold dark:text-white">Let's</span> <span className="text-ered dark:text-white">Talk.</span>
               </h2>
               <p className="text-black dark:text-zinc-400 transition-colors">Tell us about your next visionary project.</p>
            </div>

            <form className="space-y-12">
               <div className="grid md:grid-cols-2 gap-12">
                  <div className="group">
                     <label className="block text-xs uppercase tracking-widest text-white/70 mb-2 group-focus-within:text-egold dark:group-focus-within:text-white transition-colors">Name</label>
                     <input type="text" className="w-full bg-transparent border-b border-white/30 dark:border-zinc-800 py-4 text-white dark:text-white text-lg focus:outline-none focus:border-egold dark:focus:border-white transition-colors placeholder-white/50 dark:placeholder-zinc-600 hover:border-white/50 dark:hover:border-zinc-600" placeholder="Jane Doe" />
                  </div>
                  <div className="group">
                     <label className="block text-xs uppercase tracking-widest text-white/70 mb-2 group-focus-within:text-egold dark:group-focus-within:text-white transition-colors">Email</label>
                     <input type="email" className="w-full bg-transparent border-b border-white/30 dark:border-zinc-800 py-4 text-white dark:text-white text-lg focus:outline-none focus:border-egold dark:focus:border-white transition-colors placeholder-white/50 dark:placeholder-zinc-600 hover:border-white/50 dark:hover:border-zinc-600" placeholder="jane@company.com" />
                  </div>
               </div>

               <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-white/70 mb-2 group-focus-within:text-egold dark:group-focus-within:text-white transition-colors">Project Details</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/30 dark:border-zinc-800 py-4 text-white dark:text-white text-lg focus:outline-none focus:border-egold dark:focus:border-white transition-colors resize-none placeholder-white/50 dark:placeholder-zinc-600 hover:border-white/50 dark:hover:border-zinc-600" placeholder="Describe your vision..."></textarea>
               </div>

               <div className="flex justify-center pt-8">
                  <Button variant="primary" size="lg" className="min-w-[200px] bg-ered text-white hover:bg-egold dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                     Submit Inquiry
                  </Button>
               </div>
            </form>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/20 dark:border-zinc-900 pt-12 transition-colors">
               <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 dark:text-zinc-600 mb-2">Email</p>
                  <a href="mailto:info@easyway.com.np" className="text-white dark:text-white hover:text-egold dark:hover:text-zinc-400 transition-colors">info@easyway.com.np</a>
               </div>
               <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 dark:text-zinc-600 mb-2">Phone</p>
                  <a href="tel:+9779700804395" className="text-white dark:text-white hover:text-egold dark:hover:text-zinc-400 transition-colors">+977 9700804395</a>
               </div>
               <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 dark:text-zinc-600 mb-2">Location</p>
                  <p className="text-white dark:text-white transition-colors">Mahendranagar, Nepal</p>
               </div>
            </div>
         </div>
      </section>
   );
};