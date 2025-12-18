import React from 'react';
import { Project, Language } from '../types';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

interface Props {
  project: Project; // Changed prop name to generic project
  lang: Language;
}

// Renamed internally, though file is still PropertyCard for file system simplicity
const ProjectCard: React.FC<Props> = ({ project, lang }) => {
  const isRTL = lang === 'ar';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group flex flex-col h-full" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title[lang]} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
           <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
             {project.status[lang]}
           </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
          <span className="text-gold-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
             <Tag size={12} />
             {project.category[lang]}
          </span>
          <h3 className="text-xl font-bold text-brand-900 leading-tight">{project.title[lang]}</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {project.description[lang]}
        </p>
        
        <div className="mt-auto border-t border-gray-100 pt-4 flex justify-between items-center text-sm">
           <div className="flex items-center gap-2 text-gray-500 font-medium">
              <Calendar size={16} className="text-brand-500" />
              <span>{project.year}</span>
           </div>
           
           <button className="text-brand-600 font-bold hover:text-brand-800 transition-colors flex items-center gap-1">
             {lang === 'en' ? 'View Details' : 'عرض التفاصيل'}
             <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;