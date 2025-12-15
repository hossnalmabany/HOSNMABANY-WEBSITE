import { Content, Property } from './types';

export const TEXT_CONTENT: Content = {
  hero: {
    headline: {
      en: "Find Your Dream Property Today",
      ar: "اعثر على عقارك المثالي اليوم"
    },
    subheadline: {
      en: "Exclusive deals. Verified listings. Expert guidance.",
      ar: "عروض حصرية، عقارات موثوقة، وخبرة احترافية"
    },
    cta: {
      en: "Get Your Dream Property",
      ar: "احصل على عقارك الآن"
    }
  },
  form: {
    namePlaceholder: { en: "Full Name", ar: "الاسم الكامل" },
    phonePlaceholder: { en: "Phone Number", ar: "رقم الجوال" },
    interestPlaceholder: { en: "Property Interest (e.g. Villa)", ar: "نوع العقار (مثال: فيلا)" },
    submit: { en: "Request Details", ar: "اطلب التفاصيل" },
    success: { en: "Thanks! We will contact you shortly.", ar: "شكراً! سنتواصل معك قريباً." }
  },
  urgent: {
    items: [
      {
        title: { en: "Exclusive Deals", ar: "عروض عقارية حصرية" },
        desc: { en: "Access off-market listings.", ar: "وصول إلى قوائم غير معروضة في السوق." }
      },
      {
        title: { en: "Limited Availability", ar: "فرص محدودة" },
        desc: { en: "High demand properties go fast.", ar: "العقارات المطلوبة تباع بسرعة." }
      },
      {
        title: { en: "Expert Guidance", ar: "خبراء عقاريون محترفون" },
        desc: { en: "We handle all the paperwork.", ar: "نتولى كافة الإجراءات القانونية." }
      }
    ]
  },
  benefits: {
    title: { en: "Why Choose Us?", ar: "لماذا تختارنا؟" },
    items: [
      { title: { en: "Trusted Expertise", ar: "خبرة موثوقة" } },
      { title: { en: "Best Prices", ar: "أفضل الأسعار" } },
      { title: { en: "Verified Properties", ar: "عقارات معتمدة" } },
      { title: { en: "Smooth Process", ar: "إجراءات سهلة وسريعة" } }
    ]
  },
  stats: {
    clients: { label: { en: "Happy Clients", ar: "عميل سعيد" }, value: "1,200+" },
    sold: { label: { en: "Properties Sold", ar: "عقار مباع" }, value: "850+" },
    experience: { label: { en: "Years Experience", ar: "سنوات خبرة" }, value: "15+" }
  },
  gallery: {
    title: { en: "Luxury Living", ar: "حياة الرفاهية" }
  },
  footer: {
    copyright: { en: "© 2024 Prime Properties. All rights reserved.", ar: "© 2024 عقارات برايم. جميع الحقوق محفوظة." }
  }
};

export const PROPERTIES: Property[] = [
  {
    id: '1',
    image: 'https://picsum.photos/seed/estate1/800/600',
    price: { en: "$450,000", ar: "١,٦٨٧,٥٠٠ ر.س" },
    location: { en: "Downtown Marina", ar: "مرسى المدينة" },
    description: { en: "Luxury 2-bedroom apartment with sea view.", ar: "شقة فاخرة غرفتين نوم بإطلالة بحرية." },
    beds: 2, baths: 2, sqft: 1200
  },
  {
    id: '2',
    image: 'https://picsum.photos/seed/estate2/800/600',
    price: { en: "$850,000", ar: "٣,١٨٧,٥٠٠ ر.س" },
    location: { en: "Palm Hills", ar: "تلال النخيل" },
    description: { en: "Modern villa with private pool and garden.", ar: "فيلا مودرن مع مسبح خاص وحديقة." },
    beds: 4, baths: 3, sqft: 3500
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/estate3/800/600',
    price: { en: "$320,000", ar: "١,٢٠٠,٠٠٠ ر.س" },
    location: { en: "Financial District", ar: "الحي المالي" },
    description: { en: "Smart studio ideal for investment.", ar: "استوديو ذكي مثالي للاستثمار." },
    beds: 1, baths: 1, sqft: 650
  },
  {
    id: '4',
    image: 'https://picsum.photos/seed/estate4/800/600',
    price: { en: "$1,200,000", ar: "٤,٥٠٠,٠٠٠ ر.س" },
    location: { en: "Royal Heights", ar: "مرتفعات الرويال" },
    description: { en: "Penthouse with panoramic city views.", ar: "بنتهاوس مع إطلالات بانورامية على المدينة." },
    beds: 3, baths: 4, sqft: 2800
  },
  {
    id: '5',
    image: 'https://picsum.photos/seed/estate5/800/600',
    price: { en: "$550,000", ar: "٢,٠٦٢,٥٠٠ ر.س" },
    location: { en: "Green Valley", ar: "الوادي الأخضر" },
    description: { en: "Family home near international schools.", ar: "منزل عائلي بالقرب من المدارس العالمية." },
    beds: 3, baths: 2, sqft: 1800
  },
  {
    id: '6',
    image: 'https://picsum.photos/seed/estate6/800/600',
    price: { en: "$2,500,000", ar: "٩,٣٧٥,٠٠٠ ر.س" },
    location: { en: "The Coast", ar: "الساحل" },
    description: { en: "Exclusive beachfront mansion.", ar: "قصر حصري على شاطئ البحر." },
    beds: 6, baths: 7, sqft: 8000
  }
];