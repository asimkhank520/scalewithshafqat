import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Phone } from 'lucide-react';
import { agencyInfo } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'ROI Calculator', href: '#calculator' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="nav-logo">
            <div className="bg-gradient-to-tr from-emerald-500 to-teal-400 p-2 rounded-lg text-[#0b0f19] font-black shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg leading-tight tracking-tight group-hover:text-emerald-400 transition-colors">
                Shafqat Saleem
              </span>
              <span className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase">
                Ads Strategist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-emerald-400 font-medium text-sm transition-colors py-2 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4" id="desktop-cta-container">
            <a
              href={`tel:${agencyInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 text-sm font-medium transition-colors"
              id="header-phone-btn"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>0349 5092876</span>
            </a>
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-[#090d16] font-bold text-sm px-5 py-2.5 rounded-lg shadow-[0_4px_14px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5"
              id="header-cta-btn"
            >
              Book Free Audit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center" id="mobile-toggle-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-emerald-400 p-2 rounded-lg hover:bg-gray-800/50 focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-drawer"
        className={`md:hidden fixed inset-x-0 bg-[#0b0f19]/98 border-b border-gray-800 backdrop-blur-lg transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'top-20 opacity-100 max-h-screen' : 'top-[-400px] opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-emerald-500/10 font-medium text-base transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-800 flex flex-col gap-4 px-4" id="mobile-cta-drawer">
            <a
              href={`tel:${agencyInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 text-base font-medium py-1"
              id="mobile-drawer-phone"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>{agencyInfo.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-center text-[#090d16] font-extrabold py-3.5 rounded-xl shadow-lg transition-all"
              id="mobile-drawer-cta"
            >
              Book Free Audit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
