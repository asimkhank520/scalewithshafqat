import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { agencyInfo } from '../data';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show a subtle notification bubble after 5 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    const defaultText = encodeURIComponent(agencyInfo.whatsappText);
    const whatsappUrl = `https://wa.me/message/YICJ7T3QQEB7A1?text=${defaultText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans" id="whatsapp-widget-container">
      
      {/* Notification Text Bubble */}
      {showNotification && !isOpen && (
        <div 
          className="bg-gray-900 border border-gray-800 p-3.5 rounded-2xl shadow-2xl flex items-start gap-3 max-w-xs animate-fade-in relative transition-all"
          id="whatsapp-notification-bubble"
        >
          <button 
            onClick={() => setShowNotification(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-white"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="bg-[#25D366]/10 text-[#25D366] p-2 rounded-xl mt-0.5">
            <MessageSquare className="w-4 h-4 fill-[#25D366]" />
          </div>
          <div className="text-left">
            <span className="text-white font-extrabold text-xs block">Shafqat Saleem</span>
            <p className="text-gray-300 text-xs mt-1 leading-normal">
              Hey! Ready to scale your ads? Chat with me directly on WhatsApp. 🚀
            </p>
          </div>
        </div>
      )}

      {/* Main Expandable Interactive Popup Box */}
      {isOpen && (
        <div 
          className="bg-gray-900 border border-gray-800 w-80 rounded-2xl shadow-2xl overflow-hidden text-left animate-slide-up"
          id="whatsapp-chat-box"
        >
          {/* Header */}
          <div className="bg-[#0f172a] p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/shafqat_saleem_headshot/80/80"
                  alt="Shafqat Saleem Professional Avatar"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border border-[#25D366] object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-[#0f172a] rounded-full"></span>
              </div>
              <div>
                <span className="text-white font-bold text-sm block">Shafqat Saleem</span>
                <span className="text-[#25D366] text-[10px] font-mono font-bold block">Active Online</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1"
              id="close-chatbox-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-950/60 min-h-[100px] flex flex-col gap-3">
            <div className="bg-gray-900/90 border border-gray-800 p-3 rounded-xl max-w-[85%] text-gray-300 text-xs leading-normal self-start relative">
              <div className="absolute top-2 -left-1.5 w-3 h-3 bg-gray-900 border-l border-b border-gray-800 transform rotate-45"></div>
              <span>Assalam-o-Alaikum! Welcome to ScaleWithShafqat. How can I help you optimize your Facebook & Instagram campaigns today?</span>
            </div>
          </div>

          {/* Footer Direct CTA */}
          <div className="p-3 bg-[#0f172a] border-t border-gray-800">
            <button
              onClick={handleOpenChat}
              className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-xs transition-all shadow-md"
              id="whatsapp-chatbox-cta"
            >
              <Send className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Start Live WhatsApp Chat</span>
            </button>
          </div>

        </div>
      )}

      {/* Circular Toggle Button floating */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="bg-[#25D366] hover:bg-[#20ba56] p-4 rounded-full text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.5)] transition-all duration-300 relative group transform hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
        aria-label="Contact us on WhatsApp"
        id="whatsapp-floating-trigger"
      >
        {/* Pulsing Outer Circle Ring */}
        <span className="absolute inset-0 rounded-full border-4 border-[#25D366] opacity-30 animate-ping group-hover:animate-none"></span>
        
        {/* Custom Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 stroke-[2.2]"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>

    </div>
  );
}
