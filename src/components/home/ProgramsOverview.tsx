
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Book, BookOpen, Laptop, Globe, GraduationCap } from "lucide-react";

const programs = [
  {
    title: "Hifz Program",
    icon: Book,
    color: "bg-green-50 text-dqaa-500",
    description: "Memorize the Quran while pursuing academic excellence in a structured environment.",
    link: "/academic-programs#hifz"
  },
  {
    title: "Bayanul Quran",
    icon: BookOpen,
    color: "bg-amber-50 text-amber-600",
    description: "An in-depth diploma course focused on Quranic interpretation with English medium instruction.",
    link: "/academic-programs#bayanul"
  },
  {
    title: "Technology & AI",
    icon: Laptop,
    color: "bg-blue-50 text-blue-600",
    description: "State-of-the-art technology education including programming, AI, and robotics.",
    link: "/technology"
  },
  {
    title: "Quadrilingual Education",
    icon: Globe,
    color: "bg-purple-50 text-purple-600",
    description: "Become proficient in Arabic, English, Urdu/Hindi, and Malayalam through our integrated curriculum.",
    link: "/academic-programs#languages"
  },
  {
    title: "Islamic Studies",
    icon: GraduationCap,
    color: "bg-rose-50 text-rose-600",
    description: "Comprehensive Islamic education covering Fiqh, Aqeedah, Seerah, and more.",
    link: "/academic-programs#islamic"
  },
];

const ProgramsOverview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-gold-400 font-medium">Our Programs</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mt-2">
                Academic Excellence with Islamic Values
              </h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              DQAA offers a unique blend of traditional Islamic education and modern academic curriculum. Our programs are designed to nurture both spiritual growth and intellectual development, preparing students for success in this world and the hereafter.
            </p>
            
            <div className="space-y-4">
              {programs.map((program, index) => (
                <div key={index} className="flex items-start">
                  <div className={`p-2 rounded-full ${program.color} mr-4`}>
                    <program.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{program.title}</h3>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link to="/academic-programs">
                <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white">
                  Explore All Programs
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754" 
                alt="DQAA Students" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 md:-left-12 max-w-xs border-none shadow-lg">
              <CardContent className="p-6 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-bold text-dqaa-500">10+</div>
                  <div className="bg-dqaa-50 text-dqaa-500 text-xs font-semibold px-3 py-1 rounded-full">
                    Since 2014
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">Years of Educational Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Providing quality education that balances Islamic values with modern academic requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
