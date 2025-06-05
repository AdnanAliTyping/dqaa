
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Play, GraduationCap } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "@/lib/i18n";

const AppleInspiredHero = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-apple-gray-900 via-dqaa-900 to-apple-gray-800"
    >
      {/* Cinematic Background with Islamic Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dqaa-900/95 via-dqaa-800/90 to-apple-gray-900/95" />
        
        {/* Animated geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-gold-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-gold-400/15 rounded-full blur-3xl animate-pulse-soft animation-delay-1000" />
        </div>

        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.08)_0%,transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 ease-apple ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Eyebrow */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-apple rounded-full px-6 py-3 mb-6">
              <span className="text-gold-400 font-medium text-sm tracking-wide">
                {isMalayalam ? "2014 മുതൽ മികവ്" : "Excellence Since 2014"}
              </span>
              <div className="w-2 h-2 bg-gold-400 rounded-full ml-3 animate-pulse-soft" />
            </div>
          </div>

          {/* Main Headline - Apple Style */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tight">
            {isMalayalam ? (
              <>
                <span className="block">ഇസ്‌ലാമിക്</span>
                <span className="block bg-gradient-to-r from-gold-400 to-emerald-500 bg-clip-text text-transparent">
                  വിദ്യാഭ്യാസത്തിൽ
                </span>
                <span className="block">പുതിയ യുഗം</span>
              </>
            ) : (
              <>
                <span className="block">The Future of</span>
                <span className="block bg-gradient-to-r from-gold-400 to-emerald-500 bg-clip-text text-transparent">
                  Islamic Education
                </span>
                <span className="block">is Here</span>
              </>
            )}
          </h1>

          {/* Arabic Text with Enhanced Typography */}
          <div className="text-2xl lg:text-3xl mb-8 text-white/90 font-arabic tracking-wider">
            أكاديمية عبد الله لتحفيظ القران
          </div>

          {/* Value Proposition */}
          <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            {isMalayalam ? 
              "പരമ്പരാഗത ഇസ്ലാമിക വിദ്യാഭ്യാസവും അത്യാധുനിക സാങ്കേതികവിദ്യയും സമന്വയിപ്പിച്ച് ഭാവിയിലെ നേതാക്കളെ സൃഷ്ടിക്കുന്നു" : 
              "Where traditional Islamic knowledge meets cutting-edge AI technology to shape tomorrow's leaders"
            }
          </p>

          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            {[
              { number: "500+", label: isMalayalam ? "വിദ്യാർത്ഥികൾ" : "Students" },
              { number: "100%", label: isMalayalam ? "വിജയനിരക്ക്" : "Success Rate" },
              { number: "4", label: isMalayalam ? "ഭാഷകൾ" : "Languages" },
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ease-apple ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-gold-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Apple Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              asChild 
              className="group bg-white text-dqaa-900 hover:bg-white/90 font-semibold px-8 py-4 rounded-apple shadow-apple-lg transition-all duration-200 ease-apple hover:shadow-apple-xl hover:scale-[1.02] min-w-[200px]"
            >
              <Link to="/admissions/apply" className="flex items-center">
                {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                <GraduationCap className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="group border-2 border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-apple backdrop-blur-apple transition-all duration-200 ease-apple hover:border-white/50 min-w-[200px]"
            >
              <Link to="/about" className="flex items-center">
                {isMalayalam ? "കൂടുതൽ അറിയുക" : "Learn More"} 
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button 
              size="lg" 
              variant="ghost" 
              className="group text-white hover:bg-white/10 font-medium px-6 py-4 rounded-apple backdrop-blur-apple transition-all duration-200 ease-apple"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              {isMalayalam ? "വീഡിയോ കാണുക" : "Watch Video"}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="text-sm text-white/60 mb-4 font-medium tracking-wide">
              {isMalayalam ? "വിശ്വസ്ത പങ്കാളികൾ" : "Trusted by students from"}
            </div>
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏛️</span>
                <span className="text-sm font-medium">{isMalayalam ? "അൽ-അസ്ഹർ" : "Al-Azhar"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎓</span>
                <span className="text-sm font-medium">{isMalayalam ? "ജാമിഅ മിലിയ" : "Jamia Millia"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">{isMalayalam ? "ദാറുൽ ഉലൂം" : "Darul Uloom"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </div>
  );
};

export default AppleInspiredHero;
