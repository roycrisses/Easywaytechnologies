import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer, fadeIn } from '../utils/animations';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="max-w-5xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-black dark:bg-white" />
            <span className="text-sm uppercase tracking-widest text-black/70 dark:text-zinc-400 font-medium">Digital Innovation Partner</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-bold font-robot leading-[0.9] mb-12 tracking-tighter mix-blend-difference text-black dark:text-white">
            WE SHAPE <br />
            <span className="text-black dark:text-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-zinc-500">DIGITAL</span>{' '}
            <span className="italic font-serif font-light text-6xl md:text-8xl lg:text-9xl text-azure">REALITY</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start border-l border-black/20 dark:border-white/20 pl-8 md:pl-12">
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-black/70 dark:text-zinc-400 max-w-xl leading-relaxed">
              We are architects of the digital future, crafting immersive web experiences and powerful software solutions that redefine boundaries.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 items-start">
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-4 text-black dark:text-white hover:text-mint dark:hover:text-mint transition-colors">
                <div className="w-12 h-12 border border-black/30 dark:border-zinc-700 rounded-full flex items-center justify-center group-hover:border-mint dark:group-hover:border-mint transition-colors">
                  <ArrowDownRight className="w-5 h-5 text-black dark:text-white" />
                </div>
                <span className="text-sm font-medium uppercase tracking-widest">Explore Services</span>
              </button>

              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-4 text-black dark:text-white hover:text-mint dark:hover:text-mint transition-colors">
                <div className="w-12 h-12 border border-black/30 dark:border-zinc-700 rounded-full flex items-center justify-center group-hover:border-mint dark:group-hover:border-mint transition-colors">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full group-hover:scale-125 transition-transform" />
                </div>
                <span className="text-sm font-medium uppercase tracking-widest">Start Project</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Marquee text background */}
        <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none opacity-5">
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-[10rem] font-display font-bold text-slate-900 dark:text-white mx-8">DESIGN</span>
            <span className="text-[10rem] font-display font-bold text-stroke-gold dark:text-white mx-8">DEVELOP</span>
            <span className="text-[10rem] font-display font-bold text-slate-900 dark:text-white mx-8">DEPLOY</span>
            <span className="text-[10rem] font-display font-bold text-stroke-gold dark:text-white mx-8">SCALE</span>
          </div>
        </div>

        {/* Stats/Info - Absolute positioning on large screens */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 lg:absolute lg:bottom-20 lg:right-12 grid grid-cols-1 md:grid-cols-3 lg:block gap-8 w-full lg:w-72"
        >
          <div className="p-6 bg-slate-100 dark:bg-zinc-900 border-l-2 border-azure">
            <Globe className="w-8 h-8 text-azure mb-4" />
            <h3 className="text-xl font-bold font-robot mb-2 text-black dark:text-white">GLOBAL REACH</h3>
            <p className="text-sm text-black/60 dark:text-zinc-400">Serving clients worldwide with borderless digital solutions.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
