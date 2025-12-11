import React from 'react';

interface TechItem {
    name: string;
    icon: string;
    category: 'ide' | 'language' | 'framework' | 'database' | 'design' | 'devops' | 'video';
}

const techStack: TechItem[] = [
    // IDEs & Tools
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'ide' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops' },
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops' },

    // Deployment & Hosting
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', category: 'devops' },
    { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', category: 'devops' },

    // Databases
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database' },

    // Languages
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'language' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'language' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'language' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'language' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', category: 'language' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'language' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'language' },

    // Frameworks & Libraries
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'framework' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'framework' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'framework' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'framework' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'framework' },

    // CMS
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', category: 'framework' },

    // Design Tools
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'design' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg', category: 'design' },
    { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', category: 'design' },
    { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg', category: 'video' },
    { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg', category: 'video' },
];

export const TechStack: React.FC = () => {
    // Duplicate the array for seamless infinite scroll
    const duplicatedStack = [...techStack, ...techStack];

    return (
        <section className="py-24 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12 mb-16">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-black dark:text-zinc-500 mb-4">Technologies We Master</p>
                    <h2 className="text-4xl md:text-5xl font-audiowide font-bold transition-colors">
                        <span className="text-black dark:text-white">Our Tech</span> <span className="text-azure dark:text-white">Stack</span>
                    </h2>
                </div>
            </div>

            {/* First Row - Left to Right */}
            <div className="relative mb-8">
                <div className="flex animate-scroll-left">
                    {duplicatedStack.map((tech, index) => (
                        <div
                            key={`row1-${index}`}
                            className="flex-shrink-0 mx-4 group"
                        >
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-amber-400 dark:hover:border-zinc-600 hover:scale-110 shadow-sm dark:shadow-none">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                                <span className="text-[10px] md:text-xs text-slate-500 dark:text-zinc-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase tracking-wider">
                                    {tech.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="relative">
                <div className="flex animate-scroll-right">
                    {[...duplicatedStack].reverse().map((tech, index) => (
                        <div
                            key={`row2-${index}`}
                            className="flex-shrink-0 mx-4 group"
                        >
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-amber-400 dark:hover:border-zinc-600 hover:scale-110 shadow-sm dark:shadow-none">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                                <span className="text-[10px] md:text-xs text-slate-500 dark:text-zinc-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase tracking-wider">
                                    {tech.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for animations */}
            <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};
