import React from 'react';
import { Facebook, Instagram, Linkedin, Globe, MapPin, Phone, Award } from 'lucide-react';
import { agencyInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: agencyInfo.facebookUrl, label: 'Facebook' },
    { icon: Instagram, href: agencyInfo.instagramUrl, label: 'Instagram' },
    { icon: Linkedin, href: agencyInfo.linkedinUrl, label: 'LinkedIn' },
  ];

  return (
    <footer id="footer" className="bg-[#090d16] border-t border-gray-800/60 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-800/50 pb-12 mb-12" id="footer-cols">
          
          {/* Column 1: Brand pitch (5 cols) */}
          <div className="md:col-span-5 text-left space-y-5" id="footer-col-brand">
            <div className="flex items-center gap-2" id="footer-logo">
              <div className="bg-gradient-to-tr from-emerald-500 to-teal-400 p-2 rounded-lg text-[#0b0f19] font-black">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">ScaleWithShafqat</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Certified Facebook & Instagram Ads management built on rigorous data processing and conversion funnel strategy based in Attock, Pakistan. We scale e-commerce brands and multiply lead generation volume globally.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3.5 pt-2" id="footer-social-links">
              {socialLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-950 border border-gray-800 hover:border-emerald-500/30 text-gray-400 hover:text-emerald-400 rounded-xl transition-all hover:shadow-[0_4px_12px_rgba(16,185,129,0.15)]"
                    aria-label={`Visit our ${item.label} page`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
              {/* Pinterest direct Link */}
              <a
                href={agencyInfo.pinterestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-950 border border-gray-800 hover:border-emerald-500/30 text-gray-400 hover:text-emerald-400 rounded-xl transition-all"
                aria-label="Visit our Pinterest"
              >
                <span className="font-extrabold font-mono text-xs">PIN</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation maps (3 cols) */}
          <div className="md:col-span-3 text-left space-y-4" id="footer-col-nav">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-mono">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Digital Ad Services</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">E-commerce ROI Tool</a></li>
              <li><a href="#case-studies" className="hover:text-emerald-400 transition-colors">Case Result Portfolio</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors font-medium">Verified Reviews (5.0 ★)</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Local footprint (4 cols) */}
          <div className="md:col-span-4 text-left space-y-4" id="footer-col-footprint">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-mono">Local Footprint & Trust</h4>
            
            <div className="bg-gray-950 border border-gray-850 p-4 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs text-gray-400 leading-relaxed">
                <span className="text-white font-bold block mb-1">Attock Agency Head Office</span>
                <span>AL AWAN TOWN MURAQBA HAL ATK, Attock District, Punjab, Pakistan</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono" id="footer-cert-badge">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Certified Meta Ads Specialist</span>
            </div>
          </div>

        </div>

        {/* Legal & copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono" id="footer-bottom-row">
          <span>&copy; {currentYear} Shafqat Saleem Digital Marketing Services. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Verified 5.0 Star Google Ad Agency</span>
            <span>•</span>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
