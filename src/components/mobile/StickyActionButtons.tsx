
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, UserPlus, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
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
    component: (
  <Button
    size="sm"
    className="bg-dqaa-600 hover:bg-dqaa-700 text-white shadow-lg min-w-[100px]"
    asChild
  >
    <RazorpayDonateButton />
  </Button>
)
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
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <div className={`flex flex-col space-y-2 transition-all duration-300 ${isExpanded ? 'mb-2' : ''}`}>
        {isExpanded && actions.slice(1).map((action, index) => (
          <div key={index} className="flex justify-end">
            {action.component ? (
              action.component
            ) : action.link ? (
              <Button
                asChild
                size="sm"
                className="bg-dqaa-600 hover:bg-dqaa-700 text-white shadow-lg min-w-[100px]"
              >
                <Link to={action.link} className="flex items-center">
                  <action.icon className="h-4 w-4 mr-2" />
                  {action.label}
                </Link>
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={action.onClick}
                className="bg-dqaa-600 hover:bg-dqaa-700 text-white shadow-lg min-w-[100px]"
              >
                <action.icon className="h-4 w-4 mr-2" />
                {action.label}
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Main Action Button */}
      <div className="flex justify-end">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-r from-dqaa-500 to-dqaa-600 hover:from-dqaa-600 hover:to-dqaa-700 text-white rounded-full w-14 h-14 shadow-lg border-2 border-white"
          size="icon"
        >
          {isExpanded ? (
            <div className="transform rotate-45">
              <UserPlus className="h-6 w-6" />
            </div>
          ) : (
            <Heart className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default StickyActionButtons;
