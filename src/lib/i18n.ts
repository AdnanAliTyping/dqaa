
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
    'programs.title': 'Our Programs',
    'programs.description': 'Darul Quran Abdulla Academy offers comprehensive programs combining Quranic studies with modern education',
    
    // Academic
    'academic.excellence': 'Academic Excellence',
    'academic.approach': 'Our Approach',
    'academic.curriculum': 'Curriculum',
    'academic.faculty': 'Our Faculty',
    
    // CTAs
    'cta.apply': 'Apply Now',
    'cta.tour': 'Virtual Campus Tour',
    'cta.contact': 'Contact Us',
    'cta.donate': 'Donate',
    'cta.learnMore': 'Learn More',
    'cta.readMore': 'Read More',
    'cta.download': 'Download',
    
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
    'contact.getInTouch': 'Get in Touch',
    'contact.welcome': 'We welcome your inquiries and feedback. Please feel free to contact us using the form or through any of the contact methods listed below.',
    'contact.info': 'Contact Information',
    'contact.connect': 'Connect With Us',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.address': 'Koothakunsi, Koothakunsi Kadavu, Kerala 679501',
    'footer.phone': '+91 95265 52211',
    'footer.email': 'darulquranind@gmail.com',
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',
    
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
    
    // Home page
    'home.welcome': 'Welcome to DQAA',
    'home.established': 'Established in 2014, DQAA has been at the forefront of Islamic education, combining traditional Quranic learning with modern academic curriculum. Our holistic approach to education focuses on developing students intellectually, spiritually, and morally to meet the challenges of the contemporary world.',
    'home.whyChoose': 'Why Choose DQAA?',
    'home.quranicExcellence': 'Quranic Excellence',
    'home.quranicExcellenceText': 'Our comprehensive Hifz program enables students to memorize the entire Quran with proper Tajweed and understanding.',
    'home.academicFocus': 'Academic Focus',
    'home.academicFocusText': 'Our curriculum integrates Islamic studies with modern subjects, ensuring students excel in both spiritual and academic domains.',
    'home.characterDev': 'Character Development',
    'home.characterDevText': 'We prioritize the cultivation of Islamic values, ethics, and character in all our students.',
    'home.beginJourney': 'Begin Your Journey with DQAA',
    'home.joinCommunity': 'Join our community of learners and embark on a path of knowledge, faith, and excellence. Applications for the upcoming academic year are now open.',
    
    // About page
    'about.title': 'About Us',
    'about.subtitle': 'Learn about our history, vision, and values',
    'about.history': 'Our History',
    'about.vision': 'Our Vision',
    'about.team': 'Our Team',
    'about.facilities': 'Our Facilities',
    
    // Admissions page
    'admissions.title': 'Admissions',
    'admissions.subtitle': 'Join our community of learners at Darul Quran Abdulla Academy',
    'admissions.info': 'Admissions Information',
    'admissions.process': 'Admission Process',
    'admissions.requirements': 'Requirements',
    'admissions.calendar': 'Admission Calendar',
    'admissions.openText': 'Admissions for the 2025 academic year are now open. Review the information below and apply as soon as possible to secure your spot.',
    'admissions.documents': 'Required Documents',
    'admissions.fees': 'Tuition & Fees',
    'admissions.scholarships': 'Scholarships',
    'admissions.faq': 'FAQ',
    'admissions.contact': 'Contact for Admission',
    
    // Application form
    'application.title': 'Application Form',
    'application.subtitle': 'Apply to study at Darul Quran Abdulla Academy',
    'application.studentInfo': 'Student Information',
    'application.personalInfo': 'Personal Information',
    'application.academicInfo': 'Academic Information',
    'application.contactInfo': 'Contact Information',
    'application.familyInfo': 'Parent/Guardian Information',
    'application.firstName': 'First Name',
    'application.lastName': 'Last Name / Family Name',
    'application.fullNameCapital': 'Name in English Capital Letters',
    'application.gender': 'Gender',
    'application.male': 'Male',
    'application.female': 'Female',
    'application.dateOfBirth': 'Date of Birth',
    'application.dateOfBirthWords': 'Date of Birth (in words)',
    'application.age': 'Age',
    'application.years': 'Years',
    'application.months': 'Months',
    'application.category': 'Student Category',
    'application.religion': 'Religion',
    'application.previousSchool': 'Previous School',
    'application.classApplying': 'Class Applying For',
    'application.motherTongue': 'Mother Tongue',
    'application.medium': 'Preferred Medium',
    'application.birthCertProvided': 'Birth Certificate Provided?',
    'application.parentInfo': 'Parent/Guardian Information',
    'application.parentName': 'Parent/Guardian\'s Name',
    'application.relationship': 'Relationship with Student',
    'application.father': 'Father',
    'application.mother': 'Mother',
    'application.guardian': 'Guardian',
    'application.motherName': 'Mother\'s Name',
    'application.parentOccupation': 'Parent\'s Occupation',
    'application.parentAddress': 'Parent\'s Address',
    'application.guardianInfo': 'Temporary Guardian Information (if applicable)',
    'application.guardianOccupation': 'Temporary Guardian\'s Occupation',
    'application.guardianAddress': 'Temporary Guardian\'s Address',
    'application.confirmation': 'I confirm that all the information provided in this form is true and correct to the best of my knowledge.',
    'application.submit': 'Submit Application',
    'application.submitting': 'Submitting...',
    'application.instructions': 'Important Instructions:',
    'application.fillAccurately': 'Fill in all information accurately.',
    'application.bringPhoto': 'Bring an updated passport-size photograph of the student for verification.',
    'application.originalDocs': 'Original documents must be presented for verification.',
    'application.printForm': 'After online application, you can bring a printout of this form to the Academy.'
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
    'programs.title': 'ഞങ്ങളുടെ പ്രോഗ്രാമുകൾ',
    'programs.description': 'ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി ആധുനിക വിദ്യാഭ്യാസവുമായി ഖുർആൻ പഠനം സംയോജിപ്പിക്കുന്ന സമഗ്രമായ പ്രോഗ്രാമുകൾ വാഗ്ദാനം ചെയ്യുന്നു',
    
    // Academic
    'academic.excellence': 'അക്കാദമിക് മികവ്',
    'academic.approach': 'ഞങ്ങളുടെ സമീപനം',
    'academic.curriculum': 'പാഠ്യപദ്ധതി',
    'academic.faculty': 'ഞങ്ങളുടെ അധ്യാപകർ',
    
    // CTAs
    'cta.apply': 'ഇപ്പോൾ അപേക്ഷിക്കുക',
    'cta.tour': 'വെർച്വൽ കാമ്പസ് ടൂർ',
    'cta.contact': 'ഞങ്ങളെ ബന്ധപ്പെടുക',
    'cta.donate': 'സംഭാവന ചെയ്യുക',
    'cta.learnMore': 'കൂടുതൽ അറിയുക',
    'cta.readMore': 'കൂടുതൽ വായിക്കുക',
    'cta.download': 'ഡൗൺലോഡ്',
    
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
    'contact.getInTouch': 'ബന്ധപ്പെടുക',
    'contact.welcome': 'നിങ്ങളുടെ ചോദ്യങ്ങളും അഭിപ്രായങ്ങളും സ്വാഗതം ചെയ്യുന്നു. ഫോം ഉപയോഗിച്ചോ ചുവടെ പട്ടികപ്പെടുത്തിയിരിക്കുന്ന ഏതെങ്കിലും ബന്ധപ്പെടാനുള്ള മാർഗങ്ങളിലൂടെയോ ഞങ്ങളെ ബന്ധപ്പെടാൻ മടിക്കരുത്.',
    'contact.info': 'ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ',
    'contact.connect': 'ഞങ്ങളുമായി ബന്ധപ്പെടുക',
    
    // Footer
    'footer.rights': 'എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം',
    'footer.address': 'കൂത്താകുന്സി, കൂത്താകുന്സി കടവ്, കേരളം 679501',
    'footer.phone': '+91 95265 52211',
    'footer.email': 'darulquranind@gmail.com',
    'footer.quickLinks': 'ദ്രുത ലിങ്കുകൾ',
    'footer.followUs': 'ഞങ്ങളെ പിന്തുടരുക',
    
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
    
    // Home page
    'home.welcome': 'ഡി.ക്യു.എ.എയിലേക്ക് സ്വാഗതം',
    'home.established': '2014-ൽ സ്ഥാപിതമായ ഡി.ക്യു.എ.എ ഇസ്ലാമിക വിദ്യാഭ്യാസരംഗത്തെ മുൻനിരയിൽ നിൽക്കുന്നത്, പരമ്പരാഗത ഖുർആൻ പഠനവും ആധുനിക അക്കാദമിക പാഠ്യപദ്ധതിയും സംയോജിപ്പിച്ചുകൊണ്ട്. വിദ്യാർഥികളെ ബൗദ്ധികമായും ആത്മീയമായും ധാർമ്മികമായും സമകാലിക ലോകത്തിന്റെ വെല്ലുവിളികളെ നേരിടാൻ വികസിപ്പിക്കുന്നതിന് ഞങ്ങളുടെ സമഗ്രമായ വിദ്യാഭ്യാസ സമീപനം ഊന്നൽ നൽകുന്നു.',
    'home.whyChoose': 'എന്തുകൊണ്ട് ഡി.ക്യു.എ.എ തിരഞ്ഞെടുക്കണം?',
    'home.quranicExcellence': 'ഖുർആൻ മികവ്',
    'home.quranicExcellenceText': 'ശരിയായ തജ്വീദിനൊപ്പം മനസ്സിലാക്കലോടെ മുഴുവൻ ഖുർആനും മനഃപാഠമാക്കാൻ ഞങ്ങളുടെ സമഗ്രമായ ഹിഫ്സ് പ്രോഗ്രാം വിദ്യാർത്ഥികളെ പ്രാപ്തരാക്കുന്നു.',
    'home.academicFocus': 'അക്കാദമിക് ഊന്നൽ',
    'home.academicFocusText': 'ഞങ്ങളുടെ പാഠ്യപദ്ധതി ഇസ്ലാമിക പഠനങ്ങളും ആധുനിക വിഷയങ്ങളും സംയോജിപ്പിക്കുന്നു, വിദ്യാർഥികൾ ആത്മീയ, അക്കാദമിക മേഖലകളിൽ മികവ് പുലർത്തുന്നു.',
    'home.characterDev': 'സ്വഭാവ വികസനം',
    'home.characterDevText': 'ഞങ്ങളുടെ എല്ലാ വിദ്യാർഥികളിലും ഇസ്ലാമിക മൂല്യങ്ങൾ, ധാർമ്മികത, സ്വഭാവം എന്നിവയുടെ വളർച്ചക്ക് ഞങ്ങൾ മുൻഗണന നൽകുന്നു.',
    'home.beginJourney': 'ഡി.ക്യു.എ.എയിലെ നിങ്ങളുടെ യാത്ര ആരംഭിക്കുക',
    'home.joinCommunity': 'അറിവിന്റെയും വിശ്വാസത്തിന്റെയും മികവിന്റെയും പാതയിൽ പുറപ്പെടാൻ ഞങ്ങളുടെ പഠിതാക്കളുടെ സമൂഹത്തിൽ ചേരുക. വരാനിരിക്കുന്ന അക്കാദമിക് വർഷത്തിലേക്കുള്ള അപേക്ഷകൾ ഇപ്പോൾ തുറന്നിരിക്കുന്നു.',
    
    // About page
    'about.title': 'ഞങ്ങളെക്കുറിച്ച്',
    'about.subtitle': 'ഞങ്ങളുടെ ചരിത്രം, ദർശനം, മൂല്യങ്ങൾ എന്നിവയെക്കുറിച്ച് അറിയുക',
    'about.history': 'ഞങ്ങളുടെ ചരിത്രം',
    'about.vision': 'ഞങ്ങളുടെ ദർശനം',
    'about.team': 'ഞങ്ങളുടെ ടീം',
    'about.facilities': 'ഞങ്ങളുടെ സൗകര്യങ്ങൾ',
    
    // Admissions page
    'admissions.title': 'പ്രവേശനം',
    'admissions.subtitle': 'ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലെ വിദ്യാർത്ഥി സമൂഹത്തിൽ ചേരുക',
    'admissions.info': 'പ്രവേശന വിവരങ്ങൾ',
    'admissions.process': 'പ്രവേശന നടപടിക്രമം',
    'admissions.requirements': 'ആവശ്യകതകൾ',
    'admissions.calendar': 'പ്രവേശന കലണ്ടർ',
    'admissions.openText': '2025 അക്കാദമിക് വർഷത്തിലേക്കുള്ള പ്രവേശനം ഇപ്പോൾ തുറന്നിരിക്കുന്നു. താഴെയുള്ള വിവരങ്ങൾ പരിശോധിച്ച് എത്രയും പെട്ടെന്ന് അപേക്ഷിക്കുക.',
    'admissions.documents': 'ആവശ്യമായ രേഖകൾ',
    'admissions.fees': 'ട്യൂഷൻ & ഫീസ്',
    'admissions.scholarships': 'സ്കോളർഷിപ്പുകൾ',
    'admissions.faq': 'പതിവ് ചോദ്യങ്ങൾ',
    'admissions.contact': 'പ്രവേശനത്തിനായി ബന്ധപ്പെടുക',
    
    // Application form
    'application.title': 'അപേക്ഷാ ഫോം',
    'application.subtitle': 'DQAA യിലെ പഠനത്തിനായി അപേക്ഷിക്കുക',
    'application.studentInfo': 'വിദ്യാർത്ഥിയുടെ വിവരങ്ങൾ',
    'application.personalInfo': 'വ്യക്തിഗത വിവരങ്ങൾ',
    'application.academicInfo': 'അക്കാദമിക് വിവരങ്ങൾ',
    'application.contactInfo': 'ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ',
    'application.familyInfo': 'രക്ഷാകർത്താവിന്റെ വിവരങ്ങൾ',
    'application.firstName': 'പേര്',
    'application.lastName': 'അവസാന പേര് / കുടുംബ പേര്',
    'application.fullNameCapital': 'കാപ്പിറ്റൽ അക്ഷരങ്ങളിൽ പേര് (ഇംഗ്ലീഷിൽ)',
    'application.gender': 'ലിംഗം',
    'application.male': 'പുരുഷൻ',
    'application.female': 'സ്ത്രീ',
    'application.dateOfBirth': 'ജനന തീയതി',
    'application.dateOfBirthWords': 'ജനന തീയതി (വാക്കുകളിൽ)',
    'application.age': 'വയസ്സ്',
    'application.years': 'വർഷങ്ങൾ',
    'application.months': 'മാസങ്ങൾ',
    'application.category': 'വിദ്യാർത്ഥി വിഭാഗം',
    'application.religion': 'മതം',
    'application.previousSchool': 'മുൻ സ്കൂളിന്റെ പേര്',
    'application.classApplying': 'പ്രവേശനം ആവശ്യമുള്ള ക്ലാസ്',
    'application.motherTongue': 'മാതൃഭാഷ',
    'application.medium': 'പഠന മാധ്യമം',
    'application.birthCertProvided': 'ജനന സർട്ടിഫിക്കറ്റ് നൽകിയിട്ടുണ്ടോ?',
    'application.parentInfo': 'രക്ഷാകർത്താവിന്റെ വിവരങ്ങൾ',
    'application.parentName': 'രക്ഷാകർത്താവിന്റെ പേര്',
    'application.relationship': 'വിദ്യാർത്ഥിയുമായുള്ള ബന്ധം',
    'application.father': 'പിതാവ്',
    'application.mother': 'മാതാവ്',
    'application.guardian': 'രക്ഷാകർത്താവ്',
    'application.motherName': 'മാതാവിന്റെ പേര്',
    'application.parentOccupation': 'രക്ഷാകർത്താവിന്റെ തൊഴിൽ',
    'application.parentAddress': 'രക്ഷാകർത്താവിന്റെ വിലാസം',
    'application.guardianInfo': 'താൽക്കാലിക രക്ഷാകർത്താവിന്റെ വിവരങ്ങൾ (ആവശ്യമെങ്കിൽ)',
    'application.guardianOccupation': 'താൽക്കാലിക രക്ഷാകർത്താവിന്റെ തൊഴിൽ',
    'application.guardianAddress': 'താൽക്കാലിക രക്ഷാകർത്താവിന്റെ വിലാസം',
    'application.confirmation': 'ഈ ഫോമിൽ നൽകിയിരിക്കുന്ന എല്ലാ വിവരങ്ങളും എന്റെ അറിവിൽ സത്യവും കൃത്യവുമാണെന്ന് ഞാൻ സ്ഥിരീകരിക്കുന്നു.',
    'application.submit': 'അപേക്ഷ സമർപ്പിക്കുക',
    'application.submitting': 'സമർപ്പിക്കുന്നു...',
    'application.instructions': 'പ്രധാന നിർദ്ദേശങ്ങൾ:',
    'application.fillAccurately': 'എല്ലാ വിവരങ്ങളും കൃത്യമായി പൂരിപ്പിക്കുക.',
    'application.bringPhoto': 'സ്വീകരണത്തിനായി വിദ്യാർത്ഥിയുടെ നവീനമായ പാസ്പോർട്ട് വലിപ്പത്തിലുള്ള ഫോട്ടോ കൊണ്ടുവരിക.',
    'application.originalDocs': 'എല്ലാ ആവശ്യമായ രേഖകളുടെയും അസൽ നേരിട്ട് കാണിക്കേണ്ടതാണ്.',
    'application.printForm': 'ഓൺലൈൻ അപേക്ഷയ്ക്ക് ശേഷം, ഫോമിന്റെ പ്രിന്റ് എടുത്ത് നിങ്ങൾക്ക് അക്കാദമിയിലേക്ക് കൊണ്ടുവരാവുന്നതാണ്.'
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
