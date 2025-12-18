import React, { useState, useEffect } from 'react';
import { Language, Project, Lead } from './types';
import { TEXT_CONTENT, PROJECTS } from './constants';
import LanguageSwitcher from './components/LanguageSwitcher';
import LeadForm from './components/LeadForm';
import ProjectCard from './components/PropertyCard'; // Importing the modified file
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdminPanel from './components/AdminPanel';
import { ShieldCheck, HardHat, CheckCircle, Truck, Users, Hammer, Clock, LockKeyhole } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<'landing' | 'admin'>('landing');
  
  // App State
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [leads, setLeads] = useState<Lead[]>([
      { id: '1', name: 'Ahmed Saleh', phone: '+966 50 123 4567', interest: 'Commercial Complex', timestamp: Date.now() - 10000000 }
  ]);

  const t = TEXT_CONTENT;
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Handlers
  const handleAddLead = (data: { name: string; phone: string; interest: string }) => {
    const newLead: Lead = {
      id: Date.now().toString(),
      ...data,
      timestamp: Date.now()
    };
    setLeads(prev => [newLead, ...prev]);
  };

  const handleAddProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  // Render Admin View
  if (view === 'admin') {
    return (
      <AdminPanel 
        leads={leads}
        projects={projects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onExit={() => setView('landing')}
        lang={lang}
        setLang={setLang}
      />
    );
  }

  // Render Landing Page View
  return (
    <div className={`min-h-screen ${isRTL ? 'font-arabic' : 'font-sans'} bg-gray-50 text-gray-900 selection:bg-brand-200`}>
      <LanguageSwitcher lang={lang} setLang={setLang} />
      <FloatingWhatsApp lang={lang} />

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
            alt="Construction Site" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center pt-20 pb-10">
          {/* Hero Text */}
          <div className={`text-white space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {t.hero.headline[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light border-l-4 border-gold-500 pl-4">
              {t.hero.subheadline[lang]}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                  <HardHat className="w-5 h-5 text-gold-400" />
                  <span>{lang === 'en' ? 'Expert Engineers' : 'مهندسون خبراء'}</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                  <CheckCircle className="w-5 h-5 text-gold-400" />
                  <span>{lang === 'en' ? 'Quality Assured' : 'جودة مضمونة'}</span>
               </div>
            </div>
          </div>

          {/* Hero Form */}
          <div className="w-full max-w-md mx-auto md:mr-0 md:ml-auto">
            <LeadForm lang={lang} variant="hero" onSubmitLead={handleAddLead} />
          </div>
        </div>
      </header>

      {/* Services / Urgent Section */}
      <section className="py-16 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center" dir={isRTL ? 'rtl' : 'ltr'}>
            {t.urgent.items.map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {idx === 0 && <Hammer className="w-8 h-8" />}
                  {idx === 1 && <Truck className="w-8 h-8" />}
                  {idx === 2 && <Users className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-900">{item.title[lang]}</h3>
                <p className="text-gray-600">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.gallery.title[lang]}</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(proj => (
              <ProjectCard key={proj.id} project={proj} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits (Safety, Quality) */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{t.benefits.title[lang]}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" dir={isRTL ? 'rtl' : 'ltr'}>
            {t.benefits.items.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                  {idx === 0 && <ShieldCheck className="w-10 h-10" />}
                  {idx === 1 && <Clock className="w-10 h-10" />}
                  {idx === 2 && <CheckCircle className="w-10 h-10" />}
                  {idx === 3 && <HardHat className="w-10 h-10" />}
                </div>
                <span className="font-semibold text-lg">{benefit.title[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
      <section className="py-20 bg-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-2xl mx-auto">
             {lang === 'en' ? 'Ready to Build Your Vision?' : 'جاهز لبناء رؤيتك على أرض الواقع؟'}
           </h2>
           <div className="bg-white p-1 rounded-2xl max-w-xl mx-auto">
             <LeadForm lang={lang} variant="section" onSubmitLead={handleAddLead} />
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm border-t border-gray-800">
        <div className="container mx-auto">
          <p className="mb-4">{t.footer.copyright[lang]}</p>
          <button 
            onClick={() => setView('admin')}
            className="flex items-center gap-1 mx-auto text-xs text-gray-600 hover:text-gray-300 transition-colors"
          >
            <LockKeyhole size={12} />
            Admin Access
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;