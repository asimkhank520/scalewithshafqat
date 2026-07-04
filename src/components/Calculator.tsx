import React, { useState, useEffect } from 'react';
import { DollarSign, Percent, ArrowUpRight, Award, ChevronRight, Calculator } from 'lucide-react';

export default function ROI_Calculator() {
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD');
  const [budget, setBudget] = useState<number>(1000);
  const [productPrice, setProductPrice] = useState<number>(50);
  const [roas, setRoas] = useState<number>(3.5);

  // Conversion rates (approximate for layout simulation purposes)
  const currencySymbol = currency === 'USD' ? '$' : '₨';

  // Calculations
  const totalRevenue = budget * roas;
  const expectedPurchases = Math.round(totalRevenue / productPrice) || 0;
  
  // Assume standard cost of goods sold (COGS) at 30% of revenue for e-commerce
  const estimatedCogs = totalRevenue * 0.3;
  const netProfit = totalRevenue - budget - estimatedCogs;
  const roi = ((netProfit) / budget) * 100;

  // Sync defaults when currency changes
  useEffect(() => {
    if (currency === 'PKR') {
      setBudget(150000);
      setProductPrice(4000);
    } else {
      setBudget(1000);
      setProductPrice(50);
    }
  }, [currency]);

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#0b0f19] relative overflow-hidden">
      {/* Visual Ambient Circles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="calc-header">
          <h2 className="text-brand-yellow font-mono text-sm uppercase tracking-widest font-bold mb-3">ROI Simulator</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See Your E-Commerce Scaling Potential
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(251,185,47,0.5)]"></div>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Adjust the sliders below to calculate your estimated revenue and net profitability based on target ROAS benchmarks.
          </p>
        </div>

        {/* Currency Switcher Tabs */}
        <div className="flex justify-center mb-8" id="calc-currency-toggle">
          <div className="bg-gray-900 border border-gray-800 p-1.5 rounded-xl flex gap-1">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-5 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                currency === 'USD'
                  ? 'bg-brand-yellow text-[#090d16] shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              USD Dollar ($)
            </button>
            <button
              onClick={() => setCurrency('PKR')}
              className={`px-5 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                currency === 'PKR'
                  ? 'bg-brand-yellow text-[#090d16] shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PKR Rupee (₨)
            </button>
          </div>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="calc-main-container">
          
          {/* Inputs Section - Left */}
          <div className="lg:col-span-7 bg-gray-900/60 border border-gray-800 p-6 sm:p-8 rounded-2xl flex flex-col gap-8 justify-center" id="calc-inputs-box">
            
            {/* Ad Budget Slider */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label className="text-gray-300 font-bold text-sm sm:text-base flex items-center gap-2">
                  <span>Monthly Ad Budget</span>
                </label>
                <div className="bg-gray-950 border border-gray-800 px-3 py-1.5 rounded-lg flex items-center text-brand-yellow font-bold font-mono text-sm sm:text-base">
                  <span>{currencySymbol}</span>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(Math.max(0, parseInt(e.target.value) || 0))}
                    className="bg-transparent focus:outline-none w-20 text-right ml-1 font-bold font-mono text-brand-yellow"
                  />
                </div>
              </div>
              <input
                type="range"
                min={currency === 'USD' ? 200 : 25000}
                max={currency === 'USD' ? 10000 : 1500000}
                step={currency === 'USD' ? 100 : 5000}
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-yellow focus:outline-none"
              />
              <div className="flex justify-between text-gray-500 text-[10px] font-mono uppercase">
                <span>Min: {currencySymbol}{currency === 'USD' ? '200' : '25k'}</span>
                <span>Max: {currencySymbol}{currency === 'USD' ? '10k' : '1.5M'}</span>
              </div>
            </div>

            {/* Product Selling Price Slider */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label className="text-gray-300 font-bold text-sm sm:text-base">
                  Average Product Price (AOV)
                </label>
                <div className="bg-gray-950 border border-gray-800 px-3 py-1.5 rounded-lg flex items-center text-brand-yellow font-bold font-mono text-sm sm:text-base">
                  <span>{currencySymbol}</span>
                  <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(Math.max(1, parseInt(e.target.value) || 1))}
                    className="bg-transparent focus:outline-none w-20 text-right ml-1 font-bold font-mono text-brand-yellow"
                  />
                </div>
              </div>
              <input
                type="range"
                min={currency === 'USD' ? 5 : 500}
                max={currency === 'USD' ? 300 : 30000}
                step={currency === 'USD' ? 5 : 500}
                value={productPrice}
                onChange={(e) => setProductPrice(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-yellow focus:outline-none"
              />
              <div className="flex justify-between text-gray-500 text-[10px] font-mono uppercase">
                <span>Min: {currencySymbol}{currency === 'USD' ? '5' : '500'}</span>
                <span>Max: {currencySymbol}{currency === 'USD' ? '300' : '30k'}</span>
              </div>
            </div>

            {/* Target ROAS Slider */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label className="text-gray-300 font-bold text-sm sm:text-base flex items-center gap-1.5">
                  <span>Expected ROAS</span>
                  <span className="text-xs font-normal text-brand-yellow font-mono">(Return on Ad Spend)</span>
                </label>
                <div className="bg-gray-950 border border-gray-800 px-3 py-1.5 rounded-lg flex items-center text-brand-yellow font-bold font-mono text-sm sm:text-base">
                  <input
                    type="number"
                    step="0.1"
                    value={roas}
                    onChange={(e) => setRoas(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="bg-transparent focus:outline-none w-12 text-right mr-1 font-bold font-mono text-brand-yellow"
                  />
                  <span>x</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="0.1"
                value={roas}
                onChange={(e) => setRoas(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-yellow focus:outline-none"
              />
              <div className="flex justify-between text-gray-500 text-[10px] font-mono uppercase">
                <span>Standard: 2.0x</span>
                <span>Highly Profitable: 3.5x - 5.0x</span>
                <span>Scalable: 8.0x</span>
              </div>
            </div>

            {/* Explanatory text */}
            <div className="bg-gray-950/40 p-4 border border-gray-800 rounded-xl text-gray-400 text-xs sm:text-sm flex gap-3">
              <span className="text-brand-yellow">💡</span>
              <p>
                <strong>ROAS Benchmark:</strong> Most e-commerce brands we scale experience an average ROAS of <strong>3.0x to 4.5x</strong> after our professional funnel optimization process.
              </p>
            </div>

          </div>

          {/* Outputs Section - Right */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-amber-950/45 via-gray-900 to-gray-900 border border-brand-yellow/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6" id="calc-outputs-box">
            
            <div className="space-y-6">
              <h3 className="text-white font-extrabold text-lg flex items-center gap-2">
                <Calculator className="w-5 h-5 text-brand-yellow" />
                <span>Scaling Outlook Projection</span>
              </h3>

              {/* Stat 1: Revenue */}
              <div className="bg-gray-950/80 p-5 border border-gray-800/80 rounded-xl relative overflow-hidden group">
                <span className="text-gray-400 text-xs font-mono uppercase tracking-wider block">Estimated Monthly Revenue</span>
                <span className="text-white text-3xl font-black tracking-tight block mt-1">
                  {currencySymbol}{totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
                <div className="absolute right-4 bottom-4 text-brand-yellow/10 group-hover:text-brand-yellow/20 transition-colors">
                  <ArrowUpRight className="w-10 h-10" />
                </div>
              </div>

              {/* Grid: Profit + Purchases */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Net Profit */}
                <div className="bg-gray-950/80 p-4 border border-gray-800/80 rounded-xl">
                  <span className="text-gray-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider block">Est. Net Profit</span>
                  <span className={`text-xl sm:text-2xl font-black mt-1 block tracking-tight ${netProfit >= 0 ? 'text-brand-yellow' : 'text-red-400'}`}>
                    {netProfit < 0 ? '-' : ''}{currencySymbol}{Math.abs(netProfit).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                  <span className="text-gray-500 text-[9px] block mt-0.5">After ad spend & COGS</span>
                </div>

                {/* Purchases */}
                <div className="bg-gray-950/80 p-4 border border-gray-800/80 rounded-xl">
                  <span className="text-gray-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider block">Orders Placed</span>
                  <span className="text-white text-xl sm:text-2xl font-black mt-1 block tracking-tight">
                    {expectedPurchases.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-[9px] block mt-0.5">Average checkout events</span>
                </div>

              </div>

              {/* Estimated ROI */}
              <div className="flex items-center justify-between px-2 pt-2 border-t border-gray-800/50">
                <span className="text-gray-400 text-sm font-medium">Estimated Net Ad ROI</span>
                <span className={`font-mono font-black text-sm sm:text-base ${roi >= 0 ? 'text-brand-yellow' : 'text-red-400'}`}>
                  {roi.toFixed(0)}%
                </span>
              </div>
            </div>

            {/* Custom Marketing Button linked to Results */}
            <a
              href="#contact"
              className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-[#090d16] font-black py-4 px-6 rounded-xl text-center shadow-lg hover:shadow-brand-yellow/20 transition-all flex items-center justify-center gap-2 group text-sm"
              id="calc-cta-btn"
            >
              <span>Strategize to Achieve This ROI</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
