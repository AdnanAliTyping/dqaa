
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipNavigation from "./accessibility/SkipNavigation";
import { Button } from "./ui/button";
import { useTranslation } from "@/lib/i18n";
import { useAccessibility } from "@/hooks/useAccessibility";
import PWAManager from "./pwa/PWAManager";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showBanner, setShowBanner] = useState(true);
  const { t } = useTranslation();
  const { announceRef } = useAccessibility();
  
  // Check localStorage on component mount
  useEffect(() => {
    const bannerClosed = localStorage.getItem("admissionsBannerClosed");
    if (bannerClosed === "true") {
      setShowBanner(false);
    }
    
    // Load and initialize chatbot with optimized settings
    const chatbotScript = document.getElementById('jotform-chatbot-script');
    if (!chatbotScript) {
      const script = document.createElement('script');
      script.id = 'jotform-chatbot-script';
      script.src = 'https://cdn.jotfor.ms/agent/embedjs/0196e3af04ac72f5b01cd236ac7d650598fd/embed.js?skipWelcome=1&maximizable=1';
      script.async = true;
      script.defer = true;
      script.loading = 'lazy';
      document.body.appendChild(script);
    }
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
    localStorage.setItem("admissionsBannerClosed", "true");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SkipNavigation />
      <PWAManager />
      
      {/* Screen reader announcements */}
      <div
        ref={announceRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      {showBanner && (
        <div 
          className="bg-gradient-to-r from-gold-400 to-yellow-400 text-dqaa-900 py-2 px-4 text-center relative z-50"
          role="banner"
          aria-label="Admissions announcement"
        >
          <div className="container mx-auto flex justify-center items-center flex-wrap">
            <Link 
              to="/admissions/apply" 
              className="flex items-center justify-center w-full"
              aria-label="Apply for admissions - banner link"
            >
              <span className="font-medium mr-2 text-sm md:text-base animate-pulse">
                🎓 {t('admissions.open')} 2025-26
              </span>
              <Button 
                variant="secondary" 
                size="sm" 
                className="text-xs sm:text-sm my-1 bg-dqaa-900 text-white hover:bg-dqaa-700 shadow-md"
                aria-label="Apply now button"
              >
                {t('cta.apply')}
              </Button>
            </Link>
          </div>
          <button 
            onClick={closeBanner}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-dqaa-900 hover:text-dqaa-700 touch-target focus:ring-2 focus:ring-dqaa-700 focus:outline-none rounded p-1"
            aria-label="Close admissions banner"
          >
            <X size={18} />
          </button>
        </div>
      )}
      
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>
      
      <main 
        id="main-content"
        className="flex-grow"
        role="main"
        tabIndex={-1}
        aria-label="Main content"
      >
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
