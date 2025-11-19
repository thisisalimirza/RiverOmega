import React from 'react';
import { motion } from 'framer-motion';

export const Bottle: React.FC = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      {/* Bottle Container */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="relative w-64 h-[400px] bg-gradient-to-b from-white/60 to-white/20 backdrop-blur-md border border-white/50 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden z-10 hover:scale-105 transition-transform duration-[1.5s] ease-out"
      >
        
        {/* The Liquid (Amber Gradient) */}
        <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-t from-amber-glow via-amber-light to-transparent opacity-90 mix-blend-multiply"></div>
        
        {/* The "Soul" (Floating Orb) */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-24 rounded-full relative z-20 opacity-90 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(243, 156, 18, 0.9), rgba(230, 126, 34, 1))',
            boxShadow: '0 0 60px rgba(230, 126, 34, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.4)'
          }}
        />
        
        {/* Labeling */}
        <div className="absolute top-10 w-full text-center z-30">
          <p className="font-serif text-river-teal text-xl tracking-[0.3em] font-bold">RIVER</p>
          <p className="text-[8px] uppercase tracking-[0.4em] mt-2 text-river-teal/60">Longevity Index 99.9%</p>
        </div>

        {/* Glass Reflections */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent opacity-50 pointer-events-none"></div>
      </motion.div>
      
      {/* Shadow */}
      <div className="absolute -bottom-16 w-48 h-16 bg-river-teal/10 blur-2xl rounded-[100%]"></div>
    </div>
  );
};