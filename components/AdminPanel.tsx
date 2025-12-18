import React, { useState } from 'react';
import { Project, Lead, Language } from '../types';
import { 
  LayoutDashboard, 
  Users, 
  HardHat, // Changed Icon
  LogOut, 
  Plus, 
  Trash2, 
  X,
  Search,
  Calendar,
  Globe
} from 'lucide-react';

interface Props {
  leads: Lead[];
  projects: Project[];
  onAddProject: (project: Project) => void;
  onDeleteProject: (id: string) => void;
  onExit: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

const ADMIN_TEXT = {
  login: {
    title: { en: "Admin Control Panel", ar: "لوحة تحكم الإدارة" },
    username: { en: "Username", ar: "اسم المستخدم" },
    password: { en: "Password", ar: "كلمة المرور" },
    btn: { en: "Login", ar: "تسجيل الدخول" },
    back: { en: "Back to Website", ar: "العودة للموقع" },
    error: { en: "Invalid credentials (try: admin / admin)", ar: "بيانات الدخول غير صحيحة (جرب: admin / admin)" }
  },
  sidebar: {
    title: { en: "Hosn Admin", ar: "إدارة حصن مباني" },
    projects: { en: "Projects", ar: "المشاريع" },
    leads: { en: "Inquiries", ar: "الطلبات" },
    exit: { en: "Exit Dashboard", ar: "خروج من اللوحة" }
  },
  header: {
    propTitle: { en: "Project Portfolio", ar: "محفظة المشاريع" },
    leadTitle: { en: "Construction Inquiries", ar: "طلبات المقاولات" },
    welcome: { en: "Welcome, Admin", ar: "مرحباً، المشرف" },
    addBtn: { en: "Add New Project", ar: "إضافة مشروع جديد" }
  },
  projects: {
    year: { en: "Year", ar: "سنة" },
    delete: { en: "Delete Project", ar: "حذف المشروع" }
  },
  leads: {
    search: { en: "Search inquiries...", ar: "بحث في الطلبات..." },
    colName: { en: "Name", ar: "الاسم" },
    colContact: { en: "Contact", ar: "معلومات الاتصال" },
    colInterest: { en: "Type", ar: "النوع" },
    colDate: { en: "Date", ar: "التاريخ" },
    colStatus: { en: "Status", ar: "الحالة" },
    empty: { en: "No inquiries found yet.", ar: "لا يوجد طلبات حتى الآن." },
    new: { en: "New", ar: "جديد" }
  },
  modal: {
    title: { en: "Add New Project", ar: "إضافة مشروع جديد" },
    general: { en: "Project Info", ar: "بيانات المشروع" },
    image: { en: "Image URL", ar: "رابط الصورة" },
    enDetails: { en: "English Details", ar: "التفاصيل بالإنجليزية" },
    arDetails: { en: "Arabic Details", ar: "التفاصيل بالعربية" },
    titleField: { en: "Project Title", ar: "اسم المشروع" },
    category: { en: "Category", ar: "التصنيف" },
    status: { en: "Status", ar: "الحالة" },
    year: { en: "Year", ar: "السنة" },
    desc: { en: "Description", ar: "الوصف" },
    cancel: { en: "Cancel", ar: "إلغاء" },
    save: { en: "Save Project", ar: "حفظ المشروع" }
  }
};

const AdminPanel: React.FC<Props> = ({ leads, projects, onAddProject, onDeleteProject, onExit, lang, setLang }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'leads'>('projects');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Project State
  const [newProj, setNewProj] = useState<Partial<Project>>({
    title: { en: '', ar: '' },
    category: { en: '', ar: '' },
    description: { en: '', ar: '' },
    status: { en: 'Ongoing', ar: 'قيد التنفيذ' },
    image: '',
    year: new Date().getFullYear().toString()
  });

  const isRTL = lang === 'ar';
  const t = ADMIN_TEXT;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert(t.login.error[lang]);
    }
  };

  const handleSubmitProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProj.title?.en || !newProj.category?.en) return;

    const project: Project = {
      id: Date.now().toString(),
      image: newProj.image || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      title: { en: newProj.title.en, ar: newProj.title.ar || newProj.title.en },
      category: { en: newProj.category.en, ar: newProj.category.ar || newProj.category.en },
      description: { en: newProj.description?.en || '', ar: newProj.description?.ar || '' },
      status: { en: newProj.status?.en || 'Ongoing', ar: newProj.status?.ar || 'قيد التنفيذ' },
      year: newProj.year || '2024'
    };

    onAddProject(project);
    setIsModalOpen(false);
    setNewProj({
        title: { en: '', ar: '' },
        category: { en: '', ar: '' },
        description: { en: '', ar: '' },
        status: { en: 'Ongoing', ar: 'قيد التنفيذ' },
        image: '',
        year: new Date().getFullYear().toString()
    });
  };

  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          {/* Language Toggle for Login */}
          <div className="flex justify-between items-start mb-4">
             <div className="invisible"><Globe /></div> {/* Spacer */}
             <div className="bg-brand-500 p-3 rounded-full text-white">
                <LayoutDashboard size={32} />
             </div>
             <button 
               onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
               className="text-gray-400 hover:text-brand-600 transition-colors"
               title="Switch Language"
             >
               <Globe size={20} />
             </button>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{t.login.title[lang]}</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.login.username[lang]}</label>
              <input 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.login.password[lang]}</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
            <button type="submit" className="w-full bg-brand-600 text-white py-2 rounded-lg font-bold hover:bg-brand-700 transition">
              {t.login.btn[lang]}
            </button>
            <button type="button" onClick={onExit} className="w-full text-gray-500 text-sm hover:underline">
              {t.login.back[lang]}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-100 flex ${isRTL ? 'font-arabic' : 'font-sans'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Sidebar */}
      <aside className={`fixed top-0 h-full w-64 bg-brand-900 text-white flex flex-col transition-all duration-300 z-20 ${isRTL ? 'right-0' : 'left-0'}`}>
        <div className="p-6 border-b border-brand-800">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <LayoutDashboard />
            {t.sidebar.title[lang]}
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'projects' ? 'bg-brand-700 text-white' : 'text-brand-200 hover:bg-brand-800'}`}
          >
            <HardHat size={20} />
            {t.sidebar.projects[lang]}
          </button>
          <button 
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'leads' ? 'bg-brand-700 text-white' : 'text-brand-200 hover:bg-brand-800'}`}
          >
            <Users size={20} />
            {t.sidebar.leads[lang]}
            <span className={`bg-brand-500 text-xs px-2 py-0.5 rounded-full ${isRTL ? 'mr-auto' : 'ml-auto'}`}>{leads.length}</span>
          </button>
        </nav>
        
        <div className="p-4 border-t border-brand-800 space-y-2">
          {/* Language Switcher in Sidebar */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 w-full text-brand-300 hover:text-white transition-colors px-2 py-2"
          >
            <Globe size={18} />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <button onClick={onExit} className="flex items-center gap-2 text-brand-300 hover:text-white transition-colors px-2 py-2">
            <LogOut size={18} />
            {t.sidebar.exit[lang]}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 p-8 transition-all duration-300 ${isRTL ? 'mr-64' : 'ml-64'}`}>
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {activeTab === 'projects' ? t.header.propTitle[lang] : t.header.leadTitle[lang]}
          </h2>
          <div className="flex items-center gap-4">
             <div className="text-sm text-gray-500">{t.header.welcome[lang]}</div>
             <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold">A</div>
          </div>
        </header>

        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-end mb-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                <Plus size={20} />
                {t.header.addBtn[lang]}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map(proj => (
                <div key={proj.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                  <div className="h-48 relative">
                    <img src={proj.image} alt="" className="w-full h-full object-cover" />
                    <button 
                      onClick={() => onDeleteProject(proj.id)}
                      className={`absolute top-2 bg-red-500/90 text-white p-2 rounded-full hover:bg-red-600 transition ${isRTL ? 'left-2' : 'right-2'}`}
                      title={t.projects.delete[lang]}
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className={`absolute bottom-2 ${isRTL ? 'right-2' : 'left-2'}`}>
                        <span className="bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            {proj.status[lang]}
                        </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <span className="text-xs text-brand-600 font-bold uppercase mb-1">{proj.category[lang]}</span>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{proj.title[lang]}</h3>
                    <div className="text-gray-500 text-sm mb-4 line-clamp-2">{proj.description[lang]}</div>
                    
                    <div className="mt-auto border-t pt-3 text-xs text-gray-400">
                        {t.projects.year[lang]}: {proj.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex gap-4">
               <div className="relative flex-1 max-w-md">
                 <Search className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} size={18} />
                 <input 
                    type="text" 
                    placeholder={t.leads.search[lang]} 
                    className={`w-full py-2 border rounded-lg focus:outline-none focus:border-brand-500 ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`} 
                 />
               </div>
            </div>
            <table className="w-full text-left" dir={isRTL ? 'rtl' : 'ltr'}>
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className={`px-6 py-4 font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{t.leads.colName[lang]}</th>
                  <th className={`px-6 py-4 font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{t.leads.colContact[lang]}</th>
                  <th className={`px-6 py-4 font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{t.leads.colInterest[lang]}</th>
                  <th className={`px-6 py-4 font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{t.leads.colDate[lang]}</th>
                  <th className={`px-6 py-4 font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{t.leads.colStatus[lang]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.length === 0 ? (
                    <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-400">{t.leads.empty[lang]}</td></tr>
                ) : (
                    leads.map(lead => (
                      <tr key={lead.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{lead.name}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 font-mono text-sm">{lead.phone}</td>
                        <td className="px-6 py-4">
                          <span className="bg-brand-50 text-brand-700 text-xs px-2 py-1 rounded-full font-medium">
                            {lead.interest}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm">
                           <div className="flex items-center gap-2">
                             <Calendar size={14} />
                             {new Date(lead.timestamp).toLocaleDateString()}
                           </div>
                        </td>
                        <td className="px-6 py-4">
                           <span className={`inline-block w-2 h-2 rounded-full bg-green-500 ${isRTL ? 'ml-2' : 'mr-2'}`}></span>
                           {t.leads.new[lang]}
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Add Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold">{t.modal.title[lang]}</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmitProject} className="p-6 space-y-6">
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-500 text-sm uppercase">{t.modal.general[lang]}</h4>
                <div>
                  <label className="block text-sm font-medium mb-1">{t.modal.image[lang]}</label>
                  <input 
                    type="text" 
                    placeholder="https://..." 
                    className="w-full border rounded-lg p-2"
                    value={newProj.image}
                    onChange={e => setNewProj({...newProj, image: e.target.value})}
                  />
                </div>
                 <div>
                    <label className="block text-sm font-medium mb-1">{t.modal.year[lang]}</label>
                    <input type="text" className="w-full border rounded-lg p-2" value={newProj.year} onChange={e => setNewProj({...newProj, year: e.target.value})} />
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-brand-600 text-sm uppercase">{t.modal.enDetails[lang]}</h4>
                  <input 
                    type="text" placeholder={t.modal.titleField['en']} className="w-full border rounded-lg p-2"
                    value={newProj.title?.en} onChange={e => setNewProj({...newProj, title: {...newProj.title!, en: e.target.value}})}
                  />
                  <input 
                    type="text" placeholder={t.modal.category['en']} className="w-full border rounded-lg p-2"
                    value={newProj.category?.en} onChange={e => setNewProj({...newProj, category: {...newProj.category!, en: e.target.value}})}
                  />
                  <textarea 
                    placeholder={t.modal.desc['en']} className="w-full border rounded-lg p-2 h-24"
                    value={newProj.description?.en} onChange={e => setNewProj({...newProj, description: {...newProj.description!, en: e.target.value}})}
                  />
                </div>
                
                <div className="space-y-4" dir="rtl">
                  <h4 className="font-semibold text-brand-600 text-sm uppercase text-right">{t.modal.arDetails[lang]}</h4>
                  <input 
                    type="text" placeholder={t.modal.titleField['ar']} className="w-full border rounded-lg p-2"
                    value={newProj.title?.ar} onChange={e => setNewProj({...newProj, title: {...newProj.title!, ar: e.target.value}})}
                  />
                   <input 
                    type="text" placeholder={t.modal.category['ar']} className="w-full border rounded-lg p-2"
                    value={newProj.category?.ar} onChange={e => setNewProj({...newProj, category: {...newProj.category!, ar: e.target.value}})}
                  />
                  <textarea 
                    placeholder={t.modal.desc['ar']} className="w-full border rounded-lg p-2 h-24"
                    value={newProj.description?.ar} onChange={e => setNewProj({...newProj, description: {...newProj.description!, ar: e.target.value}})}
                  />
                </div>
              </div>

              <div className="pt-4 border-t flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">{t.modal.cancel[lang]}</button>
                <button type="submit" className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 font-bold">{t.modal.save[lang]}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;