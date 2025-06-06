
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Heart } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { Helmet } from "react-helmet-async";
import { useEidShare } from "@/hooks/useEidShare";
import EidGreetingBackground from "@/components/eid/EidGreetingBackground";
import IslamicDecorativeElements from "@/components/eid/IslamicDecorativeElements";
import ArabicCalligraphy from "@/components/eid/ArabicCalligraphy";
import EidGreetingMessage from "@/components/eid/EidGreetingMessage";
import AcademyBranding from "@/components/eid/AcademyBranding";
import EidActionButtons from "@/components/eid/EidActionButtons";

const EidGreetingPage = () => {
  const [searchParams] = useSearchParams();
  const { currentLanguage, setLanguage } = useTranslation();
  const [mounted, setMounted] = useState(false);
  
  // Get language from URL params if provided
  const langParam = searchParams.get('lang');
  const isMalayalam = langParam === 'ml' || currentLanguage === 'ml';
  
  useEffect(() => {
    if (langParam && (langParam === 'en' || langParam === 'ml')) {
      setLanguage(langParam as 'en' | 'ml');
    }
    setMounted(true);
  }, [langParam, setLanguage]);

  const shareUrl = `${window.location.origin}/eid-greeting?lang=${isMalayalam ? 'ml' : 'en'}`;
  const shareText = isMalayalam 
    ? "ഈദുൽ അദ്ഹാ മുബാറക്! ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയുടെ ഈദ് ആശംസകൾ"
    : "Eid Al-Adha Mubarak! Warm wishes from Darul Quran Abdulla Academy";

  const { handleShare, handleWhatsAppShare, handleDownload } = useEidShare({
    isMalayalam,
    shareUrl
  });

  const handleLanguageToggle = () => {
    const newLang = isMalayalam ? 'en' : 'ml';
    setLanguage(newLang);
    window.history.replaceState(null, '', `?lang=${newLang}`);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{isMalayalam ? 'ഈദുൽ അദ്ഹാ മുബാറക് - ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി' : 'Eid Al-Adha Mubarak - Darul Quran Abdulla Academy'}</title>
        <meta name="description" content={shareText} />
        <meta property="og:title" content={shareText} />
        <meta property="og:description" content={isMalayalam ? 'DQAA കുടുംബത്തിൽ നിന്നുള്ള ഈദ് ആശംസകൾ' : 'Eid wishes from the DQAA family'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 relative overflow-hidden">
        <EidGreetingBackground />

        <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center items-center text-white">
          <div className="mb-8">
            <IslamicDecorativeElements size="large" />
          </div>

          <ArabicCalligraphy size="large" />

          <EidGreetingMessage isMalayalam={isMalayalam} size="large" />

          <AcademyBranding isMalayalam={isMalayalam} />

          <EidActionButtons
            isMalayalam={isMalayalam}
            onWhatsAppShare={handleWhatsAppShare}
            onShare={handleShare}
            onDownload={handleDownload}
            onLanguageToggle={handleLanguageToggle}
          />

          {/* Decorative Hearts */}
          <div className="flex justify-center mt-8 space-x-2">
            <Heart className="w-4 h-4 text-yellow-400 animate-pulse" />
            <Heart className="w-4 h-4 text-yellow-400 animate-pulse" />
            <Heart className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EidGreetingPage;
