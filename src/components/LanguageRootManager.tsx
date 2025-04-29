
import { useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

/**
 * A component that sets the lang attribute on the HTML element
 * and adds appropriate classes based on the current language selection
 */
const LanguageRootManager = () => {
  const { currentLanguage } = useTranslation();
  
  useEffect(() => {
    // Set the lang attribute on the HTML element
    document.documentElement.lang = currentLanguage;
    
    // Add/remove language-specific classes for styling
    if (currentLanguage === 'ml') {
      document.documentElement.classList.add('lang-ml');
    } else {
      document.documentElement.classList.remove('lang-ml');
    }
  }, [currentLanguage]);
  
  return null; // This component doesn't render anything
};

export default LanguageRootManager;
