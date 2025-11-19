import React from 'react';
import { Reveal } from './ui/Reveal';

export const ColdChain: React.FC = () => {
  return (
    <section className="py-32 bg-river-teal text-white relative overflow-hidden">
      {/* Abstract Map Texture */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">The Cold Chain</h2>
            <p className="text-river-mist/70 font-light text-lg max-w-2xl mx-auto">
              We own the entire supply chain. From the Arctic Circle to your doorstep, the oil is never exposed to oxygen, heat, or light.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Step 1 */}
            <div className="bg-river-teal p-12 hover:bg-[#143640] transition duration-500 group">
              <div className="text-4xl font-serif text-amber-glow mb-6 opacity-50 group-hover:opacity-100 transition">01.</div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Wild Arctic Skrei</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Harvested sustainably in the pristine, icy waters of Norway. We use small-species fish only, ensuring zero heavy metal accumulation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-river-teal p-12 hover:bg-[#143640] transition duration-500 group">
              <div className="text-4xl font-serif text-amber-glow mb-6 opacity-50 group-hover:opacity-100 transition">02.</div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Molecular Distillation</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The oil is purified via low-heat molecular distillation. This concentrates the EPA & DHA by 500% while stripping away impurities.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-river-teal p-12 hover:bg-[#143640] transition duration-500 group">
              <div className="text-4xl font-serif text-amber-glow mb-6 opacity-50 group-hover:opacity-100 transition">03.</div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Nitrogen Flush</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every bottle is flushed with inert nitrogen to displace oxygen before sealing. Freshness is locked in until you break the seal.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};