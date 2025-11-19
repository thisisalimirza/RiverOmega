
import React from 'react';
import { Reveal } from './ui/Reveal';
import { Star, Activity, Brain, Battery } from 'lucide-react';

const reviews = [
  {
    initials: "JD",
    name: "Jonathan D.",
    role: "Venture Capital",
    badge: "Verified Member",
    content: "I track everything. Oura, Whoop, quarterly bloods. My Triglycerides dropped from 140 to 85 in 60 days. The brain fog lifting was immediate, but the data is what keeps me subscribed.",
    icon: <Activity className="w-4 h-4 text-amber-glow" />,
    metric: "Triglycerides: -40%"
  },
  {
    initials: "AS",
    name: "Dr. Sarah A.",
    role: "Neurosurgeon",
    badge: "Scientific Advisor",
    content: "I recommend River to my patients because of the TOTOX score. Neuro-inflammation is the silent killer of cognitive performance. This is the only oil clean enough for long-term use.",
    icon: <Brain className="w-4 h-4 text-amber-glow" />,
    metric: "Cognitive Clarity"
  },
  {
    initials: "MK",
    name: "Marcus K.",
    role: "Triathlete",
    badge: "Verified Member",
    content: "Recovery time is half what it used to be. The joint stiffness I assumed was 'normal' aging is gone. It tastes like absolutely nothing, which tells me everything about the freshness.",
    icon: <Battery className="w-4 h-4 text-amber-glow" />,
    metric: "Recovery Speed"
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-amber-glow text-xs font-bold uppercase tracking-widest mb-4 block">Member Archives</span>
              <h2 className="font-serif text-4xl text-river-teal">Evidence of Efficacy.</h2>
            </div>
            <div className="flex items-center gap-4">
               <div className="text-right">
                   <p className="text-2xl font-serif font-bold text-river-teal">4.9/5</p>
                   <p className="text-[10px] uppercase tracking-widest text-gray-400">Based on 1,200+ Protocols</p>
               </div>
               <div className="flex text-amber-glow">
                   <Star className="w-5 h-5 fill-current" />
                   <Star className="w-5 h-5 fill-current" />
                   <Star className="w-5 h-5 fill-current" />
                   <Star className="w-5 h-5 fill-current" />
                   <Star className="w-5 h-5 fill-current" />
               </div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="bg-[#F5F7F7] p-8 rounded-3xl relative group hover:shadow-xl transition duration-500">
              <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 transition duration-500">
                {review.icon}
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-river-teal text-white flex items-center justify-center font-serif italic">
                    {review.initials}
                </div>
                <div>
                    <h4 className="font-serif text-lg text-river-teal">{review.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400">{review.role}</p>
                </div>
              </div>

              <p className="text-gray-600 font-light leading-relaxed mb-8 text-sm">
                "{review.content}"
              </p>

              <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                <span className="inline-block px-3 py-1 bg-white rounded-full text-[9px] uppercase tracking-widest font-bold text-river-teal border border-gray-100">
                    {review.badge}
                </span>
                <span className="text-xs font-bold text-amber-glow">
                    {review.metric}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
