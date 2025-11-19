
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { ArrowLeft } from 'lucide-react';

interface GIPageProps {
  onBack: () => void;
}

export const GIPage: React.FC<GIPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-river-teal transition mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Protocol
        </button>

        <Reveal>
          <h1 className="font-serif text-5xl md:text-6xl text-river-teal mb-6">The Second Brain.</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-12 border-l-2 border-amber-glow pl-6">
            Systemic health begins in the gut lining. River supports the microbiome and reinforces the barrier against endotoxemia.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Reveal delay={0.1} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl text-river-teal mb-4">Microbiome Diversity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Emerging research indicates that Omega-3s act as prebiotics, encouraging the growth of anti-inflammatory bacteria like *Akkermansia muciniphila*. A diverse microbiome is the strongest predictor of longevity.
                </p>
            </Reveal>
            <Reveal delay={0.2} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl text-river-teal mb-4">Intestinal Alkaline Phosphatase</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    River helps stimulate the production of IAP, an enzyme that detoxifies harmful bacteria byproducts (LPS) before they can cross into the bloodstream. This prevents "leaky gut" and low-grade systemic inflammation.
                </p>
            </Reveal>
            <Reveal delay={0.3} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl text-river-teal mb-4">The Gut-Brain Axis</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    90% of serotonin is produced in the gut. By reducing intestinal inflammation, Omega-3s facilitate better signaling via the vagus nerve, directly influencing mood stability and stress resilience.
                </p>
            </Reveal>
             <Reveal delay={0.4} className="bg-river-teal text-white p-8 rounded-3xl shadow-sm flex items-center justify-center text-center">
                <div>
                    <span className="block text-4xl font-serif text-amber-glow mb-2">IAP</span>
                    <p className="text-xs uppercase tracking-widest opacity-70">Enzyme Activation</p>
                </div>
            </Reveal>
        </div>

        <div className="text-center">
            <button onClick={onBack} className="inline-block border-b border-river-teal pb-1 text-xs uppercase tracking-[0.2em] font-bold text-river-teal hover:text-amber-glow hover:border-amber-glow transition">
                Return to Overview
            </button>
        </div>
      </div>
    </div>
  );
};
