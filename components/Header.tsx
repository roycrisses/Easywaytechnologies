import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';

const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Consultant', href: '#ai-consultant' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="group">
          <Logo size="sm" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Project
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-zinc-950 z-40 flex flex-col justify-center p-8">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-3xl font-display font-bold text-white uppercase hover:text-zinc-500 transition-colors"
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" className="w-full mt-8" onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Start Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};