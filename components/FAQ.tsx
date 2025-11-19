
import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Why do I need to take this for 60 days?",
    answer: "Biology is not immediate. While some users report better focus within 2 weeks, it takes approximately 60 days for Omega-3 fatty acids to fully integrate into your red blood cell membranes (The Omega-3 Index). This is the saturation point where systemic inflammation drops and cellular protection begins."
  },
  {
    question: "Why is River better than vegan algae oil?",
    answer: "Bioavailability. While algae is a source of DHA, it often lacks sufficient EPA. Furthermore, the extraction process for algae oils often involves heavy industrial solvents. River provides the natural triglyceride form found in wild fish, which the body recognizes and absorbs 70% more efficiently than synthetic ethyl esters."
  },
  {
    question: "Will this interact with my medications?",
    answer: "River is a natural food product, molecularly distilled for purity. However, because high-dose Omega-3s have a mild blood-thinning effect (which is part of their heart-health benefit), we recommend consulting your physician if you are currently on prescription blood thinners."
  },
  {
    question: "How do I manage my subscription?",
    answer: "We believe in total agency. You will have a private portal to pause, cancel, or accelerate your shipments with a single click. No phone calls, no hoops. We want you here because you get results, not because you're trapped."
  },
  {
    question: "What if I don't feel a difference?",
    answer: "We don't rely on feelings; we rely on data. We encourage you to take a simple blood test for CRP (inflammation) or Triglycerides before you start. If, after 60 days of the River protocol, your numbers haven't improved, send us the results and we will refund your entire order. You keep the vessel."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-river-mist">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl text-river-teal mb-12 text-center">Common Inquiries</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition duration-200"
                >
                  <span className="font-serif text-lg text-river-teal pr-8">{faq.question}</span>
                  <span className="text-amber-glow shrink-0">
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-gray-500 font-light leading-relaxed border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
