
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, GraduationCap, Calendar, ExternalLink } from "lucide-react";

const AlumniSuccessTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const alumniSuccess = [
    {
      name: "Dr. Ahmed Al-Rashid",
      graduation: "2015",
      position: "Islamic Studies Professor",
      organization: "Al-Azhar University, Egypt",
      location: "Cairo, Egypt",
      category: "academia",
      achievement: "Published 15 research papers on Quranic studies",
      image: "/placeholder.svg"
    },
    {
      name: "Imam Yusuf Hassan",
      graduation: "2018",
      position: "Chief Imam",
      organization: "Islamic Center of London",
      location: "London, UK",
      category: "religious",
      achievement: "Leading interfaith dialogue initiatives across Europe",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Fatima Al-Zahra",
      graduation: "2016",
      position: "Medical Doctor & Researcher",
      organization: "King Saud University Hospital",
      location: "Riyadh, Saudi Arabia",
      category: "medical",
      achievement: "Pioneering Islamic medical ethics research",
      image: "/placeholder.svg"
    },
    {
      name: "Mohammed Al-Ansari",
      graduation: "2019",
      position: "CEO",
      organization: "Halal Certification International",
      location: "Dubai, UAE",
      category: "business",
      achievement: "Expanding halal certification to 50+ countries",
      image: "/placeholder.svg"
    },
    {
      name: "Sheikh Abdullah Rahman",
      graduation: "2014",
      position: "Islamic Scholar & Author",
      organization: "International Islamic University",
      location: "Islamabad, Pakistan",
      category: "academia",
      achievement: "Authored 8 books on contemporary Islamic jurisprudence",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Khadija Al-Mansouri",
      graduation: "2017",
      position: "Educational Director",
      organization: "UNESCO Islamic Heritage Division",
      location: "Paris, France",
      category: "international",
      achievement: "Preserving Islamic educational heritage globally",
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    { id: "all", label: "All Fields", count: alumniSuccess.length },
    { id: "academia", label: "Academia", count: alumniSuccess.filter(a => a.category === "academia").length },
    { id: "religious", label: "Religious Leadership", count: alumniSuccess.filter(a => a.category === "religious").length },
    { id: "medical", label: "Healthcare", count: alumniSuccess.filter(a => a.category === "medical").length },
    { id: "business", label: "Business", count: alumniSuccess.filter(a => a.category === "business").length },
    { id: "international", label: "International Orgs", count: alumniSuccess.filter(a => a.category === "international").length }
  ];

  const filteredAlumni = selectedCategory === "all" 
    ? alumniSuccess 
    : alumniSuccess.filter(alumni => alumni.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-dqaa-100 text-dqaa-700 hover:bg-dqaa-200">
            Alumni Excellence Network
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            Our Graduates Lead the World
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            While competitors struggle to place their graduates, our alumni are making global impact in every field.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id 
                  ? "bg-dqaa-500 text-white hover:bg-dqaa-600" 
                  : "text-dqaa-500 border-dqaa-200 hover:bg-dqaa-50"
              } transition-all duration-200`}
            >
              {category.label}
              <Badge variant="secondary" className="ml-2 bg-white/20 text-current">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni, index) => (
            <Card key={index} className="hover:shadow-apple-lg transition-all duration-300 apple-card-hover">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-dqaa-100 to-dqaa-200 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-dqaa-500" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-800 mb-1">
                      {alumni.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>Class of {alumni.graduation}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Briefcase className="w-4 h-4 text-dqaa-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">{alumni.position}</p>
                    <p className="text-sm text-gray-600">{alumni.organization}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span className="text-sm text-gray-600">{alumni.location}</span>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium mb-1">Key Achievement:</p>
                  <p className="text-sm text-gray-600">{alumni.achievement}</p>
                </div>
                
                <Button variant="outline" size="sm" className="w-full text-dqaa-500 border-dqaa-200 hover:bg-dqaa-50">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-to-r from-gold-50 to-gold-100 border-gold-200">
            <CardContent className="px-8 py-6">
              <h3 className="text-xl font-semibold text-dqaa-500 mb-2">
                Join Our Legacy of Excellence
              </h3>
              <p className="text-gray-600 mb-4">
                Be part of the next generation of global Islamic leaders
              </p>
              <Button className="bg-dqaa-500 text-white hover:bg-dqaa-600">
                Start Your Journey Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccessTracker;
