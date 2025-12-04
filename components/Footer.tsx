import React from 'react';

export const Footer: React.FC = () => {
   return (
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
         <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex flex-col items-center md:items-start gap-2">
                  <span className="text-xl font-display font-bold tracking-tighter text-white uppercase">
                     EasyWay<span className="text-zinc-700">.</span>
                  </span>
                  <p className="text-zinc-500 text-xs">Mahendranagar, Nepal</p>
                  <a href="tel:+9779700802493" className="text-zinc-500 text-xs hover:text-white transition-colors">
                     +977 9700802493
                  </a>
                  <a href="mailto:info@easyway.com.np" className="text-zinc-500 text-xs hover:text-white transition-colors">
                     info@easyway.com.np
                  </a>
               </div>

               <div className="flex gap-8">
                  <a href="https://www.facebook.com/easywaytech" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors">Facebook</a>
                  <a href="https://www.instagram.com/easyway.technologies" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors">Instagram</a>
                  <a href="https://www.tiktok.com/@easywaytechnologies" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-white uppercase tracking-wider transition-colors">TikTok</a>
               </div>

               <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
                  © 2025 EasyWay Technology.
               </p>
            </div>
         </div>
      </footer>
   );
};