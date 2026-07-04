import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqs } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#090d16] border-y border-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="faq-header">
          <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-widest font-bold mb-3">Common Inquiries</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </p>
          <div className="h-1.5 w-16 bg-emerald-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Everything you need to know about our Meta advertising processes, workflow, budgets, and reporting mechanisms.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4" id="faq-accordions-container">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-gray-900/35 border rounded-2xl transition-all overflow-hidden ${
                  isOpen ? 'border-emerald-500/20 bg-gray-900/60' : 'border-gray-800/80 hover:border-gray-700'
                }`}
                id={`faq-item-box-${item.id}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${item.id}`}
                >
                  <span className="text-white font-bold text-sm sm:text-base leading-snug hover:text-emerald-400 transition-colors">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-gray-950 border border-gray-800 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-gray-800/50 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                  id={`faq-content-${item.id}`}
                >
                  <div className="px-6 py-5 sm:px-8 sm:py-6 text-gray-300 text-sm sm:text-base leading-relaxed bg-gray-950/20">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
