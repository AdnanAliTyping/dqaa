
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw, Maximize, Play, Pause } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface VirtualTourProps {
  scenes: {
    id: string;
    title: string;
    image: string;
    description: string;
    hotspots?: Array<{
      x: number;
      y: number;
      label: string;
      nextScene?: string;
    }>;
  }[];
}

const VirtualTourEnhanced = ({ scenes }: VirtualTourProps) => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [currentScene, setCurrentScene] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
  };

  const prevScene = () => {
    setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const scene = scenes[currentScene];

  return (
    <section className="py-12 bg-gradient-to-br from-dqaa-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            {isMalayalam ? "വെർച്വൽ കാമ്പസ് ടൂർ" : "Virtual Campus Tour"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isMalayalam ? 
              "ഞങ്ങളുടെ അഴകിയ കാമ്പസിന്റെ 360° വ്യൂ ആസ്വദിക്കുക" : 
              "Experience our beautiful campus with immersive 360° views"
            }
          </p>
        </div>

        <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl">
          <div className="relative h-96 md:h-[600px] bg-black">
            <img
              src={scene.image}
              alt={scene.title}
              className="w-full h-full object-cover"
            />
            
            {/* Hotspots */}
            {scene.hotspots?.map((hotspot, index) => (
              <button
                key={index}
                className="absolute w-4 h-4 bg-dqaa-500 rounded-full animate-pulse border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                title={hotspot.label}
                onClick={() => hotspot.nextScene && setCurrentScene(parseInt(hotspot.nextScene))}
              />
            ))}

            {/* Controls Overlay */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setAutoRotate(!autoRotate)}
                className="bg-black/50 text-white hover:bg-black/70"
              >
                {autoRotate ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={toggleFullscreen}
                className="bg-black/50 text-white hover:bg-black/70"
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <Button onClick={prevScene} variant="secondary" size="sm">
                ←
              </Button>
              <Button onClick={nextScene} variant="secondary" size="sm">
                →
              </Button>
            </div>
          </div>

          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-dqaa-700 mb-2">{scene.title}</h3>
            <p className="text-gray-600">{scene.description}</p>
            
            {/* Scene Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {scenes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScene(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentScene ? 'bg-dqaa-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VirtualTourEnhanced;
