import React from 'react';
import { ArrowDownRight, Globe } from 'lucide-react';
import './glitch.css';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">

          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-bold text-zinc-900 dark:text-white leading-[0.9] tracking-tight mb-8 transition-colors">
              <span className="glitch relative inline-block" data-text="DIGITAL">DIGITAL</span> <br />
              <span className="text-zinc-400 dark:text-zinc-700 glitch relative inline-block" data-text="REALITY">REALITY</span> <br />
              SHIFT.
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mb-12 leading-relaxed font-light transition-colors">
              We craft digital experiences that defy expectation. Minimalist architecture for maximum impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-4 text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
                <div className="w-12 h-12 border border-zinc-300 dark:border-zinc-700 rounded-full flex items-center justify-center group-hover:border-zinc-900 dark:group-hover:border-white transition-colors">
                  <ArrowDownRight className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium uppercase tracking-widest">Explore Services</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative">
            {/* Abstract animated geometric form */}
            <div className="relative w-full aspect-square border border-zinc-200 dark:border-zinc-800 rounded-full animate-spin-slow flex items-center justify-center opacity-60 transition-colors">
              <div className="w-[80%] h-[80%] border border-zinc-300 dark:border-zinc-700 rounded-full animate-spin-slow transition-colors" style={{ animationDirection: 'reverse' }}></div>
              <div className="w-[60%] h-[60%] border border-zinc-400 dark:border-zinc-600 rounded-full animate-spin-slow transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zinc-200/50 dark:via-zinc-800/10 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 right-0 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-[200px] transition-colors shadow-sm dark:shadow-none">
              <Globe className="w-6 h-6 text-zinc-900 dark:text-white mb-3" />
              <p className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-wider leading-relaxed transition-colors">
                Serving clients worldwide from our digital HQ.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee text background */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[10rem] font-display font-bold text-zinc-900 dark:text-white mx-8">DESIGN</span>
          <span className="text-[10rem] font-display font-bold text-zinc-900 dark:text-white mx-8">DEVELOP</span>
          <span className="text-[10rem] font-display font-bold text-zinc-900 dark:text-white mx-8">DEPLOY</span>
          <span className="text-[10rem] font-display font-bold text-zinc-900 dark:text-white mx-8">SCALE</span>
        </div>
      </div>
    </section>
  );
};