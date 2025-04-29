
import { useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

/**
 * A component that sets the lang attribute on the HTML element
 * based on the current language selection
 */
const LanguageRootManager = () => {
  const { currentLanguage } = useTranslation();
  
  useEffect(() => {
    // Set the lang attribute on the HTML element
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);
  
  return null; // This component doesn't render anything
};

export default LanguageRootManager;
