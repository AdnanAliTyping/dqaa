
import React from "react";

interface EidGreetingMessageProps {
  isMalayalam: boolean;
  size?: 'normal' | 'large';
}

const EidGreetingMessage = ({ isMalayalam, size = 'normal' }: EidGreetingMessageProps) => {
  const titleSize = size === 'large' ? 'text-4xl md:text-6xl' : 'text-2xl';
  const messageSize = size === 'large' ? 'text-lg md:text-xl' : 'text-sm';

  return (
    <div className="text-center">
      <h1 className={`${titleSize} font-bold mb-6 leading-tight`}>
        {isMalayalam ? "ഈദുൽ അദ്ഹാ മുബാറക്!" : "Eid Al-Adha Mubarak!"}
      </h1>

      <div className="max-w-4xl mx-auto mb-8">
        <p className={`text-white/90 leading-relaxed ${messageSize}`}>
          {isMalayalam 
            ? "ഈ അനുഗ്രഹീതമായ അവസരം നിങ്ങൾക്കും നിങ്ങളുടെ കുടുംബത്തിനും സമാധാനവും സന്തോഷവും സമൃദ്ധിയും കൊണ്ടുവരട്ടെ. ത്യാഗത്തിന്റെയും ഭക്തിയുടെയും ആത്മാവ് ആഘോഷിക്കുമ്പോൾ, DQAA ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിൽ യുവമനസ്സുകളെ വളർത്തുന്നത് തുടരുന്നു."
            : "May this blessed occasion bring peace, joy, and prosperity to you and your family. As we celebrate the spirit of sacrifice and devotion, DQAA continues to nurture young minds in Islamic knowledge and values."
          }
        </p>
      </div>
    </div>
  );
};

export default EidGreetingMessage;
