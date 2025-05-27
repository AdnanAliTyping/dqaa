
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { ChevronLeft, ChevronRight, BookOpen, Users, Award, Star } from "lucide-react";
import { Button } from "../ui/button";

const features = [
  {
    icon: BookOpen,
    title: "Quranic Excellence",
    description: "World-class Hifz program with experienced Qaris and proven methodologies for memorization.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Users,
    title: "Academic Focus", 
    description: "Comprehensive secular education alongside Islamic studies, preparing students for higher education.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Award,
    title: "Character Development",
    description: "Holistic approach to moral and spiritual development with emphasis on Islamic values and ethics.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Star,
    title: "Quadrilingual Education",
    description: "Fluency in Arabic, English, Malayalam, and Urdu through our integrated language curriculum.",
    color: "bg-orange-50 text-orange-600"
  }
];

const testimonial = {
  text: "DQAA has been instrumental in shaping my child's character and academic excellence. The balance between Islamic education and modern curriculum is remarkable.",
  author: "Fatima Ahmed",
  role: "Parent of Grade 8 student"
};

const WhyChooseUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-dqaa-500 mb-2">
            Why Choose DQAA?
          </h2>
          <p className="text-gray-600">Excellence in every aspect of education</p>
        </div>
        
        {/* Swipeable Cards */}
        <div className="relative mb-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="border-none shadow-lg h-48">
                    <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.color}`}>
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-dqaa-500 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md"
            onClick={prevCard}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md"
            onClick={nextCard}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-dqaa-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <Card className="bg-dqaa-50 border-none">
          <CardContent className="p-6 text-center">
            <div className="text-dqaa-500 mb-2">
              <Star className="h-5 w-5 inline mr-1" />
              <Star className="h-5 w-5 inline mr-1" />
              <Star className="h-5 w-5 inline mr-1" />
              <Star className="h-5 w-5 inline mr-1" />
              <Star className="h-5 w-5 inline" />
            </div>
            <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
            <div>
              <p className="font-semibold text-dqaa-500">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
