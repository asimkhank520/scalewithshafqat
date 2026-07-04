import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, ExternalLink, Send, CheckCircle2, History, Trash2, Globe } from 'lucide-react';
import { agencyInfo } from '../data';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  website: string;
  budget: string;
  message: string;
  date: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [website, setWebsite] = useState('');
  const [budget, setBudget] = useState('Below $1,000 / PKR 250k');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [localInquiries, setLocalInquiries] = useState<Inquiry[]>([]);

  // Load local inquiries
  useEffect(() => {
    const saved = localStorage.getItem('shafqat_inquiries');
    if (saved) {
      try {
        setLocalInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse inquiries", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !whatsapp) return;

    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      name,
      email,
      whatsapp,
      website: website || 'Not specified',
      budget,
      message: message || 'No additional message provided',
      date: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newInquiry, ...localInquiries];
    setLocalInquiries(updated);
    localStorage.setItem('shafqat_inquiries', JSON.stringify(updated));

    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    // Generate an incredibly professional, formatted message to send directly via WhatsApp API
    const textMessage = `*New Strategy Audit Request for Shafqat Saleem Ads*\n\n` +
      `• *Name:* ${name}\n` +
      `• *Email:* ${email}\n` +
      `• *WhatsApp:* ${whatsapp}\n` +
      `• *Website/Page:* ${website || 'None'}\n` +
      `• *Monthly Budget:* ${budget}\n` +
      `• *Additional Context:* ${message || 'None'}`;
    
    const encoded = encodeURIComponent(textMessage);
    // Open WhatsApp Message link provided or default direct link
    const whatsappUrl = `https://wa.me/923495092876?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setWhatsapp('');
    setWebsite('');
    setBudget('Below $1,000 / PKR 250k');
    setMessage('');
    setSubmitted(false);
  };

  const clearHistory = () => {
    localStorage.removeItem('shafqat_inquiries');
    setLocalInquiries([]);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0b0f19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-widest font-bold mb-3">Launch Your Campaigns</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Claim Your Free Paid Ads Audit
          </p>
          <div className="h-1.5 w-16 bg-emerald-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Let's evaluate your existing pixel data, custom audiences, and campaign funnels to spot your scaling blocks.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
          
          {/* Details & Map Card - Left (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left" id="contact-details-box">
            
            <div className="bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col gap-6">
              <h3 className="text-white font-extrabold text-xl mb-2">Agency Headquarters</h3>
              
              {/* Phone item */}
              <div className="flex items-start gap-4" id="info-phone">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider block">Call Direct</span>
                  <a href={`tel:${agencyInfo.phone.replace(/\s+/g, '')}`} className="text-white font-extrabold text-base hover:text-emerald-400 transition-colors block mt-1">
                    {agencyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start gap-4" id="info-email">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider block">Email Inquiries</span>
                  <a href={`mailto:${agencyInfo.email}`} className="text-white font-extrabold text-base hover:text-emerald-400 transition-colors block mt-1 break-all">
                    {agencyInfo.email}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-4" id="info-location">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl mt-0.5">
                  <MapPin className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider block">Physical Address</span>
                  <address className="text-white font-bold text-sm not-italic block mt-1 leading-relaxed">
                    AL AWAN TOWN MURAQBA HAL ATK,<br />Attock, Punjab, 43600, Pakistan
                  </address>
                </div>
              </div>
            </div>

            {/* Custom Interactive Maps placeholder Card */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-xl overflow-hidden relative group" id="map-visual-card">
              <div className="absolute top-4 right-4 z-10 bg-gray-950/80 backdrop-blur border border-gray-800 px-3 py-1 rounded-full text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                <span>Attock, PK</span>
              </div>
              
              {/* Styled Maps Background placeholder */}
              <div className="aspect-video w-full rounded-xl bg-gray-950/90 border border-gray-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent pointer-events-none"></div>
                {/* Visual grid overlay to simulate maps grid */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-5 pointer-events-none border border-gray-800">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border-r border-b border-gray-600"></div>
                  ))}
                </div>
                
                <MapPin className="w-10 h-10 text-emerald-400 mb-3 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-bounce" />
                <h4 className="text-white font-bold text-sm">Shafqat Saleem Office Location</h4>
                <p className="text-gray-500 text-xs mt-1.5 max-w-xs leading-normal">
                  AL AWAN TOWN MURAQBA HAL ATK, Attock District, Pakistan
                </p>
                
                <a
                  href={agencyInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-gray-900 hover:bg-emerald-500 hover:text-[#090d16] border border-gray-800 hover:border-emerald-500 text-gray-300 font-bold text-xs py-2 px-4 rounded-lg flex items-center gap-1.5 transition-all shadow-md"
                  id="google-maps-link"
                >
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Core Submission Form - Right (7 cols) */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-gray-900 border border-gray-800 p-6 sm:p-10 rounded-2xl shadow-2xl relative">
              
              {submitted ? (
                /* Success screen */
                <div className="text-center py-10 flex flex-col items-center justify-center gap-5" id="form-success-state">
                  <div className="w-16 h-16 bg-emerald-500 text-[#090d16] rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-black tracking-tight">Audit Request Submitted!</h3>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-md mx-auto">
                      Thank you for submitting your business details, {name}. Your inquiry is saved locally on your device history.
                    </p>
                  </div>
                  
                  {/* Action row */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full justify-center">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="bg-emerald-500 hover:bg-emerald-600 text-[#090d16] font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition-all transform hover:-translate-y-0.5"
                      id="whatsapp-forward-btn"
                    >
                      <Send className="w-4.5 h-4.5" />
                      <span>Forward to WhatsApp (Direct)</span>
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="bg-gray-950 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-800 font-bold px-6 py-3.5 rounded-xl text-sm transition-all"
                      id="reset-form-btn"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form fields */
                <form onSubmit={handleSubmit} className="space-y-6 text-left" id="audit-form">
                  <h3 className="text-white font-extrabold text-2xl tracking-tight">Request Strategic Consultation</h3>
                  <div className="h-1.5 w-12 bg-emerald-500 rounded-full mb-6"></div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-400 text-xs font-mono uppercase block mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Shafqat Saleem"
                        className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-mono uppercase block mb-2">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. hello@business.com"
                        className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-400 text-xs font-mono uppercase block mb-2">WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="e.g. 0349 5092876"
                        className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-mono uppercase block mb-2">Website / Page Link</label>
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="e.g. https://mybrand.com"
                        className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs font-mono uppercase block mb-2">Monthly Ad Budget Goal</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      <option>Below $1,000 / PKR 250k</option>
                      <option>$1,000 - $3,000 / PKR 250k - 750k</option>
                      <option>$3,000 - $10,000 / PKR 750k - 2.5M</option>
                      <option>Above $10,000 / PKR 2.5M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs font-mono uppercase block mb-2">Describe Your Current Marketing Blocks</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g., Pixel tracking is broken, high cost-per-purchase, or ready to scale a winning offer..."
                      className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-[#090d16] font-extrabold py-4 rounded-xl text-center shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group text-sm cursor-pointer"
                    id="submit-form-btn"
                  >
                    <span>Request My Free Audit</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Local Submission History Log Dashboard - Incredible professional touch! */}
        {localInquiries.length > 0 && (
          <div className="mt-16 bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-2xl text-left shadow-2xl" id="submission-history-panel">
            <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
              <h4 className="text-white font-extrabold text-lg flex items-center gap-2">
                <History className="w-5 h-5 text-emerald-400" />
                <span>My Audit Requests History (Saved on this browser)</span>
              </h4>
              <button
                onClick={clearHistory}
                className="text-gray-500 hover:text-red-400 p-2 rounded-lg hover:bg-gray-950 transition-colors flex items-center gap-1 text-xs font-mono"
                id="clear-history-btn"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Logs</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="history-grid">
              {localInquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="bg-gray-950 p-4 rounded-xl border border-gray-850 flex flex-col justify-between gap-4"
                  id={`history-item-${inq.id}`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-white font-bold text-sm">{inq.name}</span>
                      <span className="text-emerald-400 font-mono text-[9px] font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">{inq.budget}</span>
                    </div>
                    <p className="text-gray-400 text-xs font-medium break-all">{inq.email} • {inq.whatsapp}</p>
                    {inq.website !== 'Not specified' && (
                      <p className="text-emerald-500 text-xs flex items-center gap-1 font-mono truncate">
                        <Globe className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{inq.website}</span>
                      </p>
                    )}
                    <p className="text-gray-300 text-xs italic line-clamp-2 mt-2 bg-gray-900/50 p-2 rounded border border-gray-800">
                      "{inq.message}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-900 text-[10px] text-gray-500 font-mono">
                    <span>{inq.date}</span>
                    <button
                      onClick={() => {
                        setName(inq.name);
                        setEmail(inq.email);
                        setWhatsapp(inq.whatsapp);
                        setWebsite(inq.website === 'Not specified' ? '' : inq.website);
                        setBudget(inq.budget);
                        setMessage(inq.message);
                        setSubmitted(false);
                        window.scrollTo({
                          top: (document.getElementById('contact-form-container')?.offsetTop || 0) - 100,
                          behavior: 'smooth'
                        });
                      }}
                      className="text-emerald-400 hover:text-emerald-300 font-extrabold hover:underline"
                    >
                      Reload and Resend
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
