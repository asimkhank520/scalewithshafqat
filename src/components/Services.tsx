import React from 'react';
import { Facebook, Flame, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { services } from '../data';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Facebook: Facebook,
  Flame: Flame,
  Target: Target,
  TrendingUp: TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#090d16] border-y border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-header">
          <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-widest font-bold mb-3">Our Core Expertise</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Meta Ads Management Designed to Multiply Sales
          </p>
          <div className="h-1.5 w-16 bg-emerald-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            We don't just "boost posts." We structure high-ROI acquisition systems that consistently acquire profitable customers for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Facebook;
            return (
              <div
                key={service.id}
                className="bg-gray-900/40 border border-gray-800/80 hover:border-emerald-500/30 p-8 rounded-2xl shadow-xl transition-all hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] hover:-translate-y-1 duration-300 flex flex-col justify-between group"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:bg-emerald-500 group-hover:text-[#090d16] transition-colors duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3.5" id={`service-bullets-${service.id}`}>
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-400">
                        <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-tight text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtitle trigger */}
                <div className="pt-8 border-t border-gray-800/50 mt-8 flex items-center justify-between">
                  <span className="text-gray-500 font-mono text-[10px] uppercase tracking-wider">
                    {idx === 0 || idx === 3 ? "Standard Implementation" : "Custom Optimized"}
                  </span>
                  <a
                    href="#contact"
                    className="text-emerald-400 font-bold text-sm hover:text-emerald-300 flex items-center gap-1 transition-colors group/link"
                  >
                    <span>Inquire Now</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Business Trust banner */}
        <div 
          className="mt-16 bg-gradient-to-r from-emerald-950/20 via-gray-900/80 to-emerald-950/20 border border-emerald-500/10 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          id="services-trust-banner"
        >
          <div className="text-center md:text-left">
            <h4 className="text-white font-extrabold text-lg sm:text-xl">
              Are your current ads failing to convert?
            </h4>
            <p className="text-gray-400 text-sm mt-1 max-w-2xl">
              Get a completely free 15-minute diagnostic audit of your Meta ad account. We will point out exactly where you are losing money.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-[#090d16] font-extrabold px-6 py-3 rounded-lg shadow-md transition-all text-sm shrink-0"
            id="services-banner-cta"
          >
            Claim My Free Audit
          </a>
        </div>

      </div>
    </section>
  );
}
