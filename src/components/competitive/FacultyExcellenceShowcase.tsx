
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, BookOpen, Globe, Users, Trophy } from "lucide-react";

const FacultyExcellenceShowcase = () => {
  const facultyStats = [
    {
      icon: Trophy,
      title: "PhD Holders",
      count: "45+",
      description: "Faculty with doctorate degrees from prestigious universities",
      color: "text-gold-400"
    },
    {
      icon: Globe,
      title: "International Experience",
      count: "30+",
      description: "Faculty who have taught or studied internationally",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Published Authors",
      count: "25+",
      description: "Faculty with published research papers and books",
      color: "text-dqaa-500"
    },
    {
      icon: Award,
      title: "Industry Experts",
      count: "20+",
      description: "Faculty with real-world professional experience",
      color: "text-purple-600"
    }
  ];

  const topFaculty = [
    {
      name: "Dr. Mohammed Al-Ansari",
      title: "Dean of Islamic Studies",
      qualifications: "PhD from Al-Azhar University, Egypt",
      specialization: "Quranic Exegesis & Islamic Jurisprudence",
      publications: 15,
      experience: "25+ years",
      achievements: ["International Islamic Scholar Award 2022", "Author of 8 acclaimed books"],
      languages: ["Arabic", "English", "Urdu", "Malayalam"]
    },
    {
      name: "Prof. Fatima Al-Zahra",
      title: "Head of Academic Affairs",
      qualifications: "PhD from University of Oxford, UK",
      specialization: "Islamic Education & Modern Pedagogy",
      publications: 12,
      experience: "20+ years",
      achievements: ["UNESCO Education Excellence Award", "Featured speaker at 50+ conferences"],
      languages: ["English", "Arabic", "French", "Malayalam"]
    },
    {
      name: "Dr. Abdullah Rahman",
      title: "Director of Research",
      qualifications: "PhD from Harvard Divinity School, USA",
      specialization: "Comparative Religion & Islamic Philosophy",
      publications: 18,
      experience: "22+ years",
      achievements: ["Interfaith Dialogue Champion Award", "Consultant to UN on Religious Affairs"],
      languages: ["English", "Arabic", "German", "Malayalam"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-dqaa-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-dqaa-100 text-dqaa-700 hover:bg-dqaa-200">
            World-Class Faculty
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            Faculty Excellence That Competitors Can't Match
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our faculty's credentials and achievements surpass any other Islamic institution. 
            When you choose DQAA, you're learning from the best minds in Islamic education.
          </p>
        </div>

        {/* Faculty Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {facultyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-apple-lg transition-all duration-300 apple-card-hover">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-dqaa-500">
                    {stat.count}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-gray-800 mb-2">{stat.title}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Faculty Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {topFaculty.map((faculty, index) => (
            <Card key={index} className="hover:shadow-apple-lg transition-all duration-300 apple-card-hover">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-dqaa-100 to-dqaa-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-dqaa-500" />
                </div>
                <CardTitle className="text-xl font-semibold text-dqaa-500 text-center">
                  {faculty.name}
                </CardTitle>
                <p className="text-center text-gray-600 font-medium">{faculty.title}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Qualifications:</h4>
                  <p className="text-sm text-gray-600">{faculty.qualifications}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Specialization:</h4>
                  <p className="text-sm text-gray-600">{faculty.specialization}</p>
                </div>
                
                <div className="flex justify-between text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800">Publications:</h4>
                    <p className="text-dqaa-500 font-semibold">{faculty.publications} papers</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Experience:</h4>
                    <p className="text-dqaa-500 font-semibold">{faculty.experience}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Achievements:</h4>
                  {faculty.achievements.map((achievement, idx) => (
                    <Badge key={idx} variant="secondary" className="mr-1 mb-1 text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Languages:</h4>
                  <div className="flex flex-wrap gap-1">
                    {faculty.languages.map((language, idx) => (
                      <Badge key={idx} className="bg-dqaa-100 text-dqaa-700 text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-dqaa-500 to-dqaa-600 text-white text-center">
          <CardContent className="py-8">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Learn From the Best Minds in Islamic Education
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our faculty's combined expertise, international recognition, and dedication to excellence 
              ensures you receive an education that opens doors worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-dqaa-500 hover:bg-gray-100">
                Meet Our Complete Faculty
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View Faculty Research
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FacultyExcellenceShowcase;
