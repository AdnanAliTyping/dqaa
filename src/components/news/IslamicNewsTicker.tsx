
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, MessageCircle, Send } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface NewsItem {
  id: string;
  text: string;
  timestamp: Date;
  type: 'announcement' | 'event' | 'celebration';
}

const IslamicNewsTicker = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [newsItems] = useState<NewsItem[]>([
    {
      id: '1',
      text: isMalayalam ? 
        "🌙 ജൂൺ 7 കേരളത്തിൽ ബക്രീദ് ആഘോഷിക്കും. അറഫാ ദിനം ജൂൺ 6. ധുൽഹിജ്ജ മാസം മെയ് 29 തുടങ്ങും." :
        "🌙 Eid al-Adha will be celebrated in Kerala on June 7. Arafah Day is June 6. Dhul-Hijjah begins May 29.",
      timestamp: new Date(),
      type: 'celebration'
    },
    {
      id: '2', 
      text: isMalayalam ?
        "📢 സയ്യിദ് ജിഫ്രി മുത്തുകോയ തങ്ങൾ ഉൾപ്പെടുള്ള പ്രമുഖ ഖാസികളുടെ പ്രഖ്യാപനം." :
        "📢 Announcement by leading Qazis including Sayyid Jifri Muthukoya Thangal and others.",
      timestamp: new Date(),
      type: 'announcement'
    },
    {
      id: '3',
      text: isMalayalam ?
        "🎓 2025-26 പ്രവേശനത്തിന് അപേക്ഷിക്കാം. ഹിഫ്സ്, ശരീഅത്, ഡിപ്ലോമ പ്രോഗ്രാമുകൾ." :
        "🎓 Admissions open for 2025-26. Hifz, Shari'ah, and Diploma programs available.",
      timestamp: new Date(),
      type: 'event'
    },
    {
      id: '4',
      text: isMalayalam ?
        "🕌 റമദാൻ മാസം മാർച്ച് 1 തുടങ്ങും (പ്രാഥമിക കണക്കുകൂട്ടൽ പ്രകാരം)." :
        "🕌 Ramadan month expected to begin March 1 (preliminary calculations).",
      timestamp: new Date(),
      type: 'announcement'
    }
  ]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const animate = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5;
      }
    };
    
    const interval = setInterval(animate, 20);
    return () => clearInterval(interval);
  }, []);

  const shareNews = (item: NewsItem, platform: 'whatsapp' | 'telegram') => {
    const text = encodeURIComponent(`${item.text}\n\n- Darul Quran Abdulla Academy`);
    const url = platform === 'whatsapp' 
      ? `https://wa.me/?text=${text}`
      : `https://t.me/share/url?text=${text}`;
    
    window.open(url, '_blank');
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'celebration': return 'bg-green-500';
      case 'announcement': return 'bg-blue-500';  
      case 'event': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 sticky top-16 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex items-center mr-4 shrink-0">
            <Badge className="bg-white text-green-600 font-semibold mr-2">
              {isMalayalam ? "ഇസ്ലാമിക് വാർത്തകൾ" : "Islamic News"}
            </Badge>
            <div className="h-2 w-2 bg-red-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex space-x-8 whitespace-nowrap overflow-hidden"
              style={{ scrollBehavior: 'auto' }}
            >
              {[...newsItems, ...newsItems].map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex items-center space-x-3 shrink-0">
                  <span className="text-sm md:text-base">{item.text}</span>
                  <div className="flex space-x-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 text-white hover:bg-white/20"
                      onClick={() => shareNews(item, 'whatsapp')}
                    >
                      <MessageCircle className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 text-white hover:bg-white/20"
                      onClick={() => shareNews(item, 'telegram')}
                    >
                      <Send className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicNewsTicker;
