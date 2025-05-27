
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useEffect, useRef } from "react";
import EnrollmentPopup from "./EnrollmentPopup";

const MobileHeroSection = () => {
  const { t, currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Set up scrolling animation for announcements
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const animateScroll = () => {
      if (!scrollContainer) return;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };
    
    const scrollInterval = setInterval(animateScroll, 30);
    
    return () => clearInterval(scrollInterval);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-dqaa-900 via-dqaa-800 to-dqaa-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(234,179,8,0.1)_0%,transparent_50%)]"></div>
        </div>
        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 text-center">
        <div className="max-w-lg mx-auto">
          <div className="mb-6">
            <div className="h-1 w-16 bg-gold-400 mx-auto mb-4"></div>
            <span className="text-gold-400 font-medium text-sm">Since 2014</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight">
            {isMalayalam ? 
              <>ഇസ്‌ലാമിക് & ആധുനിക <span className="text-gold-400">വിദ്യാഭ്യാസ</span> മികവ്</> : 
              <>Excellence in <span className="text-gold-400">Islamic</span> & Modern Education</>
            }
          </h1>
          
          <div className="text-lg mb-4 text-white/90 font-arabic">
            أكاديمية عبد الله لتحفيظ القران
          </div>
          
          <p className="text-base text-white/80 mb-8 leading-relaxed">
            {isMalayalam ? 
              "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി പരമ്പരാഗത ഇസ്ലാമിക വിജ്ഞാനവും സമകാലീന അക്കാദമിക മികവും ഫോർ ലാംഗ്വേജ് സമീപനവുമായി സമന്വയിപ്പിക്കുന്നു." : 
              "Darul Quran Abdulla Academy offers a unique blend of traditional Islamic knowledge and contemporary academic excellence."
            }
          </p>
          
          <div className="space-y-4">
            <EnrollmentPopup>
              <Button size="lg" className="bg-gold-400 hover:bg-gold-500 text-dqaa-900 font-medium w-full sm:w-auto">
                {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
              </Button>
            </EnrollmentPopup>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              <span className="flex items-center justify-center">
                {isMalayalam ? "കൂടുതൽ അറിയുക" : "Learn More"} 
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* News Announcements Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gold-400/95 py-3 px-4">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="text-dqaa-900 font-semibold mr-3 text-sm shrink-0">
              {isMalayalam ? "പ്രധാന അറിയിപ്പ്:" : "Latest:"}
            </div>
            <div className="text-dqaa-900 flex-1 overflow-hidden">
              <div 
                ref={scrollRef}
                className="whitespace-nowrap news-ticker text-sm"
              >
                <span className="mr-8">🎉 Congratulations to our Hifz & Shari'ah Annual Exam Toppers 2025! </span>
                <span className="mr-8">🎓 100% SSLC Result Achieved, Alhamdulillah! </span>
                <span className="mr-8">📢 2025 Admission Orientation Program on May 14, 2025 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;
