
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import OptimizedImage from "../OptimizedImage";

interface Photo {
  id: number;
  src: string;
  alt: string;
  altMl: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/lovable-uploads/b0d00e17-fe67-4c2c-a8c7-40a656f9ba8b.png",
    alt: "DQAA Campus View",
    altMl: "ഡിക്യുഎഎ കാമ്പസ് വ്യൂ"
  },
  {
    id: 2,
    src: "/lovable-uploads/20beacd9-1d35-4320-8d62-7e692d1d87f8.png",
    alt: "Students in Classroom",
    altMl: "ക്ലാസ് മുറിയിലെ വിദ്യാർത്ഥികൾ"
  },
  {
    id: 3,
    src: "/lovable-uploads/6e00de77-1336-4817-a316-c95201b7f215.png",
    alt: "Quran Learning Session",
    altMl: "ഖുർആൻ പഠന സെഷൻ"
  },
  {
    id: 4,
    src: "/lovable-uploads/a2f070ed-14a0-4e70-8632-82409e0f0d9f.png",
    alt: "Students in Prayer Hall",
    altMl: "പ്രാർത്ഥനാ ഹാളിലെ വിദ്യാർത്ഥികൾ"
  },
  {
    id: 5,
    src: "/lovable-uploads/1cb02af0-56d3-4ba3-943b-c66d712fd241.png",
    alt: "Group Study Session",
    altMl: "ഗ്രൂപ്പ് പഠന സെഷൻ"
  }
];

const PhotoGallery = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextPhoto = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            {isMalayalam ? "കാമ്പസ് ഗാലറി" : "Campus Gallery"}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isMalayalam 
              ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലെ ജീവിതത്തിന്റെ അനുഭവങ്ങൾ"
              : "Experience life at Darul Quran Abdulla Academy"
            }
          </p>
        </div>
        
        <div className={`max-w-5xl mx-auto ${isFullScreen ? 'fixed inset-0 z-50 bg-black flex items-center justify-center p-4' : ''}`}>
          <Card className={`overflow-hidden ${isFullScreen ? 'w-full h-full max-w-6xl' : ''}`}>
            <div className="relative">
              <div className={`${isFullScreen ? 'h-[80vh]' : 'h-[50vh] md:h-[60vh]'} overflow-hidden bg-black flex items-center`}>
                <OptimizedImage
                  src={photos[activeIndex].src}
                  alt={isMalayalam ? photos[activeIndex].altMl : photos[activeIndex].alt}
                  className="w-full h-full object-contain"
                  priority={activeIndex === 0}
                />
                
                <button 
                  onClick={prevPhoto}
                  className="absolute left-4 bg-white/80 hover:bg-white p-2 rounded-full"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5 text-dqaa-500" />
                </button>
                
                <button 
                  onClick={nextPhoto}
                  className="absolute right-4 bg-white/80 hover:bg-white p-2 rounded-full"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5 text-dqaa-500" />
                </button>
                
                <button 
                  onClick={toggleFullScreen}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full"
                  aria-label="Toggle fullscreen"
                >
                  <Maximize className="h-5 w-5 text-dqaa-500" />
                </button>
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-white/50'}`}
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {!isFullScreen && (
              <CardContent className="py-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 font-medium">
                    {isMalayalam ? photos[activeIndex].altMl : photos[activeIndex].alt}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {activeIndex + 1} / {photos.length}
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
        
        {!isFullScreen && (
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-5 gap-2">
              {photos.map((photo, index) => (
                <div 
                  key={photo.id} 
                  className={`h-16 md:h-24 overflow-hidden rounded-md cursor-pointer border-2 ${activeIndex === index ? 'border-dqaa-500' : 'border-transparent'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <OptimizedImage
                    src={photo.src}
                    alt={isMalayalam ? photo.altMl : photo.alt}
                    className="w-full h-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {isFullScreen && (
          <Button 
            variant="secondary" 
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
            onClick={toggleFullScreen}
          >
            {isMalayalam ? "ഗാലറി അടയ്ക്കുക" : "Close Gallery"}
          </Button>
        )}
        
        {!isFullScreen && (
          <div className="text-center mt-8">
            <a 
              href="https://photos.app.goo.gl/3Z2jXKmvjhRpNAhKA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="border-dqaa-500 text-dqaa-500 hover:bg-dqaa-50">
                {isMalayalam ? "കൂടുതൽ ഫോട്ടോകൾ കാണുക" : "View More Photos"}
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
