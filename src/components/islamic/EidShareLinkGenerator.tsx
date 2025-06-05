
import React, { useState } from "react";
import { Copy, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n";

const EidShareLinkGenerator = () => {
  const { currentLanguage } = useTranslation();
  const [copied, setCopied] = useState<string | null>(null);
  
  const baseUrl = window.location.origin;
  const englishLink = `${baseUrl}/eid-greeting?lang=en`;
  const malayalamLink = `${baseUrl}/eid-greeting?lang=ml`;
  
  const shareText = {
    english: "🌙 Eid Al-Adha Mubarak! 🌙\n\nWarm wishes from Darul Quran Abdulla Academy family. May this blessed occasion bring peace, joy, and prosperity to you and your loved ones.\n\nView our special Eid greeting:",
    malayalam: "🌙 ഈദുൽ അദ്ഹാ മുബാറക്! 🌙\n\nദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി കുടുംബത്തിൽ നിന്നുള്ള ആശംസകൾ. ഈ അനുഗ്രഹീതമായ അവസരം നിങ്ങൾക്കും നിങ്ങളുടെ പ്രിയപ്പെട്ടവർക്കും സമാധാനവും സന്തോഷവും സമൃദ്ധിയും കൊണ്ടുവരട്ടെ.\n\nഞങ്ങളുടെ പ്രത്യേക ഈദ് ആശംസ കാണുക:"
  };

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleWhatsAppShare = (message: string, link: string) => {
    const fullMessage = `${message}\n\n${link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(fullMessage)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-emerald-700">
            {currentLanguage === 'ml' ? 'ഈദ് ആശംസകൾ പങ്കിടുക' : 'Share Eid Greetings'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* English Version */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">English Version</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Share Link:</p>
              <code className="text-sm bg-white p-2 rounded border block mb-3 break-all">
                {englishLink}
              </code>
              <div className="flex gap-2 flex-wrap">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(englishLink, 'english-link')}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  {copied === 'english-link' ? 'Copied!' : 'Copy Link'}
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleWhatsAppShare(shareText.english, englishLink)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Complete Message for WhatsApp:</p>
              <div className="bg-white p-3 rounded border text-sm">
                <pre className="whitespace-pre-wrap font-sans">
                  {shareText.english}
                  {'\n\n'}
                  {englishLink}
                </pre>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleCopy(`${shareText.english}\n\n${englishLink}`, 'english-full')}
                className="mt-2 flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copied === 'english-full' ? 'Copied!' : 'Copy Full Message'}
              </Button>
            </div>
          </div>

          {/* Malayalam Version */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Malayalam Version</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Share Link:</p>
              <code className="text-sm bg-white p-2 rounded border block mb-3 break-all">
                {malayalamLink}
              </code>
              <div className="flex gap-2 flex-wrap">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(malayalamLink, 'malayalam-link')}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  {copied === 'malayalam-link' ? 'Copied!' : 'Copy Link'}
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleWhatsAppShare(shareText.malayalam, malayalamLink)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Complete Message for WhatsApp:</p>
              <div className="bg-white p-3 rounded border text-sm">
                <pre className="whitespace-pre-wrap font-sans">
                  {shareText.malayalam}
                  {'\n\n'}
                  {malayalamLink}
                </pre>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleCopy(`${shareText.malayalam}\n\n${malayalamLink}`, 'malayalam-full')}
                className="mt-2 flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copied === 'malayalam-full' ? 'Copied!' : 'Copy Full Message'}
              </Button>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">
              {currentLanguage === 'ml' ? 'ഉപയോഗ നിർദ്ദേശങ്ങൾ:' : 'Usage Instructions:'}
            </h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• {currentLanguage === 'ml' ? 'ലിങ്ക് കോപ്പി ചെയ്ത് WhatsApp, Facebook, അല്ലെങ്കിൽ മറ്റ് സോഷ്യൽ മീഡിയയിൽ പങ്കിടുക' : 'Copy the link and share on WhatsApp, Facebook, or other social media'}</li>
              <li>• {currentLanguage === 'ml' ? 'ഗ്രീറ്റിംഗ് കാർഡ് ഡൗൺലോഡ് ചെയ്യാനും പ്രിന്റ് ചെയ്യാനും കഴിയും' : 'Recipients can download and print the greeting card'}</li>
              <li>• {currentLanguage === 'ml' ? 'ലിങ്ക് സ്വയമേവ ശരിയായ ഭാഷയിൽ കാണിക്കും' : 'Links automatically show in the correct language'}</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EidShareLinkGenerator;
