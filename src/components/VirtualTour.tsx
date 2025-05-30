
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Play, Pause, RotateCw, ZoomIn, ZoomOut } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface TourStop {
  id: string;
  title: string;
  titleMl: string;
  description: string;
  descriptionMl: string;
  image: string;
  category: string;
  categoryMl: string;
}

const VirtualTour = () => {
  const [currentStop, setCurrentStop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const tourStops: TourStop[] = [
    {
      id: "main-entrance",
      title: "Main Entrance",
      titleMl: "പ്രധാന കവാടം",
      description: "Welcome to Darul Quran Abdulla Academy. Our main entrance showcases traditional Islamic architecture.",
      descriptionMl: "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലേക്ക് സ്വാഗതം. ഞങ്ങളുടെ പ്രധാന കവാടം പരമ്പരാഗത ഇസ്ലാമിക് വാസ്തുവിദ്യ പ്രദർശിപ്പിക്കുന്നു.",
      image: "/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png",
      category: "Infrastructure",
      categoryMl: "അടിസ്ഥാന സൗകര്യങ്ങൾ"
    },
    {
      id: "prayer-hall",
      title: "Prayer Hall",
      titleMl: "പ്രാർത്ഥനാ ഹാൾ",
      description: "Our spacious prayer hall accommodates the entire academy community for daily prayers and special occasions.",
      descriptionMl: "ഞങ്ങളുടെ വിശാലമായ പ്രാർത്ഥനാ ഹാൾ ദൈനംദിന പ്രാർത്ഥനകൾക്കും പ്രത്യേക അവസരങ്ങൾക്കുമായി മുഴുവൻ അക്കാദമി സമൂഹത്തെയും ഉൾക്കൊള്ളുന്നു.",
      image: "/lovable-uploads/4131c2be-ede7-4928-9d02-7936cb9b4804.png",
      category: "Religious",
      categoryMl: "മതപരം"
    },
    {
      id: "library",
      title: "Digital Library",
      titleMl: "ഡിജിറ്റൽ ലൈബ്രറി",
      description: "State-of-the-art digital library with extensive collection of Islamic texts and modern educational resources.",
      descriptionMl: "ഇസ്ലാമിക് ഗ്രന്ഥങ്ങളുടെയും ആധുനിക വിദ്യാഭ്യാസ വിഭവങ്ങളുടെയും വിപുലമായ ശേഖരമുള്ള അത്യാധുനിക ഡിജിറ്റൽ ലൈബ്രറി.",
      image: "/lovable-uploads/26f01633-775e-480a-b72c-f85de1f96e1a.png",
      category: "Academic",
      categoryMl: "അക്കാദമിക്"
    },
    {
      id: "classrooms",
      title: "Smart Classrooms",
      titleMl: "സ്മാർട് ക്ലാസ്റൂമുകൾ",
      description: "Modern classrooms equipped with smart boards and digital learning tools for enhanced education.",
      descriptionMl: "മെച്ചപ്പെട്ട വിദ്യാഭ്യാസത്തിനായി സ്മാർട് ബോർഡുകളും ഡിജിറ്റൽ പഠന ഉപകരണങ്ങളും കൊണ്ട് സജ്ജീകരിച്ച ആധുനിക ക്ലാസ് മുറികൾ.",
      image: "/lovable-uploads/bc411243-163d-496a-a8c0-9941b27e5b3c.png",
      category: "Academic",
      categoryMl: "അക്കാദമിക്"
    }
  ];

  const nextStop = () => {
    setCurrentStop((prev) => (prev + 1) % tourStops.length);
  };

  const prevStop = () => {
    setCurrentStop((prev) => (prev - 1 + tourStops.length) % tourStops.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dqaa-500 mb-4">
            {isMalayalam ? "വെർച്ച്വൽ ക്യാമ്പസ് ടൂർ" : "Virtual Campus Tour"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {isMalayalam ? 
              "ഞങ്ങളുടെ മനോഹരമായ കാമ്പസിലൂടെ വെർച്ച്വൽ യാത്ര നടത്തുക" :
              "Take a virtual journey through our beautiful campus facilities"
            }
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main View */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="relative h-96 bg-gray-900">
                  <img 
                    src={tourStops[currentStop].image}
                    alt={isMalayalam ? tourStops[currentStop].titleMl : tourStops[currentStop].title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{ transform: `scale(${zoom})` }}
                  />
                  
                  {/* Tour Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" onClick={prevStop}>
                        ← {isMalayalam ? "മുമ്പത്തെ" : "Previous"}
                      </Button>
                      <Button size="sm" variant="secondary" onClick={togglePlay}>
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        {isPlaying ? (isMalayalam ? "നിർത്തുക" : "Pause") : (isMalayalam ? "കളിക്കുക" : "Play")}
                      </Button>
                      <Button size="sm" variant="secondary" onClick={nextStop}>
                        {isMalayalam ? "അടുത്തത്" : "Next"} →
                      </Button>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}>
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" onClick={() => setZoom(Math.min(2, zoom + 0.1))}>
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" onClick={() => setZoom(1)}>
                        <RotateCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Location Indicator */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{currentStop + 1} / {tourStops.length}</span>
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">
                      {isMalayalam ? tourStops[currentStop].categoryMl : tourStops[currentStop].category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-dqaa-500 mb-3">
                    {isMalayalam ? tourStops[currentStop].titleMl : tourStops[currentStop].title}
                  </h3>
                  <p className="text-gray-600">
                    {isMalayalam ? tourStops[currentStop].descriptionMl : tourStops[currentStop].description}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tour Navigation */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dqaa-500 mb-4">
                {isMalayalam ? "ടൂർ സ്റ്റോപ്പുകൾ" : "Tour Stops"}
              </h3>
              {tourStops.map((stop, index) => (
                <Card 
                  key={stop.id}
                  className={`cursor-pointer transition-all ${
                    index === currentStop ? 'ring-2 ring-dqaa-500 bg-dqaa-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setCurrentStop(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
                        <img 
                          src={stop.image}
                          alt={isMalayalam ? stop.titleMl : stop.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">
                          {isMalayalam ? stop.titleMl : stop.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {isMalayalam ? stop.categoryMl : stop.category}
                        </p>
                      </div>
                      {index === currentStop && (
                        <div className="w-2 h-2 bg-dqaa-500 rounded-full"></div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
