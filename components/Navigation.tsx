
import React, { useState, useEffect } from 'react';

type Page = 'home' | 'cardio' | 'gi' | 'neuro';

interface NavigationProps {
  onOpenCart: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenCart, currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      onNavigate('home');
      // Allow time for render then scroll
      setTimeout(() => {
        const element = document.querySelector(target);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(target);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-lg py-4 shadow-glass border-b border-gray-100' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
          <div className="w-3 h-3 rounded-full bg-river-teal group-hover:bg-amber-glow transition duration-300 shadow-glow"></div>
          <span className="font-serif text-2xl tracking-[0.15em] uppercase font-bold text-river-teal">River</span>
        </button>
        
        {/* Links */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <button onClick={(e) => handleLinkClick(e, '#truth')} className="text-[11px] uppercase tracking-[0.2em] font-semibold text-river-teal hover:text-amber-glow transition">The Truth</button>
            <button onClick={(e) => handleLinkClick(e, '#science')} className="text-[11px] uppercase tracking-[0.2em] font-semibold text-river-teal hover:text-amber-glow transition">Science</button>
            <button onClick={(e) => handleLinkClick(e, '#ritual')} className="text-[11px] uppercase tracking-[0.2em] font-semibold text-river-teal hover:text-amber-glow transition">Ritual</button>
          </div>
          <button 
            onClick={onOpenCart} 
            className="bg-river-teal text-white px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-amber-glow transition duration-300 shadow-xl hover:shadow-glow transform hover:-translate-y-0.5"
          >
            Secure Supply
          </button>
        </div>
      </div>
    </nav>
  );
};
