import React from 'react';
import { TECH_STACK } from '../constants';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '../utils/animations';

export const TechStack: React.FC = () => {
    // Duplicate the stack for seamless infinite scroll
    const techStack = Object.values(TECH_STACK).flat();
    const duplicatedStack = [...techStack, ...techStack];

    return (
        <section className="py-24 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12 mb-16">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-black dark:text-zinc-500 mb-4">Technologies We Master</p>
                    <h2 className="text-5xl md:text-7xl font-audiowide font-bold text-black dark:text-white mb-8 transition-colors">
                        FULL STACK <span className="text-azure">POWER</span>
                    </h2>
                </motion.div>
            </div>

            <motion.div
                className="relative w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
                    {duplicatedStack.map((tech, index) => (
                        <div
                            key={`row1-${index}`}
                            className="flex-shrink-0 mx-4 group"
                        >
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-amber-400 dark:hover:border-zinc-600 hover:scale-110 shadow-sm dark:shadow-none">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                                <span className="text-xs font-mono text-black dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">{tech.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Reverse Scroll Row */}
            <motion.div
                className="relative w-full mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="flex animate-scroll-reverse hover:[animation-play-state:paused] w-max">
                    {duplicatedStack.map((tech, index) => (
                        <div
                            key={`row2-${index}`}
                            className="flex-shrink-0 mx-4 group"
                        >
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-amber-400 dark:hover:border-zinc-600 hover:scale-110 shadow-sm dark:shadow-none">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                                <span className="text-xs font-mono text-black dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">{tech.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
