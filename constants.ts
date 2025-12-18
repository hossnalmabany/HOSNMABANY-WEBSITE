import { Content, Project } from './types';

export const TEXT_CONTENT: Content = {
  hero: {
    headline: {
      en: "Building the Future with Excellence",
      ar: "نبني المستقبل بإتقان ومعايير عالمية"
    },
    subheadline: {
      en: "General Contracting | Project Management | Civil Construction",
      ar: "المقاولات العامة | إدارة المشاريع | الإنشاءات المدنية"
    },
    cta: {
      en: "Start Your Project",
      ar: "ابدأ مشروعك الآن"
    }
  },
  form: {
    namePlaceholder: { en: "Full Name", ar: "الاسم الكامل" },
    phonePlaceholder: { en: "Phone Number", ar: "رقم الجوال" },
    interestPlaceholder: { en: "Project Type (e.g. Commercial)", ar: "نوع المشروع (مثال: تجاري)" },
    submit: { en: "Request Consultation", ar: "طلب استشارة" },
    success: { en: "Received! Our engineers will call you.", ar: "تم الاستلام! سيتصل بك مهندسونا قريباً." }
  },
  urgent: { // Used for Services
    items: [
      {
        title: { en: "General Construction", ar: "الإنشاءات العامة" },
        desc: { en: "Turnkey solutions for residential & commercial.", ar: "حلول متكاملة للمباني السكنية والتجارية (تسليم مفتاح)." }
      },
      {
        title: { en: "Infrastructure", ar: "البنية التحتية" },
        desc: { en: "Roads, sewage, and utility networks.", ar: "الطرق، شبكات الصرف الصحي، والمرافق العامة." }
      },
      {
        title: { en: "Project Management", ar: "إدارة المشاريع" },
        desc: { en: "Engineering supervision and quality control.", ar: "الإشراف الهندسي ومراقبة الجودة والجدول الزمني." }
      }
    ]
  },
  benefits: {
    title: { en: "Why Partner With Us?", ar: "لماذا نحن شريكك الأمثل؟" },
    items: [
      { title: { en: "Safety First", ar: "السلامة أولاً" } },
      { title: { en: "On-Time Delivery", ar: "الالتزام بالمواعيد" } },
      { title: { en: "High Quality", ar: "جودة عالية" } },
      { title: { en: "Certified Team", ar: "فريق معتمد" } }
    ]
  },
  stats: {
    clients: { label: { en: "Engineers & Staff", ar: "مهندس وموظف" }, value: "150+" },
    sold: { label: { en: "Projects Delivered", ar: "مشروع منجز" }, value: "320+" },
    experience: { label: { en: "Years Experience", ar: "سنوات خبرة" }, value: "25+" }
  },
  gallery: {
    title: { en: "Our Portfolio", ar: "معرض أعمالنا" }
  },
  footer: {
    copyright: { en: "© 2024 Hosn Mabany Contracting. All rights reserved.", ar: "© 2024 شركة حصن مباني للمقاولات. جميع الحقوق محفوظة." }
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop',
    title: { en: "Al-Riyadh Commercial Tower", ar: "برج الرياض التجاري" },
    category: { en: "Commercial", ar: "تجاري" },
    description: { en: "A 45-story office tower with smart building systems.", ar: "برج مكتبي مكون من 45 طابقاً بأنظمة بناء ذكية." },
    status: { en: "Completed", ar: "منجز" },
    year: "2023"
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1621293954908-356877995130?q=80&w=1000&auto=format&fit=crop',
    title: { en: "City General Hospital", ar: "مستشفى المدينة العام" },
    category: { en: "Healthcare", ar: "رعاية صحية" },
    description: { en: "300-bed capacity hospital with specialized clinics.", ar: "مستشفى بسعة 300 سرير مع عيادات تخصصية." },
    status: { en: "Ongoing", ar: "قيد التنفيذ" },
    year: "2024"
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop',
    title: { en: "Palm Residential Compound", ar: "مجمع النخيل السكني" },
    category: { en: "Residential", ar: "سكني" },
    description: { en: "50 luxury villas with integrated landscape and utilities.", ar: "50 فيلا فاخرة مع مسطحات خضراء ومرافق متكاملة." },
    status: { en: "Completed", ar: "منجز" },
    year: "2022"
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ce84ac?q=80&w=1000&auto=format&fit=crop',
    title: { en: "North Industrial Zone Roads", ar: "طرق المنطقة الصناعية الشمالية" },
    category: { en: "Infrastructure", ar: "بنية تحتية" },
    description: { en: "Paving 50km of roads including drainage systems.", ar: "سفلتة 50 كم من الطرق شاملة أنظمة التصريف." },
    status: { en: "Ongoing", ar: "قيد التنفيذ" },
    year: "2024"
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop',
    title: { en: "Future University Campus", ar: "حرم جامعة المستقبل" },
    category: { en: "Educational", ar: "تعليمي" },
    description: { en: "Administrative buildings and lecture halls.", ar: "مباني إدارية وقاعات محاضرات حديثة." },
    status: { en: "Completed", ar: "منجز" },
    year: "2021"
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
    title: { en: "Shopping Mall Renovation", ar: "تجديد المول التجاري" },
    category: { en: "Renovation", ar: "ترميم وتجديد" },
    description: { en: "Full facade and interior fit-out update.", ar: "تحديث كامل للواجهات والديكورات الداخلية." },
    status: { en: "Completed", ar: "منجز" },
    year: "2023"
  }
];