
import { useState } from "react";
import { Heart, UserPlus, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import EnhancedMobileButton from "./EnhancedMobileButton";
import RazorpayDonateButton from "@/components/RazorpayDonateButton";
import { useTranslation } from "@/lib/i18n";

const StickyActionButtons = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [isExpanded, setIsExpanded] = useState(false);

  const actions = [
    {
      icon: Heart,
      label: isMalayalam ? "സംഭാവന" : "Donate",
      component: <RazorpayDonateButton className="bg-dqaa-600 hover:bg-dqaa-700 text-white shadow-lg min-w-[100px] px-4 py-3 rounded text-base font-medium touch-target" />
    },
    {
      icon: UserPlus,
      label: isMalayalam ? "അപേക്ഷിക്കുക" : "Apply",
      link: "/admissions/apply"
    },
    {
      icon: MessageCircle,
      label: isMalayalam ? "ചാറ്റ്" : "Chat",
      onClick: () => {
        // Trigger the existing chatbot
        const chatbot = document.querySelector('.jotform-chatbot-trigger');
        if (chatbot) {
          (chatbot as HTMLElement).click();
        }
      }
    },
    {
      icon: Phone,
      label: isMalayalam ? "വിളിക്കുക" : "Call",
      link: "tel:+919447987960"
    }
  ];

  return (
    <div className="fixed bottom-20 right-4 z-40 md:hidden">
      <div className={cn(
        "flex flex-col space-y-3 transition-all duration-300 ease-out",
        isExpanded ? 'mb-3' : ''
      )}>
        {isExpanded && actions.slice(1).map((action, index) => (
          <div key={index} className="flex justify-end">
            {action.component ? (
              action.component
            ) : action.link ? (
              <EnhancedMobileButton
                asChild
                size="default"
                className="bg-dqaa-600 hover:bg-dqaa-700 text-white shadow-lg min-w-[100px] font-medium"
                hapticFeedback
              >
                <Link to={action.link} className="flex items-center">
                  <action.icon className="h-4 w-4 mr-2" />
                  {action.label}
                </Link>
              </EnhancedMobileButton>
            ) : (
              <EnhancedMobileButton
                size="default"
                onClick={action.onClick}
                className="bg-dqaa-600 hover:bg-dqaa-700 text-white shadow-lg min-w-[100px] font-medium"
                hapticFeedback
              >
                <action.icon className="h-4 w-4 mr-2" />
                {action.label}
              </EnhancedMobileButton>
            )}
          </div>
        ))}
      </div>

      {/* Main Action Button */}
      <div className="flex justify-end">
        <EnhancedMobileButton
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "bg-gradient-to-r from-dqaa-500 to-dqaa-600 hover:from-dqaa-600 hover:to-dqaa-700",
            "text-white rounded-full w-14 h-14 shadow-lg border-2 border-white",
            "transition-transform duration-200 ease-out"
          )}
          size="icon"
          hapticFeedback
          touchOptimized
        >
          {isExpanded ? (
            <div className="transform rotate-45 transition-transform duration-150">
              <UserPlus className="h-6 w-6" />
            </div>
          ) : (
            <Heart className="h-6 w-6" />
          )}
        </EnhancedMobileButton>
      </div>
    </div>
  );
};

export default StickyActionButtons;
