
import React from 'react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';

export const Truth: React.FC = () => {
  return (
    <section id="truth" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="text-amber-glow text-xs font-bold uppercase tracking-widest mb-4 block">The Industry Failure</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-river-teal">
              Most supplements <br />
              are <span className="italic text-gray-400">decaying</span> before you open them.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Break a capsule of your current fish oil. <strong>Does it smell like fish?</strong>
            </p>
            <p className="text-gray-500 font-light mb-8 leading-relaxed">
              That isn't flavor. That is <strong className="text-river-teal">rancidity (oxidation)</strong>. When Omega-3s oxidize, they transform into lipid peroxides—free radicals that <strong>accelerate cellular aging</strong> and inflammation.
              <br/><br/>
              Standard retail brands sit in hot warehouses for months. You are paying to ingest metabolic stress. River is the antidote: nitrogen-flushed and harvested on-demand.
            </p>
            <div className="p-6 bg-river-mist rounded-xl border-l-2 border-river-teal">
              <p className="text-sm text-river-teal font-medium italic">
                "River is the first brand I've found with a TOTOX score below 5. It's as fresh as raw sashimi."
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-2">— Dr. J. Peterson, Longevity Researcher</p>
            </div>
          </Reveal>

          {/* TOTOX Visualization */}
          <Reveal delay={0.2} className="bg-[#F5F7F7] p-12 rounded-[2.5rem]">
            <h3 className="text-center font-serif text-2xl mb-10 text-river-teal">The TOTOX Standard</h3>
            
            {/* Chart */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2 text-gray-500">
                  <span>Standard Retail</span>
                  <span>Score: 26 (High Oxidation)</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-red-400/50"
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2 text-gray-500">
                  <span>Prescription Grade</span>
                  <span>Score: 12 (Acceptable)</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                  <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: "40%" }}
                     transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-river-surface"
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2 text-river-teal font-bold">
                  <span>River Protocol</span>
                  <span>Score: &lt;5 (Fresh)</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden relative shadow-glow">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "10%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    className="absolute top-0 left-0 h-full bg-amber-glow"
                  ></motion.div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-8 text-center leading-relaxed">
                *TOTOX (Total Oxidation) measures the freshness of oil. Scores above 26 are considered highly oxidized and pro-inflammatory.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
