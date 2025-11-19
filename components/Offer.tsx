
import React from 'react';
import { Reveal } from './ui/Reveal';
import { Check, ShieldCheck, ArrowRight, FileText, Crown } from 'lucide-react';

export const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal>
            <span className="text-amber-glow text-xs font-bold uppercase tracking-widest mb-4 block">The Investment</span>
            <h2 className="font-serif text-4xl md:text-5xl text-river-teal mb-6">The 60-Day Protocol</h2>
            <p className="text-gray-500 mb-12 font-light max-w-xl mx-auto leading-relaxed">
                Cellular turnover takes time. We do not sell single bottles because biology requires continuity. 
                Experience the full cycle of renewal.
            </p>

            <div className="bg-[#F5F7F7] rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-river-teal/5 border border-gray-200 relative overflow-hidden transition-all hover:shadow-river-teal/10">
                
                <div className="flex flex-col md:flex-row items-stretch gap-12">
                    
                    {/* Left: The "What" */}
                    <div className="flex-1 text-left space-y-8">
                        <div>
                            <h3 className="font-serif text-3xl text-river-teal mb-2">The Vitality Allocation</h3>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-glow bg-amber-50 inline-block px-2 py-1 rounded">Batch #042 Priority Access</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">Hardware</p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 text-river-teal shadow-sm"><Check className="w-3 h-3" /></div>
                                        <span><strong>60-Day Supply</strong> (High Potency)</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 text-river-teal shadow-sm"><Check className="w-3 h-3" /></div>
                                        <span><strong>Forever Vessel™</strong> (Miron Glass)</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 text-river-teal shadow-sm"><Check className="w-3 h-3" /></div>
                                        <span><strong>Travel Tin</strong> (Aluminum)</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">Digital Bonuses</p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 rounded-full bg-river-teal flex items-center justify-center shrink-0 text-white shadow-sm"><FileText className="w-3 h-3" /></div>
                                        <span><strong>"The Longevity Blueprint"</strong> (PDF Report)</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-5 h-5 rounded-full bg-river-teal flex items-center justify-center shrink-0 text-white shadow-sm"><Crown className="w-3 h-3" /></div>
                                        <span><strong>Private Concierge Access</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="p-4 bg-white rounded-xl border border-gray-100 flex gap-3 items-start">
                            <ShieldCheck className="w-5 h-5 text-amber-glow shrink-0 mt-1" />
                            <p className="text-xs text-gray-500 leading-relaxed">
                                <strong>Scientific Guarantee:</strong> If your bloodwork markers (Triglycerides/CRP) do not improve after 60 days, we refund you in full.
                            </p>
                        </div>
                    </div>

                    {/* Right: The "Action" */}
                    <div className="flex-1 bg-white rounded-2xl p-8 border border-gray-100 flex flex-col justify-between shadow-lg relative overflow-hidden group">
                         {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-river-teal/5 rounded-full blur-2xl group-hover:bg-amber-glow/10 transition duration-700"></div>

                        <div>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-5xl font-serif text-river-teal">$89</span>
                                <span className="text-gray-400 text-xs mb-2 uppercase tracking-wide">/ 60 Days</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Auto-replenished every 2 months. <br/>
                                Cancel anytime with one click.
                            </p>
                        </div>

                        <div className="mt-8 space-y-6">
                            {/* Timeline Visual */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-[9px] uppercase tracking-widest text-gray-400">
                                    <span>Day 1</span>
                                    <span>Day 30</span>
                                    <span>Day 60</span>
                                </div>
                                <div className="w-full h-1 bg-gray-100 rounded-full relative overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-200 via-amber-light to-amber-glow opacity-50"></div>
                                </div>
                                <div className="flex justify-between text-[9px] text-river-teal font-medium">
                                    <span>Start</span>
                                    <span>Feel It</span>
                                    <span>Proof</span>
                                </div>
                            </div>

                            <button className="w-full bg-river-teal text-white py-5 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-amber-glow hover:shadow-xl hover:shadow-amber-glow/30 transition duration-300 ease-out flex items-center justify-center gap-2 group-hover:gap-3">
                                Secure Allocation <ArrowRight className="w-4 h-4" />
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
