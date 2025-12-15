import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface Props {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<Props> = ({ lang, setLang }) => {
  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all text-brand-900 font-bold border border-gray-200"
      aria-label="Switch Language"
    >
      <Globe className="w-4 h-4" />
      <span>{lang === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};

export default LanguageSwitcher;