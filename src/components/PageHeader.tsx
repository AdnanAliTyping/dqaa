
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showApplyButton?: boolean;
}

const PageHeader = ({ title, subtitle, backgroundImage, showApplyButton = false }: PageHeaderProps) => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
  return (
    <div className="relative bg-cover bg-center py-24 md:py-32" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-dqaa-900/90 to-dqaa-900/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          {showApplyButton && (
            <Link to="/admissions/apply">
              <Button size="lg" className="bg-gold-400 hover:bg-gold-500 text-dqaa-900 font-medium">
                {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
