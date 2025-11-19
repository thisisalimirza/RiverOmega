
import React from 'react';
import { Reveal } from './ui/Reveal';
import { Bottle } from './ui/Bottle';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-20 pb-12 overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-50 rounded-full blur-[120px] opacity-50 -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-50 rounded-full blur-[100px] opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Copy: High Status, High Agency */}
        {/* On mobile: Order 1 (Text on top) */}
        <div className="order-1 lg:order-1 mt-8 md:mt-0">
          <Reveal>
            <div className="inline-block py-1 px-3 border border-river-teal/20 rounded-full mb-6 md:mb-8 bg-white/50 backdrop-blur-sm">
              <span className="text-river-teal text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em]">Molecularly Distilled in Norway</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1] md:leading-[0.95] mb-6 md:mb-8 text-river-teal">
              You’ve built your legacy. <br />
              <span className="italic text-amber-glow">Stay to enjoy it.</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed mb-10 md:mb-12 max-w-lg">
              Success buys everything except time. River is the architectural preservation of your cellular health. The Blue Zone protocol, encapsulated.
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <a href="#offer" className="group flex items-center gap-2 border-b border-river-teal pb-1 text-xs uppercase tracking-[0.2em] font-bold text-river-teal hover:text-amber-glow hover:border-amber-glow transition w-fit">
                Begin The Ritual
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span>Batch #042 Open</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual: The "Method" Aesthetic Bottle */}
        {/* On mobile: Order 2 (Visual below text) */}
        <div className="order-2 lg:order-2 flex justify-center items-center">
            <Bottle />
        </div>
      </div>
    </section>
  );
};
