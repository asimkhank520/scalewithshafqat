import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import CaseStudies from './components/CaseStudies';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-[#090d16]" id="app-root">
      
      {/* Translucent Navigation Header */}
      <Header />

      {/* Main Content Areas */}
      <main className="flex-grow" id="main-content">
        
        {/* Hero Section Banner */}
        <Hero />

        {/* Dynamic Ad Services listing */}
        <Services />

        {/* Interactive ROAS Calculator widget */}
        <Calculator />

        {/* Proven Case Results Portfolio */}
        <CaseStudies />

        {/* Verified Reviews and Rating grid with dynamic client additions */}
        <Reviews />

        {/* Helpful Accordion FAQ Questions */}
        <FAQ />

        {/* Deep Business Lead Capture & Maps block */}
        <Contact />

      </main>

      {/* Structured Footer with address maps coordinate */}
      <Footer />

      {/* Pulsing Bottom-Right WhatsApp Bubble tool */}
      <WhatsAppWidget />

    </div>
  );
}

