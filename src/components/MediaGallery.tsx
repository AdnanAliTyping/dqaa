
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface MediaGalleryProps {
  title: string;
  description?: string;
  googlePhotosLink?: string;
  issuuLink?: string;
  images?: string[];
}

const MediaGallery = ({ title, description, googlePhotosLink, issuuLink, images = [] }: MediaGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dqaa-900 font-display mb-2">
              {title}
            </h2>
            {description && <p className="text-gray-600">{description}</p>}
          </div>
          
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0 relative">
              {images.length > 0 ? (
                <>
                  <div className="relative aspect-video">
                    <img 
                      src={images[currentIndex]} 
                      alt={`Gallery image ${currentIndex + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    
                    {images.length > 1 && (
                      <>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={prevSlide} 
                          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={nextSlide} 
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                        
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                          <div className="flex gap-1.5">
                            {images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full ${
                                  index === currentIndex ? "bg-dqaa-500" : "bg-gray-300"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                              ></button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="p-4 bg-gray-50 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Image {currentIndex + 1} of {images.length}
                    </div>
                    {googlePhotosLink && (
                      <a 
                        href={googlePhotosLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-sm text-dqaa-500 hover:text-dqaa-600 font-medium"
                      >
                        View All Photos <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </>
              ) : issuuLink ? (
                <div className="aspect-video">
                  <iframe 
                    src={issuuLink} 
                    width="100%" 
                    height="100%" 
                    style={{ border: "none" }}
                    allow="fullscreen"
                    title={title}
                    loading="lazy"
                  ></iframe>
                </div>
              ) : googlePhotosLink ? (
                <div className="aspect-video">
                  <iframe 
                    src={googlePhotosLink} 
                    width="100%" 
                    height="100%" 
                    style={{ border: "none" }}
                    allow="fullscreen"
                    title={title}
                    loading="lazy"
                  ></iframe>
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No media content available
                </div>
              )}
            </CardContent>
          </Card>
          
          {(googlePhotosLink || issuuLink) && (
            <div className="text-center mt-6">
              {googlePhotosLink && (
                <Button variant="outline" className="mr-3" asChild>
                  <a href={googlePhotosLink} target="_blank" rel="noopener noreferrer">
                    Open Google Photos Album
                  </a>
                </Button>
              )}
              {issuuLink && (
                <Button variant="outline" asChild>
                  <a href={issuuLink} target="_blank" rel="noopener noreferrer">
                    Open Issuu Flipbook
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
