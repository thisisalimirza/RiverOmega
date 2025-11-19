
import React from 'react';
import { Reveal } from './ui/Reveal';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

export const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-river-teal mb-6">The 30-Day Protocol</h2>
            <p className="text-gray-500 mb-12 font-light max-w-xl mx-auto leading-relaxed">
                Do not commit to a lifetime. Commit to 30 days. 
                If you do not feel a cognitive shift, we refund you in full. You keep the vessel.
            </p>

            <div className="bg-[#F5F7F7] rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-river-teal/5 border border-gray-200 relative overflow-hidden transition-all hover:shadow-river-teal/10">
                
                <div className="flex flex-col md:flex-row items-stretch gap-12">
                    
                    {/* Left: The "What" */}
                    <div className="flex-1 text-left space-y-8">
                        <div>
                            <h3 className="font-serif text-3xl text-river-teal mb-2">The Starter Kit</h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-amber-glow">Batch #042 Allocation</p>
                        </div>

                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 text-river-teal shadow-sm"><Check className="w-3 h-3" /></div>
                                <span><strong>30-Day Supply</strong> of Ultra-Pure Omega-3 (2000mg)</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 text-river-teal shadow-sm"><Check className="w-3 h-3" /></div>
                                <span><strong>The Forever Vessel™</strong> (Hand-blown Miron Glass)</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 text-river-teal shadow-sm"><Check className="w-3 h-3" /></div>
                                <span><strong>Travel Tin</strong> (Aluminum, Airtight)</span>
                            </li>
                        </ul>
                        
                        <div className="p-4 bg-white rounded-xl border border-gray-100 flex gap-3 items-start">
                            <ShieldCheck className="w-5 h-5 text-amber-glow shrink-0 mt-1" />
                            <p className="text-xs text-gray-500 leading-relaxed">
                                <strong>The "Empty Bottle" Guarantee:</strong> Use it all. If you don't see improved biomarkers or focus, email us for a 100% refund. No return shipping required.
                            </p>
                        </div>
                    </div>

                    {/* Right: The "Action" */}
                    <div className="flex-1 bg-white rounded-2xl p-8 border border-gray-100 flex flex-col justify-between shadow-lg relative overflow-hidden group">
                         {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-river-teal/5 rounded-full blur-2xl group-hover:bg-amber-glow/10 transition duration-700"></div>

                        <div>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-5xl font-serif text-river-teal">$85</span>
                                <span className="text-gray-400 text-sm mb-2">/ kit</span>
                            </div>
                            <p className="text-xs text-gray-400">One-time purchase available.</p>
                        </div>

                        <div className="mt-8 space-y-4">
                            <button className="w-full bg-river-teal text-white py-5 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-amber-glow hover:shadow-xl hover:shadow-amber-glow/30 transition duration-300 ease-out flex items-center justify-center gap-2 group-hover:gap-3">
                                Secure Supply <ArrowRight className="w-4 h-4" />
                            </button>
                            <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest">
                                Ships immediately via Priority Air
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};
