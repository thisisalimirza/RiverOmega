
import React from 'react';
import { Reveal } from './ui/Reveal';
import { Brain, Heart, Activity, ArrowRight } from 'lucide-react';

type Page = 'home' | 'cardio' | 'gi' | 'neuro';

interface ScienceProps {
    onNavigate: (page: Page) => void;
}

export const Science: React.FC<ScienceProps> = ({ onNavigate }) => {
  return (
    <section id="science" className="py-32 bg-river-mist">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual: Abstract Cell */}
          <div className="order-2 lg:order-1 relative">
             <Reveal>
                <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1000&auto=format&fit=crop" 
                        alt="Cellular Health" 
                        className="absolute inset-0 w-full h-full object-cover opacity-90 transition duration-[2s] group-hover:scale-110 grayscale mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-river-teal/20"></div>
                    <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-white/50">
                    <p className="font-serif text-xl text-river-teal italic">"The closest thing to a biological time machine."</p>
                    </div>
                </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal delay={0.2}>
                <h2 className="font-serif text-4xl md:text-5xl text-river-teal mb-8">Compound interest <br />for your biology.</h2>
                <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
                You invest in assets because you understand compounding. Biology works the same way. River provides the raw materials to rebuild your cellular architecture.
                </p>
                
                <div className="space-y-10">
                {/* Item 1 */}
                <button onClick={() => onNavigate('neuro')} className="flex gap-6 group text-left w-full hover:bg-white/50 p-4 rounded-2xl transition duration-300">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-glow shrink-0 border border-gray-100 group-hover:scale-110 transition">
                        <Brain className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                             <h4 className="font-serif text-xl text-river-teal mb-2 group-hover:text-amber-glow transition">Neurological</h4>
                             <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition text-amber-glow" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">Your brain is 60% fat. We provide high-dose DHA to maintain neuroplasticity, focus, and memory recall.</p>
                    </div>
                </button>

                {/* Item 2 */}
                <button onClick={() => onNavigate('cardio')} className="flex gap-6 group text-left w-full hover:bg-white/50 p-4 rounded-2xl transition duration-300">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-glow shrink-0 border border-gray-100 group-hover:scale-110 transition">
                        <Heart className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                             <h4 className="font-serif text-xl text-river-teal mb-2 group-hover:text-amber-glow transition">Cardiovascular</h4>
                             <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition text-amber-glow" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">High-dose EPA helps reduce triglycerides and keeps arterial walls flexible, reducing cardiac strain.</p>
                    </div>
                </button>

                {/* Item 3 */}
                <button onClick={() => onNavigate('gi')} className="flex gap-6 group text-left w-full hover:bg-white/50 p-4 rounded-2xl transition duration-300">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-glow shrink-0 border border-gray-100 group-hover:scale-110 transition">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                             <h4 className="font-serif text-xl text-river-teal mb-2 group-hover:text-amber-glow transition">Gastrointestinal</h4>
                             <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition text-amber-glow" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">Microbiome diversity and gut barrier integrity. Reduce systemic inflammation at the source.</p>
                    </div>
                </button>
                </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
