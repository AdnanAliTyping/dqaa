
import { Button } from "../ui/button";
import { ChevronRight, GraduationCap, Book, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";
import { useEffect, useRef } from "react";

const OptimizedMobileHero = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Intersection Observer for performance optimization
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const quickStats = [
    { icon: Users, value: "500+", label: isMalayalam ? "വിദ്യാർത്ഥികൾ" : "Students" },
    { icon: GraduationCap, value: "100%", label: isMalayalam ? "വിജയ നിരക്ക്" : "Success Rate" },
    { icon: Book, value: "12+", label: isMalayalam ? "വർഷങ്ങൾ" : "Years Excellence" }
  ];
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-dqaa-900 via-dqaa-800 to-green-900"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-black/30">
        <picture>
          <source 
            media="(max-width: 768px)" 
            srcSet="/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png" 
            width="768" 
            height="1024"
          />
          <img 
            src="/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png" 
            alt="DQAA Students Campus Life" 
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="max-w-xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-gold-400 font-medium text-sm">Est. 2014</span>
              <div className="w-2 h-2 bg-gold-400 rounded-full ml-2 animate-pulse"></div>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 leading-tight">
            {isMalayalam ? (
              <>
                <span className="text-gold-400">ഇസ്‌ലാമിക്</span> വിദ്യാഭ്യാസ<br />
                <span className="text-2xl sm:text-3xl">മികവിന്റെ കേന്ദ്രം</span>
              </>
            ) : (
              <>
                Excellence in<br />
                <span className="text-gold-400">Islamic</span> Education
              </>
            )}
          </h1>
          
          {/* Arabic Text */}
          <div className="text-xl mb-4 text-white/90 font-arabic">
            أكاديمية عبد الله لتحفيظ القران
          </div>
          
          {/* Description */}
          <p className="text-lg text-white/80 mb-8 leading-relaxed px-4">
            {isMalayalam ? 
              "പരമ്പരാഗത ഇസ്ലാമിക വിജ്ഞാനവും ആധുനിക വിദ്യാഭ്യാസവും സമന്വയിപ്പിച്ച് 2014 മുതൽ സേവനം നൽകുന്നു" : 
              "Blending traditional Islamic knowledge with modern education since 2014. AI-powered learning in 4 languages."
            }
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-6 w-6 text-gold-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button 
              size="lg" 
              asChild 
              className="bg-gradient-to-r from-gold-400 to-yellow-500 hover:from-gold-500 hover:to-yellow-600 text-dqaa-900 font-semibold w-full shadow-lg"
            >
              <Link to="/admissions/apply" className="flex items-center justify-center">
                {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now 2025-26"}
                <GraduationCap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-2 border-white text-white hover:bg-white/10 w-full backdrop-blur-sm"
            >
              <Link to="/about" className="flex items-center justify-center">
                {isMalayalam ? "കൂടുതൽ അറിയുക" : "Learn More"} 
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <div className="text-sm text-white/60 mb-2">
              {isMalayalam ? "ബിരുദധാരികൾ പഠിക്കുന്നു" : "Trusted by students from"}
            </div>
            <div className="flex justify-center space-x-4 text-xs text-white/80">
              <span>🏛️ {isMalayalam ? "അൽ-അസ്ഹർ" : "Al-Azhar"}</span>
              <span>🎓 {isMalayalam ? "ജാമിഅ മിലിയ" : "Jamia Millia"}</span>
              <span>📚 {isMalayalam ? "ദാറുൽ ഉലൂം" : "Darul Uloom"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </div>
  );
};

export default OptimizedMobileHero;
