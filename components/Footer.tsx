import React from 'react';

export const Footer: React.FC = () => {
   return (
      <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12 transition-colors duration-300">
         <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex flex-col items-center md:items-start gap-2">
                  <span className="text-xl font-display font-bold tracking-tighter text-zinc-900 dark:text-white uppercase transition-colors">
                     EasyWay<span className="text-zinc-400 dark:text-zinc-700 transition-colors">.</span>
                  </span>
                  <p className="text-zinc-600 text-xs">Mahendranagar, Nepal</p>
                  <a href="tel:+9779700804395" className="text-zinc-600 text-xs hover:text-zinc-900 dark:hover:text-white transition-colors">
                     +977 9700804395
                  </a>
                  <a href="mailto:info@easyway.com.np" className="text-zinc-600 text-xs hover:text-zinc-900 dark:hover:text-white transition-colors">
                     info@easyway.com.np
                  </a>
               </div>

               <div className="flex gap-8">
                  <a href="https://www.facebook.com/easywaytech" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors">Facebook</a>
                  <a href="https://www.instagram.com/easyway.technologies" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors">Instagram</a>
                  <a href="https://www.tiktok.com/@easywaytechnologies" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors">TikTok</a>
               </div>

               <p className="text-zinc-500 dark:text-zinc-600 text-[10px] uppercase tracking-widest transition-colors">
                  © 2025 EasyWay Technology.
               </p>
            </div>

            {/* Developer Credit */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-900 text-center transition-colors">
               <p className="text-zinc-500 dark:text-zinc-600 text-[10px] uppercase tracking-widest transition-colors">
                  Developed by <span className="text-zinc-700 dark:text-zinc-400 transition-colors">Mr. Krishna Karki</span>
               </p>
            </div>
         </div>
      </footer>
   );
};