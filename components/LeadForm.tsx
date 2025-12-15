import React, { useState } from 'react';
import { Language } from '../types';
import { TEXT_CONTENT } from '../constants';

interface Props {
  lang: Language;
  variant?: 'hero' | 'section';
}

const LeadForm: React.FC<Props> = ({ lang, variant = 'hero' }) => {
  const t = TEXT_CONTENT.form;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white/95";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className={`
      ${variant === 'hero' ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white shadow-xl'} 
      p-6 rounded-2xl w-full max-w-md mx-auto
    `}>
      {variant === 'hero' && (
        <h3 className={`text-xl font-bold mb-4 text-white ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          {lang === 'en' ? 'Get Exclusive Access' : 'احصل على وصول حصري'}
        </h3>
      )}

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-10 rounded text-center">
          <p className="font-bold text-lg">{t.success[lang]}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div>
            <label className={variant === 'hero' ? 'sr-only' : labelClasses}>{t.namePlaceholder[lang]}</label>
            <input 
              type="text" 
              placeholder={t.namePlaceholder[lang]} 
              required 
              className={inputClasses}
            />
          </div>
          <div>
            <label className={variant === 'hero' ? 'sr-only' : labelClasses}>{t.phonePlaceholder[lang]}</label>
            <input 
              type="tel" 
              placeholder={t.phonePlaceholder[lang]} 
              required 
              className={inputClasses}
            />
          </div>
          <div>
            <label className={variant === 'hero' ? 'sr-only' : labelClasses}>{t.interestPlaceholder[lang]}</label>
            <select className={inputClasses}>
              <option value="" disabled selected>{t.interestPlaceholder[lang]}</option>
              <option value="apartment">{lang === 'en' ? 'Apartment' : 'شقة'}</option>
              <option value="villa">{lang === 'en' ? 'Villa' : 'فيلا'}</option>
              <option value="land">{lang === 'en' ? 'Land' : 'أرض'}</option>
              <option value="commercial">{lang === 'en' ? 'Commercial' : 'تجاري'}</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3.5 px-6 rounded-lg shadow-md transition-colors transform hover:scale-[1.02] active:scale-95 text-lg"
          >
            {t.submit[lang]}
          </button>
        </form>
      )}
    </div>
  );
};

export default LeadForm;