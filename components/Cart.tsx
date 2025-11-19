import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-river-teal/90 backdrop-blur-sm"
          ></motion.div>
          
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              <div className="h-24 flex items-center justify-between px-8 border-b border-gray-100">
                <h2 className="font-serif text-2xl text-river-teal">Your Supply</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-river-teal transition">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4 text-amber-glow shadow-glow">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-river-teal mb-2">Your future is waiting.</h3>
                <p className="text-gray-500 text-sm mb-8 max-w-xs">Secure your monthly allocation of River before the batch closes.</p>
                <button 
                  onClick={() => {
                    onClose();
                    window.location.href = '#offer';
                  }}
                  className="bg-river-teal text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-glow transition shadow-xl"
                >
                  Continue to Checkout
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};