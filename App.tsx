import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TEXT_CONTENT, PROPERTIES } from './constants';
import LanguageSwitcher from './components/LanguageSwitcher';
import LeadForm from './components/LeadForm';
import PropertyCard from './components/PropertyCard';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { ShieldCheck, Award, CheckCircle, TrendingUp, Users, Home, Clock } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = TEXT_CONTENT;
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className={`min-h-screen ${isRTL ? 'font-arabic' : 'font-sans'} bg-gray-50 text-gray-900 selection:bg-brand-200`}>
      <LanguageSwitcher lang={lang} setLang={setLang} />
      <FloatingWhatsApp lang={lang} />

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/luxuryhome/1920/1080" 
            alt="Luxury Home" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center pt-20 pb-10">
          {/* Hero Text */}
          <div className={`text-white space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {t.hero.headline[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              {t.hero.subheadline[lang]}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-gold-400" />
                  <span>{t.urgent.items[0].title[lang]}</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span>{t.urgent.items[1].title[lang]}</span>
               </div>
            </div>
          </div>

          {/* Hero Form */}
          <div className="w-full max-w-md mx-auto md:mr-0 md:ml-auto">
            <LeadForm lang={lang} variant="hero" />
          </div>
        </div>
      </header>

      {/* Urgent Value Props */}
      <section className="py-16 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center" dir={isRTL ? 'rtl' : 'ltr'}>
            {t.urgent.items.map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                  {idx === 0 && <Award className="w-8 h-8" />}
                  {idx === 1 && <Clock className="w-8 h-8" />}
                  {idx === 2 && <Users className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-900">{item.title[lang]}</h3>
                <p className="text-gray-600">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.hero.cta[lang]}</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.map(prop => (
              <PropertyCard key={prop.id} property={prop} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{t.benefits.title[lang]}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" dir={isRTL ? 'rtl' : 'ltr'}>
            {t.benefits.items.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                  {idx === 0 && <ShieldCheck className="w-10 h-10" />}
                  {idx === 1 && <TrendingUp className="w-10 h-10" />}
                  {idx === 2 && <Award className="w-10 h-10" />}
                  {idx === 3 && <CheckCircle className="w-10 h-10" />}
                </div>
                <span className="font-semibold text-lg">{benefit.title[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12">{t.gallery.title[lang]}</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-[600px]">
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl">
                 <img src="https://picsum.photos/seed/gal1/800/800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 1"/>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                 <img src="https://picsum.photos/seed/gal2/400/400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 2"/>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                 <img src="https://picsum.photos/seed/gal3/400/400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 3"/>
              </div>
              <div className="col-span-2 relative overflow-hidden rounded-2xl">
                 <img src="https://picsum.photos/seed/gal4/800/400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Gallery 4"/>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-100 border-t border-gray-200">
         <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
               <div>
                  <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">{t.stats.clients.value}</div>
                  <div className="text-gray-500 uppercase tracking-wide font-semibold">{t.stats.clients.label[lang]}</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">{t.stats.sold.value}</div>
                  <div className="text-gray-500 uppercase tracking-wide font-semibold">{t.stats.sold.label[lang]}</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">{t.stats.experience.value}</div>
                  <div className="text-gray-500 uppercase tracking-wide font-semibold">{t.stats.experience.label[lang]}</div>
               </div>
            </div>
         </div>
      </section>

      {/* Final Lead Capture */}
      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-2xl mx-auto">
             {lang === 'en' ? 'Don’t Miss Out on Your Dream Home' : 'لا تفوت فرصة الحصول على منزل أحلامك'}
           </h2>
           <div className="bg-white p-1 rounded-2xl max-w-xl mx-auto">
             <LeadForm lang={lang} variant="section" />
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="container mx-auto">
          <p>{t.footer.copyright[lang]}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;