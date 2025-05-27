
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useTranslation } from "@/lib/i18n";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showBanner, setShowBanner] = useState(true);
  const { t } = useTranslation();
  
  // Check localStorage on component mount
  useEffect(() => {
    const bannerClosed = localStorage.getItem("admissionsBannerClosed");
    if (bannerClosed === "true") {
      setShowBanner(false);
    }
    
    // Load and initialize chatbot
    const chatbotScript = document.getElementById('jotform-chatbot-script');
    if (!chatbotScript) {
      const script = document.createElement('script');
      script.id = 'jotform-chatbot-script';
      script.src = 'https://cdn.jotfor.ms/agent/embedjs/0196e3af04ac72f5b01cd236ac7d650598fd/embed.js?skipWelcome=1&maximizable=1';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
    localStorage.setItem("admissionsBannerClosed", "true");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {showBanner && (
        <div className="bg-gold-400 text-dqaa-900 py-2 px-4 text-center relative z-50">
          <div className="container mx-auto flex justify-center items-center flex-wrap">
            <Link to="/admissions/apply" className="flex items-center justify-center w-full">
              <span className="font-medium mr-2 text-sm md:text-base">{t('admissions.open')}</span>
              <Button variant="secondary" size="sm" className="text-xs sm:text-sm my-1 bg-dqaa-900 text-white hover:bg-dqaa-700">
                {t('cta.apply')}
              </Button>
            </Link>
          </div>
          <button 
            onClick={closeBanner}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-dqaa-900 hover:text-dqaa-700 touch-target"
            aria-label="Close banner"
          >
            <X size={18} />
          </button>
        </div>
      )}
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
