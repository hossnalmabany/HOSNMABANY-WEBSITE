import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface Props {
    lang: Language;
}

const FloatingWhatsApp: React.FC<Props> = ({ lang }) => {
  // Determine position based on language (optional: can keep it always right for consistency)
  // Standard UX: Bottom Right is standard for chat widgets regardless of RTL usually, but let's respect RTL.
  const positionClass = lang === 'ar' ? 'left-6' : 'right-6';

  return (
    <a
      href="https://whatsapp.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${positionClass} z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce`}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;