
import { MessageSquare } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsApp = ({
  phoneNumber,
  message = "I'm interested in learning more about Darul Quran Abdulla Academy"
}: FloatingWhatsAppProps) => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
  const defaultMessage = isMalayalam 
    ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയെക്കുറിച്ച് കൂടുതൽ അറിയാൻ ഞാൻ താൽപ്പര്യപ്പെടുന്നു"
    : "I'm interested in learning more about Darul Quran Abdulla Academy";
  
  const whatsappMessage = message || defaultMessage;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageSquare size={24} />
    </a>
  );
};

export default FloatingWhatsApp;
