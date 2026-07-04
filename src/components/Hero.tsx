import React from 'react';
import { Star, ShieldCheck, ArrowRight, Award, MessageSquare, TrendingUp } from 'lucide-react';
import { agencyInfo } from '../data';

// Custom dynamic image reference
const heroImage = "/src/assets/images/hero_marketing_1783183835204.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#0d1425] to-[#0b0f19]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left" id="hero-content">
            
            {/* Google Rating & Trust Badge */}
            <div 
              className="inline-flex items-center gap-2.5 bg-gray-800/60 border border-gray-700/50 px-4 py-2 rounded-full w-fit shadow-md"
              id="hero-trust-badge"
            >
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-xs font-semibold text-gray-200">
                5.0 Google Rating
              </span>
              <span className="h-3 w-px bg-gray-700"></span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
                Advertising Agency
              </span>
            </div>

            {/* Main Catchy Heading */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
              id="hero-headline"
            >
              Scale Your Revenue With{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                High-ROI Meta Ads
              </span>
            </h1>

            {/* Narrative Context */}
            <p 
              className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed font-normal"
              id="hero-subtitle"
            >
              Stop throwing budget at campaigns that don't convert. {agencyInfo.founder} designs high-performance Facebook & Instagram Ads campaigns built on direct-response psychology and custom data pipelines.
            </p>

            {/* Strategic Credentials */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 pb-4" id="hero-stats">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">Targeted Strategy</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">99% clean audience targeting with Meta CAPI</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">Attock Local & Global</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Physical trust with global campaign reach</p>
                </div>
              </div>
            </div>

            {/* Interactive Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2" id="hero-actions">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-[#090d16] font-extrabold px-8 py-4 rounded-xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_24px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5"
                id="hero-primary-cta"
              >
                <span>Book A Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#calculator"
                className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-800 text-gray-200 border border-gray-700 hover:border-gray-600 font-bold px-8 py-4 rounded-xl transition-all"
                id="hero-secondary-cta"
              >
                <span>Calculate My ROI</span>
              </a>
            </div>

            {/* Trust Badges footer */}
            <div className="pt-6 border-t border-gray-800/60 mt-4 flex flex-wrap items-center gap-6 text-gray-500 text-xs font-mono uppercase tracking-wider" id="hero-trust-labels">
              <span>🚀 4.8x avg. roas</span>
              <span>•</span>
              <span>🔒 privacy & compliance compliant</span>
              <span>•</span>
              <span>📈 fully managed funnels</span>
            </div>

          </div>

          {/* Graphical/Illustrative Dashboard Display */}
          <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-square flex items-center justify-center" id="hero-graphic-container">
            {/* Ambient Backglow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 rounded-3xl blur-2xl transform rotate-3 -z-10"></div>
            
            {/* Main Visual Image Card */}
            <div className="bg-gray-900 border border-gray-800 p-2.5 rounded-3xl overflow-hidden shadow-2xl relative w-full h-full flex items-center justify-center group">
              <img
                src={heroImage}
                alt="Shafqat Saleem Digital Marketing Campaign Scaling Dashboard Illustration"
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full rounded-2xl opacity-90 group-hover:scale-102 transition-transform duration-700"
                id="hero-banner-image"
              />
              
              {/* Floating Performance overlay */}
              <div 
                className="absolute bottom-6 left-6 right-6 bg-gray-900/95 backdrop-blur-md border border-gray-800 p-4 rounded-2xl shadow-xl flex items-center justify-between"
                id="hero-floating-stat-box"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-xl">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] font-mono uppercase tracking-wider block">Average Ad Growth</span>
                    <span className="text-white text-lg font-extrabold">+240% Sales Volume</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 font-black text-xl tracking-tight block">5.0 ★</span>
                  <span className="text-gray-500 text-[10px] font-medium block">Verified Performance</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
