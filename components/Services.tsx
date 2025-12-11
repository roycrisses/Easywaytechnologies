import React from 'react';
import { Code, Smartphone, BarChart, PenTool, Server, Shield, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Scalable architecture built with React & Next.js.',
    icon: Code,
    features: ['E-commerce', 'Corporate', 'Web Apps'],
    pricing: [
      {
        name: 'Essential',
        price: '$5,000',
        description: 'Perfect for small businesses requiring a digital presence.',
        features: ['5-Page React Website', 'CMS Integration', 'Basic SEO Setup', 'Mobile Responsive']
      },
      {
        name: 'Growth',
        price: '$12,000',
        description: 'Advanced functionality for scaling companies.',
        features: ['Custom Web Application', 'API Integration', 'Advanced Animation', 'Analytics Dashboard', '3 Months Support']
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Full-scale digital transformation.',
        features: ['Microservices Architecture', 'Global CDN Setup', 'Dedicated Team', '24/7 SLA Support', 'Security Audits']
      }
    ]
  },
  {
    id: 'app',
    title: 'Mobile Apps',
    description: 'Native & cross-platform iOS/Android solutions.',
    icon: Smartphone,
    features: ['React Native', 'Flutter', 'Swift'],
    pricing: [
      {
        name: 'MVP',
        price: '$15,000',
        description: 'Rapid prototype to test your market.',
        features: ['iOS & Android (Cross-platform)', 'Core Features', 'App Store Submission', 'Basic Analytics']
      },
      {
        name: 'Pro',
        price: '$35,000',
        description: 'Full-featured application for established user bases.',
        features: ['Native Performance', 'Push Notifications', 'Social Auth', 'Payment Gateway', 'Admin Panel']
      },
      {
        name: 'Platform',
        price: '$80k+',
        description: 'Complex ecosystem with heavy backend requirements.',
        features: ['Real-time Sync', 'Offline Mode', 'Custom Backend', 'Biometric Security', 'Dedicated QA']
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Award-winning aesthetics meet functionality.',
    icon: PenTool,
    features: ['Prototyping', 'User Research', 'Systems'],
    pricing: [
      {
        name: 'Audit',
        price: '$2,500',
        description: 'Comprehensive review of your current UX.',
        features: ['Heuristic Evaluation', 'User Journey Map', 'Accessibility Check', 'Improvement Report']
      },
      {
        name: 'Redesign',
        price: '$8,000',
        description: 'Modernize your existing digital product.',
        features: ['Visual Identity System', 'High-Fidelity Mockups', 'Interactive Prototypes', 'Design System']
      },
      {
        name: 'Product',
        price: '$18,000',
        description: 'End-to-end product design from scratch.',
        features: ['User Research', 'Wireframing', 'User Testing', 'Dev Handoff Specs', 'Post-Launch Review']
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Data-driven strategies for market dominance.',
    icon: BarChart,
    features: ['SEO', 'Analytics', 'Content'],
    pricing: [
      {
        name: 'Startup',
        price: '$1,500/mo',
        description: 'Kickstart your organic traffic.',
        features: ['Technical SEO', 'Keyword Research', '4 Blog Posts/mo', 'Monthly Reporting']
      },
      {
        name: 'Scale',
        price: '$4,000/mo',
        description: 'Aggressive growth strategy.',
        features: ['Competitor Analysis', 'Backlink Building', '10 Blog Posts/mo', 'Conversion Optimization', 'Bi-weekly Calls']
      },
      {
        name: 'Dominance',
        price: '$10k+/mo',
        description: 'Complete market takeover.',
        features: ['Omnichannel Strategy', 'PR & Outreach', 'Video Content', 'Custom Data Science', 'Dedicated Account Manager']
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Domain and Hosting',
    description: 'Robust serverless and edge computing setups.',
    icon: Server,
    features: ['AWS', 'Vercel', 'Docker'],
    pricing: [
      {
        name: 'Setup',
        price: '$3,000',
        description: 'Initial cloud environment configuration.',
        features: ['AWS/GCP Setup', 'CI/CD Pipelines', 'Basic Security Groups', 'Domain Config']
      },
      {
        name: 'Optimization',
        price: '$7,000',
        description: 'Refining costs and performance.',
        features: ['Cost Audit', 'Auto-scaling Config', 'Database Optimization', 'Caching Strategy']
      },
      {
        name: 'Migration',
        price: 'Custom',
        description: 'Moving legacy systems to the cloud.',
        features: ['Zero-downtime Plan', 'Data Integrity Check', 'Containerization', 'Training']
      }
    ]
  },
  {
    id: 'security',
    title: 'Cyber Security',
    description: 'Enterprise-grade protection for your assets.',
    icon: Shield,
    features: ['Audits', 'Pentesting', 'GDPR'],
    pricing: [
      {
        name: 'Scan',
        price: '$2,000',
        description: 'Automated vulnerability assessment.',
        features: ['Network Scan', 'Web App Scan', 'Basic Report', 'Patch Recommendations']
      },
      {
        name: 'Pentest',
        price: '$9,000',
        description: 'Manual penetration testing by experts.',
        features: ['Black Box Testing', 'Social Engineering', 'Detailed Exploitation', 'Remediation Support']
      },
      {
        name: 'Compliance',
        price: '$20,000',
        description: 'Getting you ready for certifications.',
        features: ['SOC2 Prep', 'GDPR Audit', 'Policy Writing', 'Staff Training', 'Continuous Monitoring']
      }
    ]
  }
];

interface ServicesProps {
  onServiceClick: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 scroll-mt-28 transition-colors duration-300">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-zinc-800/50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            variants={fadeInUp}
            onClick={() => onServiceClick(service.id)}
            className="group p-12 bg-white dark:bg-zinc-950 relative hover:bg-slate-100 dark:hover:bg-zinc-900/50 transition-all duration-500 cursor-pointer h-full"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-xs font-mono text-black/70 dark:text-zinc-600">0{index + 1}</span>
              <div className="w-8 h-8 rounded-full border border-black/10 dark:border-zinc-800 flex items-center justify-center group-hover:border-azure transition-colors">
                <div className="w-1.5 h-1.5 bg-azure rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white transition-colors">{service.title}</h3>
            <p className="text-black/60 dark:text-zinc-400 text-sm mb-8 leading-relaxed line-clamp-3">
              {service.description}
            </p>

            <div className="flex justify-between items-end">
              <ul className="flex flex-wrap gap-2">
                {service.features.map(f => (
                  <li key={f} className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 bg-slate-100 dark:bg-zinc-900 text-black dark:text-zinc-400 border border-slate-300 dark:border-zinc-800 transition-colors group-hover:bg-mint dark:group-hover:border-zinc-800">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      <div className="py-24 px-6 lg:px-12 border-b border-slate-200 dark:border-zinc-800 transition-colors bg-slate-100 dark:bg-zinc-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold leading-tight transition-colors">
            <span className="text-black dark:text-white">SYSTEMS FOR</span> <br />
            <span className="text-azure dark:text-zinc-600">THE FUTURE</span>
          </h2>
          <p className="max-w-md text-black/70 dark:text-zinc-400">
            Our services are modular, scalable, and designed to integrate seamlessly with your existing infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};