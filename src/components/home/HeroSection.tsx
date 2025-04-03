
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import RazorpayDonateButton from "../RazorpayDonateButton";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden bg-dqaa-500">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src="/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png" 
          alt="DQAA Students" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dqaa-900/80 to-dqaa-900/60" />
      </div>

      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-5"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-16">
        <div className="max-w-3xl animate-fadeIn">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="h-1 w-12 md:w-16 bg-gold-400 mr-3 md:mr-4"></div>
            <span className="text-gold-400 font-medium text-sm md:text-base">Since 2014</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            Excellence in <span className="text-gold-400">Islamic</span> & Modern Education
          </h1>
          
          <div className="text-xl mb-4 text-white/90 font-arabic">
            أكاديمية عبد الله لتحفيظ القران
          </div>
          
          <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8">
            Darul Quran Abdulla Academy offers a unique blend of traditional Islamic knowledge and contemporary academic excellence with a quadrilingual approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button size="lg" asChild className="bg-gold-400 hover:bg-gold-500 text-dqaa-900 font-medium w-full sm:w-auto">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              <Link to="/about" className="flex items-center justify-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <RazorpayDonateButton className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
