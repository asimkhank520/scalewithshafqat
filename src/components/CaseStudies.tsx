import React from 'react';
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '../data';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[#090d16] border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="cases-header">
          <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-widest font-bold mb-3">Proof of Concept</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Data-Driven Campaigns in Action
          </p>
          <div className="h-1.5 w-16 bg-emerald-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Explore how we restructure acquisition funnels and refine creative execution to hit scaling benchmarks.
          </p>
        </div>

        {/* Case Studies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="cases-grid">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900/40 border border-gray-800/80 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between"
              id={`case-card-${item.id}`}
            >
              {/* Cover image & labels */}
              <div className="relative aspect-video w-full overflow-hidden" id={`case-img-container-${item.id}`}>
                <img
                  src={item.image}
                  alt={`${item.clientName} case study background thumbnail`}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full opacity-75 hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-[#090d16] font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                  {item.industry}
                </div>
              </div>

              {/* Main descriptive block */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between" id={`case-body-${item.id}`}>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                    {item.clientName}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-3 gap-3.5 bg-gray-950 p-4 rounded-xl border border-gray-800/60 mb-6 text-center" id={`case-metrics-${item.id}`}>
                    <div>
                      <span className="text-gray-500 text-[9px] font-mono uppercase tracking-wider block">Ad Spend</span>
                      <span className="text-white text-sm sm:text-base font-bold mt-1 block">{item.spend}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-[9px] font-mono uppercase tracking-wider block">Attributed Rev.</span>
                      <span className="text-emerald-400 text-sm sm:text-base font-extrabold mt-1 block">{item.revenue}</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-mono text-[9px] font-black uppercase tracking-wider block">Campaign ROAS</span>
                      <span className="text-emerald-400 text-sm sm:text-base font-black mt-1 block">{item.roas}</span>
                    </div>
                  </div>

                  {/* Deliverables details */}
                  <div className="space-y-3" id={`case-deliverables-${item.id}`}>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Deliverables Implemented:</h4>
                    <ul className="space-y-2">
                      {item.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-gray-300">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer action trigger */}
                <div className="pt-6 border-t border-gray-800/40 mt-6 flex justify-between items-center text-xs text-gray-500 font-mono">
                  <span>SCALE WITH SHAFQAT</span>
                  <a
                    href="#contact"
                    className="text-emerald-400 hover:text-emerald-300 font-extrabold flex items-center gap-1 hover:underline text-xs"
                  >
                    <span>Get Similar Results</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
