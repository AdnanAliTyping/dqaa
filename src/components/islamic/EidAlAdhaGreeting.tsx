
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Heart, Star, ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { shouldShowEidGreeting, markEidGreetingShown } from "@/utils/islamicDates";
import { Link } from "react-router-dom";

const EidAlAdhaGreeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  useEffect(() => {
    // Show popup after 3 seconds if it should be shown
    const timer = setTimeout(() => {
      if (shouldShowEidGreeting()) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    markEidGreetingShown();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogOverlay className="bg-black/60 backdrop-blur-sm" />
      <DialogContent className="max-w-md mx-auto border-0 bg-transparent p-0 shadow-none">
        <div className="relative overflow-hidden rounded-apple-xl bg-gradient-to-br from-emerald-500/95 via-emerald-600/95 to-emerald-700/95 backdrop-blur-apple border border-white/20 shadow-apple-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.3)_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 ease-apple"
            aria-label="Close Eid greeting"
          >
            <X size={16} />
          </button>

          {/* Content */}
          <div className="relative z-10 p-8 text-center text-white">
            {/* Islamic Decorative Elements */}
            <div className="flex justify-center items-center mb-6">
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-gold-400 animate-pulse-soft" />
                <div className="text-3xl">🌙</div>
                <Star className="w-6 h-6 text-gold-400 animate-pulse-soft animation-delay-500" />
              </div>
            </div>

            {/* Arabic Calligraphy */}
            <div className="text-4xl font-arabic mb-4 text-gold-400 font-bold tracking-wider">
              عيد مبارك
            </div>

            {/* Main Greeting */}
            <h2 className="text-2xl font-bold mb-4 leading-tight">
              {isMalayalam ? "ഈദുൽ അദ്ഹാ മുബാറക്!" : "Eid Al-Adha Mubarak!"}
            </h2>

            {/* Message */}
            <p className="text-white/90 leading-relaxed mb-6 text-sm">
              {isMalayalam 
                ? "ഈ അനുഗ്രഹീതമായ അവസരം നിങ്ങൾക്കും നിങ്ങളുടെ കുടുംബത്തിനും സമാധാനവും സന്തോഷവും സമൃദ്ധിയും കൊണ്ടുവരട്ടെ. ത്യാഗത്തിന്റെയും ഭക്തിയുടെയും ആത്മാവ് ആഘോഷിക്കുമ്പോൾ, DQAA ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിൽ യുവമനസ്സുകളെ വളർത്തുന്നത് തുടരുന്നു."
                : "May this blessed occasion bring peace, joy, and prosperity to you and your family. As we celebrate the spirit of sacrifice and devotion, DQAA continues to nurture young minds in Islamic knowledge and values."
              }
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="bg-white text-emerald-700 hover:bg-white/90 font-semibold rounded-apple shadow-apple transition-all duration-200 ease-apple hover:scale-[1.02]"
                onClick={handleClose}
              >
                <Link to="/academic-programs" className="flex items-center justify-center">
                  <Heart className="w-4 h-4 mr-2" />
                  {isMalayalam ? "ഞങ്ങളുടെ പ്രോഗ്രാമുകൾ" : "Our Programs"}
                </Link>
              </Button>

              <Button
                asChild
                className="bg-gold-500 hover:bg-gold-600 text-emerald-900 font-semibold rounded-apple shadow-apple transition-all duration-200 ease-apple hover:scale-[1.02]"
                onClick={handleClose}
              >
                <Link to={`/eid-greeting?lang=${isMalayalam ? 'ml' : 'en'}`} className="flex items-center justify-center" target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {isMalayalam ? "ഗ്രീറ്റിംഗ് കാർഡ്" : "View Card"}
                </Link>
              </Button>
              
              <Button
                variant="outline"
                onClick={handleClose}
                className="border-2 border-white/30 text-white hover:bg-white/10 font-medium rounded-apple backdrop-blur-sm transition-all duration-200 ease-apple"
              >
                {isMalayalam ? "നന്ദി" : "Thank You"}
              </Button>
            </div>

            {/* Decorative Bottom */}
            <div className="mt-6 flex justify-center">
              <div className="text-xs text-white/70 flex items-center">
                <span className="mr-1">🕌</span>
                {isMalayalam ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി" : "Darul Quran Abdulla Academy"}
                <span className="ml-1">🕌</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EidAlAdhaGreeting;
