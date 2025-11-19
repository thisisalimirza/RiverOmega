
import React from 'react';
import { Reveal } from './ui/Reveal';
import { Check, AlertTriangle } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-river-teal text-white relative overflow-hidden">
      {/* Background Detail */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(230,126,34,0.15),_transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-amber-glow text-xs font-bold uppercase tracking-widest mb-4 block">The Diligence</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Not All Oil Is Equal.</h2>
            <p className="text-river-mist/70 font-light text-lg max-w-2xl mx-auto">
              The supplement industry is unregulated. Most brands sell oxidized industrial byproducts wrapped in marketing. River adheres to the strict Norwegian Medicinal Standard.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-4 text-sm md:text-base">
                
                {/* Header Row */}
                <div className="col-span-1 p-6 border-b border-white/10 flex items-center font-serif text-xl text-white/50 italic">
                  The Standard
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 bg-white/5 text-center font-bold text-amber-glow uppercase tracking-widest flex flex-col items-center justify-center relative">
                  <span>River</span>
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-glow shadow-[0_0_20px_rgba(230,126,34,0.5)]"></div>
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-gray-400 font-bold uppercase tracking-widest">
                  Pharmacy Grade
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-gray-400 font-bold uppercase tracking-widest">
                  Retail Brands
                </div>

                {/* Row 1: Source */}
                <div className="col-span-1 p-6 border-b border-white/10 font-medium text-white/80 flex items-center">
                  Source Origin
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 bg-white/5 text-center text-white font-bold flex items-center justify-center">
                  Wild Arctic Skrei
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-white/60 flex items-center justify-center">
                  Mixed Species
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-white/60 flex items-center justify-center">
                  Farm Raised / Unknown
                </div>

                {/* Row 2: TOTOX */}
                <div className="col-span-1 p-6 border-b border-white/10 font-medium text-white/80 flex items-center">
                  Oxidation (TOTOX)
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 bg-white/5 text-center text-amber-glow font-bold flex items-center justify-center gap-2">
                  &lt; 5 (Ultra Fresh) <Check className="w-4 h-4" />
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-white/60 flex items-center justify-center">
                  10 - 20
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-red-400 flex items-center justify-center gap-2">
                  26+ (Rancid) <AlertTriangle className="w-4 h-4" />
                </div>

                {/* Row 3: Form */}
                <div className="col-span-1 p-6 border-b border-white/10 font-medium text-white/80 flex items-center">
                  Molecular Form
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 bg-white/5 text-center text-white font-bold flex items-center justify-center">
                  Triglyceride (Natural)
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-white/60 flex items-center justify-center">
                  Ethyl Ester (Synthetic)
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-white/60 flex items-center justify-center">
                  Ethyl Ester
                </div>

                {/* Row 4: Bioavailability */}
                <div className="col-span-1 p-6 border-b border-white/10 font-medium text-white/80 flex items-center">
                  Absorption Rate
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 bg-white/5 text-center text-white font-bold flex items-center justify-center">
                  98% Absorbable
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-white/60 flex items-center justify-center">
                  ~50% Absorbable
                </div>
                <div className="col-span-1 p-6 border-b border-white/10 text-center text-white/60 flex items-center justify-center">
                  Poor
                </div>

                {/* Row 5: Vessel */}
                <div className="col-span-1 p-6 font-medium text-white/80 flex items-center">
                  Preservation
                </div>
                <div className="col-span-1 p-6 bg-white/5 text-center text-white font-bold flex items-center justify-center">
                  UV-Block Glass + N2 Flush
                </div>
                <div className="col-span-1 p-6 text-center text-white/60 flex items-center justify-center">
                  Clear Plastic
                </div>
                <div className="col-span-1 p-6 text-center text-white/60 flex items-center justify-center">
                  Clear Plastic
                </div>

              </div>
            </div>
          </div>
        </Reveal>
        
        <div className="mt-8 text-center">
            <p className="text-xs text-white/40 uppercase tracking-widest">*Data based on Independent Third-Party Lab Analysis (Eurofins), 2024.</p>
        </div>
      </div>
    </section>
  );
};
