
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { ArrowLeft } from 'lucide-react';

interface CardioPageProps {
  onBack: () => void;
}

export const CardioPage: React.FC<CardioPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-river-teal transition mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Protocol
        </button>

        <Reveal>
          <h1 className="font-serif text-5xl md:text-6xl text-river-teal mb-6">The Engine Room.</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-12 border-l-2 border-amber-glow pl-6">
            Cardiovascular disease remains the primary adversary of longevity. River is engineered to reinforce the arterial infrastructure.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Reveal delay={0.1} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl text-river-teal mb-4">Triglyceride Reduction</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    High-dose EPA (Eicosapentaenoic Acid) has been clinically proven to lower triglyceride levels in the bloodstream. By clearing these lipids, we reduce the viscosity of the blood, easing the workload on the heart muscle.
                </p>
            </Reveal>
            <Reveal delay={0.2} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl text-river-teal mb-4">Arterial Elasticity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    As we age, arteries stiffen. Omega-3s integrate into the cell membranes of the endothelium (blood vessel lining), maintaining flexibility. This adaptive capacity is crucial for blood pressure regulation during stress or exercise.
                </p>
            </Reveal>
            <Reveal delay={0.3} className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl text-river-teal mb-4">Plaque Stability</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    While reversing plaque is difficult, stabilizing it is vital. Omega-3s help thicken the fibrous cap of existing plaque, reducing the risk of rupture—the event that triggers acute cardiac incidents.
                </p>
            </Reveal>
             <Reveal delay={0.4} className="bg-river-teal text-white p-8 rounded-3xl shadow-sm flex items-center justify-center text-center">
                <div>
                    <span className="block text-4xl font-serif text-amber-glow mb-2">25%</span>
                    <p className="text-xs uppercase tracking-widest opacity-70">Risk Reduction in Clinical Models</p>
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
