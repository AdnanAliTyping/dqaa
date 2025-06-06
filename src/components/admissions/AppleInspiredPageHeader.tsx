
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";

interface AppleInspiredPageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showApplyButton?: boolean;
}

const AppleInspiredPageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  showApplyButton = false 
}: AppleInspiredPageHeaderProps) => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
  return (
    <div 
      className="relative bg-cover bg-center py-24 md:py-32 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Apple-inspired gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dqaa-900/95 via-dqaa-900/80 to-dqaa-900/60"></div>
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.3)_0%,transparent_50%)] animate-gentle-float"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2)_0%,transparent_50%)] animate-gentle-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="
            text-3xl md:text-5xl font-display font-bold text-white mb-4
            animate-apple-fade-in
            drop-shadow-lg
          ">
            {title}
          </h1>
          
          {subtitle && (
            <p className="
              text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed
              animate-apple-fade-in animation-delay-200
              drop-shadow-md
            ">
              {subtitle}
            </p>
          )}
          
          {showApplyButton && (
            <div className="animate-apple-fade-in animation-delay-500">
              <Link to="/admissions/apply">
                <Button 
                  size="lg" 
                  className="
                    apple-button-primary
                    bg-gradient-to-r from-gold-400 to-gold-500 
                    hover:from-gold-500 hover:to-gold-600
                    text-dqaa-900 font-medium
                    shadow-apple hover:shadow-apple-lg
                    border-none px-8 py-3
                    transition-all duration-300 ease-apple
                    active:scale-[0.95]
                  "
                >
                  {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppleInspiredPageHeader;
