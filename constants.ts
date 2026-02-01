import { Content } from './types';

// ملاحظة: البيانات الفعلية للمشاريع يتم جلبها الآن من api.php
export const TEXT_CONTENT: Content = {
  hero: {
    headline: {
      en: "Building the Future with Excellence",
      ar: "نبني المستقبل بإتقان ومعايير عالمية"
    },
    subheadline: {
      en: "Powered by PHP/MySQL Backend Infrastructure",
      ar: "نعمل ببنية تحتية برمجية متطورة بنظام PHP/MySQL"
    },
    cta: {
      en: "Start Your Project",
      ar: "ابدأ مشروعك الآن"
    }
  },
  form: {
    namePlaceholder: { en: "Full Name", ar: "الاسم الكامل" },
    phonePlaceholder: { en: "Phone Number", ar: "رقم الجوال" },
    interestPlaceholder: { en: "Select Project Type", ar: "اختر نوع المشروع" },
    submit: { en: "Send via PHP API", ar: "إرسال عبر نظام PHP" },
    success: { en: "Stored in MySQL successfully!", ar: "تم الحفظ في قاعدة البيانات بنجاح!" }
  },
  urgent: {
    items: [
      {
        title: { en: "Scalable Backend", ar: "خلفية برمجية مرنة" },
        desc: { en: "Database driven content management.", ar: "إدارة محتوى تعتمد على قواعد البيانات." }
      },
      {
        title: { en: "Secure API", ar: "واجهة برمجية آمنة" },
        desc: { en: "Protected endpoints for lead collection.", ar: "نقاط اتصال محمية لجمع بيانات العملاء." }
      },
      {
        title: { en: "Live Control", ar: "تحكم مباشر" },
        desc: { en: "Real-time updates from the dashboard.", ar: "تحديثات فورية من لوحة التحكم." }
      }
    ]
  },
  benefits: {
    title: { en: "System Advantages", ar: "مميزات النظام التقني" },
    items: [
      { title: { en: "MySQL Optimized", ar: "تحسين MySQL" } },
      { title: { en: "PHP 8+ Ready", ar: "جاهز لـ PHP 8+" } },
      { title: { en: "Bilingual UI", ar: "واجهة ثنائية اللغة" } },
      { title: { en: "Lead Tracking", ar: "تتبع العملاء" } }
    ]
  },
  stats: {
    clients: { label: { en: "Active Queries", ar: "استعلام نشط" }, value: "1.2k" },
    sold: { label: { en: "Data Records", ar: "سجل بيانات" }, value: "5k+" },
    experience: { label: { en: "System Uptime", ar: "جاهزية النظام" }, value: "99.9%" }
  },
  gallery: {
    title: { en: "Database Portfolio", ar: "معرض المشاريع (من القاعدة)" }
  },
  footer: {
    copyright: { 
      en: "© 2024 HOSNMABANY-WEBSITE | PHP-MySQL Architecture", 
      ar: "© 2024 HOSNMABANY-WEBSITE | هندسة PHP-MySQL" 
    }
  }
};

// سيتم استبدال هذه ببيانات من API لاحقاً
export const PROJECTS = []; 
