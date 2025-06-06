
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Share2, MessageCircle } from "lucide-react";

interface EidActionButtonsProps {
  isMalayalam: boolean;
  onWhatsAppShare: () => void;
  onShare: () => void;
  onDownload: () => void;
  onLanguageToggle: () => void;
}

const EidActionButtons = ({ 
  isMalayalam, 
  onWhatsAppShare, 
  onShare, 
  onDownload, 
  onLanguageToggle 
}: EidActionButtonsProps) => {
  return (
    <div className="space-y-6">
      {/* Main Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          onClick={onWhatsAppShare}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 hover:scale-105 px-6 py-3"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          {isMalayalam ? "WhatsApp ൽ പങ്കിടുക" : "Share on WhatsApp"}
        </Button>
        
        <Button
          onClick={onShare}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 hover:scale-105 px-6 py-3"
        >
          <Share2 className="w-5 h-5 mr-2" />
          {isMalayalam ? "പങ്കിടുക" : "Share"}
        </Button>

        <Button
          onClick={onDownload}
          variant="outline"
          className="border-2 border-white/30 text-white hover:bg-white/10 font-medium rounded-lg backdrop-blur-sm transition-all duration-200 px-6 py-3"
        >
          <Download className="w-5 h-5 mr-2" />
          {isMalayalam ? "ഡൗൺലോഡ്" : "Download"}
        </Button>
      </div>

      {/* Language Toggle */}
      <div className="text-center">
        <Button
          onClick={onLanguageToggle}
          variant="ghost"
          className="text-white/70 hover:text-white hover:bg-white/10"
        >
          {isMalayalam ? "Switch to English" : "മലയാളത്തിലേക്ക് മാറുക"}
        </Button>
      </div>
    </div>
  );
};

export default EidActionButtons;
