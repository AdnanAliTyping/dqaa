
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Download, Share2, Heart, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import { Helmet } from "react-helmet-async";

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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareText,
          url: shareUrl,
          text: shareText
        });
      } catch (error) {
        console.log('Error sharing:', error);
        handleFallbackShare();
      }
    } else {
      handleFallbackShare();
    }
  };

  const handleFallbackShare = () => {
    navigator.clipboard.writeText(shareUrl);
    alert(isMalayalam ? 'ലിങ്ക് കോപ്പി ചെയ്തു!' : 'Link copied to clipboard!');
  };

  const handleWhatsAppShare = () => {
    const whatsappText = `${shareText}\n\n${shareUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(whatsappText)}`, '_blank');
  };

  const handleDownload = () => {
    // Create a canvas element to generate an image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 1000;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#059669');
    gradient.addColorStop(0.5, '#10b981');
    gradient.addColorStop(1, '#047857');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text content
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('عيد مبارك', canvas.width / 2, 200);

    ctx.fillStyle = 'white';
    ctx.font = 'bold 36px Arial';
    ctx.fillText(isMalayalam ? 'ഈദുൽ അദ്ഹാ മുബാറക്!' : 'Eid Al-Adha Mubarak!', canvas.width / 2, 300);

    ctx.font = '24px Arial';
    const message = isMalayalam 
      ? 'ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി'
      : 'Darul Quran Abdulla Academy';
    ctx.fillText(message, canvas.width / 2, 800);

    // Download the image
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `eid-greeting-${isMalayalam ? 'malayalam' : 'english'}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    });
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.3)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center items-center text-white">
          {/* Islamic Decorative Elements */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center space-x-4">
              <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
              <div className="text-6xl">🌙</div>
              <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Arabic Calligraphy */}
          <div className="text-6xl md:text-8xl mb-8 text-yellow-400 font-bold tracking-wider">
            عيد مبارك
          </div>

          {/* Main Greeting */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center leading-tight">
            {isMalayalam ? "ഈദുൽ അദ്ഹാ മുബാറക്!" : "Eid Al-Adha Mubarak!"}
          </h1>

          {/* Message */}
          <div className="max-w-4xl text-center mb-8">
            <p className="text-white/90 leading-relaxed text-lg md:text-xl mb-6">
              {isMalayalam 
                ? "ഈ അനുഗ്രഹീതമായ അവസരം നിങ്ങൾക്കും നിങ്ങളുടെ കുടുംബത്തിനും സമാധാനവും സന്തോഷവും സമൃദ്ധിയും കൊണ്ടുവരട്ടെ. ത്യാഗത്തിന്റെയും ഭക്തിയുടെയും ആത്മാവ് ആഘോഷിക്കുമ്പോൾ, DQAA ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിൽ യുവമനസ്സുകളെ വളർത്തുന്നത് തുടരുന്നു."
                : "May this blessed occasion bring peace, joy, and prosperity to you and your family. As we celebrate the spirit of sacrifice and devotion, DQAA continues to nurture young minds in Islamic knowledge and values."
              }
            </p>
          </div>

          {/* Academy Branding */}
          <div className="mb-8 text-center">
            <div className="text-sm text-white/70 flex items-center justify-center mb-2">
              <span className="mr-2">🕌</span>
              {isMalayalam ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി" : "Darul Quran Abdulla Academy"}
              <span className="ml-2">🕌</span>
            </div>
            <div className="text-xs text-white/60">
              {isMalayalam ? "കൂത്താകുന്സി, കേരളം" : "Koothakunsi, Kerala"}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsAppShare}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 hover:scale-105 px-6 py-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {isMalayalam ? "WhatsApp ൽ പങ്കിടുക" : "Share on WhatsApp"}
            </Button>
            
            <Button
              onClick={handleShare}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 hover:scale-105 px-6 py-3"
            >
              <Share2 className="w-5 h-5 mr-2" />
              {isMalayalam ? "പങ്കിടുക" : "Share"}
            </Button>

            <Button
              onClick={handleDownload}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-medium rounded-lg backdrop-blur-sm transition-all duration-200 px-6 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              {isMalayalam ? "ഡൗൺലോഡ്" : "Download"}
            </Button>
          </div>

          {/* Language Toggle */}
          <div className="mt-8">
            <Button
              onClick={() => {
                const newLang = isMalayalam ? 'en' : 'ml';
                setLanguage(newLang);
                window.history.replaceState(null, '', `?lang=${newLang}`);
              }}
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              {isMalayalam ? "Switch to English" : "മലയാളത്തിലേക്ക് മാറുക"}
            </Button>
          </div>

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
