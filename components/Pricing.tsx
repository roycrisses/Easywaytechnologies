import React from 'react';
import { ArrowLeft, Check, Sparkles, MessageCircle } from 'lucide-react';
import { SERVICES } from './Services'; // Original path was './Services', new path is '../constants'
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations'; // Assuming these are defined in '../utils/animations'

interface PricingProps {
  serviceId: string; // Changed from string | null
  onBack: () => void;
  // onContact: () => void; // Removed
}

export const Pricing: React.FC<PricingProps> = ({ serviceId, onBack }) => { // Removed onContact
  const service = SERVICES.find(s => s.id === serviceId);

  // useEffect(() => { // Removed useEffect
  //   window.scrollTo(0, 0);
  // }, []);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-black/60 dark:text-zinc-400 hover:text-azure dark:hover:text-white mb-12 transition-colors" // Updated classes
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> {/* Updated classes */}
          <span className="text-sm font-mono uppercase tracking-widest">Back to Services</span> {/* Updated content and classes */}
        </button>

        <motion.div // Added motion.div
          className="mb-16" // Updated class
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-5xl md:text-7xl font-bold font-robot mb-6 text-black dark:text-white transition-colors"> {/* Changed h1 to h2, updated classes */}
            <span className="text-azure">{service.title}</span> <br /> {/* Updated content */}
            PACKAGES {/* Updated content */}
          </h2>
          <p className="text-xl text-black/70 dark:text-zinc-400 max-w-2xl font-light"> {/* Updated classes */}
            Transparent pricing designed for scale. Choose the tier that matches your ambition. {/* Updated content */}
          </p>
        </motion.div>

        <motion.div // Added motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {service.pricing.map((tier, index) => (
            <motion.div // Added motion.div
              key={tier.name}
              variants={fadeInUp}
              className="border border-slate-300 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900 shadow-sm dark:shadow-none p-10 flex flex-col h-full hover:shadow-lg hover:bg-mint dark:hover:bg-zinc-800 transition-all duration-300 group"
            >
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-black dark:text-zinc-500 mb-2 block">0{index + 1} — {tier.name}</span>
                <div className="flex items-baseline gap-1"> {/* Added flex items-baseline gap-1 */}
                  <span className="text-4xl font-bold text-black dark:text-white group-hover:text-azure dark:group-hover:text-white transition-colors">{tier.price}</span> {/* Updated classes */}
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-grow"> {/* Added features section */}
                {tier.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-azure mt-1 flex-shrink-0" />
                    <span className="text-sm text-black/80 dark:text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a // Changed Button to a tag
                href={`https://wa.me/9779700802493?text=I'm interested in the ${service.title} - ${tier.name} Plan`} // Updated WhatsApp number and message
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:bg-azure dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg" // Updated classes
              >
                <span>Buy a Plan</span>
                <MessageCircle className="w-4 h-4 ml-2" /> {/* Added MessageCircle icon */}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};