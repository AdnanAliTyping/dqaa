
import React from "react";

interface AcademyBrandingProps {
  isMalayalam: boolean;
}

const AcademyBranding = ({ isMalayalam }: AcademyBrandingProps) => {
  return (
    <div className="mb-8 text-center">
      <div className="text-sm text-white/70 flex items-center justify-center mb-2">
        <span className="mr-2">🕌</span>
        {isMalayalam ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി" : "Darul Quran Abdulla Academy"}
        <span className="ml-2">🕌</span>
      </div>
      <div className="text-xs text-white/60">
        {isMalayalam ? "കൂത്താകുന്സി, കേരളം" : "Koothakunsi, Kerala"}
      </div>
    </div>
  );
};

export default AcademyBranding;
