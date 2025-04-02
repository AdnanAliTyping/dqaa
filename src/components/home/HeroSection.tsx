
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519817914152-22d216bb9170')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dqaa-900/90 to-dqaa-900/60" />
      </div>

      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl animate-fadeIn">
          <div className="flex items-center mb-6">
            <div className="h-1 w-16 bg-gold-400 mr-4"></div>
            <span className="text-gold-400 font-medium">Established 2014</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Discover Excellence in <span className="text-gold-400">Islamic</span> & Modern Education
          </h1>
          
          <p className="text-xl text-white/80 mb-8">
            Darul Quran Abdulla Academy offers a unique blend of traditional Islamic knowledge and contemporary academic excellence with a quadrilingual approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-dqaa-500 hover:bg-dqaa-600 text-white font-medium">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/about" className="flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
