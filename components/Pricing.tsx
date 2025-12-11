import React, { useEffect } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { SERVICES } from './Services';
import { Button } from './ui/Button';

interface PricingProps {
  serviceId: string | null;
  onBack: () => void;
  onContact: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ serviceId, onBack, onContact }) => {
  const service = SERVICES.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-slate-500 hover:text-slate-900 dark:hover:text-white mb-12 transition-colors uppercase text-xs tracking-widest font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="mb-24">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 dark:text-white uppercase mb-6 leading-[0.9] transition-colors">
            {service.title} <br /> <span className="text-amber-500 dark:text-zinc-800 transition-colors">Pricing</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-zinc-400 max-w-2xl font-light transition-colors">
            Transparent investment for high-caliber results. Select the tier that aligns with your trajectory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {service.pricing.map((tier, index) => (
            <div
              key={tier.name}
              className="border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none p-10 flex flex-col h-full hover:shadow-lg dark:hover:bg-zinc-800 transition-all duration-300 group"
            >
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-slate-500 mb-2 block">0{index + 1} — {tier.name}</span>
                <div className="text-4xl font-display font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-white transition-colors">{tier.price}</div>
              </div>

              <p className="text-slate-600 dark:text-zinc-400 text-sm mb-12 min-h-[40px] transition-colors">
                {tier.description}
              </p>

              <Button
                onClick={() => {
                  const message = encodeURIComponent(`Hi, I'm interested in the ${tier.name} plan for ${service.title}.`);
                  window.open(`https://wa.me/9779700804395?text=${message}`, '_blank');
                }}
                variant="outline"
                className="w-full mt-auto border-amber-200 dark:border-zinc-700 text-slate-700 dark:text-white hover:border-amber-500 hover:text-amber-600 dark:hover:border-white dark:hover:text-black"
              >
                Buy a Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};