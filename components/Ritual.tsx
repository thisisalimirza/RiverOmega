
import React from 'react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';

export const Ritual: React.FC = () => {
  return (
    <section id="ritual" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Aesthetic / The Object */}
          <Reveal className="bg-[#F5F7F7] p-12 rounded-[3rem] flex flex-col justify-between min-h-[600px] relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">The Object</p>
              <h3 className="font-serif text-4xl text-river-teal mb-6">Display. Don't Hide.</h3>
              <p className="text-gray-500 font-light leading-relaxed max-w-md">
                Traditional supplements are ugly plastic. They hide in cabinets, forgotten. 
                River is housed in UV-blocking violet glass. It lives on your nightstand or marble counter.
                An object that commands attention.
              </p>
            </div>

            {/* The Vessel Illustration */}
            <div className="absolute inset-0 flex items-end justify-center pb-12 pointer-events-none">
              {/* Glow behind jar */}
              <div className="absolute bottom-20 w-64 h-64 bg-river-teal/5 rounded-full blur-3xl"></div>
              
              {/* The Jar Container */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10 w-48 h-56 group-hover:scale-105 transition-transform duration-700 ease-out"
              >
                {/* Jar Body (CSS) */}
                <div className="w-full h-full bg-gradient-to-br from-[#1A3E4A] to-[#08191E] rounded-[2rem] shadow-2xl border-r border-white/10 relative overflow-hidden backdrop-blur-md">
                   {/* Glass Highlight */}
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/20 to-transparent opacity-30"></div>
                   <div className="absolute top-4 right-4 w-2/3 h-full bg-gradient-to-bl from-white/5 to-transparent rotate-12 transform opacity-40"></div>
                   
                   {/* Label */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] border border-[#E67E22]/30 bg-[#0F2C35] flex flex-col items-center justify-center text-center p-4">
                      <span className="text-[#E67E22] text-[8px] tracking-[0.3em] uppercase mb-2">Batch No. 42</span>
                      <span className="text-white font-serif text-2xl tracking-[0.2em] font-bold">RIVER</span>
                      <div className="w-8 h-[1px] bg-[#E67E22] my-3"></div>
                      <span className="text-white/60 text-[6px] tracking-[0.2em] uppercase">Lipid Complex</span>
                   </div>
                </div>
                
                {/* Lid */}
                <div className="absolute -top-6 left-[5%] w-[90%] h-8 bg-gradient-to-r from-[#222] to-[#111] rounded-t-lg border-t border-white/10 shadow-lg"></div>

                {/* Reflection/Shadow on Floor */}
                <div className="absolute -bottom-8 left-4 w-[90%] h-4 bg-black/20 blur-xl rounded-[100%]"></div>
              </motion.div>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 border border-river-teal/20 rounded-full text-river-teal text-[10px] uppercase tracking-widest font-bold bg-white/50 backdrop-blur-sm">Miron Violet Glass</span>
              <span className="px-4 py-2 border border-river-teal/20 rounded-full text-river-teal text-[10px] uppercase tracking-widest font-bold bg-white/50 backdrop-blur-sm">100% Plastic Free</span>
            </div>
          </Reveal>

          {/* Substance */}
          <Reveal delay={0.2} className="bg-river-teal p-12 rounded-[3rem] text-white flex flex-col justify-between min-h-[600px] relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">The Substance</p>
              <h3 className="font-serif text-4xl mb-6">The Golden Ratio.</h3>
              <p className="text-gray-300 font-light leading-relaxed max-w-md">
                We use a precise 3:2 ratio of EPA to DHA, mimicking the natural profile found in wild fish, but at 5x the concentration of retail brands.
              </p>
            </div>
            <div className="relative z-10 mt-12 grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition duration-300">
                <span className="block text-3xl font-serif text-amber-glow">2000mg</span>
                <span className="text-[10px] uppercase tracking-widest opacity-70">Total Omega-3</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition duration-300">
                <span className="block text-3xl font-serif text-amber-glow">Zero</span>
                <span className="text-[10px] uppercase tracking-widest opacity-70">Reflux / Oxidation</span>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-glow rounded-full blur-[100px] opacity-40 z-0"></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
