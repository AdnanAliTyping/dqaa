import { create } from 'zustand';

// Define all available languages
export type Language = 'en' | 'ml';

// Define the language store interface
interface LanguageStore {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
  isRtl: boolean;
}

// Translations object with nested structure for organization
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.admissions': 'Admissions',
    'nav.academic': 'Academic Programs',
    'nav.studentLife': 'Student Life',
    'nav.campus': 'Campus',
    'nav.technology': 'Technology',
    'nav.parents': 'Parents\' Corner',
    'nav.community': 'Community',
    'nav.news': 'News & Events',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',

    // Mission & Values
    'mission': 'Our Mission',
    'mission.text': 'To nurture a generation of Muslim scholars and leaders who are deeply rooted in Islamic knowledge, academically excellent, and capable of contributing positively to society.',
    'values': 'Our Values',
    
    // Programs
    'programs.hifz': 'Hifz Program',
    'programs.bayanul': 'Bayanul Quran',
    'programs.islamic': 'Islamic Studies',
    'programs.academic': 'Academic Subjects',
    
    // CTAs
    'cta.apply': 'Apply Now',
    'cta.tour': 'Virtual Campus Tour',
    'cta.contact': 'Contact Us',
    'cta.donate': 'Donate',
    
    // Contact Form
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message Sent',
    'contact.error': 'Error',
    'contact.successMessage': 'Thank you for contacting us. We will get back to you soon. Please check your email for a confirmation.',
    'contact.errorMessage': 'There was an error sending your message. Please try again later.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.address': 'Koothakunsi, Koothakunsi Kadavu, Kerala 679501',
    'footer.phone': '+91 95265 52211',
    'footer.email': 'darulquranind@gmail.com',
    
    // Language
    'language': 'Language',
    'language.english': 'English',
    'language.malayalam': 'Malayalam',
    'language.switch': 'Switch to Malayalam',
    
    // Other common translations
    'academy.name': 'Darul Quran Abdulla Academy',
    'academy.shortName': 'DQAA',
    'admissions.open': 'Admissions Open for 2025!',
    'learnMore': 'Learn More',
  },
  ml: {
    // Navigation
    'nav.home': 'ഹോം',
    'nav.about': 'ഞങ്ങളെക്കുറിച്ച്',
    'nav.admissions': 'പ്രവേശനം',
    'nav.academic': 'അക്കാദമിക് പ്രോഗ്രാമുകൾ',
    'nav.studentLife': 'വിദ്യാർത്ഥി ജീവിതം',
    'nav.campus': 'കാമ്പസ്',
    'nav.technology': 'സാങ്കേതികവിദ്യ',
    'nav.parents': 'രക്ഷിതാക്കളുടെ കോർണർ',
    'nav.community': 'സമൂഹം',
    'nav.news': 'വാർത്തകളും പരിപാടികളും',
    'nav.contact': 'ബന്ധപ്പെടുക',
    'nav.donate': 'സംഭാവന ചെയ്യുക',

    // Mission & Values
    'mission': 'ഞങ്ങളുടെ ദൗത്യം',
    'mission.text': 'ഇസ്ലാമിക അറിവിൽ ആഴത്തിൽ വേരൂന്നിയതും അക്കാദമിക് മികവുള്ളതും സമൂഹത്തിന് നേരിട്ട് സംഭാവന നൽകാൻ കഴിവുള്ളതുമായ മുസ്ലിം പണ്ഡിതരുടെയും നേതാക്കളുടെയും ഒരു തലമുറയെ വളർത്തിയെടുക്കുക.',
    'values': 'ഞങ്ങളുടെ മൂല്യങ്ങൾ',
    
    // Programs
    'programs.hifz': 'ഹിഫ്സ് പ്രോഗ്രാം',
    'programs.bayanul': 'ബയാനുൽ ഖുർആൻ',
    'programs.islamic': 'ഇസ്ലാമിക പഠനങ്ങൾ',
    'programs.academic': 'അക്കാദമിക് വിഷയങ്ങൾ',
    
    // CTAs
    'cta.apply': 'ഇപ്പോൾ അപേക്ഷിക്കുക',
    'cta.tour': 'വെർച്വൽ കാമ്പസ് ടൂർ',
    'cta.contact': 'ഞങ്ങളെ ബന്ധപ്പെടുക',
    'cta.donate': 'സംഭാവന ചെയ്യുക',
    
    // Contact Form
    'contact.name': 'നിങ്ങളുടെ പേര്',
    'contact.email': 'ഇമെയിൽ വിലാസം',
    'contact.phone': 'ഫോൺ നമ്പർ',
    'contact.subject': 'വിഷയം',
    'contact.message': 'സന്ദേശം',
    'contact.send': 'സന്ദേശം അയയ്ക്കുക',
    'contact.sending': 'അയയ്ക്കുന്നു...',
    'contact.success': 'സന്ദേശം അയച്ചു',
    'contact.error': 'പിശക്',
    'contact.successMessage': 'ഞങ്ങളെ ബന്ധപ്പെട്ടതിന് നന്ദി. ഞങ്ങൾ ഉടൻ തിരിച്ചെത്തും. സ്ഥിരീകരണത്തിനായി നിങ്ങളുടെ ഇമെയിൽ പരിശോധിക്കുക.',
    'contact.errorMessage': 'നിങ്ങളുടെ സന്ദേശം അയയ്ക്കുന്നതിൽ ഒരു പിശക് ഉണ്ടായിരുന്നു. ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കുക.',
    
    // Footer
    'footer.rights': 'എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം',
    'footer.address': 'കൂത്താകുന്സി, കൂത്താകുന്സി കടവ്, കേരളം 679501',
    'footer.phone': '+91 95265 52211',
    'footer.email': 'darulquranind@gmail.com',
    
    // Language
    'language': 'ഭാഷ',
    'language.english': 'ഇംഗ്ലീഷ്',
    'language.malayalam': 'മലയാളം',
    'language.switch': 'ഇംഗ്ലീഷിലേക്ക് മാറുക',
    
    // Other common translations
    'academy.name': 'ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി',
    'academy.shortName': 'ഡി.ക്യു.എ.എ.',
    'admissions.open': '2025 ലേക്കുള്ള പ്രവേശനം തുറന്നിരിക്കുന്നു!',
    'learnMore': 'കൂടുതൽ അറിയുക',
  }
};

// Default language key for fallback
const defaultLanguage: Language = 'en';

// Create the language store with zustand
export const useLanguageStore = create<LanguageStore>((set, get) => ({
  currentLanguage: (localStorage.getItem('dqaa-language') as Language) || defaultLanguage,
  isRtl: false, // Malayalam is not RTL, but we might need this for Arabic in future
  
  // Function to change the language
  setLanguage: (language: Language) => {
    localStorage.setItem('dqaa-language', language);
    set({ currentLanguage: language });
  },
  
  // Translation function
  t: (key: string, params?: Record<string, string>) => {
    const { currentLanguage } = get();
    
    // Get translation from current language or fall back to default
    let translation = translations[currentLanguage][key] || translations[defaultLanguage][key];
    
    // Return key if translation not found
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    
    // Replace parameters if provided
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{{${param}}}`, value);
      });
    }
    
    return translation;
  }
}));

// Hook for using translations in components
export function useTranslation() {
  const { t, currentLanguage, setLanguage, isRtl } = useLanguageStore();
  return { t, currentLanguage, setLanguage, isRtl };
}
