
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

const AboutMissionSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <Card className="border-none shadow-lg">
            <CollapsibleTrigger asChild>
              <div className="p-6 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png" 
                      alt="DQAA Logo" 
                      className="w-12 h-12 object-contain mr-4"
                    />
                    <div>
                      <h2 className="text-xl font-display font-bold text-dqaa-500">
                        About Darul Quran Abdulla Academy
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">Excellence in Islamic & Modern Education</p>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-dqaa-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </CollapsibleTrigger>
            
            <CollapsibleContent>
              <CardContent className="pt-0 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Since 2014, Darul Quran Abdulla Academy has emerged as a center of excellence, 
                      blending rigorous academic and Hifz programs with a holistic approach to student development.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dqaa-500 mr-3 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">Integrating Islamic values with modern education</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dqaa-500 mr-3 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">Fostering spiritual and academic excellence</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dqaa-500 mr-3 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">Cultivating quadrilingual proficiency and leadership</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/e403ff22-bc8b-4a1c-b68f-b425b9e48168.png" 
                      alt="DQAA Students" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/about">
                    <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    </section>
  );
};

export default AboutMissionSection;
