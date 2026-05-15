import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

import logoUrl from '../assets/logo.svg';

const links = [
  { name: 'Welkom', href: '/index.html' },
  { name: 'A la Carte', href: '/alacarte.html' },
  { name: 'Halfpension', href: '/halfpension.html' },
  { name: 'Drinks', href: '/drinks.html' },
  { name: 'Lunch', href: '/lunch.html' },
  { name: 'Impressie', href: '/impressie.html' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}>
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="/index.html" className="z-50 relative flex items-center">
            <img src={logoUrl} alt="Zeeuws Verlangen Logo" className="h-10 lg:h-12 w-auto" />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs font-semibold tracking-widest link-hover hover:text-accent uppercase"
              >
                {link.name}
              </a>
            ))}
            <a href="/index.html#contact" className="px-6 py-2.5 bg-primary text-background rounded-full text-xs tracking-wider uppercase font-semibold hover:bg-accent transition-colors magnetic-hover">
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-primary z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 bg-background flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out z-40 lg:hidden',
        menuOpen ? 'translate-y-0' : '-translate-y-full'
      )}>
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-heading tracking-widest hover:text-accent uppercase"
          >
            {link.name}
          </a>
        ))}
        <a href="/index.html#contact" onClick={() => setMenuOpen(false)} className="px-8 py-3 bg-primary text-background rounded-full text-lg tracking-widest font-heading uppercase hover:bg-accent">
          Contact
        </a>
      </div>
    </>
  );
}
