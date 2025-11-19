
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { ArrowLeft } from 'lucide-react';

interface NeuroPageProps {
  onBack: () => void;
}

export const NeuroPage: React.FC<NeuroPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-river-teal transition mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Protocol
        </button>

        <Reveal>
          <h1 className="font-serif text-5xl md:text-6xl text-river-teal mb-6">Cognitive Architecture.</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-12 border-l-2 border-amber-glow pl-6">
            The brain is 60% fat. River provides the exact building blocks required for neuroplasticity and high-performance recall.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Reveal delay={0.1} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl text-river-teal mb-4">Membrane Fluidity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    DHA (Docosahexaenoic Acid) is structurally critical for neuronal membranes. It allows receptors to move freely, ensuring neurotransmitters (like dopamine and serotonin) can dock efficiently. This is the physics of "thinking fast."
                </p>
            </Reveal>
            <Reveal delay={0.2} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl text-river-teal mb-4">Neurogenesis (BDNF)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Consistent Omega-3 intake is linked to higher levels of Brain-Derived Neurotrophic Factor (BDNF). This protein acts as fertilizer for the brain, encouraging the growth of new neurons and protecting existing ones from atrophy.
                </p>
            </Reveal>
            <Reveal delay={0.3} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl text-river-teal mb-4">Inflammation & Fog</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    "Brain fog" is often a symptom of neuro-inflammation. By downregulating pro-inflammatory cytokines in the brain, River clears the noise, allowing for sustained periods of deep work and focus.
                </p>
            </Reveal>
             <Reveal delay={0.4} className="bg-river-teal text-white p-8 rounded-3xl shadow-sm flex items-center justify-center text-center">
                <div>
                    <span className="block text-4xl font-serif text-amber-glow mb-2">60%</span>
                    <p className="text-xs uppercase tracking-widest opacity-70">Lipid Composition</p>
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
