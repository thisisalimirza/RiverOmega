
import React from 'react';

type Page = 'home' | 'cardio' | 'gi' | 'neuro';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-river-teal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="text-center md:text-left">
          <button onClick={() => onNavigate('home')} className="flex items-center justify-center md:justify-start gap-2 mb-6 group">
            <div className="w-3 h-3 rounded-full bg-amber-glow group-hover:scale-125 transition"></div>
            <span className="font-serif text-2xl tracking-widest uppercase font-bold">River</span>
          </button>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            We help elite performers live long enough to enjoy the fruits of their labor. 
            <br />Precision. Purity. Longevity.
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <h5 className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Science</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li><button onClick={() => onNavigate('cardio')} className="hover:text-amber-glow transition">Cardiovascular</button></li>
              <li><button onClick={() => onNavigate('neuro')} className="hover:text-amber-glow transition">Neurological</button></li>
              <li><button onClick={() => onNavigate('gi')} className="hover:text-amber-glow transition">Gastrointestinal</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-amber-glow transition">Contact</a></li>
              <li><a href="#" className="hover:text-amber-glow transition">Login</a></li>
              <li><a href="#" className="hover:text-amber-glow transition">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-[10px] text-white/30 uppercase tracking-widest">
        &copy; 2025 River Longevity Sciences. All rights reserved.
      </div>
    </footer>
  );
};
