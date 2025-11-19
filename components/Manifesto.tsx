
import React from 'react';
import { Reveal } from './ui/Reveal';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-32 bg-[#0F2C35] text-white relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <div className="w-12 h-12 border border-amber-glow/30 rounded-full flex items-center justify-center mx-auto mb-12 bg-white/5 backdrop-blur-sm">
            <span className="font-serif text-amber-glow italic">R</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl leading-relaxed mb-12 text-white/90">
            "We are the first generation with the option to <span className="text-amber-glow italic">decide</span> how we age."
          </h2>
          
          <div className="space-y-8 text-river-mist/70 font-light text-lg leading-relaxed text-left">
            <p>
              There is a difference between lifespan and healthspan. Modern medicine has become excellent at extending the former, often at the expense of the latter. We are keeping bodies alive, but we are not keeping them <em>vital</em>.
            </p>
            <p>
              At River, we believe that the body is an architectural project. It requires high-quality raw materials to maintain structural integrity against the entropy of time.
            </p>
            <p>
              We are not a supplement company. We are a logistics company for cellular health. We solve the problem of sourcing, preserving, and delivering the most volatile, yet most critical, molecule for human longevity: Omega-3.
            </p>
            <p>
              This is not for everyone. It is for those who view their health as their primary asset class.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-glow mb-2">The Promise</p>
            <p className="font-serif text-xl">River Longevity Sciences</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};