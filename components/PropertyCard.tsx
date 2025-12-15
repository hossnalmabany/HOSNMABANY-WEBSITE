import React from 'react';
import { Property, Language } from '../types';
import { Bed, Bath, Square, MessageCircle } from 'lucide-react';

interface Props {
  property: Property;
  lang: Language;
}

const PropertyCard: React.FC<Props> = ({ property, lang }) => {
  const isRTL = lang === 'ar';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="relative h-56 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.location[lang]} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white font-bold text-xl">{property.price[lang]}</p>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-brand-900">{property.location[lang]}</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
          {property.description[lang]}
        </p>
        
        <div className="flex justify-between items-center text-gray-500 text-xs mb-4 border-t border-b border-gray-100 py-3">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-brand-500" />
            <span>{property.beds} {lang === 'en' ? 'Beds' : 'غرف'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-brand-500" />
            <span>{property.baths} {lang === 'en' ? 'Baths' : 'حمام'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4 text-brand-500" />
            <span>{property.sqft} {lang === 'en' ? 'sqft' : 'قدم²'}</span>
          </div>
        </div>
        
        <a 
          href="https://whatsapp.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-semibold transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{lang === 'en' ? 'WhatsApp Inquiry' : 'استفسار عبر واتساب'}</span>
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;